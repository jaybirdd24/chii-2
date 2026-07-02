export interface PriceItem {
  name: string;
  duration?: string;
  price: string;
  note?: string;
}

export interface CalLink {
  label: string;
  slug: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  pricing: PriceItem[];
  pricingNote?: string;
  image?: string;
  calLinks?: CalLink[];
}

export const services: Service[] = [
  {
    slug: "chinese-medicine",
    title: "Chinese Medicine",
    tagline: "Traditional healing, modern care",
    shortDescription:
      "Over 10 years clinical experience in China. Herbal medicine, cupping, moxibustion, and gua sha.",
    fullDescription:
      "Traditional Chinese Medicine (TCM) is a complete system of healthcare developed over thousands of years. At Chii Health, our practitioners bring over 10 years of clinical experience in China, offering authentic TCM treatments grounded in deep knowledge and training.\n\nTCM views the body as an interconnected system where energy (qi) flows through pathways called meridians. When this flow is disrupted, illness or discomfort can occur. Our treatments work to restore balance, support your body's natural healing processes, and address the root causes of health concerns—not just the symptoms.\n\nWe offer a range of traditional therapies including herbal medicine custom-formulated for your needs, cupping to release tension and improve circulation, moxibustion to warm and stimulate healing, and gua sha for muscle recovery and pain relief.",
    benefits: [
      "Herbal medicine tailored to your needs",
      "Cupping for tension and circulation",
      "Moxibustion for warming therapy",
      "Gua sha for muscle recovery",
      "10+ years clinical experience in China",
      "Holistic approach to wellness",
    ],
    pricing: [
      { name: "Cupping", price: "$25" },
      { name: "Cupping", note: "with acupuncture", price: "$110" },
      { name: "Moxibustion", note: "add-on", price: "$15" },
      { name: "Gua sha", note: "add-on", price: "$15" },
    ],
    pricingNote:
      "Herbal medicine pricing varies based on your individual formula. Ask during your consultation for details.",
  },
  {
    slug: "acupuncture",
    title: "Acupuncture",
    tagline: "Calm support for pain and balance",
    shortDescription:
      "Care for pain and recovery with a clear, simple approach.",
    fullDescription:
      "Acupuncture is a time-honored practice rooted in Traditional Chinese Medicine, designed to restore the natural flow of energy throughout your body. Our skilled practitioners use fine, sterile needles placed at specific points to stimulate healing, reduce inflammation, and bring your body back into balance.\n\nWhether you're seeking relief from chronic pain, stress reduction, or support for overall wellness, acupuncture offers a gentle yet powerful path to healing. Each session is tailored to your unique needs, creating a deeply relaxing experience that addresses both symptoms and root causes.",
    benefits: [
      "Natural pain relief",
      "Support for recovery and balance",
      "ACC supported for eligible claims",
      "Cupping and herbal medicine available",
    ],
    pricing: [
      { name: "Acupuncture", duration: "60 min", price: "$95" },
      { name: "Acupuncture", duration: "30 min", price: "$60" },
      { name: "Acupuncture", note: "ACC first visit", price: "$40" },
      { name: "Acupuncture", note: "ACC follow up", price: "$20" },
      { name: "Cupping", price: "$25" },
    ],
    pricingNote: "Herbal medicine, ask for details.",
    calLinks: [{ label: "Book appointment", slug: "sam-yuan-chii/acupuncture" }],
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    tagline: "Hands-on care with ACC support",
    shortDescription:
      "Physiotherapy services with ACC-accredited providers. Available from September 2025.",
    fullDescription:
      "Our physiotherapy services combine evidence-based techniques with a holistic understanding of your body. We go beyond treating symptoms to identify and address the underlying causes of your pain or movement limitations.\n\nWe start with an assessment and a clear plan. Hands-on care and exercise are tailored to your goals. ACC cover is available for eligible claims. Bring your ACC claim number and ID so we can confirm cover. We can help arrange new claims when needed.",
    benefits: [
      "Sports injuries and post-operative care",
      "Back, neck, and shoulder pain",
      "Sprains, strains, and tendon issues",
      "Rehabilitation and movement retraining",
    ],
    pricing: [
      { name: "ACC initial visit", price: "$45" },
      { name: "ACC follow up", price: "$30" },
      { name: "Private initial", duration: "45 min", price: "$95" },
      { name: "Private follow up", duration: "30 min", price: "$75" },
    ],
    pricingNote:
      "Bring your ACC claim number and ID so we can confirm cover. We can help arrange new claims when needed.",
    calLinks: [
      { label: "Book initial appointment", slug: "sam-yuan-chii/physio-initial" },
      { label: "Book follow-up", slug: "sam-yuan-chii/physio-follow-up" },
    ],
  },
  {
    slug: "massage",
    title: "Massage",
    tagline: "Traditional techniques for relaxation",
    shortDescription:
      "Chinese tui na massage and reflexology to ease tension and improve mobility.",
    fullDescription:
      "Our massage therapy goes beyond simple relaxation—though you'll experience plenty of that too. Our therapists are trained in traditional Chinese tui na massage and reflexology to address your specific needs, whether that's releasing chronic tension, recovering from physical activity, or simply taking time to unwind.\n\nFrom deep tui na work that targets stubborn knots to gentle reflexology that promotes overall relaxation, each session is customized to your preferences and goals. Step out feeling lighter, looser, and completely renewed.",
    benefits: [
      "Tui na Chinese massage",
      "Reflexology",
      "Relief from tension and stress",
      "Improved mobility",
    ],
    pricing: [
      { name: "Massage", duration: "20 min", price: "$30" },
      { name: "Massage", duration: "30 min", price: "$50" },
      { name: "Massage", duration: "45 min", price: "$75" },
      { name: "Massage", duration: "60 min", price: "$95" },
      { name: "Reflexology", duration: "30 min", price: "$60" },
      { name: "Reflexology", duration: "60 min", price: "$95" },
    ],
    pricingNote: "Oil massage, extra $10.",
    calLinks: [
      { label: "Book massage", slug: "sam-yuan-chii/massage" },
      { label: "Book reflexology", slug: "sam-yuan-chii/reflexology" },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    tagline: "Gentle, careful waxing services",
    shortDescription:
      "Clean, simple care with clear pricing. Phone ahead to secure your time.",
    fullDescription:
      "Experience smooth, beautiful skin with our professional waxing services. We use premium quality waxes suited to different skin types and areas, ensuring effective hair removal with minimal discomfort.\n\nOur trained therapists create a comfortable, private environment where you can relax while we take care of everything. We're committed to hygiene and use fresh materials for every client. Whether you're preparing for a special occasion or maintaining your regular routine, we deliver consistently smooth results.",
    benefits: [
      "Face, body, and Brazilian waxing",
      "Gentle approach for comfort",
      "Clean, hygienic environment",
      "Men's waxing available",
    ],
    pricing: [
      { name: "Eyebrows", note: "from", price: "$15" },
      { name: "Chin or upper lip", note: "from", price: "$15" },
      { name: "Full face", note: "from", price: "$35" },
      { name: "Chest or back", note: "from", price: "$40" },
      { name: "Underarm", note: "from", price: "$30" },
      { name: "Full arms", note: "from", price: "$50" },
      { name: "Half arms", note: "from", price: "$30" },
      { name: "Bikini", note: "from", price: "$30" },
      { name: "Half legs", note: "from", price: "$40" },
      { name: "Full legs", note: "from", price: "$65" },
      { name: "Brazilian", note: "first visit", price: "$69" },
      { name: "Brazilian", note: "follow up", price: "$55" },
    ],
    pricingNote: "Men's waxing, extra $10.",
  },
  {
    slug: "facials",
    title: "Facials & Eye Care",
    tagline: "Beauty services that feel calm",
    shortDescription:
      "Treatments to complement wellness care with gentle brow, lash, and facial options.",
    fullDescription:
      "Your skin deserves dedicated care, and our facial treatments deliver exactly that. Each session begins with a thorough skin analysis so we can customize your treatment to address your unique concerns—whether that's hydration, anti-aging, acne, or simply maintaining healthy skin.\n\nUsing premium skincare products and expert techniques, we cleanse, exfoliate, and nourish your skin while you drift into relaxation. Our facials are designed not just to treat your skin, but to provide a moment of peace in your busy life. Leave with skin that looks refreshed, feels soft, and glows with health.",
    benefits: [
      "Mini and deluxe facials",
      "Eyebrow and eyelash tinting",
      "Brow shaping",
      "Blackhead removal",
    ],
    pricing: [
      { name: "Mini facial", duration: "30 min", price: "$70" },
      { name: "Deluxe facial", duration: "60 min", price: "$110" },
      { name: "Blackhead removal", note: "add-on", price: "$50" },
      { name: "Eyebrow tinting", price: "$20" },
      { name: "Eyelash tinting", price: "$20" },
      { name: "Brow shape", price: "$20" },
      { name: "Eye combo", price: "$55" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
