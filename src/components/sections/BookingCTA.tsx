import { siteContent } from "@/lib/content";
import { ArrowRight, Phone } from "lucide-react";

export function BookingCTA() {
  const { contact } = siteContent;

  return (
    <section
      className="relative py-[88px] overflow-hidden text-cream-50"
      style={{ background: "#567548" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -left-14 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      <div
        className="absolute -bottom-28 -right-10 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />

      <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
        <h2 className="font-heading text-[48px] leading-[1.1] m-0 mb-4">
          Ready to feel your best?
        </h2>
        <p className="text-[18px] leading-relaxed m-0 mb-8" style={{ color: "#E8EDE2" }}>
          Book a wellness treatment online in under a minute, or call us — we&apos;ll find a time
          that works for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://cal.com/sam-yuan-chii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-[15px] text-[17px] font-medium rounded-[9px] bg-cream-50 text-sage-700 hover:bg-white transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Book online
            <ArrowRight className="w-[18px] h-[18px]" />
          </a>
          <a
            href={contact.phoneLink}
            className="inline-flex items-center justify-center gap-2 px-[30px] py-[15px] text-[17px] font-medium rounded-[9px] border text-cream-50 bg-transparent hover:bg-white/10 transition-all"
            style={{ borderColor: "rgba(255,253,249,0.45)" }}
          >
            <Phone className="w-4 h-4" />
            {contact.phone}
          </a>
        </div>

        <p className="text-sm m-0" style={{ color: "#C9D4BF" }}>
          17 Carter Street, Mount Maunganui · next to Bayfair Mall · Mon–Fri 10am–4pm
        </p>
      </div>
    </section>
  );
}
