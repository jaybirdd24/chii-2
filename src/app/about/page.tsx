import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { TextRevealOnScroll } from "@/components/ui/TextRevealOnScroll";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chii Wellness - our story, philosophy, and commitment to holistic health and wellbeing.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <main id="main">
      {/* Hero */}
      <section className="pt-40 pb-16 bg-cream-100">
        <Container>
          <GSAPAnimateOnScroll>
            <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
              {about.headline}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              {about.intro}
            </p>
          </GSAPAnimateOnScroll>
        </Container>
      </section>

      {/* Image */}
      <section className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] bg-sage-100 overflow-hidden">
        <GSAPAnimateOnScroll className="w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-sage-100 to-sage-200" />
        </GSAPAnimateOnScroll>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container size="narrow">
          <GSAPAnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-8">
              Our Story
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 text-lg">
              {about.story}
            </p>
          </GSAPAnimateOnScroll>
          <TextRevealOnScroll
            text={about.philosophy}
            className="text-text-secondary leading-relaxed text-lg"
          />
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-sage-50">
        <Container>
          <GSAPAnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
                Our Values
              </h2>
            </div>
          </GSAPAnimateOnScroll>

          <GSAPStaggerGrid className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {about.values.map((value, i) => (
              <div key={i} className="bg-surface p-8 rounded-lg h-full">
                <h3 className="font-heading text-xl text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </GSAPStaggerGrid>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-cream-100 text-center">
        <Container>
          <GSAPAnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-6">
              Experience the Difference
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              We&apos;d love to welcome you to Chii. Discover how our approach to
              wellness can help you feel your best.
            </p>
            <Button href="/services" size="lg">
              Explore Our Services
            </Button>
          </GSAPAnimateOnScroll>
        </Container>
      </section>
    </main>
  );
}
