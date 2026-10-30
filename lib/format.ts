const utc = { timeZone: "UTC" } as const;

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    ...utc,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatTimeRange(start: string, end: string) {
  return `${formatTime(start)} – ${formatTime(end)} UTC`;
}

export function formatLongDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    ...utc,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatEventRange(startIso: string, endIso: string) {
  const startDay = startIso.slice(0, 10);
  const endDay = endIso.slice(0, 10);
  const start = new Date(startIso);
  const end = new Date(endIso);

  if (startDay === endDay) {
    return new Intl.DateTimeFormat("en-US", {
      ...utc,
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(start);
  }

  const sameMonth =
    start.getUTCMonth() === end.getUTCMonth() &&
    start.getUTCFullYear() === end.getUTCFullYear();

  if (sameMonth) {
    const month = new Intl.DateTimeFormat("en-US", {
      ...utc,
      month: "short",
    }).format(start);
    return `${month} ${start.getUTCDate()}–${end.getUTCDate()}, ${start.getUTCFullYear()}`;
  }

  const left = new Intl.DateTimeFormat("en-US", {
    ...utc,
    month: "short",
    day: "numeric",
  }).format(start);
  const right = new Intl.DateTimeFormat("en-US", {
    ...utc,
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(end);
  return `${left} – ${right}`;
}

export function dayKey(iso: string) {
  return iso.slice(0, 10);
}

export type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getRemaining(targetIso: string, now: number): Remaining | null {
  const diff = new Date(targetIso).getTime() - now;
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function padTime(value: number) {
  return value.toString().padStart(2, "0");
}
