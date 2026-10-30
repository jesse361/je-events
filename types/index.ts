export const eventCategories = [
  "Summit",
  "Conference",
  "Forum",
  "Masterclass",
  "Networking",
  "Workshop",
] as const;

export type EventCategory = (typeof eventCategories)[number];

export const sessionTypes = [
  "Keynote",
  "Talk",
  "Workshop",
  "Panel",
  "Break",
  "Networking",
  "Registration",
] as const;

export type SessionType = (typeof sessionTypes)[number];

export type EventRecord = {
  slug: string;
  title: string;
  category: EventCategory;
  theme: string;
  excerpt: string;
  description: string[];
  startsAt: string;
  endsAt: string;
  venueName: string;
  cityLabel: string;
  priceFrom: number;
  image: string;
  imageAlt: string;
  featured: boolean;
  speakerIds: string[];
  sample: true;
};

export type Speaker = {
  id: string;
  slug: string;
  name: string;
  title: string;
  expertise: string;
  bio: string;
  image: string;
  imageAlt: string;
  sample: true;
};

export type Session = {
  id: string;
  eventSlug: string;
  startsAt: string;
  endsAt: string;
  title: string;
  description: string;
  speakerIds: string[];
  track: string;
  room: string;
  type: SessionType;
  sample: true;
};

export type ScheduleSession = Session & {
  speakerNames: string[];
  eventTitle: string;
};

export type TicketTier = {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
};

export type DemoRegistration = {
  reference: string;
  name: string;
  email: string;
  phone: string;
  eventSlug: string;
  eventTitle: string;
  tierId: string;
  tierName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
};

export const demoRegistrationKey = "je-demo-registration";
