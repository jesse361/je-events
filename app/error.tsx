"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="px-4 pb-24 pt-40">
      <h1 className="text-4xl font-semibold tracking-tight">Something went wrong.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
        The page could not be shown. You can try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
      >
        Try again
      </button>
    </section>
  );
}
