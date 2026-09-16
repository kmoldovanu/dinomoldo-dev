import logging

from django.conf import settings
from django.core.mail import EmailMessage
from django.core.mail.backends.smtp import EmailBackend
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactRequestSerializer

logger = logging.getLogger(__name__)


def _send_notification(contact_request):
    """
    Invia la email di notifica con un timeout SMTP esplicito (10s).
    Se la connessione non riesce entro 10 secondi, lancia eccezione
    invece di bloccare il worker Gunicorn per 30+ secondi.
    """
    recipient = getattr(settings, "CONTACT_NOTIFICATION_EMAIL", "").strip()
    sender = getattr(settings, "DEFAULT_FROM_EMAIL", "").strip()

    if not recipient or not sender:
        logger.warning(
            "Email non inviata: CONTACT_NOTIFICATION_EMAIL o DEFAULT_FROM_EMAIL "
            "non configurati. Richiesta id=%s salvata nel DB.",
            contact_request.pk,
        )
        return

    backend = EmailBackend(
        host=settings.EMAIL_HOST,
        port=settings.EMAIL_PORT,
        username=settings.EMAIL_HOST_USER,
        password=settings.EMAIL_HOST_PASSWORD,
        use_tls=settings.EMAIL_USE_TLS,
        timeout=10,  # fallisce veloce invece di bloccare il worker
    )

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
        connection=backend,
    )
    email.send(fail_silently=False)


class ContactRequestView(APIView):
    """
    POST /api/contact/

    Valida, salva la richiesta e tenta l'invio email.
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
