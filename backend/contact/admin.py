from django.contrib import admin
from .models import ContactRequest


@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "business_type", "created_at")
    list_filter = ("business_type", "created_at")
    search_fields = ("name", "email", "message")
    readonly_fields = ("created_at",)
