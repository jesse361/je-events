"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    const menuButton = menuButtonRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      Array.from(
        root?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const frame = window.requestAnimationFrame(() => {
      focusable()[0]?.focus();
    });

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (menuButton && document.contains(menuButton)) {
        menuButton.focus();
      } else {
        previouslyFocused?.focus();
      }
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="px-3 pt-3 sm:px-5">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 rounded-full border border-line bg-white px-3 shadow-[0_10px_40px_rgba(8,15,43,0.08)] sm:gap-3 sm:px-4">
          <Logo compact />
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium",
                    active ? "text-magenta" : "text-navy/80 hover:text-navy",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <form action="/events" className="relative hidden md:block">
              <label htmlFor="desktop-search" className="sr-only">
                Search events
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="desktop-search"
                name="q"
                placeholder="Search events"
                className="h-10 w-36 rounded-full border border-line bg-soft pl-9 pr-3 text-sm text-navy placeholder:text-muted lg:w-48"
              />
            </form>
            <Link
              href="/tickets"
              className="hidden h-10 items-center rounded-full bg-gradient-to-r from-violet to-magenta px-4 text-sm font-semibold text-white sm:inline-flex"
            >
              Get Tickets
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpenPath(pathname)}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-50 flex flex-col bg-navy text-white"
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <Logo inverted />
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
              onClick={() => setOpenPath(null)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 pb-10 sm:px-6">
            <form action="/events" className="relative">
              <label htmlFor="mobile-search" className="sr-only">
                Search events
              </label>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                id="mobile-search"
                name="q"
                placeholder="Search events"
                className="h-12 w-full rounded-full border border-white/15 bg-white/5 pl-11 pr-4 text-base text-white placeholder:text-white/50"
              />
            </form>
            <nav className="mt-6 flex flex-col" aria-label="Mobile">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "border-b border-white/10 py-4 text-2xl font-semibold tracking-tight",
                      active ? "text-pink" : "text-white",
                    )}
                    onClick={() => setOpenPath(null)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/tickets"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-violet to-magenta text-sm font-semibold"
              onClick={() => setOpenPath(null)}
            >
              Get Tickets
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
