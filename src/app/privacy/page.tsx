import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Chii Wellness. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const { contact } = siteContent;

  return (
    <main id="main" className="pt-40 pb-20 bg-cream-50">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-sage">
          <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block not-prose">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-text-primary tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-text-secondary text-sm mb-8">
            Last updated: February 2025
          </p>

          <section className="space-y-6 text-text-secondary leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Introduction
              </h2>
              <p>
                Chii Wellness (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                is committed to protecting your privacy. This policy explains how
                we collect, use, and safeguard your personal information in
                accordance with the New Zealand Privacy Act 2020.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Information We Collect
              </h2>
              <p>We may collect the following information when you:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact us by phone or in person</li>
                <li>Book an appointment</li>
                <li>Visit our clinic for treatment</li>
              </ul>
              <p className="mt-2">
                This may include your name, contact details, health information
                relevant to your treatment, and payment details.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                How We Use Your Information
              </h2>
              <p>Your personal information is used to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and manage your treatments</li>
                <li>Process ACC claims where applicable</li>
                <li>Communicate with you about appointments</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Health Information
              </h2>
              <p>
                As a healthcare provider, we collect and store health information
                in accordance with the Health Information Privacy Code 2020. Your
                health records are kept securely and only accessed by
                practitioners directly involved in your care.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Data Security
              </h2>
              <p>
                We take reasonable steps to protect your personal information
                from unauthorised access, use, or disclosure. Physical records
                are stored securely at our clinic.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Your Rights
              </h2>
              <p>
                Under the Privacy Act 2020, you have the right to access and
                request correction of your personal information. To make a
                request, please contact us at{" "}
                <a
                  href={contact.phoneLink}
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  {contact.phone}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this privacy policy, contact us at:
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
