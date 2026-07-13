import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GSAPAnimateOnScroll } from "@/components/ui/GSAPAnimateOnScroll";
import { GSAPStaggerGrid } from "@/components/ui/GSAPStaggerGrid";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  accent: string;
  iconBg: string;
  badge?: string;
}

const wellnessCards: ServiceCard[] = [
  {
    id: "acupuncture",
    slug: "acupuncture",
    title: "Acupuncture",
    description: "Calm support for pain and recovery with a clear, simple approach.",
    accent: "#6B8E5A",
    iconBg: "#ECF2E7",
  },
  {
    id: "massage",
    slug: "massage",
    title: "Massage & Reflexology",
    description:
      "Chinese tui na and therapeutic massage, plus pressure-point reflexology to ease tension and restore balance.",
    accent: "#8A6A4A",
    iconBg: "#F2EDE5",
  },
  {
    id: "physiotherapy",
    slug: "physiotherapy",
    title: "Physiotherapy",
    description: "Hands-on, ACC-supported care for injuries, recovery, and movement.",
    accent: "#4A7A6A",
    iconBg: "#E4EDEA",
  },
];

const beautyCards: ServiceCard[] = [
  {
    id: "chinese-medicine",
    slug: "chinese-medicine",
    title: "Chinese Medicine",
    description: "Herbal medicine, cupping & moxibustion.",
    accent: "#6B8E5A",
    iconBg: "#EBF0E6",
  },
  {
    id: "waxing",
    slug: "waxing",
    title: "Waxing",
    description: "Gentle, careful waxing with clear pricing from $15.",
    accent: "#8A6A4A",
    iconBg: "#F0EAE3",
  },
];

// All card art shares a square 0-200 viewBox and centers with "meet" so it
// scales evenly and stays symmetric no matter how wide the card is.
const ART_VIEWBOX = "0 0 200 200";

function AcupunctureArt() {
  return (
    <svg width="100%" height="100%" viewBox={ART_VIEWBOX} preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0">
      <line x1="100" y1="55" x2="100" y2="150" stroke="#8FA87E" strokeWidth="1.6" opacity=".55" />
      <circle cx="100" cy="55" r="4.5" fill="#8FA87E" opacity=".65" />
      <line x1="66" y1="70" x2="100" y2="150" stroke="#8FA87E" strokeWidth="1.4" opacity=".4" />
      <circle cx="66" cy="70" r="4" fill="#8FA87E" opacity=".5" />
      <line x1="134" y1="70" x2="100" y2="150" stroke="#8FA87E" strokeWidth="1.4" opacity=".4" />
      <circle cx="134" cy="70" r="4" fill="#8FA87E" opacity=".5" />
      <path d="M 60 150 Q 100 165 140 150" stroke="#B5C4A8" strokeWidth="1" fill="none" opacity=".5" strokeDasharray="4 4" />
      <circle cx="100" cy="150" r="2.5" fill="#8FA87E" opacity=".55" />
    </svg>
  );
}

function MassageArt() {
  return (
    <svg width="100%" height="100%" viewBox={ART_VIEWBOX} preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0">
      <circle cx="100" cy="100" r="22" stroke="#B8947A" strokeWidth="1.4" fill="none" opacity=".4" />
      <circle cx="100" cy="100" r="42" stroke="#C4A882" strokeWidth="1.2" fill="none" opacity=".3" />
      <circle cx="100" cy="100" r="62" stroke="#C4A882" strokeWidth="1" fill="none" opacity=".2" />
      <circle cx="100" cy="100" r="4" fill="#B8947A" opacity=".5" />
    </svg>
  );
}

