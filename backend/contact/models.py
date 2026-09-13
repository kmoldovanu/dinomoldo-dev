from django.db import models


class ContactRequest(models.Model):
    """Una richiesta inviata tramite il form di contatto del sito."""

    class BusinessType(models.TextChoices):
        RISTORANTE = "ristorante", "Ristorante"
        NEGOZIO = "negozio", "Negozio"
        ALTRO = "altro", "Altro"

    name = models.CharField("Nome", max_length=150)
    email = models.EmailField("Email")
    phone = models.CharField("Telefono", max_length=30, blank=True, null=True)
    business_type = models.CharField(
        "Tipo di attività", max_length=20, choices=BusinessType.choices
    )
    message = models.TextField("Messaggio")
    created_at = models.DateTimeField("Ricevuto il", auto_now_add=True)

    class Meta:
        verbose_name = "Richiesta di contatto"
        verbose_name_plural = "Richieste di contatto"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} ({self.email}) — {self.get_business_type_display()}"
