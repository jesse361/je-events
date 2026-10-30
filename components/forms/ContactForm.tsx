"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { isValidEmail } from "@/lib/filters";

const subjects = ["General inquiry", "Plan an event", "Tickets", "Speakers", "Something else"];

function subjectFromTopic(topic: string | null) {
  if (topic === "plan") return "Plan an event";
  if (topic === "tickets") return "Tickets";
  return "General inquiry";
}

export function ContactForm() {
  const params = useSearchParams();
  const topic = params.get("topic");
  const [subject, setSubject] = useState(subjectFromTopic(topic));
  const [seenTopic, setSeenTopic] = useState(topic);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "unconfigured">("idle");
  const alertRef = useRef<HTMLDivElement>(null);

  if (seenTopic !== topic) {
    setSeenTopic(topic);
    setSubject(subjectFromTopic(topic));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: string[] = [];
    if (name.trim().length < 2) nextErrors.push("Enter your name.");
    if (!isValidEmail(email)) nextErrors.push("Enter a valid email address.");
    if (!subjects.includes(subject)) nextErrors.push("Choose a subject.");
    if (message.trim().length < 10) nextErrors.push("Enter a message of at least 10 characters.");
    setErrors(nextErrors);
    if (nextErrors.length > 0) {
      setStatus("idle");
      alertRef.current?.focus();
      return;
    }
    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setStatus("unconfigured");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 sm:p-7">
      <h2 className="text-2xl font-semibold tracking-tight">Send an inquiry</h2>
      {errors.length > 0 ? (
        <div ref={alertRef} tabIndex={-1} role="alert" className="mt-4 rounded-2xl border border-magenta/30 bg-magenta/5 px-4 py-3 text-sm">
          <ul className="list-disc space-y-1 pl-5">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {status === "unconfigured" ? (
        <p role="status" className="mt-4 rounded-2xl bg-soft px-4 py-3 text-sm leading-6 text-navy">
          This form is not connected to a message service yet, so your note was not delivered. Use the placeholder email only after a real address is confirmed.
        </p>
      ) : null}
      <div className="mt-6 grid gap-4">
        <label className="text-sm font-semibold" htmlFor="contact-name">
          Name
          <input id="contact-name" value={name} autoComplete="name" onChange={(event) => setName(event.target.value)} className="field mt-2 font-normal" />
        </label>
        <label className="text-sm font-semibold" htmlFor="contact-email">
          Email
          <input id="contact-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="field mt-2 font-normal" />
        </label>
        <label className="text-sm font-semibold" htmlFor="contact-subject">
          Subject
          <select id="contact-subject" value={subject} onChange={(event) => setSubject(event.target.value)} className="field mt-2 font-normal">
            {subjects.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold" htmlFor="contact-message">
          Message
          <textarea id="contact-message" value={message} onChange={(event) => setMessage(event.target.value)} className="field mt-2 font-normal" />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet to-magenta px-6 text-sm font-semibold text-white disabled:opacity-70"
      >
        {status === "loading" ? "Checking" : "Send inquiry"}
      </button>
    </form>
  );
}
