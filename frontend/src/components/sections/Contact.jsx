import React, { useState } from "react";
import { Mail } from "lucide-react";
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

// Regex semplice per email: sufficiente per validazione lato client,
// la validazione "vera" resta comunque lato server (Django serializer).
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
    // Rimuove l'errore del campo non appena l'utente ricomincia a scriverci
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
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contatti">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              {contact.title}
            </h2>
            <p className="mt-3 text-muted leading-relaxed max-w-sm">{contact.subtitle}</p>

            <div className="mt-8 flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${contact.email}`} className="text-foreground hover:text-accent transition-colors">
                {contact.email}
              </a>
            </div>

            <div className="mt-4 flex gap-5">
              {contact.social.map((social) => (
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
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <Label htmlFor="name">{contact.form.nameLabel}</Label>
              <Input
                id="name"
                value={form.name}
                onChange={handleChange("name")}
                placeholder={contact.form.namePlaceholder}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
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
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
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
              <Label htmlFor="businessType">{contact.form.businessTypeLabel}</Label>
              <Select
                value={form.businessType}
                onValueChange={(value) => {
                  setForm((prev) => ({ ...prev, businessType: value }));
                  if (errors.businessType) setErrors((prev) => ({ ...prev, businessType: undefined }));
                }}
              >
                <SelectTrigger id="businessType" aria-invalid={!!errors.businessType}>
                  <SelectValue placeholder={contact.form.businessTypePlaceholder} />
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
                <p className="mt-1 text-sm text-red-400">{errors.businessType}</p>
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
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            <Button type="submit" variant="accent" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? contact.form.submitLoadingLabel : contact.form.submitLabel}
            </Button>

            {status === "success" && (
              <p className="text-sm text-accent" role="status">
                {contact.form.successMessage}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400" role="alert">
                {contact.form.errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
