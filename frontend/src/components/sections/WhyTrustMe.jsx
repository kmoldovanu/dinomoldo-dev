import React from "react";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function WhyTrustMe() {
  const { trust } = siteConfig;

  return (
    <section id="perche-fidarti" className="border-b border-border">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            {trust.title}
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{trust.intro}</p>
        </div>

        {/* Stack tecnologico */}
        <div className="mt-10">
          <p className="text-sm font-medium text-foreground mb-3">{trust.stack.title}</p>
          <div className="flex flex-wrap gap-2">
            {trust.stack.items.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-md border border-border bg-elevated text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impegni concreti */}
        <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {trust.commitments.map((commitment) => (
            <div key={commitment.title} className="flex gap-3">
              <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="font-medium text-foreground">{commitment.title}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
