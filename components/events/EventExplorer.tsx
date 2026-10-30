"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EventCard } from "@/components/events/EventCard";
import { filterEvents } from "@/lib/filters";
import { eventCategories, type EventRecord } from "@/types";

export function EventExplorer({
  events,
  now,
  mode,
}: {
  events: EventRecord[];
  now: number;
  mode: "home" | "directory";
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const paramQ = params.get("q") ?? "";
  const category = params.get("category") ?? "all";
  const when = params.get("when") ?? (mode === "home" ? "upcoming" : "all");
  const [query, setQuery] = useState(paramQ);
  const [trackedQuery, setTrackedQuery] = useState(paramQ);

  if (trackedQuery !== paramQ) {
    setTrackedQuery(paramQ);
    setQuery(paramQ);
  }

  useEffect(() => {
    const handle = window.setTimeout(() => {
      if (query === paramQ) return;
      const next = new URLSearchParams(params.toString());
      if (query.trim()) next.set("q", query.trim());
      else next.delete("q");
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(handle);
  }, [query, paramQ, params, pathname, router]);

  function update(key: "category" | "when", value: string) {
    const next = new URLSearchParams(params.toString());
    const isDefault = key === "when" ? value === (mode === "home" ? "upcoming" : "all") : value === "all";
    if (isDefault) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function reset() {
    setQuery("");
    router.replace(pathname, { scroll: false });
  }

  const filtered = filterEvents(events, { q: paramQ, category, when }, now);
  const visible = mode === "home" && !paramQ && category === "all" && when === "upcoming"
    ? filtered.filter((event) => event.featured)
    : filtered;
  const filtersActive = Boolean(paramQ) || category !== "all" || when !== (mode === "home" ? "upcoming" : "all");

  return (
    <div>
      <form
        className="mt-8 grid gap-3 rounded-3xl border border-line bg-white p-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_auto]"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor={`${mode}-event-search`} className="sr-only">
            Search events by name
          </label>
          <input
            id={`${mode}-event-search`}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, theme, or venue"
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${mode}-category`} className="sr-only">
            Filter by category
          </label>
          <select
            id={`${mode}-category`}
            value={category}
            onChange={(event) => update("category", event.target.value)}
            className="field"
          >
            <option value="all">All categories</option>
            {eventCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${mode}-when`} className="sr-only">
            Filter by upcoming or past
          </label>
          <select id={`${mode}-when`} value={when} onChange={(event) => update("when", event.target.value)} className="field">
            <option value="all">Upcoming and past</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center justify-center rounded-2xl px-4 text-sm font-semibold text-navy hover:bg-soft"
        >
          Reset
        </button>
      </form>
      <p className="mt-4 text-sm text-muted" aria-live="polite">
        {visible.length === 1 ? "1 event" : `${visible.length} events`}
        {filtersActive ? " match" : mode === "home" ? " in this preview" : ""}
      </p>
      {visible.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-line bg-white px-6 py-14 text-center">
          <h3 className="text-xl font-semibold">No events match.</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
            Try another name, category, or time. Sample events use placeholder titles such as Future Forward Technology Summit.
          </p>
          <button type="button" onClick={reset} className="mt-5 text-sm font-semibold text-magenta">
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((event) => (
            <li key={event.slug}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
