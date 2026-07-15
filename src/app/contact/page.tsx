import { Metadata } from "next";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { FindUs } from "@/components/sections/FindUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Chii Wellness. Find our phone number, address, and opening hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main" className="pt-24">
      <ContactInfo variant="full" />
      <FindUs />
    </main>
  );
}
