import React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Pattern di punti sottile sullo sfondo, richiama i nodi/circuito del logo */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="container relative grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
        <div className="animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-foreground max-w-xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed max-w-md">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="accent" size="lg">
              <a href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
            </Button>
          </div>
        </div>

        {/* Grafica: parentesi graffa stilizzata che richiama il logo { } */}
        <div className="hidden md:flex justify-center items-center" aria-hidden="true">
          <svg viewBox="0 0 320 320" className="w-full max-w-sm">
            <path
              d="M120 30 C90 30 85 55 85 85 C85 115 70 130 45 135 C70 140 85 155 85 185 C85 215 90 240 120 240"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M200 30 C230 30 235 55 235 85 C235 115 250 130 275 135 C250 140 235 155 235 185 C235 215 230 240 200 240"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="160" cy="135" r="5" fill="hsl(var(--accent))" />
            <circle cx="45" cy="135" r="3.5" fill="hsl(var(--primary))" opacity="0.7" />
            <circle cx="275" cy="135" r="3.5" fill="hsl(var(--accent))" opacity="0.7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
