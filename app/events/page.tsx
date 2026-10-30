import { Suspense } from "react";
import { EventExplorerGate } from "@/components/events/EventExplorerGate";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNote } from "@/components/ui/SampleNote";

export const metadata = {
  title: "Events",
  description: "Browse sample conferences, summits, workshops, and gatherings from J&E Events.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        current="Events"
        eyebrow="The collection"
        title="All events"
        description="Search the sample program by name, category, or whether the placeholder date is still ahead."
      />
      <section className="bg-soft py-14 sm:py-20">
        <Container>
          <SampleNote>Every card below is demonstration content with a placeholder date, venue, and price.</SampleNote>
          <Suspense fallback={<p className="mt-8 text-sm text-muted">Loading events…</p>}>
            <EventExplorerGate mode="directory" />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
