import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Code2, Layers, Cpu } from "lucide-react";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="chi-sono" className="border-b border-border relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(215 56% 41% / 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                Profilo
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
              {about.title}
            </h2>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted leading-relaxed text-base border-l-2 border-border/60 pl-5 hover:border-accent/50 transition-colors">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: tech/skills visual */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Code2,
                label: "Frontend",
                tech: ["React", "Tailwind CSS", "JavaScript"],
                color: "accent",
              },
              {
                icon: Layers,
                label: "Backend",
                tech: ["Django", "Python", "REST API"],
                color: "primary",
              },
              {
                icon: Cpu,
                label: "Infrastruttura & Sicurezza",
                tech: ["PostgreSQL", "Cloud Architecture", "SSL & Sicurezza"],
                color: "accent",
              },
            ].map(({ icon: Icon, label, tech, color }) => (
              <div
                key={label}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-elevated hover:border-accent/30 hover:bg-elevated-2 transition-all duration-200"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                    ${color === "accent" ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/15" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/15"}
                    transition-colors`}
                >
                  <Icon
                    className={`h-5 w-5 ${color === "accent" ? "text-accent" : "text-primary-hover"}`}
                    strokeWidth={1.75}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground font-display">{label}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded border border-border bg-background text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
