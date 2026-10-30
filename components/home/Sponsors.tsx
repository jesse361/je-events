import { Container } from "@/components/ui/Container";

const partners = [
  { name: "Northline", mark: "N" },
  { name: "Kindred", mark: "K" },
  { name: "Lumen", mark: "L" },
  { name: "Harbor", mark: "H" },
  { name: "Vela", mark: "V" },
  { name: "Fieldnote", mark: "F" },
];

export function Sponsors() {
  return (
    <section id="partners" className="bg-white py-20 sm:py-24">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-magenta">Sponsors and partners</p>
        <h2 className="section-title mt-3 max-w-2xl font-semibold">A place for the people who help host the room.</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          These marks are original placeholders for layout only. They are not real sponsors, and they do not represent confirmed partnerships.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name}>
              <div className="flex h-24 items-center justify-center gap-2 rounded-2xl border border-line bg-soft px-3 text-navy">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/15 text-sm font-semibold" aria-hidden="true">
                  {partner.mark}
                </span>
                <span className="text-sm font-semibold tracking-tight">{partner.name}</span>
                <span className="sr-only">Sample partner logo, not a confirmed sponsor.</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
