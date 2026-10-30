"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatLongDate, formatTimeRange } from "@/lib/format";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { ScheduleSession } from "@/types";

export function ScheduleBoard({ sessions }: { sessions: ScheduleSession[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const eventOptions = sessions.reduce<Array<{ slug: string; title: string }>>((list, session) => {
    if (!list.some((item) => item.slug === session.eventSlug)) {
      list.push({ slug: session.eventSlug, title: session.eventTitle });
    }
    return list;
  }, []);

  const requestedEvent = params.get("event");
  const eventSlug = eventOptions.some((item) => item.slug === requestedEvent)
    ? requestedEvent!
    : site.flagshipSlug;

  const eventSessions = sessions.filter((session) => session.eventSlug === eventSlug);
  const days = Array.from(new Set(eventSessions.map((session) => session.startsAt.slice(0, 10))));
  const requestedDay = params.get("day");
  const day = requestedDay && days.includes(requestedDay) ? requestedDay : days[0];
  const tracks = Array.from(new Set(eventSessions.map((session) => session.track)));
  const track = params.get("track") ?? "all";
  const activeTrack = track === "all" || tracks.includes(track) ? track : "all";

  const visible = eventSessions.filter((session) => {
    if (session.startsAt.slice(0, 10) !== day) return false;
    if (activeTrack !== "all" && session.track !== activeTrack) return false;
    return true;
  });

  function write(next: URLSearchParams) {
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function selectEvent(value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === site.flagshipSlug) next.delete("event");
    else next.set("event", value);
    next.delete("day");
    next.delete("track");
    write(next);
  }

  function selectDay(value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === days[0]) next.delete("day");
    else next.set("day", value);
    write(next);
  }

  function selectTrack(value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === "all") next.delete("track");
    else next.set("track", value);
    write(next);
  }

  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-[1.2fr_auto]">
        <div>
          <label htmlFor="schedule-event" className="text-sm font-semibold">
            Event
          </label>
          <select
            id="schedule-event"
            value={eventSlug}
            onChange={(event) => selectEvent(event.target.value)}
            className="field mt-2"
          >
            {eventOptions.map((event) => (
              <option key={event.slug} value={event.slug}>
                {event.title}
              </option>
            ))}
          </select>
        </div>
        <p className="self-end text-sm leading-6 text-muted lg:max-w-sm">
          Sample agenda. The date below matches the selected day, and times are shown in UTC.
        </p>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Days">
        {days.map((item, index) => (
          <button
            key={item}
            type="button"
            aria-pressed={item === day}
            onClick={() => selectDay(item)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold",
              item === day ? "bg-navy text-white" : "bg-soft text-navy",
            )}
          >
            Day {index + 1}
          </button>
        ))}
      </div>
      {day ? <p className="mt-4 text-sm font-medium text-navy">{formatLongDate(`${day}T12:00:00.000Z`)}</p> : null}

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Session tracks">
        <button
          type="button"
          aria-pressed={activeTrack === "all"}
          onClick={() => selectTrack("all")}
          className={cn(
            "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em]",
            activeTrack === "all" ? "bg-magenta text-white" : "bg-soft text-navy",
          )}
        >
          All tracks
        </button>
        {tracks.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={activeTrack === item}
            onClick={() => selectTrack(item)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em]",
              activeTrack === item ? "bg-magenta text-white" : "bg-soft text-navy",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 rounded-3xl border border-dashed border-line px-6 py-12 text-center text-sm text-muted">
          No sessions match this day and track.
        </p>
      ) : (
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {visible.map((session) => (
            <li key={session.id} className="grid gap-3 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <div>
                <time dateTime={session.startsAt} className="text-sm font-semibold text-magenta">
                  {formatTimeRange(session.startsAt, session.endsAt)}
                </time>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{session.type}</p>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug">{session.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{session.description}</p>
                <p className="mt-2 text-sm text-navy">
                  {session.speakerNames.length > 0 ? session.speakerNames.join(", ") : "Hosted by the program team"} · {session.room} · {session.track}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
