"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { isValidEmail } from "@/lib/filters";

type Status = "idle" | "loading" | "invalid" | "unconfigured";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setStatus("invalid");
      setMessage("Enter an email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("invalid");
      setMessage("Enter a valid email address, such as name@example.com.");
      return;
    }
    setStatus("loading");
    setMessage("");
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setStatus("unconfigured");
    setMessage("This address looks valid, but newsletter delivery is not connected yet. It was not saved.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Your email address"
          aria-invalid={status === "invalid"}
          aria-describedby="newsletter-status"
          className="h-12 min-w-0 flex-1 rounded-full border border-white/15 bg-white px-4 text-sm text-navy placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-magenta px-5 text-sm font-semibold text-white disabled:opacity-70"
        >
          {status === "loading" ? "Checking" : "Subscribe"}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p id="newsletter-status" role={status === "idle" ? undefined : "status"} className="mt-3 min-h-5 text-sm text-pink">
        {message}
      </p>
    </form>
  );
}
