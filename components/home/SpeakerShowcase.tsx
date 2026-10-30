import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeakerCard } from "@/components/speakers/SpeakerCard";
import { speakers } from "@/lib/speakers";

export function SpeakerShowcase() {
  return (
    <section className="bg-soft py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Speakers"
          title="Voices for a sample program."
          description="These profiles are fictional placeholders. They show the card layout until confirmed speakers are supplied."
          action={
            <Link href="/speakers" className="text-sm font-semibold text-magenta">
              View all speakers
            </Link>
          }
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <li key={speaker.id}>
              <SpeakerCard speaker={speaker} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
