import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatEventRange } from "@/lib/format";
import type { EventRecord } from "@/types";

export function Hero({ event }: { event: EventRecord }) {
  return (
    <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <Image
        src="/images/hero.jpg"
        alt="A keynote speaker addressing a seated audience from the stage."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[88%_82%] sm:object-[78%_62%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" />
      <Container className="relative pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-pink">
          Curated experiences. Exceptional connections.
        </p>
        <h1 className="display mt-4 max-w-4xl font-semibold text-white">
          Events That Inspire.
          <span className="block">Experiences That Last.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          From inspiring conferences to unforgettable celebrations, J&E Events creates meaningful experiences
          that bring people together and move ideas forward.
        </p>
        <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-navy p-4 sm:p-5 lg:grid-cols-4">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Flagship event</dt>
            <dd className="mt-1 text-sm font-semibold leading-5 text-white">{event.title}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Theme</dt>
            <dd className="mt-1 text-sm font-semibold leading-5 text-white">{event.theme}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Date</dt>
            <dd className="mt-1 text-sm font-semibold leading-5 text-white">
              <time dateTime={event.startsAt}>{formatEventRange(event.startsAt, event.endsAt)}</time>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Venue</dt>
            <dd className="mt-1 text-sm font-semibold leading-5 text-white">
              {event.venueName}
              <span className="mt-0.5 block text-xs font-medium text-white/65">Sample venue</span>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/events">Explore Events</Button>
          <Button href="/contact?topic=plan" variant="secondary">
            Plan Your Event
          </Button>
        </div>
        <a href="#gallery" className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          <span className="block h-8 w-px bg-white/50" aria-hidden="true" />
          See the program
        </a>
      </Container>
    </section>
  );
}
