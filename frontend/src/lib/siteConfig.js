/**
 * siteConfig.js
 * ---------------------------------------------------------------
 * Unico punto in cui modificare testi, dati di contatto, servizi,
 * step del processo e contenuti mostrati nel sito.
 * I componenti in components/sections leggono da qui: per cambiare
 * un testo NON serve toccare la logica dei componenti.
 * ---------------------------------------------------------------
 */

export const siteConfig = {
  brand: {
    name: "dinomoldo.dev",
    tagline: "Software & Web Development",
    developerName: "Dino Moldo",
  },

  nav: [
    { label: "Chi sono", href: "#chi-sono" },
    { label: "Servizi", href: "#servizi" },
    { label: "Come funziona", href: "#come-funziona" },
    { label: "Perché fidarti", href: "#perche-fidarti" },
    { label: "Contatti", href: "#contatti" },
  ],

  hero: {
    headline: "Un sito web fatto bene, per la tua attività locale.",
    subheadline:
      "Siti vetrina semplici, veloci e curati nei dettagli — pensati per ristoranti, negozi e piccole attività che vogliono farsi trovare online.",
    ctaPrimary: { label: "Richiedi un preventivo", href: "#contatti" },
    ctaSecondary: { label: "Guarda i servizi", href: "#servizi" },
  },

  about: {
    title: "Chi sono",
    paragraphs: [
      "Sono Dino, sviluppatore software e web. Lavoro con React e Django per costruire siti solidi, veloci da caricare e semplici da aggiornare — senza plugin superflui o builder pesanti da mantenere.",
      "Seguo ogni progetto dall'inizio alla fine: capisco cosa serve alla tua attività, costruisco il sito e resto disponibile dopo la consegna. Nessun passaggio di mano tra reparti diversi, parli sempre con chi scrive il codice.",
    ],
  },

  services: {
    title: "Servizi",
    subtitle: "Tre modi per portare la tua attività online, a seconda di cosa ti serve davvero.",
    items: [
      {
        icon: "LayoutTemplate",
        title: "Sito vetrina one-page",
        description:
          "Una pagina unica, chiara e veloce: chi sei, cosa offri, dove trovarti e come contattarti. Ideale per negozi, studi e attività di servizi.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Sito per ristoranti con menu",
        description:
          "Menu digitale sempre aggiornabile, orari, posizione e prenotazioni o contatto diretto. Pensato per chi lavora nella ristorazione.",
      },
      {
        icon: "Wrench",
        title: "Manutenzione e aggiornamenti",
        description:
          "Modifiche ai testi, nuove foto, piccoli aggiustamenti o aggiornamenti tecnici. Un riferimento fisso per il tuo sito, senza doverlo rifare da capo ogni volta.",
      },
    ],
  },

  process: {
    title: "Come funziona",
    subtitle: "Quattro passaggi semplici, dalla prima richiesta al sito online.",
    steps: [
      {
        step: "01",
        title: "Richiesta",
        description: "Mi scrivi cosa ti serve e per che tipo di attività. Fissiamo una chiamata veloce se utile.",
      },
      {
        step: "02",
        title: "Bozza",
        description: "Preparo una prima versione del sito con testi e struttura, basata su quello che mi hai raccontato.",
      },
      {
        step: "03",
        title: "Revisione",
        description: "Guardiamo insieme la bozza e sistemo testi, immagini e dettagli finché non è quello che ti serve.",
      },
      {
        step: "04",
        title: "Consegna",
        description: "Il sito va online. Resto disponibile per modifiche e assistenza dopo la consegna.",
      },
    ],
  },

  trust: {
    title: "Perché fidarti di me",
    intro:
      "Sto avviando la mia attività da sviluppatore freelance: non ho ancora casi studio da mostrare, e preferisco dirlo apertamente piuttosto che nasconderlo. In cambio offro qualcosa che con studi più grandi è raro: attenzione diretta e condizioni di lancio vantaggiose sui primi progetti.",
    stack: {
      title: "Come costruisco i siti",
      items: ["React", "Django", "Tailwind CSS", "Python", "PostgreSQL"],
    },
    commitments: [
      {
        title: "Prezzo fisso, concordato prima di iniziare",
        description: "Sai esattamente quanto spendi, senza sorprese a lavoro finito.",
      },
      {
        title: "Parli con chi scrive il codice",
        description: "Nessun intermediario: le tue richieste arrivano dritte a chi costruisce il sito.",
      },
      {
        title: "Tempi di consegna chiari",
        description: "Concordiamo una scadenza realistica all'inizio e la rispetto.",
      },
      {
        title: "Condizioni di lancio sui primi progetti",
        description: "I primi clienti ricevono un prezzo agevolato e più attenzione, a parità di qualità.",
      },
    ],
  },

  contact: {
    title: "Contatti",
    subtitle: "Raccontami della tua attività: ti rispondo entro un giorno lavorativo.",
    email: "moldovanu.business@gmail.com",
    social: [
      { label: "Instagram", href: "https://instagram.com/dinomoldo.dev" },
    ],
    businessTypes: [
      { value: "ristorante", label: "Ristorante" },
      { value: "negozio", label: "Negozio" },
      { value: "altro", label: "Altro" },
    ],
    form: {
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "nome@esempio.it",
      phoneLabel: "Telefono (facoltativo)",
      phonePlaceholder: "+39 000 000 0000",
      businessTypeLabel: "Tipo di attività",
      businessTypePlaceholder: "Seleziona un'opzione",
      messageLabel: "Messaggio",
      messagePlaceholder: "Raccontami brevemente di cosa hai bisogno...",
      submitLabel: "Invia richiesta",
      submitLoadingLabel: "Invio in corso...",
      successMessage: "Richiesta inviata. Ti rispondo entro un giorno lavorativo.",
      errorMessage: "Non sono riuscito a inviare la richiesta. Riprova o scrivimi direttamente via email.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} dinomoldo.dev. Tutti i diritti riservati.`,
    madeBy: "Realizzato da Dino Moldo",
  },
};
