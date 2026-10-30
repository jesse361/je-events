import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: "Terms",
  description: "Placeholder terms for the J&E Events demonstration website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero current="Terms" title="Terms" description="This is a placeholder page, not a contract." />
      <Container className="max-w-3xl py-14 text-base leading-8 text-muted">
        <p>
          Event names, dates, venues, speakers, prices, schedules, and partner marks on this website are sample content. They do not offer a ticket, reserve a seat, or create a customer relationship.
        </p>
        <p className="mt-4">
          A real terms of service has not been supplied. Do not treat this page as legal advice or as a description of a confirmed event.
        </p>
      </Container>
    </>
  );
}
