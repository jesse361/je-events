"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { clearRegistration, readRegistrationRaw, subscribeRegistration } from "@/lib/browser-store";
import { formatMoney } from "@/lib/format";
import type { DemoRegistration } from "@/types";

function parseRegistration(raw: string | null): DemoRegistration | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as DemoRegistration;
  } catch {
    return null;
  }
}

export function ConfirmationSummary() {
  const raw = useSyncExternalStore(subscribeRegistration, readRegistrationRaw, () => "");
  const registration = raw === "" ? undefined : parseRegistration(raw);

  if (registration === undefined) {
    return <p className="text-sm text-muted">Loading your demonstration summary…</p>;
  }

  if (!registration) {
    return (
      <div className="rounded-3xl border border-dashed border-line px-6 py-12">
        <h2 className="text-2xl font-semibold">No demonstration is waiting.</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
          Complete the registration form to see a sample summary. Nothing is purchased on this website.
        </p>
        <Link href="/tickets#register" className="mt-6 inline-flex text-sm font-semibold text-magenta">
          Go to registration
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-magenta">Demonstration only</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">No ticket was purchased.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        This summary was saved in this browser only. No payment was processed, no seat was reserved, and the details were not sent to an inbox.
      </p>
      <dl className="mt-8 grid gap-5 sm:grid-cols-2">
        <Item label="Reference" value={registration.reference} />
        <Item label="Name" value={registration.name} />
        <Item label="Email" value={registration.email} />
        <Item label="Phone" value={registration.phone} />
        <Item label="Event" value={registration.eventTitle} />
        <Item label="Category" value={registration.tierName} />
        <Item label="Quantity" value={String(registration.quantity)} />
        <Item
          label="Subtotal"
          value={`${formatMoney(registration.unitPrice)} × ${registration.quantity} = ${formatMoney(registration.subtotal)}`}
        />
      </dl>
      <button
        type="button"
        className="mt-8 text-sm font-semibold text-magenta"
        onClick={clearRegistration}
      >
        Clear this demonstration
      </button>
    </div>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-navy">{value}</dd>
    </div>
  );
}
