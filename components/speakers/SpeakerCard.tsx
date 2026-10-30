import Image from "next/image";
import Link from "next/link";
import type { Speaker } from "@/types";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Link
      href={`/speakers/${speaker.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-line bg-white p-4 shadow-[0_8px_30px_rgba(8,15,43,0.04)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image
          src={speaker.image}
          alt={speaker.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-magenta">Sample speaker</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{speaker.name}</h3>
      <p className="text-sm text-navy">{speaker.title}</p>
      <p className="mt-1 text-sm text-muted">{speaker.expertise}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{speaker.bio}</p>
    </Link>
  );
}
