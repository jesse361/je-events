import { ConfirmationSummary } from "@/components/tickets/ConfirmationSummary";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: "Registration summary",
  description: "A demonstration registration summary. No ticket is purchased.",
};

export default function ConfirmationPage() {
  return (
    <>
      <PageHero
        current="Registration"
        eyebrow="Demonstration"
        title="Registration summary"
        description="If you submitted the form, the summary below stays in this browser only."
      />
      <section className="py-14 sm:py-20">
        <Container>
          <ConfirmationSummary />
        </Container>
      </section>
    </>
  );
}
