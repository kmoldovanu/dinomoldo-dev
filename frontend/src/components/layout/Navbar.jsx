import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Chiude il menu mobile dopo aver cliccato un link, per non lasciarlo aperto
  // mentre la pagina scorre alla sezione scelta.
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        {/* Navigazione desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="accent" size="sm">
            <a href={siteConfig.hero.ctaPrimary.href}>{siteConfig.hero.ctaPrimary.label}</a>
          </Button>
        </div>

        {/* Bottone hamburger, solo mobile */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile a tendina */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="text-base text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="accent" size="sm" className="mt-1 w-full">
            <a href={siteConfig.hero.ctaPrimary.href} onClick={handleLinkClick}>
              {siteConfig.hero.ctaPrimary.label}
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
