import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { siteContent } from "@/lib/content";

export function AboutPreview() {
  const { about } = siteContent;

  return (
    <section className="py-16 lg:py-28 bg-sage-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <GSAPAnimateOnScroll>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200" />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cream-200 rounded-lg -z-10 hidden md:block" />
            </div>
          </GSAPAnimateOnScroll>

          {/* Content */}
          <GSAPAnimateOnScroll delay={150}>
            <div>
              <span className="text-sm uppercase tracking-wider text-sage-600 mb-4 block">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-6">
                {about.headline}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {about.intro}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {about.story}
              </p>
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </GSAPAnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
