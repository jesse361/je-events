import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterBand() {
  return (
    <section id="newsletter" className="bg-navy-2 text-white">
      <Container className="grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <h2 className="text-3xl font-semibold uppercase tracking-tight sm:text-5xl">Stay in the Loop.</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/75">
            Get updates on upcoming events, exclusive experiences, and opportunities to connect.
          </p>
        </div>
        <NewsletterForm />
      </Container>
    </section>
  );
}
