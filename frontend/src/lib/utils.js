import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper standard shadcn/ui: unisce classi condizionali evitando conflitti Tailwind
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Base URL del backend Django.
 *
 * - In sviluppo (npm run dev): VITE_API_URL non è impostata, quindi BASE_URL
 *   è "" e le chiamate a "/api/..." vengono intercettate dal proxy Vite
 *   che le gira a http://localhost:8000.
 *
 * - In produzione: VITE_API_URL è impostata come variabile d'ambiente del progetto
 *   Vercel del frontend (es. https://dinomoldo-dev-api.vercel.app) e le chiamate
 *   vanno direttamente al backend Django, pubblicato come secondo progetto Vercel.
 */
const BASE_URL = import.meta.env.VITE_API_URL ?? "";

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
 * Funzionamento:
 * 1. Prima di ogni POST chiama /api/csrf/ sul backend per ottenere il cookie
 *    csrftoken (necessario quando frontend e backend sono su domini diversi,
 *    perché il browser non ha ancora visitato il backend).
 * 2. Legge il cookie e lo inoltra nell'header X-CSRFToken.
 * 3. credentials: "include" fa viaggiare i cookie con la richiesta.
 */
export async function postJSON(url, data) {
  // Assicura che Django abbia impostato il cookie csrftoken prima di ogni POST.
  // In sviluppo la chiamata va al proxy Vite → localhost:8000/api/csrf/
  // In produzione va a BASE_URL/api/csrf/
  await fetch(`${BASE_URL}/api/csrf/`, {
    credentials: "include",
  }).catch(() => {
    // Ignora errori di rete sul preflight CSRF: se il cookie è già presente
    // la POST funzionerà comunque.
  });

  const csrfToken = getCookie("csrftoken");

  const response = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken || "",
    },
    credentials: "include",
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
