import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { QuizTrigger } from "@/components/quiz/QuizTrigger";
import { ParallaxShapes } from "@/components/sections/ParallaxShapes";
import { HeroAnimated } from "@/components/sections/HeroAnimated";
import { siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <HeroAnimated>
      <section className="relative min-h-[90vh] flex items-center bg-cream-100">
        {/* Background Pattern/Image */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 opacity-80" />

          {/* Decorative shapes — parallax on scroll */}
          <ParallaxShapes />
        </div>

        <Container className="relative z-10 pt-24">
          <div className="max-w-3xl">
            {/* Tagline */}
            <span
              data-gsap-hero-tagline
              className="inline-block text-sm uppercase tracking-wider text-sage-600 mb-6"
            >
              {siteContent.tagline}
            </span>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-text-primary leading-tight tracking-tight mb-6">
              {hero.headline.split(" ").map((word, i) => (
                <span key={i} data-gsap-hero-word className="inline-block mr-[0.25em]">
                  {word === "Balance" ? (
                    <em className="text-sage-600">{word}</em>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              data-gsap-hero-sub
              className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl"
            >
              {hero.subheadline}
            </p>

            {/* CTA */}
            <div
              data-gsap-hero-cta
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/services" size="lg">
                {hero.cta}
              </Button>
              <QuizTrigger />
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div
          data-gsap-hero-scroll
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-sage-400 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-sage-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </HeroAnimated>
  );
}
