import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="chi-sono" className="border-b border-border">
      <div className="container py-16 md:py-24 max-w-2xl">
        {/* Accent bar sopra il titolo */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Chi sono
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
          {about.title}
        </h2>

        <div className="mt-6 space-y-5 border-l-2 border-border pl-6">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
