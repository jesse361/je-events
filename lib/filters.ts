import type { EventRecord, Speaker } from "@/types";

export type EventQuery = {
  q: string;
  category: string;
  when: string;
};

export function isPastEvent(event: Pick<EventRecord, "endsAt">, now: number) {
  return new Date(event.endsAt).getTime() < now;
}

export function filterEvents(events: EventRecord[], query: EventQuery, now: number) {
  const q = query.q.trim().toLowerCase();

  const matched = events.filter((event) => {
    const past = isPastEvent(event, now);
    if (query.when === "upcoming" && past) return false;
    if (query.when === "past" && !past) return false;
    if (query.category && query.category !== "all" && event.category !== query.category) {
      return false;
    }
    if (!q) return true;
    const haystack = [
      event.title,
      event.theme,
      event.category,
      event.venueName,
      event.cityLabel,
      event.excerpt,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  return matched.sort((a, b) => {
    const aPast = isPastEvent(a, now);
    const bPast = isPastEvent(b, now);
    if (aPast !== bPast) return aPast ? 1 : -1;
    if (aPast && bPast) return b.startsAt.localeCompare(a.startsAt);
    return a.startsAt.localeCompare(b.startsAt);
  });
}

export function filterSpeakers(
  speakers: Speaker[],
  query: { q: string; expertise: string },
) {
  const q = query.q.trim().toLowerCase();
  return speakers.filter((speaker) => {
    if (query.expertise && query.expertise !== "all" && speaker.expertise !== query.expertise) {
      return false;
    }
    if (!q) return true;
    const haystack = [speaker.name, speaker.title, speaker.expertise, speaker.bio]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function registrationTotal(unitPrice: number, quantity: number) {
  const safeQty = Number.isFinite(quantity) ? Math.floor(quantity) : 0;
  const clamped = Math.min(8, Math.max(1, safeQty));
  return {
    quantity: clamped,
    unitPrice,
    subtotal: unitPrice * clamped,
  };
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
