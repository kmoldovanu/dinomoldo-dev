import React from "react";
import { LayoutTemplate, UtensilsCrossed, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

// Mappa nome icona (stringa in siteConfig) -> componente lucide-react.
const ICONS = {
  LayoutTemplate,
  UtensilsCrossed,
  Wrench,
};

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="servizi" className="border-b border-border bg-elevated/30">
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Servizi
          </span>
        </div>

        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
            {services.title}
          </h2>
          <p className="mt-3 text-muted leading-relaxed">{services.subtitle}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.title}
                className="group relative rounded-lg border border-border bg-elevated p-6 transition-all duration-200 hover:border-accent/50 hover:bg-elevated hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Accent line top */}
                <div
                  className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                />

                {Icon && (
                  <div className="mb-4 inline-flex p-2.5 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/15 transition-colors">
                    <Icon
                      className="h-6 w-6 text-accent"
                      strokeWidth={1.75}
                    />
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
