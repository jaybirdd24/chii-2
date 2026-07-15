import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover our range of wellness services including acupuncture, physiotherapy, massage, and waxing.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="pt-40 pb-16 bg-cream-100">
        <Container>
          <GSAPAnimateOnScroll>
            <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              From ancient healing traditions to modern therapies, we offer a
              range of treatments designed to restore balance and enhance your
              wellbeing.
            </p>
          </GSAPAnimateOnScroll>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <GSAPStaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                category={
                  ["acupuncture", "chinese-medicine", "physiotherapy", "massage"].includes(
                    service.slug
                  )
                    ? "Wellness"
                    : "Beauty"
                }
              />
            ))}
          </GSAPStaggerGrid>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-sage-50 text-center">
        <Container>
          <GSAPAnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-6">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Take our quick quiz to find the perfect treatment for your needs.
            </p>
            <QuizTrigger variant="primary" />
          </GSAPAnimateOnScroll>
        </Container>
      </section>
    </main>
  );
}
