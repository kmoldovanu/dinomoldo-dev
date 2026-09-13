import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="chi-sono" className="border-b border-border">
      <div className="container py-16 md:py-20 max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
          {about.title}
        </h2>
        <div className="mt-5 space-y-4">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
