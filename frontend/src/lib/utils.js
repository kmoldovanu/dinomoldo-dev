import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper standard shadcn/ui: unisce classi condizionali evitando conflitti Tailwind
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Legge un cookie per nome. Serve per estrarre il cookie "csrftoken"
 * che Django imposta automaticamente nel browser.
 */
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

/**
 * Wrapper fetch per chiamate POST verso il backend Django con protezione CSRF.
 *
 * Come funziona il CSRF con Django + React (SPA separata):
 * 1. Django, quando servi una pagina (o un endpoint dedicato) che usa {% csrf_token %}
 *    o il middleware CsrfViewMiddleware, imposta un cookie "csrftoken" nel browser.
 * 2. Per ogni richiesta POST/PUT/DELETE, Django si aspetta l'header "X-CSRFToken"
 *    con lo stesso valore del cookie: se manca o non corrisponde, risponde 403.
 * 3. Qui leggiamo il cookie con getCookie("csrftoken") e lo inoltriamo nell'header.
 *
 * Nota: il browser deve poter leggere il cookie, quindi frontend e backend
 * devono girare sullo stesso dominio (o in dev, passare da CORS_ALLOW_CREDENTIALS
 * + credentials: "include", come impostato qui sotto).
 */
export async function postJSON(url, data) {
  const csrfToken = getCookie("csrftoken");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken || "",
    },
    credentials: "include", // include i cookie nella richiesta (necessario per il CSRF)
    body: JSON.stringify(data),
  });

  const responseData = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error("Richiesta non riuscita");
    error.status = response.status;
    error.data = responseData;
    throw error;
  }

  return responseData;
}
