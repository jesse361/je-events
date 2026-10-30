import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventCard } from "@/components/events/EventCard";
import { Container } from "@/components/ui/Container";
import { SampleNote } from "@/components/ui/SampleNote";
import { getEventsForSpeaker } from "@/lib/events";
import { getSpeaker, speakers } from "@/lib/speakers";

export function generateStaticParams() {
  return speakers.map((speaker) => ({ slug: speaker.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const speaker = getSpeaker(slug);
  if (!speaker) return { title: "Speaker not found" };
  return {
    title: speaker.name,
    description: `Sample speaker profile for ${speaker.name}, ${speaker.title}.`,
  };
}

export default async function SpeakerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const speaker = getSpeaker(slug);
  if (!speaker) notFound();
  const related = getEventsForSpeaker(speaker.id);

  return (
    <article className="pb-20 pt-32 sm:pt-40">
      <Container className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image src={speaker.image} alt={speaker.imageAlt} fill priority sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover" />
        </div>
        <div>
          <nav aria-label="Breadcrumb" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            <Link href="/speakers" className="hover:text-navy">
              Speakers
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-navy">{speaker.name}</span>
          </nav>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-magenta">Sample speaker</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{speaker.name}</h1>
          <p className="mt-3 text-lg text-navy">{speaker.title}</p>
          <p className="mt-1 text-sm text-muted">{speaker.expertise}</p>
          <div className="mt-6">
            <SampleNote>This is a fictional profile. No organization, social account, or appearance is claimed.</SampleNote>
          </div>
          <p className="mt-6 text-base leading-8 text-muted">{speaker.bio}</p>
          <p className="mt-4 text-sm text-muted">A public profile link has not been supplied.</p>
        </div>
      </Container>
      {related.length > 0 ? (
        <Container className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">Sample events</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((event) => (
              <li key={event.slug}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </Container>
      ) : null}
    </article>
  );
}
