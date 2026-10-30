import type { EventRecord } from "@/types";

const city = "Host city to be confirmed";

export const events: EventRecord[] = [
  {
    slug: "future-forward-technology-summit",
    title: "Future Forward Technology Summit",
    category: "Summit",
    theme: "Build What Comes Next",
    excerpt:
      "A two-day sample summit about the ideas, products, and rooms that shape what people build next.",
    description: [
      "Future Forward is the sample flagship gathering for J&E Events. It is written as a two-day summit where builders, hosts, and curious guests share the same room.",
      "The program moves from a morning keynote into smaller talks, a hands-on workshop, and a hosted hour for conversation. Every name, time, and room on this page is placeholder content.",
    ],
    startsAt: "2026-11-18T09:00:00.000Z",
    endsAt: "2026-11-19T13:00:00.000Z",
    venueName: "The Assembly Hall",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/summit.jpg",
    imageAlt: "A large audience seated in a darkened conference hall facing a stage.",
    featured: true,
    speakerIds: ["amara", "julian", "priya", "noah", "marcus", "elena"],
    sample: true,
  },
  {
    slug: "creative-business-innovation-conference",
    title: "Creative Business & Innovation Conference",
    category: "Conference",
    theme: "Ideas Worth Gathering For",
    excerpt:
      "A one-day sample conference for people who shape brands, products, and the stories around them.",
    description: [
      "This sample conference brings creative leads and operators into one program about how ideas become work people can feel.",
      "Sessions are placeholders meant to show the rhythm of a J&E conference day: a sharp opening, two working talks, and a close that sends people out talking.",
    ],
    startsAt: "2026-12-09T09:30:00.000Z",
    endsAt: "2026-12-09T16:30:00.000Z",
    venueName: "North Studio",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/creative.jpg",
    imageAlt: "Professionals talking together around a bright meeting table.",
    featured: true,
    speakerIds: ["elena", "julian"],
    sample: true,
  },
  {
    slug: "leadership-excellence-forum",
    title: "Leadership Excellence Forum",
    category: "Forum",
    theme: "Lead With Clarity",
    excerpt:
      "A sample forum for people who host teams, stages, and decisions that other people feel.",
    description: [
      "The forum is a quieter sample format: fewer sessions, more time to sit with a question, and a room arranged for conversation rather than spectacle.",
      "Speaker names and the venue are placeholders until a real program is confirmed.",
    ],
    startsAt: "2027-01-21T09:00:00.000Z",
    endsAt: "2027-01-21T15:30:00.000Z",
    venueName: "The Forum House",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/leadership.jpg",
    imageAlt: "A microphone in the foreground with a blurred audience behind it.",
    featured: true,
    speakerIds: ["marcus", "amara"],
    sample: true,
  },
  {
    slug: "digital-marketing-masterclass",
    title: "Digital Marketing Masterclass",
    category: "Masterclass",
    theme: "Attention, Craft, and Proof",
    excerpt:
      "A sample masterclass on how live events and digital stories can support each other.",
    description: [
      "This masterclass is a sample teaching format. Guests would spend the day on message, proof, and the way a campaign meets a room.",
      "The outline is illustrative. It is not a confirmed course and it does not promise a certificate.",
    ],
    startsAt: "2027-02-05T10:00:00.000Z",
    endsAt: "2027-02-05T16:00:00.000Z",
    venueName: "Atelier Room",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/marketing.jpg",
    imageAlt: "A presenter speaking beside a laptop during a workshop.",
    featured: true,
    speakerIds: ["elena"],
    sample: true,
  },
  {
    slug: "entrepreneurs-networking-experience",
    title: "Entrepreneurs Networking Experience",
    category: "Networking",
    theme: "Rooms That Start Conversations",
    excerpt:
      "A hosted sample evening for founders and collaborators who want better conversations than a name badge usually allows.",
    description: [
      "The evening is structured as a sample networking experience: a short welcome, hosted introductions, and open time that still has a shape.",
      "No guest list is real. The format shows how J&E would hold a room that is social without being vague.",
    ],
    startsAt: "2027-02-26T17:30:00.000Z",
    endsAt: "2027-02-26T20:30:00.000Z",
    venueName: "Harbor Rooms",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/networking.jpg",
    imageAlt: "People standing and talking at a professional gathering.",
    featured: true,
    speakerIds: ["julian", "noah"],
    sample: true,
  },
  {
    slug: "ai-emerging-technologies-conference",
    title: "AI and Emerging Technologies Conference",
    category: "Conference",
    theme: "Practical Intelligence",
    excerpt:
      "A two-day sample conference on useful artificial intelligence, careful adoption, and the people who have to live with the tools.",
    description: [
      "This sample conference looks at technology from the room outward: what a team can use, what a guest can understand, and what should stay human.",
      "Research claims, tools, and case studies are not presented as verified results. The agenda is a demonstration of structure.",
    ],
    startsAt: "2027-03-17T09:00:00.000Z",
    endsAt: "2027-03-18T15:00:00.000Z",
    venueName: "Signal Hall",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/ai.jpg",
    imageAlt: "Rows of conference seats facing a presentation screen.",
    featured: true,
    speakerIds: ["priya", "amara"],
    sample: true,
  },
  {
    slug: "program-design-workshop",
    title: "Program Design Workshop",
    category: "Workshop",
    theme: "Hands-On Program Design",
    excerpt:
      "A past sample workshop about building an agenda people can follow from the first welcome to the last conversation.",
    description: [
      "This workshop is placed in the past so the archive filter has something honest to show. It was never a public ticketed event.",
      "The session outline demonstrates how a J&E workshop page can hold a finished program.",
    ],
    startsAt: "2026-03-12T09:30:00.000Z",
    endsAt: "2026-03-12T15:30:00.000Z",
    venueName: "Workshop Loft",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/workshop.jpg",
    imageAlt: "A small group collaborating around laptops in a workshop.",
    featured: false,
    speakerIds: ["noah"],
    sample: true,
  },
  {
    slug: "annual-partners-gathering",
    title: "Annual Partners Gathering",
    category: "Forum",
    theme: "A Year of Shared Work",
    excerpt:
      "A past sample gathering used to show how a finished J&E event can live in the archive.",
    description: [
      "Partners Gathering is sample archive content. It does not record a real client event, attendance figure, or partnership.",
      "The page exists so past and upcoming filters both have real structured data behind them.",
    ],
    startsAt: "2026-06-04T10:00:00.000Z",
    endsAt: "2026-06-04T16:00:00.000Z",
    venueName: "Garden Court",
    cityLabel: city,
    priceFrom: 149,
    image: "/images/events/partners.jpg",
    imageAlt: "Guests seated at round tables in a warmly lit event room.",
    featured: false,
    speakerIds: ["marcus", "elena"],
    sample: true,
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getRelatedEvents(slug: string, limit = 3) {
  const current = getEvent(slug);
  if (!current) return [];
  const others = events.filter((event) => event.slug !== slug);
  const same = others.filter((event) => event.category === current.category);
  const rest = others.filter((event) => event.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

export function getEventsForSpeaker(speakerId: string) {
  return events.filter((event) => event.speakerIds.includes(speakerId));
}
