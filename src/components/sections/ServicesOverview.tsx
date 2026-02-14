import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { services } from "@/lib/services";

const serviceIcons: Record<string, string> = {
  "chinese-medicine": "leaf",
  acupuncture: "zap",
  physiotherapy: "heart-pulse",
  massage: "waves",
  waxing: "sparkles",
  facials: "droplet",
};

interface ServicesOverviewProps {
  showHeading?: boolean;
  limit?: number;
}

export function ServicesOverview({
  showHeading = true,
  limit,
}: ServicesOverviewProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 lg:py-28 bg-surface">
      <Container>
        {showHeading && (
          <GSAPAnimateOnScroll>
            <SectionHeading
              title="Our Services"
              subtitle="Discover our range of treatments designed to restore balance, ease tension, and help you feel your best."
            />
          </GSAPAnimateOnScroll>
        )}

        {/* Services Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <GSAPStaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service) => (
            <Card
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
              icon={serviceIcons[service.slug]}
              category={
                ["chinese-medicine", "acupuncture", "physiotherapy", "massage"].includes(service.slug)
                  ? "Wellness"
                  : "Beauty"
              }
            />
          ))}
        </GSAPStaggerGrid>
      </Container>
    </section>
  );
}
