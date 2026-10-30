import Link from "next/link";
import { formatTimeRange } from "@/lib/format";
import { getScheduleForEvent } from "@/lib/schedule";
import { site } from "@/lib/site";

export function SchedulePreview() {
  const steps = getScheduleForEvent(site.flagshipSlug).slice(0, 3);

  return (
    <section className="bg-navy py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pink">Schedule</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">The morning, in three steps.</h2>
        <p className="mt-3 text-sm leading-6 text-white/70">
          A sample opening for the flagship summit. The rest of the agenda is on the schedule page.
        </p>
        <ol className="mt-8 grid gap-4">
          {steps.map((item, index) => (
            <li key={item.id} className="rounded-[1.75rem] bg-white px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-sm font-semibold text-magenta">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">
                <time dateTime={item.startsAt}>{formatTimeRange(item.startsAt, item.endsAt)}</time>
                {" · "}
                {item.room}. {item.description}
              </p>
            </li>
          ))}
        </ol>
        <Link href="/schedule" className="mt-6 inline-flex text-sm font-semibold text-pink">
          View the full sample schedule
        </Link>
      </div>
    </section>
  );
}
