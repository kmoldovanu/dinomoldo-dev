import logging
import os

import resend
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactRequestSerializer

logger = logging.getLogger(__name__)


def _send_notification(contact_request):
    """
    Invia la email di notifica tramite Resend API (HTTP, non SMTP).
    Resend funziona su Railway free tier a differenza di Gmail SMTP
    che viene bloccato sulla porta 587.
    """
    api_key = os.getenv("RESEND_API_KEY", "").strip()
    recipient = getattr(settings, "CONTACT_NOTIFICATION_EMAIL", "").strip()

    if not api_key:
        logger.warning(
            "Email non inviata: RESEND_API_KEY non configurata. "
            "Richiesta id=%s salvata nel DB.",
            contact_request.pk,
        )
        return

    if not recipient:
        logger.warning(
            "Email non inviata: CONTACT_NOTIFICATION_EMAIL non configurata. "
            "Richiesta id=%s salvata nel DB.",
            contact_request.pk,
        )
        return

    resend.api_key = api_key

    phone_line = f"Telefono: {contact_request.phone}\n" if contact_request.phone else ""

    resend.Emails.send({
        "from": "dinomoldo.dev <onboarding@resend.dev>",
        "to": [recipient],
        "reply_to": contact_request.email,
        "subject": f"Nuova richiesta di contatto da {contact_request.name}",
        "text": (
            "Hai ricevuto una nuova richiesta di contatto.\n\n"
            f"Nome: {contact_request.name}\n"
            f"Email: {contact_request.email}\n"
            f"{phone_line}"
            f"Tipo di attività: {contact_request.get_business_type_display()}\n\n"
            "Messaggio:\n"
            f"{contact_request.message}\n"
        ),
    })


class ContactRequestView(APIView):
    """
    POST /api/contact/

    Valida, salva la richiesta e tenta l'invio email tramite Resend.
    Se l'email fallisce la richiesta è comunque salvata nel DB
    e si risponde 201 al client.
    """

    def post(self, request):
        serializer = ContactRequestSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )

        contact_request = serializer.save()

        try:
            _send_notification(contact_request)
        except Exception:
            logger.exception(
                "Invio email fallito per richiesta id=%s — richiesta salvata nel DB.",
                contact_request.pk,
            )

        return Response(
            {"detail": "Richiesta ricevuta con successo."},
            status=status.HTTP_201_CREATED,
        )
