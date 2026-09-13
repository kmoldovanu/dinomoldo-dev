from rest_framework import serializers
from .models import ContactRequest


class ContactRequestSerializer(serializers.ModelSerializer):
    """
    Valida i dati in arrivo dal form React prima di salvarli.
    DRF applica già le validazioni base derivate dal modello
    (es. EmailField valida il formato email, business_type deve
    essere uno dei valori in BusinessType). Qui aggiungiamo solo
    controlli extra non coperti automaticamente.
    """

    class Meta:
        model = ContactRequest
        fields = ["name", "email", "phone", "business_type", "message"]

    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Il nome deve avere almeno 2 caratteri.")
        return value.strip()

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Il messaggio è troppo corto: aggiungi qualche dettaglio in più.")
        return value.strip()
