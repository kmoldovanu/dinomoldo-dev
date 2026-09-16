from django.urls import path
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from .views import ContactRequestView


@ensure_csrf_cookie
def csrf_view(request):
    """
    Endpoint GET /api/csrf/
    Non fa nulla se non impostare il cookie csrftoken nel browser.
    Serve al frontend React in produzione (domini separati) per ottenere
    il token prima di inviare richieste POST.
    """
    return JsonResponse({"detail": "ok"})


urlpatterns = [
    path("contact/", ContactRequestView.as_view(), name="contact-request"),
    path("csrf/", csrf_view, name="csrf"),
]