function PhysioArt() {
  return (
    <svg width="100%" height="100%" viewBox={ART_VIEWBOX} preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0">
      <line x1="100" y1="45" x2="100" y2="155" stroke="#4A7A6A" strokeWidth="1.6" opacity=".4" />
      <line x1="72" y1="70" x2="128" y2="70" stroke="#4A7A6A" strokeWidth="1.2" opacity=".38" />
      <line x1="76" y1="100" x2="124" y2="100" stroke="#4A7A6A" strokeWidth="1.2" opacity=".3" />
      <line x1="72" y1="130" x2="128" y2="130" stroke="#4A7A6A" strokeWidth="1.2" opacity=".24" />
      <circle cx="100" cy="70" r="6.5" stroke="#4A7A6A" strokeWidth="1.4" fill="none" opacity=".48" />
      <circle cx="100" cy="100" r="6.5" stroke="#4A7A6A" strokeWidth="1.4" fill="none" opacity=".38" />
      <circle cx="100" cy="130" r="6.5" stroke="#4A7A6A" strokeWidth="1.4" fill="none" opacity=".28" />
    </svg>
  );
}

function ChineseMedicineArt() {
  const center = { x: 100, y: 100 };
  const points = [0, 60, 120, 180, 240, 300].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: center.x + 50 * Math.cos(rad), y: center.y + 50 * Math.sin(rad) };
  });

  return (
    <svg width="100%" height="100%" viewBox={ART_VIEWBOX} preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0">
      {points.map((p, i) => (
        <line key={i} x1={center.x} y1={center.y} x2={p.x} y2={p.y} stroke="#9CAF88" strokeWidth=".8" opacity=".35" />
      ))}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#8FA87E" opacity=".5" />
      ))}
      <circle cx={center.x} cy={center.y} r="4" fill="#8FA87E" opacity=".6" />
    </svg>
  );
}

function WaxingArt() {
  return (
    <svg width="100%" height="100%" viewBox={ART_VIEWBOX} preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0">
      <path d="M 40 118 Q 70 82 100 118 Q 130 154 160 118" stroke="#C4A882" strokeWidth="2" fill="none" opacity=".42" />
      <path d="M 40 90 Q 70 54 100 90 Q 130 126 160 90" stroke="#C4A882" strokeWidth="1.6" fill="none" opacity=".26" />
      <circle cx="100" cy="104" r="4" fill="#B8947A" opacity=".4" />
    </svg>
  );
}

const artByCard: Record<string, () => React.ReactElement> = {
  acupuncture: AcupunctureArt,
  massage: MassageArt,
  physiotherapy: PhysioArt,
  "chinese-medicine": ChineseMedicineArt,
  waxing: WaxingArt,
};

function ServiceCardTile({ card, artHeight }: { card: ServiceCard; artHeight: number }) {
  const Art = artByCard[card.id];

  return (
    <Link
      href={`/services/${card.slug}`}
      className="group flex flex-col bg-white border border-sage-100 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_24px_48px_-16px_rgba(45,48,40,0.22)] hover:-translate-y-1"
      style={{ borderTop: `3px solid ${card.accent}` }}
    >
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ height: artHeight, background: card.iconBg }}
      >
        <Art />
      </div>
      <div className="p-[22px] flex flex-col flex-1">
        {card.badge && (
          <span
            className="inline-flex self-start text-[11px] font-medium tracking-[0.04em] px-2.5 py-1 rounded-full mb-2"
            style={{ color: card.accent, background: card.iconBg }}
          >
            {card.badge}
          </span>
        )}
        <h3 className="font-heading text-[24px] sm:text-[27px] font-normal text-text-primary m-0 mb-2 leading-tight tracking-tight">
          {card.title}
        </h3>
        <p className="text-sm text-text-secondary leading-snug m-0 flex-1">{card.description}</p>
        <div className="mt-auto pt-3.5 flex items-center justify-end gap-1.5">
          <span
            className="text-xs font-medium uppercase tracking-[0.08em]"
            style={{ color: card.accent }}
          >
            View service
          </span>
          <ArrowRight
            className="w-[13px] h-[13px] transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: card.accent }}
          />
        </div>
      </div>
    </Link>
  );
}

export function ServicesOverview() {
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

        <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wellnessCards.map((card) => (
            <ServiceCardTile key={card.id} card={card} artHeight={172} />
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

        <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beautyCards.map((card) => (
            <ServiceCardTile key={card.id} card={card} artHeight={140} />
          ))}
        </GSAPStaggerGrid>
      </Container>
    </section>
  );
}
