import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Chii Wellness. Read our policies on appointments, cancellations, and clinic conduct.",
};

export default function TermsPage() {
  const { contact } = siteContent;

  return (
    <main id="main" className="pt-40 pb-20 bg-cream-50">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-sage">
          <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block not-prose">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-text-primary tracking-tight mb-8">
            Terms of Service
          </h1>

          <p className="text-text-secondary text-sm mb-8">
            Last updated: February 2025
          </p>

          <section className="space-y-6 text-text-secondary leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Appointments
              </h2>
              <p>
                Appointments can be made by phoning us at{" "}
                <a
                  href={contact.phoneLink}
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  {contact.phone}
                </a>
                . We ask that you arrive a few minutes early for your
                appointment, particularly for first-time visits where additional
                information may need to be collected.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Cancellations
              </h2>
              <p>
                If you need to cancel or reschedule an appointment, please give
                us as much notice as possible. We appreciate at least 24 hours
                notice for cancellations. Late cancellations or missed
                appointments may be subject to a fee.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Payment
              </h2>
              <p>
                Payment is due at the time of your appointment. We accept cash
                and EFTPOS. ACC-covered treatments will be processed directly
                where an approved claim is in place.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Health & Safety
              </h2>
              <p>
                Please inform your practitioner of any medical conditions,
                allergies, or medications before treatment. If you are feeling
                unwell, we ask that you reschedule your appointment to protect
                the health of our staff and other clients.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                ACC Claims
              </h2>
              <p>
                Our practitioners are ACC-accredited. If your treatment is
                covered by an ACC claim, we will manage the process on your
                behalf. You may be required to pay a surcharge depending on the
                treatment and your claim status.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Liability
              </h2>
              <p>
                While we take every care to provide safe and effective
                treatments, individual results may vary. We are not liable for
                any adverse reactions that may occur despite appropriate care
                being provided. Any concerns should be raised with your
                practitioner immediately.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Website
              </h2>
              <p>
                The content on this website is provided for general information
                purposes only and does not constitute medical advice. Always
                consult a qualified health practitioner for personalised
                guidance.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Contact
              </h2>
              <p>
                If you have questions about these terms, contact us at:
              </p>
              <p className="mt-2">
                Chii Wellness
                <br />
                {contact.address.street}
                <br />
                {contact.address.suburb}, {contact.address.city}{" "}
                {contact.address.postcode}
                <br />
                Phone:{" "}
                <a
                  href={contact.phoneLink}
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  {contact.phone}
                </a>
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
