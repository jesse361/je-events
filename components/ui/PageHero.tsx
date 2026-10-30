import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  description,
  eyebrow,
  current,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  current: string;
}) {
  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden pb-12 pt-32 sm:min-h-[400px] sm:pt-40">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_72%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/45" />
      <Container className="relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">{current}</li>
          </ol>
        </nav>
        {eyebrow ? (
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-pink">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
