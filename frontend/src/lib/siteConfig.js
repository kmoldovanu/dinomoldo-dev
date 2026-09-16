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
    { label: "Profilo", href: "#chi-sono" },
    { label: "Servizi", href: "#servizi" },
    { label: "Processo", href: "#come-funziona" },
    { label: "Garanzie", href: "#perche-fidarti" },
    { label: "Contatti", href: "#contatti" },
  ],

  hero: {
    headline: "Soluzioni web professionali per attività locali.",
    subheadline:
      "Realizzazione di siti vetrina performanti, ottimizzati per i motori di ricerca e progettati su misura — per ristoranti, negozi e attività commerciali che richiedono una presenza digitale efficace.",
    ctaPrimary: { label: "Richiedi un preventivo", href: "#contatti" },
    ctaSecondary: { label: "Esplora i servizi", href: "#servizi" },
  },

  about: {
    title: "Profilo professionale",
    paragraphs: [
      "Sviluppatore software specializzato in applicazioni web. Utilizzo React e Django per realizzare siti strutturati, ad alto rendimento e di semplice gestione — senza dipendenze da plugin superflui o CMS difficili da mantenere.",
      "Seguo ogni progetto in prima persona, dall'analisi dei requisiti alla consegna e oltre. Il cliente ha un unico interlocutore tecnico per tutta la durata del progetto, garantendo comunicazione diretta e tempi di risposta ridotti.",
    ],
  },

  services: {
    title: "Servizi",
    subtitle: "Soluzioni mirate per portare la tua attività online in modo professionale ed efficace.",
    items: [
      {
        icon: "LayoutTemplate",
        title: "Sito vetrina one-page",
        description:
          "Pagina singola strutturata e performante: presentazione dell'attività, offerta di servizi, localizzazione e canali di contatto. Indicato per studi professionali, negozi e attività di servizi.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Sito per ristoranti con menu",
        description:
          "Menu digitale aggiornabile in autonomia, con sezioni dedicate a orari, prenotazioni e contatti diretti. Sviluppato specificamente per il settore della ristorazione.",
      },
      {
        icon: "Wrench",
        title: "Manutenzione e aggiornamenti",
        description:
          "Aggiornamento di contenuti, sostituzione di immagini, interventi tecnici puntuali. Un riferimento stabile per la gestione continuativa del sito, senza necessità di rifacimenti.",
      },
    ],
  },

  process: {
    title: "Processo di lavoro",
    subtitle: "Quattro fasi strutturate, dalla raccolta dei requisiti alla pubblicazione.",
    steps: [
      {
        step: "01",
        title: "Briefing",
        description: "Raccolta delle esigenze e del contesto aziendale. Eventuale call conoscitiva per definire gli obiettivi del progetto.",
      },
      {
        step: "02",
        title: "Sviluppo",
        description: "Realizzazione di una prima versione del sito basata sui requisiti raccolti, con struttura e contenuti definiti nella fase di briefing.",
      },
      {
        step: "03",
        title: "Revisione",
        description: "Revisione condivisa del progetto e affinamento di testi, immagini e dettagli tecnici fino al raggiungimento delle specifiche concordate.",
      },
      {
        step: "04",
        title: "Consegna",
        description: "Pubblicazione del sito. Disponibilità garantita per interventi di manutenzione e assistenza post-consegna.",
      },
    ],
  },

  trust: {
    title: "Trasparenza e affidabilità",
    intro:
      "Attività freelance in fase di avvio: non sono disponibili ancora casi studio consolidati. Questa informazione viene comunicata in modo esplicito, perché la trasparenza è parte integrante del servizio. In compenso, ogni progetto riceve attenzione diretta e condizioni economiche vantaggiose rispetto ad agenzie strutturate.",
    stack: {
      title: "Stack tecnologico",
      items: ["React", "Django", "Tailwind CSS", "Python", "PostgreSQL"],
    },
    commitments: [
      {
        title: "Preventivo fisso concordato preventivamente",
        description: "Il costo totale viene definito prima dell'avvio dei lavori. Nessuna variazione di prezzo a progetto concluso.",
      },
      {
        title: "Interlocutore tecnico unico",
        description: "Nessun intermediario. Le richieste vengono gestite direttamente dallo sviluppatore responsabile del progetto.",
      },
      {
        title: "Scadenze definite e rispettate",
        description: "I tempi di consegna vengono concordati nella fase iniziale e rispettati per l'intera durata del progetto.",
      },
      {
        title: "Tariffe agevolate sui primi progetti",
        description: "I clienti iniziali beneficiano di condizioni economiche preferenziali, a parità di qualità tecnica e di servizio.",
      },
    ],
  },

  contact: {
    title: "Contatti",
    subtitle: "Illustra la tua esigenza. Risposta garantita entro un giorno lavorativo.",
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
      namePlaceholder: "Nome e cognome",
      emailLabel: "Indirizzo email",
      emailPlaceholder: "nome@azienda.it",
      phoneLabel: "Numero di telefono (facoltativo)",
      phonePlaceholder: "+39 000 000 0000",
      businessTypeLabel: "Tipo di attività",
      businessTypePlaceholder: "Seleziona un'opzione",
      messageLabel: "Messaggio",
      messagePlaceholder: "Descrivi brevemente il progetto o la necessità...",
      submitLabel: "Invia richiesta",
      submitLoadingLabel: "Invio in corso...",
      successMessage: "Richiesta ricevuta. Risposta entro un giorno lavorativo.",
      errorMessage: "Invio non riuscito. Riprovare o contattare direttamente via email.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} dinomoldo.dev. Tutti i diritti riservati.`,
    madeBy: "Realizzato da Dino Moldo",
  },
};
