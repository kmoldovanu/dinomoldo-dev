import React from "react";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border bg-elevated/20">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo className="h-8 w-auto opacity-85" />
            <p className="text-xs text-muted font-mono">
              {siteConfig.brand.tagline}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
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

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted">{siteConfig.footer.copyright}</p>
            <p className="font-mono text-xs text-muted/60 mt-1">
              {siteConfig.footer.madeBy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
