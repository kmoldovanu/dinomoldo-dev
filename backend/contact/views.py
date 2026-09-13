from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactRequestSerializer


class ContactRequestView(APIView):
    """
    POST /api/contact/

    Riceve i dati del form di contatto, li valida, salva la richiesta
    e invia una notifica via email.
    """

    def post(self, request):
        serializer = ContactRequestSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )

        contact_request = serializer.save()

        email = EmailMessage(
            subject=f"Nuova richiesta di contatto da {contact_request.name}",
            body=(
                "Hai ricevuto una nuova richiesta di contatto.\n\n"
                f"Nome: {contact_request.name}\n"
                f"Email: {contact_request.email}\n\n"
                "Messaggio:\n"
                f"{contact_request.message}\n"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_NOTIFICATION_EMAIL],
            reply_to=[contact_request.email],
        )

        try:
            email.send(fail_silently=False)
        except Exception as e:
            print(e)
            

        return Response(
            {"detail": "Richiesta ricevuta con successo."},
            status=status.HTTP_201_CREATED,
        )