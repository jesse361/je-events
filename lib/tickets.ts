import type { TicketTier } from "@/types";

export const ticketTiers: TicketTier[] = [
  {
    id: "general",
    name: "General Admission",
    price: 149,
    description: "A sample seat for the full public program.",
    benefits: [
      "Access to the selected sample program",
      "Standard seating",
      "Digital agenda",
    ],
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: 349,
    description: "A sample hosted tier with a closer place in the room.",
    benefits: [
      "Everything in General Admission",
      "Reserved seating sample",
      "Speaker greeting sample",
      "Lounge access sample",
    ],
  },
  {
    id: "premium",
    name: "Premium Access",
    price: 599,
    description: "The fullest sample tier, for guests who want the whole rhythm of the day.",
    benefits: [
      "Everything in VIP Experience",
      "Priority arrival desk sample",
      "Workshop seat sample",
      "Host introduction sample",
    ],
  },
];

export function getTicket(id: string) {
  return ticketTiers.find((tier) => tier.id === id);
}
