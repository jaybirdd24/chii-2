"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot field — hidden from real users, bots fill it in */
  company: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const serviceOptions = [
  "",
  "Acupuncture",
  "Chinese Medicine",
  "Physiotherapy",
  "Massage",
  "Waxing",
  "Not sure yet",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-16 lg:py-20 bg-cream-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-4">
              Message Sent
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Thank you for getting in touch. We&apos;ll get back to you as soon
              as we can.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline">
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-colors";
  const labelClasses = "block text-sm font-medium text-text-primary mb-1.5";
  const errorClasses = "text-red-600 text-sm mt-1";

  return (
    <section className="py-16 lg:py-20 bg-cream-50">
      <Container>
        <div className="max-w-2xl mx-auto">
          <GSAPAnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-3">
                Send Us a Message
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto">
                Have a question or want to book an appointment? Fill in the form
                below and we&apos;ll get back to you.
              </p>
            </div>
          </GSAPAnimateOnScroll>

          <GSAPAnimateOnScroll delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-surface rounded-xl p-6 md:p-8 border border-border shadow-sm space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className={labelClasses}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={200}
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClasses}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className={labelClasses}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClasses}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="027 000 0000"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="contact-service" className={labelClasses}>
                    Service of interest
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.slice(1).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelClasses}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-y`}
                  placeholder="Tell us how we can help..."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className={errorClasses}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot — hidden from real users, bots auto-fill it */}
              <div className="absolute opacity-0 -z-10" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <div className="text-center pt-2">
                <Button type="submit" disabled={status === "submitting"}>
                  <Send className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                </Button>
              </div>
            </form>
          </GSAPAnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
