"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getRemaining, padTime } from "@/lib/format";

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export function Countdown({
  startsAt,
  title,
  dateLabel,
}: {
  startsAt: string;
  title: string;
  dateLabel: string;
}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = now === null ? undefined : getRemaining(startsAt, now);

  return (
    <div className="relative z-10 bg-soft px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-line bg-white p-5 shadow-[0_20px_50px_rgba(8,15,43,0.12)] sm:p-7 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-magenta">Countdown · sample date</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Begins <time dateTime={startsAt}>{dateLabel}</time>. Times are sample placeholders in UTC.
          </p>
          <Link href="/tickets?event=future-forward-technology-summit#register" className="mt-4 inline-flex text-sm font-semibold text-magenta">
            Register for this sample summit
          </Link>
        </div>
        <div aria-hidden="true">
          {remaining === null ? (
            <p className="rounded-2xl bg-soft px-4 py-5 text-sm font-medium text-navy">
              This sample start time has passed. The countdown is tied to the placeholder date.
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {units.map((unit) => {
                const value = remaining ? remaining[unit.key] : null;
                const shown = value === null ? "—" : unit.key === "days" ? String(value) : padTime(value);
                return (
                  <div key={unit.key} className="rounded-2xl bg-soft px-2 py-3 text-center sm:py-4">
                    <div className="text-2xl font-semibold tabular-nums tracking-tight text-navy sm:text-3xl">{shown}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-xs">
                      {unit.label}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <p className="sr-only">
          {remaining
            ? `${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, and ${remaining.seconds} seconds until the sample start.`
            : remaining === null
              ? "The sample start time has passed."
              : `Countdown to ${dateLabel}.`}
        </p>
      </div>
    </div>
  );
}
