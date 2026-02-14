import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="min-h-[70vh] flex items-center bg-cream-100">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <span className="text-sm uppercase tracking-wider text-sage-500 mb-4 block">
            404
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-text-secondary mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
