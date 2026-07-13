export const siteContent = {
  // Site Info
  siteName: "Chii Wellness",
  tagline: "Wellness Clinic Mount Maunganui",

  // Contact
  contact: {
    phone: "027 574 2522",
    phoneLink: "tel:+64275742522",
    email: "chiihealth768@gmail.com",
    address: {
      street: "17 Carter Street",
      suburb: "Mount Maunganui",
      city: "Tauranga",
      postcode: "3116",
      country: "New Zealand",
    },
    hours: {
      weekdays: "Monday - Friday: 10am - 4pm",
      saturday: "Saturday: Closed",
      sunday: "Sunday: Closed",
    },
  },

  // Homepage
  hero: {
    headline: "Calm, simple, effective care",
    subheadline:
      "Acupuncture, Chinese medicine, massage, natural therapies, and physiotherapy. Serving the Bayfair community for over 20 years.",
    cta: "Explore Treatments",
  },

  // About
  about: {
    headline: "Calm care, guided by experience",
    intro:
      "We focus on clear explanations, steady hands, and making sure you feel comfortable from the moment you arrive.",
    story:
      "Serving Mount Maunganui for over 20 years, Chii Health Clinic offers acupuncture, Chinese herbal medicine, tui na massage, physiotherapy, and natural therapies. Our team focuses on chronic pain, sports injuries, rehabilitation, and holistic wellness.",
    philosophy:
      "Every person is unique, and so is their path to wellness. We take time to understand your individual needs and create personalized treatment plans that address both symptoms and root causes. Our goal is not just to treat, but to empower you with the knowledge and tools to maintain lasting wellbeing.",
    values: [
      {
        title: "ACC Accredited",
        description:
          "Our practitioners are ACC accredited, providing support for eligible claims and making care more accessible.",
      },
      {
        title: "20+ Years Experience",
        description:
          "Serving the Bayfair community for over two decades with trusted, reliable care.",
      },
      {
        title: "Clinical Expertise",
        description:
          "Over 10 years of clinical experience in China, bringing deep knowledge of traditional Chinese medicine.",
      },
      {
        title: "Calm Environment",
        description:
          "Our space is designed to help you relax and heal, offering a peaceful retreat from everyday stress.",
      },
    ],
  },

  // Footer
  footer: {
    description:
      "Next to Bayfair Mall, 17 Carter Street, Mount Maunganui. Acupuncture, massage, physiotherapy, and beauty care. Formerly Chii Health Beauty.",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Chinese Medicine", href: "/services/chinese-medicine" },
      { name: "Acupuncture", href: "/services/acupuncture" },
      { name: "Physiotherapy", href: "/services/physiotherapy" },
      { name: "Massage", href: "/services/massage" },
      { name: "Waxing", href: "/services/waxing" },
    ],
  },
  { name: "Contact", href: "/contact" },
];
