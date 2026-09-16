import React, { useState } from "react";
import { Mail, Instagram, CheckCircle2, AlertCircle, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/siteConfig";
import { postJSON } from "@/lib/utils";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  businessType: "",
  message: "",
};

// Regex semplice per email: la validazione "vera" resta lato server (Django serializer).
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Inserisci il tuo nome.";
  if (!form.email.trim()) {
    errors.email = "Inserisci la tua email.";
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = "L'email non sembra valida.";
  }
  if (!form.businessType) errors.businessType = "Seleziona il tipo di attività.";
  if (!form.message.trim()) errors.message = "Scrivi un breve messaggio.";
  return errors;
}

export function Contact() {
  const { contact } = siteConfig;
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      await postJSON("/api/contact/", {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        business_type: form.businessType,
        message: form.message,
      });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="relative overflow-hidden">
      {/* Background glow & accents */}
      <div
        className="absolute -left-40 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(215 56% 41% / 0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 top-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(173 61% 47% / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Colonna info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                Contatti
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
              {contact.title}
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md text-base">
              {contact.subtitle}
            </p>

            {/* Availability status badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated text-xs font-mono text-muted">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Risposta garantita entro 24 ore</span>
            </div>

            {/* Contatti diretti */}
            <div className="mt-10 space-y-4 max-w-md">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between p-4 rounded-xl border border-border bg-elevated hover:border-accent/40 hover:bg-elevated-2 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted font-mono uppercase tracking-wider">
                      Email diretta
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors break-all">
                      {contact.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {contact.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-elevated hover:border-accent/40 hover:bg-elevated-2 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Instagram className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted font-mono uppercase tracking-wider">
                        {social.label}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {social.href.replace("https://", "")}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 p-7 sm:p-9 rounded-2xl border border-border bg-elevated/90 backdrop-blur-sm shadow-xl shadow-black/20"
          >
            <div>
              <Label htmlFor="name" className="text-foreground text-sm font-medium">
                {contact.form.nameLabel}
              </Label>
              <div className="mt-1.5">
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder={contact.form.namePlaceholder}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="bg-background/80"
                />
              </div>
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground text-sm font-medium">
                {contact.form.emailLabel}
              </Label>
              <div className="mt-1.5">
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder={contact.form.emailPlaceholder}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="bg-background/80"
                />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground text-sm font-medium">
                {contact.form.phoneLabel}
              </Label>
              <div className="mt-1.5">
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder={contact.form.phonePlaceholder}
                  className="bg-background/80"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="businessType" className="text-foreground text-sm font-medium">
                {contact.form.businessTypeLabel}
              </Label>
              <div className="mt-1.5">
                <Select
                  value={form.businessType}
                  onValueChange={(value) => {
                    setForm((prev) => ({ ...prev, businessType: value }));
                    if (errors.businessType)
                      setErrors((prev) => ({
                        ...prev,
                        businessType: undefined,
                      }));
                  }}
                >
                  <SelectTrigger
                    id="businessType"
                    aria-invalid={!!errors.businessType}
                    aria-describedby={
                      errors.businessType ? "businessType-error" : undefined
                    }
                    className="bg-background/80"
                  >
                    <SelectValue
                      placeholder={contact.form.businessTypePlaceholder}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {contact.businessTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {errors.businessType && (
                <p
                  id="businessType-error"
                  className="mt-1.5 text-xs text-red-400"
                >
                  {errors.businessType}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground text-sm font-medium">
                {contact.form.messageLabel}
              </Label>
              <div className="mt-1.5">
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder={contact.form.messagePlaceholder}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={4}
                  className="bg-background/80"
                />
              </div>
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="accent"
              className="w-full flex items-center justify-center gap-2 group"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin mr-1">⟳</span>
                  {contact.form.submitLoadingLabel}
                </>
              ) : (
                <>
                  <span>{contact.form.submitLabel}</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </Button>

            {status === "success" && (
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm text-center" role="status">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                <span>{contact.form.successMessage}</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center" role="alert">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{contact.form.errorMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
