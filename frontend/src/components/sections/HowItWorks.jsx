import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function HowItWorks() {
  const { process } = siteConfig;

  return (
    <section id="come-funziona" className="border-b border-border bg-elevated/40">
      <div className="container py-16 md:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            {process.title}
          </h2>
          <p className="mt-3 text-muted leading-relaxed">{process.subtitle}</p>
        </div>

        {/* Sequenza numerata: qui è giustificata perché il contenuto è davvero un processo in ordine */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((item, index) => (
            <div key={item.step} className="relative">
              <span className="font-display font-mono text-3xl text-primary-hover">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>

              {index < process.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-4 left-[calc(100%_+_0.5rem)] w-[calc(2rem_-_0.5rem)] border-t border-dashed border-border"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
