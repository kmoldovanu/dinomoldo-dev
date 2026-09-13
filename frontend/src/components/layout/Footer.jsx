import React from "react";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo className="h-7 w-auto opacity-80" />

        <div className="flex items-center gap-6">
          {siteConfig.contact.social.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-muted text-center md:text-right">
          <p>{siteConfig.footer.copyright}</p>
          <p className="font-mono text-xs mt-1">{siteConfig.footer.madeBy}</p>
        </div>
      </div>
    </footer>
  );
}
