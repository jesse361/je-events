import Image from "next/image";
import { Accessibility, MapPin, ParkingSquare, TrainFront } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { travelGuidance } from "@/lib/site";
import type { EventRecord } from "@/types";

const items = [
  { icon: Accessibility, title: "Accessibility", body: travelGuidance.accessibility },
  { icon: TrainFront, title: "Transportation", body: travelGuidance.transit },
  { icon: ParkingSquare, title: "Parking", body: travelGuidance.parking },
];

export function VenueSection({ event }: { event: EventRecord }) {
  return (
    <section id="venue" className="bg-soft py-20 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/venue/assembly.jpg"
            alt="Warm event lighting inside a large gathering space, used as a sample venue photograph."
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-magenta">Venue and travel</p>
          <h2 className="section-title mt-3 font-semibold">A room with a plan, once the address is real.</h2>
          <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-magenta" aria-hidden="true" />
            <span>
              <span className="font-semibold text-navy">{event.venueName}</span> is a sample venue for {event.title}.{" "}
              {event.cityLabel}. A street address has not been provided, so there is no directions link.
            </span>
          </p>
          <ul className="mt-8 space-y-5">
            {items.map((item) => (
              <li key={item.title} className="flex gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-magenta" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
