import React from "react";
import { LayoutTemplate, UtensilsCrossed, Wrench } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/siteConfig";

// Mappa nome icona (stringa in siteConfig) -> componente lucide-react.
// Così in siteConfig.js si scrive solo il nome, senza importare React nei dati.
const ICONS = {
  LayoutTemplate,
  UtensilsCrossed,
  Wrench,
};

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="servizi" className="border-b border-border">
      <div className="container py-16 md:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            {services.title}
          </h2>
          <p className="mt-3 text-muted leading-relaxed">{services.subtitle}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Card
                key={service.title}
                className="border-l-2 border-l-accent hover:bg-elevated/80 transition-colors"
              >
                <CardHeader>
                  {Icon && <Icon className="h-6 w-6 text-accent mb-3" strokeWidth={1.75} />}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
