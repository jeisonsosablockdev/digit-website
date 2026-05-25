"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

import { heroSlides } from "@/components/home/landing-data";

const AUTO_ADVANCE_MS = 4500;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useEffectEvent((nextIndex: number) => {
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      goToSlide((activeIndex + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeIndex, goToSlide]);

  return (
    <section className="relative -mt-16 h-[100dvh] w-full overflow-hidden bg-[#050505]">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <article
            key={slide.titleHighlight}
            aria-hidden={activeIndex !== index}
            className="relative h-full w-full shrink-0"
          >
            <Image
              alt={slide.titleHighlight}
              className="object-cover opacity-80 mix-blend-screen"
              fill
              priority={index === 0}
              sizes="100vw"
              src={slide.imageSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-64">
              <span
                className={`mb-2 font-headline text-[10px] font-bold uppercase tracking-[0.25em] ${slide.accentClass}`}
              >
                {slide.eyebrow}
              </span>
              {index === 0 ? (
                <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight text-white">
                  {slide.titlePrefix}
                  <br />
                  <span className="gradient-text-precision">{slide.titleHighlight}</span>
                </h1>
              ) : (
                <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight text-white">
                  {slide.titlePrefix}
                  <br />
                  <span className="gradient-text-precision">{slide.titleHighlight}</span>
                </h2>
              )}
              <p className="max-w-sm font-body text-base leading-relaxed text-[#a1a1aa]">
                {slide.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-48 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.titleHighlight}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-1 w-8 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#7c4dff]" : "bg-white/20"
            }`}
            onClick={() => goToSlide(index)}
            type="button"
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-0 z-30 flex w-full flex-col gap-3 px-6">
        <Link
          className="interactive-scale w-full rounded-xl bg-gradient-to-r from-[#7c4dff] to-[#00e5ff] py-4 text-center font-headline font-bold text-[#050505] shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-transform"
          href="/iniciar-sesion"
        >
          Entrar a DIGIT
        </Link>
        <Link
          className="interactive-scale w-full rounded-xl border border-white/10 bg-white/5 py-4 text-center font-headline font-semibold text-white transition-transform hover:bg-white/10"
          href="/recursos"
        >
          Explorar aprendizaje gratuito
        </Link>
      </div>
    </section>
  );
}
