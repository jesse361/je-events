"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SpeakerCard } from "@/components/speakers/SpeakerCard";
import { filterSpeakers } from "@/lib/filters";
import type { Speaker } from "@/types";

export function SpeakerDirectory({ speakers }: { speakers: Speaker[] }) {
  const expertiseOptions = Array.from(new Set(speakers.map((speaker) => speaker.expertise))).sort();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const paramQ = params.get("q") ?? "";
  const expertise = params.get("expertise") ?? "all";
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

  function updateExpertise(value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === "all") next.delete("expertise");
    else next.set("expertise", value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function reset() {
    setQuery("");
    router.replace(pathname, { scroll: false });
  }

  const visible = filterSpeakers(speakers, { q: paramQ, expertise });

  return (
    <div>
      <form className="grid gap-3 sm:grid-cols-[1fr_16rem_auto]" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label htmlFor="speaker-search" className="sr-only">
            Search speakers by name
          </label>
          <input
            id="speaker-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="speaker-expertise" className="sr-only">
            Filter by expertise
          </label>
          <select id="speaker-expertise" value={expertise} onChange={(event) => updateExpertise(event.target.value)} className="field">
            <option value="all">All expertise</option>
            {expertiseOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={reset} className="h-12 rounded-2xl px-4 text-sm font-semibold">
          Reset
        </button>
      </form>
      <p className="mt-4 text-sm text-muted" aria-live="polite">
        {visible.length === 1 ? "1 sample speaker" : `${visible.length} sample speakers`}
      </p>
      {visible.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-line px-6 py-14 text-center">
          <h3 className="text-xl font-semibold">No speakers match.</h3>
          <button type="button" onClick={reset} className="mt-4 text-sm font-semibold text-magenta">
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((speaker) => (
            <li key={speaker.id}>
              <SpeakerCard speaker={speaker} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
