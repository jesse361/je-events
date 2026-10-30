import type { Speaker } from "@/types";

export const speakers: Speaker[] = [
  {
    id: "amara",
    slug: "amara-cole",
    name: "Amara Cole",
    title: "Technology strategist",
    expertise: "Keynotes",
    bio: "Sample profile. Amara is a fictional speaker used to show how a keynote host would appear on a J&E program. No employer, client, or appearance is claimed.",
    image: "/images/speakers/amara.jpg",
    imageAlt: "Sample portrait of a woman in professional attire, used for the fictional speaker Amara Cole.",
    sample: true,
  },
  {
    id: "julian",
    slug: "julian-park",
    name: "Julian Park",
    title: "Product leader",
    expertise: "Product",
    bio: "Sample profile. Julian stands in for a product voice on the agenda. The biography is illustrative and is not a record of a real person.",
    image: "/images/speakers/julian.jpg",
    imageAlt: "Sample portrait of a man in a suit, used for the fictional speaker Julian Park.",
    sample: true,
  },
  {
    id: "elena",
    slug: "elena-voss",
    name: "Elena Voss",
    title: "Brand director",
    expertise: "Brand",
    bio: "Sample profile. Elena represents a brand and marketing perspective. This card is a design placeholder until confirmed speakers are supplied.",
    image: "/images/speakers/elena.jpg",
    imageAlt: "Sample portrait of a smiling woman, used for the fictional speaker Elena Voss.",
    sample: true,
  },
  {
    id: "marcus",
    slug: "marcus-hale",
    name: "Marcus Hale",
    title: "Leadership facilitator",
    expertise: "Leadership",
    bio: "Sample profile. Marcus is a fictional facilitator for forum-style sessions. No coaching practice or organization is attached to this name.",
    image: "/images/speakers/marcus.jpg",
    imageAlt: "Sample portrait of a man in a navy suit, used for the fictional speaker Marcus Hale.",
    sample: true,
  },
  {
    id: "priya",
    slug: "priya-raman",
    name: "Priya Raman",
    title: "Researcher",
    expertise: "Research",
    bio: "Sample profile. Priya represents a careful research voice on emerging technology. Findings, papers, and affiliations are not claimed.",
    image: "/images/speakers/priya.jpg",
    imageAlt: "Sample portrait of a woman in business dress, used for the fictional speaker Priya Raman.",
    sample: true,
  },
  {
    id: "noah",
    slug: "noah-ellis",
    name: "Noah Ellis",
    title: "Experience designer",
    expertise: "Experience design",
    bio: "Sample profile. Noah is the fictional workshop host for guest-journey sessions. The portrait and biography are placeholders.",
    image: "/images/speakers/noah.jpg",
    imageAlt: "Sample portrait of a man against a neutral background, used for the fictional speaker Noah Ellis.",
    sample: true,
  },
];

export function getSpeaker(idOrSlug: string) {
  return speakers.find((speaker) => speaker.id === idOrSlug || speaker.slug === idOrSlug);
}

export function getSpeakersByIds(ids: string[]) {
  return ids
    .map((id) => speakers.find((speaker) => speaker.id === id))
    .filter((speaker): speaker is Speaker => Boolean(speaker));
}
