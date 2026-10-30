import { Clock, MessagesSquare, Users } from "lucide-react";

const principles = [
  {
    title: "Begin with the guest",
    body: "A strong event is judged by how clearly a person can arrive, find their place, and understand why they are there.",
    icon: Users,
  },
  {
    title: "Give the day a rhythm",
    body: "Keynotes, workshops, pauses, and conversation each need a length. The schedule should feel hosted, not packed.",
    icon: Clock,
  },
  {
    title: "Leave room for people",
    body: "The point of gathering is the connection that continues after the last session. The program should make that possible.",
    icon: MessagesSquare,
  },
];

export function Philosophy() {
  return (
    <section className="bg-[#f3f6fb] py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-magenta">How we work</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Three principles for the day.</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Working principles only. This is not a set of reviews, ratings, or client claims.
        </p>
        <ul className="mt-8 grid gap-4">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const wash = index === principles.length - 1;
            return (
              <li
                key={item.title}
                className={
                  wash
                    ? "rounded-[1.75rem] bg-gradient-to-br from-white via-white to-pink px-6 py-7 shadow-[0_8px_30px_rgba(8,15,43,0.04)] sm:px-8 sm:py-8"
                    : "rounded-[1.75rem] bg-white px-6 py-7 shadow-[0_8px_30px_rgba(8,15,43,0.04)] sm:px-8 sm:py-8"
                }
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-navy">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
