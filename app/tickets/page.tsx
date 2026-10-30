import { Suspense } from "react";
import { TicketPromo } from "@/components/home/TicketPromo";
import { RegistrationExperience } from "@/components/tickets/RegistrationExperience";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNote } from "@/components/ui/SampleNote";
import { events } from "@/lib/events";
import { ticketTiers } from "@/lib/tickets";

export const metadata = {
  title: "Tickets",
  description: "Sample ticket categories and a demonstration registration form for J&E Events.",
};

export default function TicketsPage() {
  const upcomingFirst = [...events].sort((a, b) => a.startsAt.localeCompare(b.startsAt));

  return (
    <>
      <PageHero
        current="Tickets"
        eyebrow="Registration"
        title="Tickets"
        description="Compare sample categories, then complete a demonstration registration. No payment is taken."
      />
      <TicketPromo />
      <section className="bg-white pb-20">
        <Container>
          <SampleNote>
            Prices are shared sample amounts for every demonstration event. Availability is not a live inventory.
          </SampleNote>
          <div className="mt-8">
            <Suspense fallback={<p className="text-sm text-muted">Loading registration…</p>}>
              <RegistrationExperience events={upcomingFirst} tiers={ticketTiers} />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
