import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <main id="main" className="min-h-[70vh] flex items-center bg-cream-100">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-2 border-sage-200 border-t-sage-500 rounded-full animate-spin" />
          <p className="text-text-muted text-sm">Loading...</p>
        </div>
      </Container>
    </main>
  );
}
