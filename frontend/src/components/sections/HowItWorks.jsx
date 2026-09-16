import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function HowItWorks() {
  const { process } = siteConfig;

  return (
    <section id="come-funziona" className="border-b border-border">
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-primary-hover" aria-hidden="true" />
          <span className="text-xs font-mono text-primary-hover tracking-widest uppercase">
            Come funziona
          </span>
        </div>

        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
            {process.title}
          </h2>
          <p className="mt-3 text-muted leading-relaxed">{process.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {process.steps.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connettore orizzontale (desktop) */}
              {index < process.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-[calc(50%_+_1.5rem)] right-0 h-px bg-gradient-to-r from-border to-transparent"
                  aria-hidden="true"
                />
              )}

              <div className="px-0 lg:pr-8 pb-8 lg:pb-0">
                {/* Numero step con bordo */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center group-hover:border-primary-hover group-hover:bg-primary/15 transition-colors">
                    <span className="font-mono text-sm font-bold text-primary-hover">
                      {item.step}
                    </span>
                  </div>
                  {/* Connettore mobile/tablet */}
                  {index < process.steps.length - 1 && (
                    <div
                      className="lg:hidden flex-1 h-px bg-border"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
