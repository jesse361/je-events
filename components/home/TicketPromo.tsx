import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatMoney } from "@/lib/format";
import { ticketTiers } from "@/lib/tickets";
import { cn } from "@/lib/cn";

export function TicketPromo() {
  return (
    <section className="bg-soft py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tickets"
          title="Sample tiers, clearly priced."
          description="These prices are configurable placeholders. Choosing one opens a demonstration registration. No payment is taken."
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {ticketTiers.map((tier) => {
            const featured = tier.id === "vip";
            return (
              <li
                key={tier.id}
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-6",
                  featured ? "border-navy bg-navy text-white" : "border-line bg-white",
                )}
              >
                <p className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", featured ? "text-pink" : "text-magenta")}>
                  {featured ? "Signature sample tier" : "Sample tier"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-4 text-4xl font-semibold tracking-tight">
                  {formatMoney(tier.price)}
                  <span className={cn("ml-2 text-sm font-medium", featured ? "text-white/70" : "text-muted")}>USD</span>
                </p>
                <p className={cn("mt-3 text-sm leading-6", featured ? "text-white/75" : "text-muted")}>{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm leading-6">
                      <Check className={cn("mt-1 h-4 w-4 shrink-0", featured ? "text-pink" : "text-magenta")} aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className={cn("mt-6 text-xs", featured ? "text-white/60" : "text-muted")}>
                  Sample status: open for demonstration. Inventory is not tracked.
                </p>
                <Link
                  href={`/tickets?tier=${tier.id}#register`}
                  className={cn(
                    "mt-6 inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-semibold",
                    featured ? "bg-white text-navy" : "bg-gradient-to-r from-violet to-magenta text-white",
                  )}
                >
                  Get this ticket
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
