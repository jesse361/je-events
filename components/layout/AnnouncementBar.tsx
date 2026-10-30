"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useSyncExternalStore } from "react";
import {
  dismissAnnouncement,
  readAnnouncementDismissed,
  subscribeAnnouncement,
} from "@/lib/browser-store";
import { site } from "@/lib/site";

export function AnnouncementBar() {
  const dismissed = useSyncExternalStore(
    subscribeAnnouncement,
    readAnnouncementDismissed,
    () => false,
  );

  if (dismissed) return null;

  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-2.5 sm:items-center sm:px-6">
        <p className="min-w-0 flex-1 text-sm leading-5">
          {site.announcement}{" "}
          <Link href="/events" className="font-semibold text-pink underline-offset-4 hover:underline">
            Browse events
          </Link>
        </p>
        <button
          type="button"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white hover:bg-white/10"
          aria-label="Dismiss announcement"
          onClick={dismissAnnouncement}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
