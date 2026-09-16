import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Aggiunge ombra e aumenta l'opacità del background quando si scorre
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude il menu mobile dopo aver cliccato un link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-40 border-b border-border transition-all duration-200",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm shadow-black/20"
          : "bg-background/80 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="shrink-0" aria-label={siteConfig.brand.name}>
          <Logo />
        </a>

        {/* Navigazione desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors relative group"
            >
              {item.label}
              {/* Underline animata */}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="accent" size="sm">
            <a href={siteConfig.hero.ctaPrimary.href}>
              {siteConfig.hero.ctaPrimary.label}
            </a>
          </Button>
        </div>

        {/* Bottone hamburger, solo mobile */}
        <button
          className="md:hidden p-2 text-foreground rounded-md hover:bg-elevated transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile a tendina con transizione */}
      <div
        className={[
          "md:hidden border-t border-border bg-background overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <nav className="px-5 py-5 flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="text-base text-muted hover:text-accent transition-colors py-0.5"
              tabIndex={isOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            variant="accent"
            size="sm"
            className="mt-2 w-full"
          >
            <a
              href={siteConfig.hero.ctaPrimary.href}
              onClick={handleLinkClick}
              tabIndex={isOpen ? 0 : -1}
            >
              {siteConfig.hero.ctaPrimary.label}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
