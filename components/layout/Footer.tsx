import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Copyright } from "@/components/layout/Copyright";
import { Logo } from "@/components/layout/Logo";
import { eventCategories } from "@/types";
import { site } from "@/lib/site";

const useful = [
  { href: "/events", label: "Events" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/tickets", label: "Tickets" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
            {site.tagline} {site.description}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Useful links</h2>
          <ul className="mt-4 space-y-3">
            {useful.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Event categories</h2>
          <ul className="mt-4 space-y-3">
            {eventCategories.map((category) => (
              <li key={category}>
                <Link
                  href={`/events?category=${encodeURIComponent(category)}`}
                  className="text-sm text-white/75 hover:text-white"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <span className="block text-white">{site.emailPlaceholder}</span>
              Placeholder email. This inbox is not monitored.
            </li>
            <li>
              <span className="block text-white">{site.phonePlaceholder}</span>
              Placeholder phone. Not a working number.
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-pink hover:text-white">
                Send an inquiry
              </Link>
            </li>
          </ul>
          <h2 className="mt-8 text-sm font-semibold">Social</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Social profiles have not been connected. Icons are omitted until real profiles are supplied.
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <Copyright />
          <p className="max-w-xl leading-5">
            Events, speakers, venues, prices, schedules, and partner marks on this website are sample content.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
