"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Container } from "@/components/ui/Container";

const SLIDE_MS = 500;

const slides = [
  {
    src: "/images/gallery/summit-keynote.jpg",
    alt: "A speaker in a dark suit stands on a blue-lit stage, addressing a seated audience in front of a blank screen.",
    kicker: "Keynote",
    title: "A room built for the opening",
  },
  {
    src: "/images/gallery/workshop-session.jpg",
    alt: "Six adults sit around a wooden conference table in a bright room, talking through a workshop.",
    kicker: "Workshop",
    title: "A smaller table, a closer conversation",
  },
  {
    src: "/images/gallery/evening-gathering.jpg",
    alt: "Guests in formal attire stand in small groups at an evening reception under pendant lights and magenta wall lighting.",
    kicker: "Reception",
    title: "The hour after the last session",
  },
] as const;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function GallerySlider() {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const playing = !paused && !reducedMotion;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <section id="gallery" className="bg-white pb-12" aria-roledescription="carousel" aria-label="Sample gathering scenes">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-magenta">In the room</p>
        <h2 className="section-title mt-3 max-w-2xl font-semibold text-navy">Three views of a gathering.</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Keynote, workshop, and reception. These scenes are sample atmosphere for the site, not photographs of a confirmed event.
        </p>
      </Container>

      <div
        className="relative mt-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {slides.map((slide, slideIndex) => (
              <figure key={slide.src} className="relative h-[58vw] min-h-60 max-h-[640px] w-full shrink-0" aria-hidden={slideIndex !== index}>
                <Image
                  src={slide.src}
                  alt={slideIndex === index ? slide.alt : ""}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/75 to-transparent px-4 pb-6 pt-20 sm:px-8 sm:pb-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pink">{slide.kicker}</p>
                  <p className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">{slide.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 px-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm"
            onClick={() => go(index - 1)}
            aria-label="Previous scene"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm" role="group" aria-label="Scenes">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show ${slide.kicker}`}
                aria-current={slideIndex === index ? "true" : undefined}
                onClick={() => go(slideIndex)}
                className={slideIndex === index ? "h-2.5 w-7 rounded-full bg-magenta" : "h-2.5 w-2.5 rounded-full bg-navy/25"}
              />
            ))}
          </div>
          {reducedMotion ? null : (
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm"
              aria-pressed={!playing}
              aria-label={playing ? "Pause scenes" : "Play scenes"}
              onClick={() => setPaused((current) => !current)}
            >
              {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
          )}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm"
            onClick={() => go(index + 1)}
            aria-label="Next scene"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
