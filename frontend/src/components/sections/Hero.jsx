import React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col overflow-hidden border-b border-border bg-gradient-hero"
    >
      {/* Grid lines background */}
      <div
        className="absolute inset-0 bg-grid-lines opacity-[0.08] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top-center radial glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(215 56% 41% / 0.2) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Right accent glow */}
      <div
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(173 61% 47% / 0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="container relative flex-1 grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-28 md:py-36">
        {/* Left column */}
        <div className="animate-fade-in">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-xs font-mono text-accent mb-8 relative">
            {/* Pulse ring */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Disponibile per nuovi incarichi
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="block text-foreground">Soluzioni web</span>
            <span className="block text-gradient mt-1">professionali</span>
            <span className="block text-foreground/80 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 font-semibold">
              per attività locali.
            </span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="accent" size="lg" className="group relative overflow-hidden">
              <a href={hero.ctaPrimary.href}>
                <span className="relative z-10 flex items-center gap-2">
                  {hero.ctaPrimary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href={hero.ctaSecondary.href} className="flex items-center gap-2">
                {hero.ctaSecondary.label}
                <ChevronDown className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
            {[
              { label: "Preventivo vincolante", icon: "✓" },
              { label: "Puntualità contrattualizzata", icon: "✓" },
              { label: "Mobile-first & SEO", icon: "✓" },
              { label: "Architettura su misura", icon: "✓" },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/15 text-accent text-xs font-bold">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right column — decorative */}
        <div
          className="hidden md:flex justify-center items-center animate-fade-in-right"
          aria-hidden="true"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">

            {/* Outer orbit ring */}
            <div
              className="absolute inset-0 rounded-full border border-border/50 animate-spin-slow"
              style={{ borderStyle: "dashed" }}
            />

            {/* Mid ring */}
            <div className="absolute inset-10 rounded-full border border-accent/15" />

            {/* Center glow blob */}
            <div
              className="absolute inset-16 rounded-full animate-float"
              style={{
                background:
                  "radial-gradient(circle, hsl(173 61% 47% / 0.12) 0%, transparent 70%)",
              }}
            />

            {/* Orbit dot — top */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent glow-accent animate-float"
              style={{ animationDelay: "0.5s" }}
            />
            {/* Orbit dot — right */}
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-hover opacity-70 animate-float"
              style={{ animationDelay: "1s" }}
            />
            {/* Orbit dot — bottom */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent/60 animate-float"
              style={{ animationDelay: "1.5s" }}
            />

            {/* SVG braces */}
            <svg viewBox="0 0 320 320" className="w-2/3 drop-shadow-xl relative z-10">
              {/* Left brace */}
              <path
                d="M125 50 C92 50 88 76 88 108 C88 140 72 155 46 162 C72 169 88 184 88 216 C88 248 92 274 125 274"
                fill="none"
                stroke="hsl(var(--primary-hover))"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Right brace */}
              <path
                d="M195 50 C228 50 232 76 232 108 C232 140 248 155 274 162 C248 169 232 184 232 216 C232 248 228 274 195 274"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Center dot */}
              <circle cx="160" cy="162" r="7" fill="hsl(var(--accent))" />
              <circle cx="160" cy="162" r="14" fill="hsl(var(--accent) / 0.15)" />
              {/* Left anchor dot */}
              <circle cx="46" cy="162" r="4" fill="hsl(var(--primary-hover))" opacity="0.9" />
              {/* Right anchor dot */}
              <circle cx="274" cy="162" r="4" fill="hsl(var(--accent))" opacity="0.9" />
              {/* Horizontal dashes */}
              <line x1="132" y1="100" x2="188" y2="100"
                stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="132" y1="224" x2="188" y2="224"
                stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>

            {/* Corner code tags */}
            <span className="absolute top-8 left-8 font-mono text-xs text-accent/50">&lt;div&gt;</span>
            <span className="absolute bottom-8 right-8 font-mono text-xs text-primary-hover/50">&lt;/div&gt;</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative pb-8 flex justify-center">
        <a
          href="#chi-sono"
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-muted/50 hover:text-muted transition-colors"
          aria-label="Scorri verso il basso"
        >
          <span>scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
