import { BadgeCheck, CalendarCheck, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/site";

const icons = [CalendarCheck, Sparkles, Users, BadgeCheck];

export function WhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why J&E Events"
          title="Every Detail Matters. Every Experience Counts."
          description="Four commitments shape the way a J&E gathering is planned, hosted, and remembered."
        />
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = icons[index];
            return (
              <li key={value.title}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-magenta">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
