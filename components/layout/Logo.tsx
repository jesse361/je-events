import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 rounded-full" aria-label="J&E Events home">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-magenta text-[11px] font-bold tracking-tight text-white">
        J&E
      </span>
      <span className={cn("truncate text-[15px] font-semibold tracking-tight", inverted ? "text-white" : "text-navy")}>
        <span className={compact ? "sm:hidden" : "hidden"}>J&E</span>
        <span className={compact ? "hidden sm:inline" : "inline"}>J&E Events</span>
      </span>
    </Link>
  );
}
