import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-magenta">{eyebrow}</p>
        <h2 className={cn("section-title mt-3 font-semibold", tone === "light" ? "text-white" : "text-navy")}>
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-4 text-base leading-7 sm:text-lg", tone === "light" ? "text-white/75" : "text-muted")}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
