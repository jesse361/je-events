import type { MetadataRoute } from "next";
import { events } from "@/lib/events";
import { speakers } from "@/lib/speakers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!base) return [];

  const paths = [
    "",
    "/events",
    "/speakers",
    "/schedule",
    "/tickets",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...events.map((event) => `/events/${event.slug}`),
    ...speakers.map((speaker) => `/speakers/${speaker.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-10-29"),
  }));
}
