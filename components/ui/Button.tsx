import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-violet to-magenta text-white shadow-[0_8px_24px_rgba(214,51,132,0.28)] hover:brightness-110",
  secondary: "border border-white/25 bg-white text-navy hover:bg-soft",
  ghost: "border border-line bg-white text-navy hover:border-navy/20 hover:bg-soft",
  dark: "bg-navy text-white hover:bg-navy-2",
} as const;

type Variant = keyof typeof variants;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold motion-safe:transition",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
