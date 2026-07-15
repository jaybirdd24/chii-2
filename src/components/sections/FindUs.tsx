"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { MapPin, Car, Bus, ChevronDown } from "lucide-react";

interface TipItem {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const tips: TipItem[] = [
  {
    icon: <Car className="w-5 h-5 text-sage-600" />,
    title: "Parking",
    details: [
      "Dedicated parking right outside the clinic",
      "Free street parking also available on Girven Road",
    ],
  },
  {
    icon: <Bus className="w-5 h-5 text-sage-600" />,
    title: "Public Transport",
    details: [
      "Tauranga bus network connects Mount Maunganui to Baypark and the CBD",
    ],
  },
  {
    icon: <MapPin className="w-5 h-5 text-sage-600" />,
    title: "Finding the Clinic",
    details: [
      "Located at 52 Girven Road, Mount Maunganui",
      "Look for the Chii Health sign at street level",
      "Wheelchair-accessible entrance at the front",
    ],
  },
];

function TipCard({ tip }: { tip: TipItem }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-surface rounded-lg border border-border hover:border-sage-300 transition-colors focus-visible:outline-2 focus-visible:outline-sage-400"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-sage-100 rounded-full flex items-center justify-center shrink-0">
            {tip.icon}
          </div>
          <span className="font-heading text-lg text-text-primary">
            {tip.title}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="px-4 pb-4 pl-12 sm:pl-16 space-y-2">
            {tip.details.map((detail) => (
              <li
                key={detail}
                className="text-text-secondary text-sm leading-relaxed"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}

export function FindUs() {
  return (
    <section id="find-us" className="py-16 lg:py-20 bg-cream-50">
      <Container>
        <GSAPAnimateOnScroll>
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-3">
              Find Us
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              52 Girven Road, Mount Maunganui
            </p>
          </div>
        </GSAPAnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <GSAPAnimateOnScroll className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden shadow-md border border-border h-80 md:h-96 lg:h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=52+Girven+Road,+Mount+Maunganui,+New+Zealand&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chii Health location map"
              />
            </div>
          </GSAPAnimateOnScroll>

          {/* Tips */}
          <GSAPAnimateOnScroll delay={150} className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {tips.map((tip) => (
                <TipCard key={tip.title} tip={tip} />
              ))}

              {/* Directions link */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=52+Girven+Road,+Mount+Maunganui,+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-sage-600 text-cream-50 px-6 py-3 font-medium hover:bg-sage-700 transition-colors text-center"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </GSAPAnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
