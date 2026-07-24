import { Container } from "@/components/ui/Container";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { siteContent } from "@/lib/content";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import Link from "next/link";

interface ContactInfoProps {
  variant?: "full" | "compact";
}

export function ContactInfo({ variant = "full" }: ContactInfoProps) {
  const { contact } = siteContent;

  if (variant === "compact") {
    return (
      <section className="py-16 bg-sage-600 text-cream-50">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-2xl md:text-3xl mb-4">
              Get in Touch
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href={contact.phoneLink}
                className="inline-flex items-center gap-2 text-xl md:text-2xl hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
                {contact.phone}
              </a>
              <a
                href={contact.textLink}
                className="inline-flex items-center gap-2 text-xl md:text-2xl hover:text-white transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
                {contact.textPhone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-28 bg-cream-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          <GSAPAnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-wider text-sage-600 mb-4 block">
                Contact Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                We&apos;d love to hear from you. Reach out to schedule an appointment
                or ask any questions.
              </p>
            </div>
          </GSAPAnimateOnScroll>

          <GSAPStaggerGrid className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-surface p-8 rounded-lg text-center">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="font-heading text-xl mb-2">Call or Text Us</h3>
              <div className="flex flex-col gap-2">
                <a
                  href={contact.phoneLink}
                  className="text-sage-600 hover:text-sage-700 transition-colors text-lg font-medium"
                >
                  Call: {contact.phone}
                </a>
                <a
                  href={contact.textLink}
                  className="text-sage-600 hover:text-sage-700 transition-colors text-lg font-medium"
                >
                  Text: {contact.textPhone}
                </a>
              </div>
            </div>

            {/* Address */}
            <Link
              href="/contact#find-us"
              className="bg-surface p-8 rounded-lg text-center block hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="font-heading text-xl mb-2">Visit Us</h3>
              <p className="text-text-secondary">
                {contact.address.street}
                <br />
                {contact.address.suburb}, {contact.address.city}
                <br />
                {contact.address.postcode}
              </p>
            </Link>

            {/* Hours */}
            <div className="bg-surface p-8 rounded-lg text-center">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="font-heading text-xl mb-2">Hours</h3>
              <p className="text-text-secondary text-sm">
                {contact.hours.weekdays}
                <br />
                {contact.hours.saturday}
                <br />
                {contact.hours.sunday}
              </p>
            </div>
          </GSAPStaggerGrid>
        </div>
      </Container>
    </section>
  );
}
