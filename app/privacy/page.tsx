import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: "Privacy",
  description: "A placeholder privacy note for the J&E Events demonstration website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        current="Privacy"
        title="Privacy"
        description="This is a placeholder page, not a legal policy."
      />
      <Container className="max-w-3xl py-14 text-base leading-8 text-muted">
        <p>
          J&E Events has not published a legal privacy policy on this website. The demonstration forms do not send your details to a server. A registration summary, if you create one, stays in this browser’s session storage until you clear it or close the session.
        </p>
        <p className="mt-4">
          Newsletter and contact submissions are validated in the browser and then stopped, because no email service is connected. Do not treat this page as legal advice.
        </p>
      </Container>
    </>
  );
}
