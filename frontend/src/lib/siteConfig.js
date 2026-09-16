/**
 * siteConfig.js
 * ---------------------------------------------------------------
 * Configurazione centralizzata dei contenuti, parametri aziendali,
 * canali di contatto e testi di presentazione.
 * ---------------------------------------------------------------
 */

export const siteConfig = {
  brand: {
    name: "dinomoldo.dev",
    tagline: "Software & Web Engineering",
    developerName: "Dino Moldo",
  },

  nav: [
    { label: "Profilo", href: "#chi-sono" },
    { label: "Servizi", href: "#servizi" },
    { label: "Processo", href: "#come-funziona" },
    { label: "Standard", href: "#perche-fidarti" },
    { label: "Contatti", href: "#contatti" },
  ],

  hero: {
    headline: "Soluzioni web ad alte prestazioni per attività locali.",
    subheadline:
      "Sviluppo di piattaforme web e siti vetrina progettati su misura, con codice proprietario, tempi di caricamento istantanei e struttura ottimizzata per trasformare le visite in opportunità di business.",
    ctaPrimary: { label: "Richiedi una consulenza", href: "#contatti" },
    ctaSecondary: { label: "Esplora i servizi", href: "#servizi" },
  },

  about: {
    title: "Profilo e Metodologia",
    paragraphs: [
      "Ingegnere del software specializzato nello sviluppo di applicazioni e piattaforme web moderne. Realizzo infrastrutture digitali basate su React e Django che garantiscono elevata velocità di esecuzione, rigore architetturale e facilità di gestione nel tempo, eliminando la dipendenza da CMS fragili o plugin ridondanti.",
      "Ogni progetto è gestito con un approccio consulenziale diretto: dall'analisi preliminare dei requisiti fino al deployment in produzione e al supporto continuativo. Un unico referente tecnico assicura trasparenza decisionale, tempestività di risposta e piena aderenza agli obiettivi di business.",
    ],
  },

  services: {
    title: "Servizi e Soluzioni",
    subtitle: "Soluzioni digitali mirate per consolidare la presenza sul mercato e massimizzare i risultati operativi.",
    items: [
      {
        icon: "LayoutTemplate",
        title: "Sito vetrina ad alte prestazioni",
        description:
          "Architettura monopagina ottimizzata per la conversione: valorizzazione del brand, catalogo servizi, localizzazione strategica e canali di contatto immediati. Ideale per studi professionali e imprese locali.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Piattaforma food con menu interattivo",
        description:
          "Infrastruttura per la ristorazione con menu digitale dinamico aggiornabile in autonomia, moduli per la prenotazione rapida e consultazione ottimizzata per qualsiasi dispositivo mobile.",
      },
      {
        icon: "Wrench",
        title: "Manutenzione evolutiva e supporto tecnico",
        description:
          "Monitoraggio continuativo delle performance, aggiornamenti di sicurezza, refactoring e integrazione di nuove funzionalità per garantire stabilità e continuità operativa.",
      },
    ],
  },

  process: {
    title: "Metodologia operativa",
    subtitle: "Un percorso strutturato in quattro fasi cardine per garantire puntualità, trasparenza e qualità ingegneristica.",
    steps: [
      {
        step: "01",
        title: "Analisi e Requisiti",
        description: "Studio approfondito degli obiettivi aziendali, analisi del settore e formalizzazione delle specifiche tecniche e funzionali.",
      },
      {
        step: "02",
        title: "Progettazione e Sviluppo",
        description: "Sviluppo della piattaforma con tecnologie allo stato dell'arte, curando architettura software, accessibilità e reattività multi-dispositivo.",
      },
      {
        step: "03",
        title: "Collaudo e Ottimizzazione",
        description: "Sessione di verifica congiunta, test prestazionali e ottimizzazione fine dei parametri Core Web Vitals e SEO prima del rilascio.",
      },
      {
        step: "04",
        title: "Messa in produzione",
        description: "Rilascio dell'applicativo con configurazione domini, crittografia SSL e fornitura di assistenza tecnica post-avvio.",
      },
    ],
  },

  trust: {
    title: "Standard qualitativi e garanzie",
    intro:
      "Ogni progetto è sviluppato nel rigoroso rispetto dei più elevati standard dell'ingegneria del software. L'adozione di tecnologie enterprise e una linea di comunicazione tecnica senza intermediari assicurano affidabilità, trasparenza contrattuale e risultati misurabili.",
    stack: {
      title: "Stack tecnologico",
      items: ["React", "Django", "Tailwind CSS", "Python", "PostgreSQL"],
    },
    commitments: [
      {
        title: "Preventivo a costo fisso vincolante",
        description: "Definizione chiara e dettagliata dell'investimento prima dell'avvio dei lavori. Nessun costo nascosto o revisione al rilascio.",
      },
      {
        title: "Interlocutore tecnico dedicato",
        description: "Collaborazione diretta con lo sviluppatore responsabile del codice, eliminando filtri di agenzia e dispersioni comunicative.",
      },
      {
        title: "Tempistiche di rilascio certe",
        description: "Pianificazione dettagliata delle milestone con scadenze concordate preventivamente e rigorosamente rispettate.",
      },
      {
        title: "Codice proprietario e manutenibile",
        description: "Pieno controllo e proprietà del codice sorgente, senza vincoli a piattaforme chiuse, garantendo scalabilità nel tempo.",
      },
    ],
  },

  contact: {
    title: "Richiesta di contatto e consulenza",
    subtitle: "Descrivi il tuo progetto o le esigenze aziendali: riceverai una risposta dettagliata entro 24 ore lavorative.",
    email: "moldovanu.business@gmail.com",
    social: [
      { label: "Instagram", href: "https://instagram.com/dinomoldo.dev" },
    ],
    businessTypes: [
      { value: "ristorante", label: "Ristorazione & Food" },
      { value: "negozio", label: "Attività commerciale / Retail" },
      { value: "studio", label: "Studio professionale / Servizi" },
      { value: "altro", label: "Altra tipologia d'impresa" },
    ],
    form: {
      nameLabel: "Nome e Cognome / Referente",
      namePlaceholder: "es. Mario Rossi",
      emailLabel: "Indirizzo Email aziendale",
      emailPlaceholder: "nome@azienda.it",
      phoneLabel: "Recapito telefonico (facoltativo)",
      phonePlaceholder: "+39 000 000 0000",
      businessTypeLabel: "Tipologia di attività",
      businessTypePlaceholder: "Seleziona la tipologia di attività",
      messageLabel: "Dettagli del progetto",
      messagePlaceholder: "Descrivi sinteticamente il progetto, le funzionalità richieste o gli obiettivi prefissati...",
      submitLabel: "Invia richiesta",
      submitLoadingLabel: "Trasmissione in corso...",
      successMessage: "Richiesta ricevuta con successo. Sarai ricontattato entro 24 ore lavorative.",
      errorMessage: "Si è verificato un errore durante la trasmissione. Riprovare o contattare direttamente l'indirizzo email indicato.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} dinomoldo.dev. Tutti i diritti riservati.`,
    madeBy: "Realizzato da Dino Moldo",
  },
};
