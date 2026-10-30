import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-soft">
      <Container className="pb-24 pt-40">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-magenta">404</p>
        <h1 className="section-title mt-3 font-semibold">That page is not on the program.</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          The link may be out of date, or the event slug does not match a sample event on this site.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/events" variant="ghost">
            Browse events
          </Button>
        </div>
      </Container>
    </section>
  );
}
