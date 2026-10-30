import Image from "next/image";
import Link from "next/link";
import { Accessibility, MapPin, ParkingSquare, TrainFront } from "lucide-react";
import { EventCard } from "@/components/events/EventCard";
import { SpeakerCard } from "@/components/speakers/SpeakerCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SampleNote } from "@/components/ui/SampleNote";
import { formatEventRange, formatMoney, formatTimeRange } from "@/lib/format";
import { getRelatedEvents } from "@/lib/events";
import { getScheduleForEvent } from "@/lib/schedule";
import { getSpeakersByIds } from "@/lib/speakers";
import { travelGuidance } from "@/lib/site";
import { ticketTiers } from "@/lib/tickets";
import type { EventRecord } from "@/types";

export function EventDetail({ event }: { event: EventRecord }) {
  const speakers = getSpeakersByIds(event.speakerIds);
  const schedule = getScheduleForEvent(event.slug);
  const related = getRelatedEvents(event.slug);

  return (
    <article>
      <section className="relative isolate flex min-h-[460px] items-end overflow-hidden pb-12 pt-32 sm:min-h-[540px] sm:pt-40">
        <Image src={event.image} alt={event.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />
        <Container className="relative">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{event.title}</li>
            </ol>
          </nav>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink">{event.category} · Sample event</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{event.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{event.theme}</p>
        </Container>
      </section>

      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-16">
        <div>
          <SampleNote>
            This event, its date, venue, speakers, and price are placeholders for the J&E Events website. They are not a confirmed public program.
          </SampleNote>
          <div className="mt-8 space-y-4 text-base leading-8 text-muted">
            {event.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-navy p-6 text-white lg:sticky lg:top-28">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-white/60">Date</dt>
              <dd className="mt-1 font-medium">
                <time dateTime={event.startsAt}>{formatEventRange(event.startsAt, event.endsAt)}</time>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Time</dt>
              <dd className="mt-1 font-medium">{formatTimeRange(event.startsAt, event.endsAt)}</dd>
            </div>
            <div>
              <dt className="text-white/60">Venue</dt>
              <dd className="mt-1 font-medium">
                {event.venueName}
                <span className="mt-1 block text-white/65">{event.cityLabel}</span>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Sample price from</dt>
              <dd className="mt-1 font-medium">{formatMoney(event.priceFrom)} USD</dd>
            </div>
          </dl>
          <Button href={`/tickets?event=${event.slug}#register`} className="mt-6 w-full">
            Register
          </Button>
        </aside>
      </Container>

      {speakers.length > 0 ? (
        <section className="bg-soft py-16">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight">Featured speakers</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <li key={speaker.id}>
                  <SpeakerCard speaker={speaker} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Schedule</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {schedule.map((session) => (
              <li key={session.id} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <time dateTime={session.startsAt} className="text-sm font-semibold text-magenta">
                  {formatTimeRange(session.startsAt, session.endsAt)}
                </time>
                <div>
                  <h3 className="font-semibold">{session.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{session.description}</p>
                  <p className="mt-2 text-sm">
                    {session.speakerNames.length > 0 ? session.speakerNames.join(", ") : "Program team"} · {session.room}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link href={`/schedule?event=${event.slug}`} className="mt-6 inline-flex text-sm font-semibold text-magenta">
            Open this agenda on the schedule page
          </Link>
        </Container>
      </section>

      <section className="bg-soft py-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Ticket options</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {ticketTiers.map((tier) => (
              <li key={tier.id} className="rounded-3xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-2xl font-semibold">{formatMoney(tier.price)}</p>
                <p className="mt-2 text-sm text-muted">Sample pricing · open for demonstration</p>
                <Link href={`/tickets?event=${event.slug}&tier=${tier.id}#register`} className="mt-4 inline-flex text-sm font-semibold text-magenta">
                  Select
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden rounded-3xl">
            <Image
              src="/images/venue/assembly.jpg"
              alt="Warm event lighting inside a large gathering space, used as a sample venue photograph."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Venue and travel</h2>
            <p className="mt-4 flex gap-2 text-sm leading-6 text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-magenta" aria-hidden="true" />
              {event.venueName} is a sample name. {event.cityLabel}. No street address is published, so directions are not linked.
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-muted">
              <li className="flex gap-2">
                <Accessibility className="mt-0.5 h-4 w-4 shrink-0 text-magenta" aria-hidden="true" />
                {travelGuidance.accessibility}
              </li>
              <li className="flex gap-2">
                <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-magenta" aria-hidden="true" />
                {travelGuidance.transit}
              </li>
              <li className="flex gap-2">
                <ParkingSquare className="mt-0.5 h-4 w-4 shrink-0 text-magenta" aria-hidden="true" />
                {travelGuidance.parking}
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-soft py-16">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight">Related events</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <EventCard event={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
