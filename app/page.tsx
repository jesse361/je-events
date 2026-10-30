import { Countdown } from "@/components/home/Countdown";
import { GallerySlider } from "@/components/home/GallerySlider";
import { Hero } from "@/components/home/Hero";
import { NewsletterBand } from "@/components/home/NewsletterBand";
import { Philosophy } from "@/components/home/Philosophy";
import { SchedulePreview } from "@/components/home/SchedulePreview";
import { SectionDivider } from "@/components/home/SectionDivider";
import { SpeakerShowcase } from "@/components/home/SpeakerShowcase";
import { Sponsors } from "@/components/home/Sponsors";
import { TicketPromo } from "@/components/home/TicketPromo";
import { VenueSection } from "@/components/home/VenueSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { formatLongDate } from "@/lib/format";
import { getEvent } from "@/lib/events";
import { site } from "@/lib/site";

export default function HomePage() {
  const flagship = getEvent(site.flagshipSlug);
  if (!flagship) return null;

  return (
    <>
      <Hero event={flagship} />
      <SectionDivider />
      <GallerySlider />
      <Countdown
        startsAt={flagship.startsAt}
        title={flagship.title}
        dateLabel={formatLongDate(flagship.startsAt)}
      />
      <WhyChoose />
      <SpeakerShowcase />
      <SchedulePreview />
      <TicketPromo />
      <VenueSection event={flagship} />
      <Sponsors />
      <Philosophy />
      <NewsletterBand />
    </>
  );
}
