import { Suspense } from "react";
import { ScheduleBoard } from "@/components/schedule/ScheduleBoard";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNote } from "@/components/ui/SampleNote";
import { getSchedule } from "@/lib/schedule";

export const metadata = {
  title: "Schedule",
  description: "A sample, time-ordered agenda for J&E Events programs.",
};

export default function SchedulePage() {
  const sessions = getSchedule();

  return (
    <>
      <PageHero
        current="Schedule"
        eyebrow="Agenda"
        title="Schedule"
        description="Sessions are organised by time. Choose a sample event, then a day, and the date shown matches that day."
      />
      <section className="py-14 sm:py-20">
        <Container>
          <SampleNote>Session titles, rooms, and times are placeholders in UTC.</SampleNote>
          <div className="mt-8">
            <Suspense fallback={<p className="text-sm text-muted">Loading schedule…</p>}>
              <ScheduleBoard sessions={sessions} />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
