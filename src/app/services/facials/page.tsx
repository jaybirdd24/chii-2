import { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("facials")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
  alternates: {
    canonical: "/services/facials",
  },
  openGraph: {
    title: `${service.title} | Chii Wellness`,
    description: service.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.title} | Chii Wellness`,
    description: service.shortDescription,
  },
};

export default function FacialsPage() {
  if (!service) notFound();

  return (
    <main id="main">
      <ServiceDetail service={service} />
    </main>
  );
}
