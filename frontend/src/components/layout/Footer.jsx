import React from "react";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border bg-elevated/40 relative">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo className="h-8 w-auto opacity-90" />
            <p className="text-xs text-muted font-mono">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-xs text-muted/70 max-w-xs text-center md:text-left leading-relaxed">
              Sviluppo di soluzioni web veloci, performanti e su misura per attività locali.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-1">
              Navigazione
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs text-muted hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="flex items-center gap-4">
              {siteConfig.contact.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-accent transition-colors font-mono"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
            <p className="text-xs text-muted">{siteConfig.footer.copyright}</p>
            <p className="font-mono text-[11px] text-muted/60">
              {siteConfig.footer.madeBy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
