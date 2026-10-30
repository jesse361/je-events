import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatEventRange, formatMoney } from "@/lib/format";
import type { EventRecord } from "@/types";

export function EventCard({ event }: { event: EventRecord }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_8px_30px_rgba(8,15,43,0.05)] motion-safe:transition hover:shadow-[0_18px_40px_rgba(8,15,43,0.1)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full border border-magenta/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-magenta">
            {event.category}
          </span>
          <time dateTime={event.startsAt} className="shrink-0 text-xs font-medium text-muted">
            {formatEventRange(event.startsAt, event.endsAt)}
          </time>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-navy">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{event.theme}</p>
        <p className="mt-3 text-sm font-medium text-magenta">{event.venueName}</p>
        <p className="text-xs text-muted">Sample venue · {event.cityLabel}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="text-sm text-navy">
            From {formatMoney(event.priceFrom)}
            <span className="block text-xs text-muted">Sample pricing</span>
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
            View Event
            <ArrowRight className="h-4 w-4 motion-safe:transition motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
