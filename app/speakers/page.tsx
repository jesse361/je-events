import { Suspense } from "react";
import { SpeakerDirectory } from "@/components/speakers/SpeakerDirectory";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNote } from "@/components/ui/SampleNote";
import { speakers } from "@/lib/speakers";

export const metadata = {
  title: "Speakers",
  description: "Sample speaker profiles for the J&E Events demonstration program.",
};

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        current="Speakers"
        eyebrow="Directory"
        title="Speakers"
        description="Search fictional profiles by name or expertise. Nothing here is a confirmed booking."
      />
      <section className="py-14 sm:py-20">
        <Container>
          <SampleNote>Portraits are stock photographs labeled as sample speaker profiles.</SampleNote>
          <div className="mt-8">
            <Suspense fallback={<p className="text-sm text-muted">Loading speakers…</p>}>
              <SpeakerDirectory speakers={speakers} />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
