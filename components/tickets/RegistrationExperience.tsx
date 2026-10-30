"use client";

import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { isValidEmail, isValidPhone, registrationTotal } from "@/lib/filters";
import { formatMoney } from "@/lib/format";
import { cn } from "@/lib/cn";
import { demoRegistrationKey, type DemoRegistration, type EventRecord, type TicketTier } from "@/types";

export function RegistrationExperience({
  events,
  tiers,
}: {
  events: EventRecord[];
  tiers: TicketTier[];
}) {
  const router = useRouter();
  const params = useSearchParams();
  const alertRef = useRef<HTMLDivElement>(null);
  const requestedEvent = params.get("event");
  const requestedTier = params.get("tier");
  const initialEvent = events.some((event) => event.slug === requestedEvent)
    ? requestedEvent!
    : events[0]?.slug ?? "";
  const initialTier = tiers.some((tier) => tier.id === requestedTier) ? requestedTier! : tiers[0]?.id ?? "";

  const [eventSlug, setEventSlug] = useState(initialEvent);
  const [tierId, setTierId] = useState(initialTier);
  const [seenEvent, setSeenEvent] = useState(requestedEvent);
  const [seenTier, setSeenTier] = useState(requestedTier);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  if (seenEvent !== requestedEvent) {
    setSeenEvent(requestedEvent);
    if (events.some((event) => event.slug === requestedEvent) && requestedEvent) {
      setEventSlug(requestedEvent);
    }
  }
  if (seenTier !== requestedTier) {
    setSeenTier(requestedTier);
    if (tiers.some((tier) => tier.id === requestedTier) && requestedTier) {
      setTierId(requestedTier);
    }
  }

  const event = events.find((item) => item.slug === eventSlug) ?? events[0];
  const tier = tiers.find((item) => item.id === tierId) ?? tiers[0];
  const totals = tier ? registrationTotal(tier.price, quantity) : null;

  async function onSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (submitting) return;
    const nextErrors: string[] = [];
    if (name.trim().length < 2) nextErrors.push("Enter your full name.");
    if (!isValidEmail(email)) nextErrors.push("Enter a valid email address.");
    if (!isValidPhone(phone)) nextErrors.push("Enter a phone number with at least 7 digits.");
    if (!event) nextErrors.push("Choose an event.");
    if (!tier || !totals) nextErrors.push("Choose a ticket category.");
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 8) {
      nextErrors.push("Choose a quantity from 1 to 8.");
    }
    if (!consent) nextErrors.push("Confirm that you understand this demonstration does not purchase a ticket.");
    setErrors(nextErrors);
    if (nextErrors.length > 0) {
      alertRef.current?.focus();
      return;
    }
    if (!event || !tier || !totals) return;

    setSubmitting(true);
    const registration: DemoRegistration = {
      reference: crypto.randomUUID().slice(0, 8).toUpperCase(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      eventSlug: event.slug,
      eventTitle: event.title,
      tierId: tier.id,
      tierName: tier.name,
      quantity: totals.quantity,
      unitPrice: totals.unitPrice,
      subtotal: totals.subtotal,
    };
    window.sessionStorage.setItem(demoRegistrationKey, JSON.stringify(registration));
    router.push("/tickets/confirmation");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
      <form id="register" onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight">Demonstration registration</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          No payment provider is connected. Submitting this form does not buy a ticket or reserve a seat.
        </p>
        {errors.length > 0 ? (
          <div
            ref={alertRef}
            tabIndex={-1}
            role="alert"
            className="mt-5 rounded-2xl border border-magenta/30 bg-magenta/5 px-4 py-3 text-sm"
          >
            <p className="font-semibold">Please fix the following:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="mt-6 grid gap-4">
          <Field label="Full name" id="reg-name" value={name} onChange={setName} autoComplete="name" />
          <Field label="Email" id="reg-email" type="email" value={email} onChange={setEmail} autoComplete="email" />
          <Field label="Phone" id="reg-phone" type="tel" value={phone} onChange={setPhone} autoComplete="tel" />
          <label className="block text-sm font-semibold" htmlFor="reg-event">
            Event
            <select id="reg-event" value={event?.slug ?? ""} onChange={(item) => setEventSlug(item.target.value)} className="field mt-2 font-normal">
              {events.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold" htmlFor="reg-tier">
            Ticket category
            <select id="reg-tier" value={tier?.id ?? ""} onChange={(item) => setTierId(item.target.value)} className="field mt-2 font-normal">
              {tiers.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} · {formatMoney(item.price)}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold" htmlFor="reg-qty">
            Quantity
            <input
              id="reg-qty"
              type="number"
              min={1}
              max={8}
              inputMode="numeric"
              value={quantity}
              onChange={(item) => {
                const next = Number(item.target.value);
                if (!Number.isFinite(next)) return;
                setQuantity(Math.min(8, Math.max(1, Math.floor(next))));
              }}
              className="field mt-2 font-normal"
            />
          </label>
          <label className="flex items-start gap-3 text-sm leading-6">
            <input
              type="checkbox"
              checked={consent}
              onChange={(item) => setConsent(item.target.checked)}
              className="mt-1 h-5 w-5 accent-magenta"
            />
            <span>I understand this is a demonstration registration and does not purchase a ticket.</span>
          </label>
        </div>
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-violet to-magenta px-5 text-sm font-semibold text-white disabled:opacity-70 sm:w-auto"
        >
          {submitting ? "Preparing summary" : "Submit demonstration registration"}
        </button>
      </form>
      <aside className="h-fit rounded-3xl bg-navy p-6 text-white lg:sticky lg:top-28">
        <h2 className="text-lg font-semibold">Summary</h2>
        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="text-white/60">Event</dt>
            <dd className="mt-1 font-medium">{event?.title}</dd>
          </div>
          <div>
            <dt className="text-white/60">Category</dt>
            <dd className="mt-1 font-medium">{tier?.name}</dd>
          </div>
          <div>
            <dt className="text-white/60">Calculation</dt>
            <dd className="mt-1 font-medium" aria-live="polite">
              {totals ? `${formatMoney(totals.unitPrice)} × ${totals.quantity} = ${formatMoney(totals.subtotal)}` : "—"}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-6 text-pink">No payment will be processed.</p>
        <ul className="mt-6 space-y-2">
          {tier?.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-2 text-sm leading-6 text-white/80">
              <Check className="mt-1 h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-semibold" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={cn("field mt-2 font-normal")}
      />
    </label>
  );
}
