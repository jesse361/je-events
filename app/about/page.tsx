import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { services, values } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "The mission and approach of J&E Events: thoughtful planning, meaningful connections, and professional execution.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About"
        eyebrow="The studio"
        title="About J&E Events"
        description="J&E Events plans conferences, workshops, and gatherings that feel considered from the first invitation to the last conversation."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">The work</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-muted">
            <p>
              J&E Events exists to bring people, ideas, and experiences together. The work is event planning, conference promotion, professional gatherings, workshops, networking events, and summits.
            </p>
            <p>
              A history, client list, and credentials have not been supplied for this website, so none are invented here. What follows is the approach the brand is built to keep.
            </p>
          </div>
        </Container>
        <Container className="mt-14">
          <h2 className="text-3xl font-semibold tracking-tight">Mission and values</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            The mission is simple: make gatherings that people are glad they attended, because the planning was careful and the room felt human.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="rounded-3xl border border-line p-6">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{value.body}</p>
              </li>
            ))}
          </ul>
        </Container>
        <Container className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="border-t border-line pt-5">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.body}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/contact?topic=plan"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-gradient-to-r from-violet to-magenta px-6 text-sm font-semibold text-white"
          >
            Plan your event
          </Link>
        </Container>
      </section>
    </>
  );
}
