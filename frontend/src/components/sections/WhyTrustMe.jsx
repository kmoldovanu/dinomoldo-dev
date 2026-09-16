import React from "react";
import { ShieldCheck, UserCheck, Timer, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const COMMITMENT_ICONS = [
  ShieldCheck,
  UserCheck,
  Timer,
  Sparkles,
];

export function WhyTrustMe() {
  const { trust } = siteConfig;

  return (
    <section id="perche-fidarti" className="border-b border-border bg-elevated/20 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute -right-36 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(173 61% 47% / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container py-20 md:py-28 relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Standard & Garanzie
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Col 1: Title, intro & stack */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
              {trust.title}
            </h2>
            <p className="mt-5 text-muted leading-relaxed text-base">
              {trust.intro}
            </p>

            {/* Stack tecnologico */}
            <div className="mt-8 p-5 rounded-xl border border-border bg-elevated/90 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-xs font-mono text-muted uppercase tracking-wider font-semibold">
                  {trust.stack.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {trust.stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-md border border-border/80 bg-background/80 text-foreground/80 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Commitments cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {trust.commitments.map((commitment, index) => {
              const Icon = COMMITMENT_ICONS[index] || ShieldCheck;
              return (
                <div
                  key={commitment.title}
                  className="group flex flex-col justify-between p-6 rounded-xl border border-border bg-elevated hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-base group-hover:text-accent transition-colors">
                      {commitment.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
