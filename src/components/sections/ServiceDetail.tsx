import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { CalBookingButton } from "@/components/booking/CalBookingButton";
import { CheckCircle, Phone } from "lucide-react";
import type { Service } from "@/lib/services";
import { siteContent } from "@/lib/content";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-100">
        <Container>
          <GSAPAnimateOnScroll>
            <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              {service.tagline}
            </p>
          </GSAPAnimateOnScroll>
        </Container>
      </section>

      {/* Image */}
      <section className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] bg-sage-100 overflow-hidden">
        <GSAPAnimateOnScroll className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-100 to-sage-200">
            <span className="text-sage-400">{service.title} image</span>
          </div>
        </GSAPAnimateOnScroll>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container size="narrow">
          <GSAPAnimateOnScroll>
            <div className="prose prose-lg max-w-none">
              {service.fullDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </GSAPAnimateOnScroll>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-sage-50">
        <Container>
          <GSAPAnimateOnScroll>
            <SectionHeading
              title="Benefits"
              subtitle={`Discover how ${service.title.toLowerCase()} can support your wellness journey.`}
            />
          </GSAPAnimateOnScroll>

          <GSAPStaggerGrid className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-surface rounded-lg h-full">
                <CheckCircle className="w-6 h-6 text-sage-500 flex-shrink-0 mt-0.5" />
                <span className="text-text-primary">{benefit}</span>
              </div>
            ))}
          </GSAPStaggerGrid>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <GSAPAnimateOnScroll>
            <SectionHeading
              title="Pricing"
              subtitle={`${service.title} prices. All prices in NZD.`}
            />
          </GSAPAnimateOnScroll>

          <div className="max-w-2xl mx-auto">
            <GSAPAnimateOnScroll delay={100}>
              <div className="bg-cream-50 rounded-2xl p-6 md:p-8 border border-sage-100">
                <dl className="divide-y divide-sage-100">
                  {service.pricing.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 py-4 first:pt-0 last:pb-0"
                    >
                      <dt className="text-text-primary min-w-0">
                        {item.name}
                        {item.duration && (
                          <span className="text-text-muted ml-2">
                            {item.duration}
                          </span>
                        )}
                        {item.note && (
                          <span className="text-text-muted ml-2 text-sm">
                            ({item.note})
                          </span>
                        )}
                      </dt>
                      <dd className="font-medium text-text-primary shrink-0">
                        {item.price}
                      </dd>
                    </div>
                  ))}
                </dl>
                {service.pricingNote && (
                  <p className="text-text-muted text-sm mt-6 pt-4 border-t border-sage-100">
                    {service.pricingNote}
                  </p>
                )}
              </div>
            </GSAPAnimateOnScroll>

            <GSAPAnimateOnScroll delay={200}>
              <div className="mt-8 text-center">
                {service.calLinks && service.calLinks.length > 0 ? (
                  <>
                    <div className="flex gap-3 flex-wrap justify-center">
                      {service.calLinks.map((link) => (
                        <CalBookingButton key={link.slug} calLink={link.slug} size="lg">
                          {link.label}
                        </CalBookingButton>
                      ))}
                    </div>
                    <p className="mt-3 text-text-muted text-sm">
                      or call{" "}
                      <a
                        href={siteContent.contact.phoneLink}
                        className="underline hover:text-sage-600 transition-colors"
                      >
                        {siteContent.contact.phone}
                      </a>
                    </p>
                  </>
                ) : (
                  <a
                    href={siteContent.contact.phoneLink}
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-md bg-sage-500 text-white hover:bg-sage-600 transition-all hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    Call to book · {siteContent.contact.phone}
                  </a>
                )}
              </div>
            </GSAPAnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-cream-100 text-center">
        <Container>
          <GSAPAnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-6">
              Ready to Begin?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Take the first step towards better wellness. Contact us today to
              schedule your {service.title.toLowerCase()} appointment.
            </p>
            {service.calLinks && service.calLinks.length > 0 ? (
              <>
                <div className="flex gap-3 flex-wrap justify-center">
                  {service.calLinks.map((link) => (
                    <CalBookingButton key={link.slug} calLink={link.slug} size="lg">
                      {link.label}
                    </CalBookingButton>
                  ))}
                </div>
                <p className="mt-3 text-text-muted text-sm">
                  or call{" "}
                  <a
                    href={siteContent.contact.phoneLink}
                    className="underline hover:text-sage-600 transition-colors"
                  >
                    {siteContent.contact.phone}
                  </a>
                </p>
              </>
            ) : (
              <a
                href={siteContent.contact.phoneLink}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-md bg-sage-500 text-white hover:bg-sage-600 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call to book · {siteContent.contact.phone}
              </a>
            )}
          </GSAPAnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
