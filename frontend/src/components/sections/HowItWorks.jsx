import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { MessageSquare, Code2, CheckCircle2, Rocket } from "lucide-react";

const STEP_ICONS = [
  MessageSquare,
  Code2,
  CheckCircle2,
  Rocket,
];

export function HowItWorks() {
  const { process } = siteConfig;

  return (
    <section id="come-funziona" className="border-b border-border relative overflow-hidden bg-elevated/20">
      {/* Background radial glow */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(215 56% 41% / 0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container py-20 md:py-28 relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary-hover" aria-hidden="true" />
          <span className="text-xs font-mono text-primary-hover tracking-widest uppercase">
            Processo
          </span>
        </div>

        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
            {process.title}
          </h2>
          <p className="mt-3 text-muted leading-relaxed">{process.subtitle}</p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {process.steps.map((item, index) => {
            const Icon = STEP_ICONS[index] || MessageSquare;
            return (
              <div
                key={item.step}
                className="group relative rounded-xl border border-border bg-elevated p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary-hover/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top highlight bar on hover */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-primary-hover/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div>
                  {/* Top line with step number badge and icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                      STEP {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-hover group-hover:bg-primary/20 group-hover:text-primary-hover transition-colors">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary-hover transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Progress bar indicator */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                      style={{ width: `${((index + 1) / process.steps.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-muted/60">
                    {index + 1}/{process.steps.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
