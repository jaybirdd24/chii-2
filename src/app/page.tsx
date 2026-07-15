import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Marquee } from "@/components/ui/Marquee";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chii Wellness | Mount Maunganui Wellness Clinic",
    description:
      "Calm, simple, effective care. Acupuncture, Chinese medicine, massage, and physiotherapy serving Mount Maunganui for over 20 years.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chii Wellness | Mount Maunganui Wellness Clinic",
    description:
      "Calm, simple, effective care. Acupuncture, Chinese medicine, massage, and physiotherapy serving Mount Maunganui for over 20 years.",
  },
};

const marqueeItems = [
  "Acupuncture",
  "Chinese Medicine",
  "Physiotherapy",
  "Massage",
  "Balance",
  "Calm",
];

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Chii Wellness",
    description:
      "Acupuncture, Chinese medicine, physiotherapy, massage, and waxing. Serving Mount Maunganui for over 20 years.",
    url: "https://chii.co.nz",
    telephone: "+64275742522",
    address: {
      "@type": "PostalAddress",
      streetAddress: "52 Girven Road",
      addressLocality: "Mount Maunganui",
      addressRegion: "Bay of Plenty",
      postalCode: "3116",
      addressCountry: "NZ",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wellness Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chinese Medicine" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Physiotherapy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Waxing" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <main id="main">
      <LocalBusinessJsonLd />
      <Hero />
      <ServicesOverview />
      <Marquee items={marqueeItems} />
      <AboutPreview />
      <BookingCTA />
    </main>
  );
}
