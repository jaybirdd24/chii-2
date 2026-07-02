"use client";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";
import { siteContent, navigation } from "@/lib/content";
import { TransitionLink as Link } from "@/components/ui/TransitionLink";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  const { contact, footer } = siteContent;

  return (
    <footer className="text-cream-50" style={{ background: "#2D3028" }}>
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-4" />
            <p className="text-cream-200 text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream-200 text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation
                .find((item) => item.name === "Services")
                ?.children?.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-cream-200 text-sm hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={contact.phoneLink}
                  className="flex items-center gap-2 text-cream-200 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {contact.address.street}
                  <br />
                  {contact.address.suburb}, {contact.address.city}
                  <br />
                  {contact.address.postcode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#41443B" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-300 text-sm">
              &copy; {new Date().getFullYear()} Chii Wellness. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-cream-300 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
