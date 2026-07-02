import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { CalBookingButton } from "@/components/booking/CalBookingButton";
import { siteContent } from "@/lib/content";
import { Phone } from "lucide-react";

const wellnessCards = [
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Calm support for pain and recovery with a clear, simple approach.",
    price: "From $60 · ACC from $20",
    calLink: "sam-yuan-chii/acupuncture",
    serviceSlug: "acupuncture",
  },
  {
    id: "massage",
    title: "Massage",
    description: "Chinese tui na massage and reflexology to ease tension and improve mobility.",
    price: "From $30",
    calLink: "sam-yuan-chii/massage",
    serviceSlug: "massage",
  },
  {
    id: "reflexology",
    title: "Reflexology",
    description: "Gentle pressure-point work that promotes deep, whole-body relaxation.",
    price: "From $60",
    calLink: "sam-yuan-chii/reflexology",
    serviceSlug: "massage",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Hands-on, ACC-supported care for injuries, recovery, and movement.",
    price: "ACC from $30 · Private from $75",
    badge: "From Sept 2025",
    calLink: "sam-yuan-chii/physio-initial",
    serviceSlug: "physiotherapy",
  },
];

const beautyCards = [
  {
    id: "chinese-medicine",
    title: "Chinese Medicine",
    description: "Herbal medicine, cupping, moxibustion & gua sha.",
  },
  {
    id: "waxing",
    title: "Waxing",
    description: "Gentle, careful waxing with clear pricing from $15.",
  },
  {
    id: "facials",
    title: "Facials & Eye Care",
    description: "Brow, lash and facial treatments from $20.",
  },
];

export function ServicesOverview() {
  const { contact } = siteContent;

  return (
    <section className="py-[104px] bg-white">
      <Container>
        {/* Heading row */}
        <GSAPAnimateOnScroll>
          <div className="flex justify-between items-end flex-wrap gap-5 mb-[52px]">
            <div className="max-w-[560px]">
              <span className="block text-[13px] uppercase tracking-[0.12em] text-sage-600 mb-[14px] font-medium">
                Our Services
              </span>
              <h2 className="font-heading text-[46px] tracking-tight text-text-primary m-0 leading-[1.05]">
                Treatments to restore your balance
              </h2>
            </div>
            <p className="max-w-[340px] text-base text-text-secondary leading-relaxed m-0">
              Book the wellness treatments online in seconds. Beauty services are a quick phone call
              away.
            </p>
          </div>
        </GSAPAnimateOnScroll>

        {/* Wellness subsection */}
        <GSAPAnimateOnScroll>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.14em] text-sage-700 font-medium whitespace-nowrap">
              Wellness · Book online
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </GSAPAnimateOnScroll>

        <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[26px] mb-16">
          {wellnessCards.map((svc) => (
            <div
              key={svc.id}
              className="flex flex-col bg-white border border-sage-100 rounded-[14px] overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_24px_48px_-16px_rgba(45,48,40,0.22)] hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div
                className="w-full bg-gradient-to-br from-sage-50 to-sage-100"
                style={{ aspectRatio: "5/4" }}
              />
              <div className="p-6 flex flex-col flex-1">
                {svc.badge && (
                  <span className="inline-flex self-start text-[11px] font-medium tracking-[0.04em] text-sage-700 bg-sage-50 px-2.5 py-1 rounded-full mb-2.5">
                    {svc.badge}
                  </span>
                )}
                <h3 className="font-heading text-[24px] text-text-primary m-0 mb-1">
                  {svc.title}
                </h3>
                <Link
                  href={`/services/${svc.serviceSlug}`}
                  className="text-sm text-sage-600 hover:underline mb-2 block"
                >
                  Learn more →
                </Link>
                <p className="text-sm text-text-secondary leading-snug m-0 mb-3 flex-1">
                  {svc.description}
                </p>
                <p className="text-[13px] text-sage-700 font-medium mb-4">{svc.price}</p>
                <CalBookingButton
                  calLink={svc.calLink}
                  size="md"
                  className="w-full !rounded-lg !text-sm !px-4 !py-[11px]"
                >
                  Book online
                </CalBookingButton>
              </div>
            </div>
          ))}
        </GSAPStaggerGrid>

        {/* Beauty & more subsection */}
        <GSAPAnimateOnScroll>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium whitespace-nowrap">
              Chinese medicine &amp; beauty · Call to book
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </GSAPAnimateOnScroll>

        <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {beautyCards.map((svc) => (
            <div
              key={svc.id}
              className="flex gap-[18px] items-center bg-sage-50 border border-sage-100 rounded-[14px] p-[18px] transition-all duration-300 ease-out hover:shadow-[0_24px_48px_-16px_rgba(45,48,40,0.22)] hover:-translate-y-1"
            >
              {/* Square image placeholder */}
              <div className="w-24 h-24 flex-shrink-0 rounded-xl bg-gradient-to-br from-sage-100 to-sage-200" />
              <div>
                <h3 className="font-heading text-[22px] text-text-primary m-0 mb-1">{svc.title}</h3>
                <p className="text-[13px] text-text-secondary leading-snug m-0 mb-2.5">
                  {svc.description}
                </p>
                <a
                  href={contact.phoneLink}
                  className="inline-flex items-center gap-1.5 px-3 py-[7px] text-[13px] font-medium rounded-[7px] border border-sage-300 text-sage-700 bg-transparent hover:bg-sage-600 hover:text-white hover:border-sage-600 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call to book
                </a>
              </div>
            </div>
          ))}
        </GSAPStaggerGrid>
      </Container>
    </section>
  );
}
