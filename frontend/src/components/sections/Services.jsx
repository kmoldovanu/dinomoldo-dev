import React from "react";
import { LayoutTemplate, UtensilsCrossed, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

// Mappa nome icona (stringa in siteConfig) -> componente lucide-react.
const ICONS = {
  LayoutTemplate,
  UtensilsCrossed,
  Wrench,
};

const ACCENT_COLORS = {
  LayoutTemplate: "accent",
  UtensilsCrossed: "primary",
  Wrench: "accent",
};

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="servizi" className="border-b border-border relative overflow-hidden">
      {/* Background dots */}
      <div
        className="absolute inset-0 bg-dots opacity-[0.06] pointer-events-none"
        aria-hidden="true"
      />
      {/* Right glow */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(173 61% 47% / 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container py-20 md:py-28 relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Servizi
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Title col */}
          <div className="sm:col-span-2 lg:col-span-1 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
              {services.title}
            </h2>
            <p className="mt-3 text-muted leading-relaxed">{services.subtitle}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((service, idx) => {
            const Icon = ICONS[service.icon];
            const isAccent = ACCENT_COLORS[service.icon] === "accent";

            return (
              <div
                key={service.title}
                className="group relative rounded-xl border border-border bg-elevated p-7 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Top accent line on hover */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${isAccent
                      ? "bg-gradient-to-r from-transparent via-accent to-transparent"
                      : "bg-gradient-to-r from-transparent via-primary-hover to-transparent"}`}
                  aria-hidden="true"
                />

                {/* Icon */}
                {Icon && (
                  <div
                    className={`mb-5 inline-flex p-3 rounded-xl border transition-colors
                      ${isAccent
                        ? "bg-accent/10 border-accent/20 group-hover:bg-accent/15"
                        : "bg-primary/10 border-primary/20 group-hover:bg-primary/15"}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${isAccent ? "text-accent" : "text-primary-hover"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
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
