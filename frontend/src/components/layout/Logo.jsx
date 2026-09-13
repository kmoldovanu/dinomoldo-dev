import React from "react";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Logo del brand. Usa la versione orizzontale (logo + testo) caricata in
 * public/logo-horizontal.jpeg. L'attributo alt usa il nome del brand da siteConfig
 * per restare coerente se il nome cambia.
 *
 * Nota: il file è un .jpeg con sfondo scuro incluso nell'immagine stessa,
 * quindi va bene su sfondo navy ma non su sfondi chiari. Se in futuro avrai
 * una versione PNG con sfondo trasparente, basta sostituire il file in public/
 * e aggiornare l'estensione qui sotto.
 */
export function Logo({ className = "h-9 w-auto" }) {
  return (
    <img
      src="/logo-horizontal.jpeg"
      alt={`${siteConfig.brand.name} — ${siteConfig.brand.tagline}`}
      className={`${className} rounded-sm`}
    />
  );
}
