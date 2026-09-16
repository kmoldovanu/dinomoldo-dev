import logging

from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactRequestSerializer

logger = logging.getLogger(__name__)


class ContactRequestView(APIView):
    """
    POST /api/contact/

    Riceve i dati del form di contatto, li valida, salva la richiesta
    e invia una notifica via email. Se l'email fallisce per qualsiasi
    motivo (config mancante, SMTP error), la richiesta è comunque salvata
    e si risponde 201.
    """

    def post(self, request):
        serializer = ContactRequestSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )

        contact_request = serializer.save()

        # Tenta l'invio email solo se le variabili sono configurate
        recipient = getattr(settings, "CONTACT_NOTIFICATION_EMAIL", "")
        sender = getattr(settings, "DEFAULT_FROM_EMAIL", "")

        if recipient and sender:
            try:
                email = EmailMessage(
                    subject=f"Nuova richiesta di contatto da {contact_request.name}",
                    body=(
                        "Hai ricevuto una nuova richiesta di contatto.\n\n"
                        f"Nome: {contact_request.name}\n"
                        f"Email: {contact_request.email}\n\n"
                        "Messaggio:\n"
                        f"{contact_request.message}\n"
                    ),
                    from_email=sender,
                    to=[recipient],
                    reply_to=[contact_request.email],
                )
                email.send(fail_silently=False)
            except Exception:
                # Logga l'errore ma non blocca la risposta al client.
                # La richiesta è già salvata nel DB e visibile in /admin.
                logger.exception(
                    "Invio email fallito per richiesta id=%s", contact_request.pk
                )
        else:
            logger.warning(
                "Email non inviata: CONTACT_NOTIFICATION_EMAIL o DEFAULT_FROM_EMAIL "
                "non configurati. Richiesta id=%s salvata nel DB.",
                contact_request.pk,
            )

        return Response(
            {"detail": "Richiesta ricevuta con successo."},
            status=status.HTTP_201_CREATED,
        )
