import React from "react";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function WhyTrustMe() {
  const { trust } = siteConfig;

  return (
    <section id="perche-fidarti" className="border-b border-border bg-elevated/30">
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Perché fidarti
          </span>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
            {trust.title}
          </h2>
          <p className="mt-5 text-muted leading-relaxed">{trust.intro}</p>
        </div>

        {/* Stack tecnologico */}
        <div className="mt-10 p-5 rounded-lg border border-border bg-elevated inline-block">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
            {trust.stack.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {trust.stack.items.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-md border border-border bg-background text-muted hover:border-accent/50 hover:text-accent transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impegni concreti */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {trust.commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="flex gap-4 p-5 rounded-lg border border-border bg-elevated hover:border-accent/30 transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {commitment.title}
                </p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
