"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="min-h-[70vh] flex items-center bg-cream-100">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block">
            Something went wrong
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
            Unexpected Error
          </h1>
          <p className="text-lg text-text-secondary mb-10">
            We&apos;re sorry, something didn&apos;t work as expected. Please try
            again or head back to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} size="lg">
              Try Again
            </Button>
            <Button href="/" variant="outline" size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
