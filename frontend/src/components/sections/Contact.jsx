import React, { useState } from "react";
import { Mail, Instagram } from "lucide-react";
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
    <section id="contatti">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Colonna info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-accent" aria-hidden="true" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                Contatti
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-snug text-foreground">
              {contact.title}
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-sm">
              {contact.subtitle}
            </p>

            {/* Contatti diretti */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-elevated hover:border-accent/40 hover:bg-elevated transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm text-foreground group-hover:text-accent transition-colors break-all">
                    {contact.email}
                  </p>
                </div>
              </a>

              {contact.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-elevated hover:border-accent/40 hover:bg-elevated transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                    <Instagram className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-mono uppercase tracking-wide">
                      {social.label}
                    </p>
                    <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                      {social.href.replace("https://", "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 p-6 sm:p-8 rounded-xl border border-border bg-elevated"
          >
            <div>
              <Label htmlFor="name">{contact.form.nameLabel}</Label>
              <Input
                id="name"
                value={form.name}
                onChange={handleChange("name")}
                placeholder={contact.form.namePlaceholder}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">{contact.form.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder={contact.form.emailPlaceholder}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">{contact.form.phoneLabel}</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange("phone")}
                placeholder={contact.form.phonePlaceholder}
              />
            </div>

            <div>
              <Label htmlFor="businessType">
                {contact.form.businessTypeLabel}
              </Label>
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
              {errors.businessType && (
                <p
                  id="businessType-error"
                  className="mt-1 text-sm text-red-400"
                >
                  {errors.businessType}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">{contact.form.messageLabel}</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={handleChange("message")}
                placeholder={contact.form.messagePlaceholder}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="accent"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? contact.form.submitLoadingLabel
                : contact.form.submitLabel}
            </Button>

            {status === "success" && (
              <p className="text-sm text-accent text-center" role="status">
                {contact.form.successMessage}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 text-center" role="alert">
                {contact.form.errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
