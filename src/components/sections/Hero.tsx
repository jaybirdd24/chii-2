import { Container } from "@/components/ui/Container";
import { HeroAnimated } from "@/components/sections/HeroAnimated";
import { siteContent } from "@/lib/content";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const { booking, hero, contact } = siteContent;

  return (
    <HeroAnimated>
      <section
        className="relative pt-[132px] lg:pt-[180px] pb-[60px] lg:pb-[88px] overflow-hidden"
        style={{
          background: "linear-gradient(160deg,#FFF8F0 0%,#FFFDF9 45%,#F4F6F2 100%)",
        }}
      >
        {/* Decorative radial blob */}
        <div
          className="absolute -top-20 -right-16 w-96 h-96 rounded-full opacity-70 pointer-events-none"
          style={{ background: "radial-gradient(circle,#E8EBE4,transparent 70%)" }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            {/* Left column */}
            <div>
              <span
                data-gsap-hero-tagline
                className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] text-sage-600 mb-[22px] font-medium"
              >
                <span className="w-6 h-px bg-sage-400 inline-block" />
                Wellness Clinic · Mount Maunganui
              </span>

              <h1 className="font-heading font-light text-[42px] sm:text-5xl lg:text-[72px] leading-[1.04] tracking-tight text-text-primary mb-[22px]">
                {["Calm,", "simple,"].map((word, i) => (
                  <span key={i} data-gsap-hero-word className="inline-block mr-[0.25em]">
                    {word}
                  </span>
                ))}
                <br />
                <em
                  data-gsap-hero-word
                  className="inline-block not-italic italic font-medium text-sage-700"
                >
                  {hero.headline.split(", ")[2]?.replace(" care", "") ?? "effective"}
                </em>{" "}
                <span data-gsap-hero-word className="inline-block">
                  care
                </span>
              </h1>

              <p
                data-gsap-hero-sub
                className="text-[19px] text-text-secondary leading-relaxed mb-[30px] max-w-[480px]"
              >
                {hero.subheadline}
              </p>

              <div data-gsap-hero-cta className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href={booking.calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-[30px] py-[15px] text-[17px] font-medium rounded-[9px] bg-sage-600 text-white hover:bg-sage-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book an appointment
                  <ArrowRight className="w-[18px] h-[18px]" />
                </a>
                <a
                  href={contact.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-[26px] py-[15px] text-[17px] font-medium rounded-[9px] border border-sage-300 text-sage-700 bg-transparent hover:bg-sage-50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </div>

              {/* Trust stats */}
              <div
                data-gsap-hero-scroll
                className="flex items-stretch border-t border-border pt-[26px]"
              >
                <div className="pr-4 sm:pr-7">
                  <div className="font-heading text-[28px] sm:text-[34px] text-sage-700 leading-none">20+</div>
                  <div className="text-[12px] sm:text-[13px] text-text-secondary mt-1.5 leading-snug">
                    years serving
                    <br />
                    Bayfair
                  </div>
                </div>
                <div className="px-4 sm:px-7 border-l border-border">
                  <div className="font-heading text-[28px] sm:text-[34px] text-sage-700 leading-none">ACC</div>
                  <div className="text-[12px] sm:text-[13px] text-text-secondary mt-1.5 leading-snug">
                    accredited
                    <br />
                    providers
                  </div>
                </div>
                <div className="px-4 sm:px-7 border-l border-border">
                  <div className="font-heading text-[28px] sm:text-[34px] text-sage-700 leading-none">10+</div>
                  <div className="text-[12px] sm:text-[13px] text-text-secondary mt-1.5 leading-snug">
                    yrs clinical
                    <br />
                    in China
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="relative hidden lg:block">
              <div
                className="w-full rounded-[18px] bg-gradient-to-br from-sage-100 to-sage-200"
                style={{
                  aspectRatio: "4/5",
                  boxShadow: "0 30px 60px -24px rgba(45,48,40,0.35)",
                }}
              />
            </div>
          </div>
        </Container>
      </section>
    </HeroAnimated>
  );
}
