import React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-gradient-hero"
    >
      {/* Pattern di punti sottile sullo sfondo */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Glow radiale in alto a sinistra */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(215 56% 41% / 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative grid md:grid-cols-2 gap-12 items-center py-24 md:py-32">
        <div className="animate-fade-in">
          {/* Badge sopra la headline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-xs font-mono text-accent mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Disponibile per nuovi progetti
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">Un sito web fatto bene,</span>{" "}
            <span className="text-gradient">per la tua attività locale.</span>
          </h1>

          <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="accent" size="lg" className="group">
              <a href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}
                <span
                  className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
            </Button>
          </div>

          {/* Piccole stat/trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <div className="flex items-center gap-1.5">
              <span className="text-accent font-semibold">✓</span>
              Prezzo fisso
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-accent font-semibold">✓</span>
              Consegna concordata
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-accent font-semibold">✓</span>
              Mobile-first
            </div>
          </div>
        </div>

        {/* Grafica: parentesi graffa stilizzata che richiama il logo { } */}
        <div
          className="hidden md:flex justify-center items-center"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Cerchio glow di sfondo */}
            <div
              className="absolute inset-8 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(173 61% 47% / 0.06) 0%, transparent 70%)",
              }}
            />

            <svg viewBox="0 0 320 320" className="w-full drop-shadow-lg">
              {/* Parentesi sinistra (primary) */}
              <path
                d="M120 30 C90 30 85 55 85 85 C85 115 70 130 45 135 C70 140 85 155 85 185 C85 215 90 240 120 240"
                fill="none"
                stroke="hsl(var(--primary-hover))"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Parentesi destra (accent) */}
              <path
                d="M200 30 C230 30 235 55 235 85 C235 115 250 130 275 135 C250 140 235 155 235 185 C235 215 230 240 200 240"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Punto centrale */}
              <circle cx="160" cy="135" r="6" fill="hsl(var(--accent))" />
              <circle
                cx="160"
                cy="135"
                r="12"
                fill="hsl(var(--accent) / 0.15)"
              />
              {/* Punti laterali */}
              <circle
                cx="45"
                cy="135"
                r="3.5"
                fill="hsl(var(--primary-hover))"
                opacity="0.8"
              />
              <circle
                cx="275"
                cy="135"
                r="3.5"
                fill="hsl(var(--accent))"
                opacity="0.8"
              />
              {/* Linee decorative orizzontali */}
              <line
                x1="130"
                y1="80"
                x2="190"
                y2="80"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="130"
                y1="190"
                x2="190"
                y2="190"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
