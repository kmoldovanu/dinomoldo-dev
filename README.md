# dinomoldo.dev — Sito one-page

Sito vetrina per attività freelance di sviluppo software/web. Frontend React
(Vite + Tailwind + shadcn/ui), backend Django (DRF) per il form di contatto.

## Avvio in locale

**Backend (Django)**
```bash
cd backend
python -m venv venv
source venv/bin/activate          # su Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # opzionale, per vedere le richieste in /admin
python manage.py runserver        # gira su http://localhost:8000
```

**Frontend (React)**
```bash
cd frontend
npm install
npm run dev                       # gira su http://localhost:5173
```

Il frontend in sviluppo inoltra automaticamente le chiamate a `/api` verso
`http://localhost:8000` (vedi `vite.config.js`), quindi con entrambi i server
avviati il form di contatto funziona subito.

## Come funziona il CSRF (Django + React separati)

Django protegge le richieste POST con un token CSRF. Con frontend e backend
su origini diverse (porte 5173 e 8000) servono due accorgimenti, già
configurati in questo progetto:

1. **Backend**: `CORS_ALLOWED_ORIGINS` e `CSRF_TRUSTED_ORIGINS` in
   `backend/dinomoldo_backend/settings.py` includono `http://localhost:5173`,
   e `CORS_ALLOW_CREDENTIALS = True` permette di inviare i cookie tra le due origini.
2. **Frontend**: la funzione `postJSON` in `frontend/src/lib/utils.js` legge
   il cookie `csrftoken` (che Django imposta nel browser) e lo inoltra
   nell'header `X-CSRFToken` di ogni richiesta, con `credentials: "include"`
   per far viaggiare i cookie insieme alla richiesta.

Nota: al primo avvio, Django imposta il cookie `csrftoken` quando il browser
visita una pagina Django (anche solo `/admin/`) o quando si chiama una view
con `@ensure_csrf_cookie`. In produzione, se frontend e backend condividono
lo stesso dominio (es. serviti insieme dietro dinomoldo.dev), tutto questo
si semplifica e CORS non serve più.

## Struttura del progetto e dove intervenire

```
frontend/
  src/
    lib/siteConfig.js       ← TUTTI i testi, i servizi, gli step, i contatti
    lib/utils.js             ← funzione cn() + helper CSRF/fetch verso Django
    index.css                ← variabili colore del brand (--primary, --accent, --background...)
    tailwind.config.js       ← mappa le variabili CSS ai colori Tailwind (primary, accent...)
    components/
      ui/                    ← componenti shadcn generici (button, card, input...)
      layout/                ← Navbar, Footer, Logo (struttura fissa del sito)
      sections/               ← Hero, About, Services, HowItWorks, WhyTrustMe, Contact
    App.jsx                  ← compone le sezioni nell'ordine in cui appaiono

backend/
  dinomoldo_backend/settings.py  ← configurazione Django, CORS, CSRF
  contact/
    models.py                ← modello ContactRequest
    serializers.py            ← validazione dati form
    views.py                  ← endpoint POST /api/contact/
```

### Per modificare un testo (titoli, descrizioni, email, social...)
Apri `frontend/src/lib/siteConfig.js`. Ogni sezione del sito legge da lì:
non serve toccare i file `.jsx`.

### Per cambiare i colori del brand
Apri `frontend/src/index.css` e modifica i valori HSL dentro `:root`
(`--background`, `--primary`, `--accent`, ecc.). Si propagano automaticamente
ovunque tramite `tailwind.config.js`.

### Per aggiungere una nuova sezione one-page
1. Crea il componente in `frontend/src/components/sections/NuovaSezione.jsx`
   (puoi copiare la struttura di `About.jsx` come punto di partenza).
2. Aggiungi i testi della sezione in `siteConfig.js`.
3. Importa e inserisci `<NuovaSezione />` in `App.jsx`, nell'ordine desiderato.
4. Se vuoi che compaia in navbar, aggiungi una voce in `siteConfig.nav`
   con lo stesso `id` usato nella sezione (es. `id="nuova-sezione"` e
   `href: "#nuova-sezione"`).

### Logo e favicon
Il logo caricato (`Logo.jpeg`) è stato copiato in:
- `frontend/public/logo-horizontal.jpeg` — usato nella navbar e nel footer
  tramite il componente `frontend/src/components/layout/Logo.jsx`
- `frontend/public/favicon.jpeg` — usato come favicon in `index.html`

Il file caricato è la versione orizzontale con testo (logo + "dinomoldo.dev").
Per la favicon sarebbe meglio una versione **quadrata solo icona** (senza
testo), più leggibile nelle dimensioni piccole della scheda del browser:
quando l'avrai, sostituisci `frontend/public/favicon.jpeg` con quel file
(anche in formato `.png` o `.ico`, aggiornando il riferimento in `index.html`).

## Endpoint API

`POST /api/contact/`
```json
{
  "name": "Mario Rossi",
  "email": "mario@esempio.it",
  "phone": "+39 333 1234567",
  "business_type": "ristorante",
  "message": "Vorrei un sito con menu digitale..."
}
```
Risponde `201` con `{"detail": "Richiesta ricevuta con successo."}` oppure
`400` con gli errori di validazione campo per campo.

Le richieste salvate sono visibili in `/admin/` (sezione "Richieste di contatto")
dopo aver creato un superuser.
