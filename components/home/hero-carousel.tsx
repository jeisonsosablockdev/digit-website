"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

import { heroSlides } from "@/components/home/landing-data";

const AUTO_ADVANCE_MS = 4500;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

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
    <section className="relative overflow-hidden bg-[#050505] pt-20 lg:pt-32">
      <h1 className="sr-only">
        DIGIT Trading Academy - Plataforma integral para traders que buscan estructura,
        rendimiento y comunidad
      </h1>
      <div className="relative h-[100dvh] w-full overflow-hidden lg:hidden">
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
                <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight text-white">
                  {slide.titlePrefix}
                  <br />
                  <span className="gradient-text-precision">{slide.titleHighlight}</span>
                </h2>
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
      </div>

      <div className="relative mx-auto hidden w-full max-w-[1280px] px-8 pb-20 lg:block xl:px-12">
        <div className="grid min-h-[760px] items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(520px,0.98fr)]">
          <div className="relative z-10 max-w-[34rem] pt-16">
            <span className={`mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 font-utility text-xs font-semibold uppercase tracking-[0.28em] ${activeSlide.accentClass}`}>
              {activeSlide.eyebrow}
            </span>
            <h2 className="font-headline text-6xl font-bold leading-[0.94] tracking-[-0.06em] text-white xl:text-7xl">
              {activeSlide.titlePrefix}
              <span className="mt-4 block gradient-text-precision">{activeSlide.titleHighlight}</span>
            </h2>
            <p className="mt-8 max-w-xl font-body text-lg leading-8 text-white/68">
              {activeSlide.description}
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                className="interactive-scale rounded-full bg-gradient-to-r from-[#7c4dff] to-[#00e5ff] px-7 py-4 font-headline text-base font-bold text-[#050505] shadow-[0_0_30px_rgba(124,77,255,0.25)]"
                href="/iniciar-sesion"
              >
                Entrar a DIGIT
              </Link>
              <Link
                className="interactive-scale rounded-full border border-white/6 bg-white/[0.04] px-7 py-4 font-headline text-base font-semibold text-white transition-colors hover:bg-white/[0.08]"
                href="/recursos"
              >
                Explorar aprendizaje gratuito
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-4">
              <div className="rounded-[1.75rem] border border-white/[0.04] bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <p className="font-headline text-3xl font-bold text-white">20k+</p>
                <p className="mt-2 text-sm leading-6 text-white/55">Traders dentro del ecosistema DIGIT.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/[0.04] bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <p className="font-headline text-3xl font-bold text-white">5</p>
                <p className="mt-2 text-sm leading-6 text-white/55">Capas integradas entre academia, ejecución y comunidad.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/[0.04] bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <p className="font-headline text-3xl font-bold text-white">24/7</p>
                <p className="mt-2 text-sm leading-6 text-white/55">Acceso a biblioteca, plataforma y recursos del proceso.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-14 top-20 h-44 w-44 rounded-full bg-[#7c4dff]/20 blur-[88px]" />
            <div className="pointer-events-none absolute -right-6 bottom-16 h-52 w-52 rounded-full bg-[#00e5ff]/18 blur-[96px]" />
            <div className="overflow-hidden rounded-[2.75rem] border border-white/[0.04] bg-[linear-gradient(135deg,rgba(14,14,18,0.94)_0%,rgba(7,7,9,0.98)_100%)] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.02)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-utility text-[11px] uppercase tracking-[0.28em] text-white/45">
                    DIGIT OS
                  </p>
                  <p className="mt-2 font-headline text-xl font-semibold text-white">
                    Plataforma integral para traders en evolución
                  </p>
                </div>
                <div className="flex gap-2">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.titleHighlight}
                      aria-label={`Ir al slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex ? "w-10 bg-secondary" : "w-2.5 bg-white/20"
                      }`}
                      onClick={() => goToSlide(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
                <div className="relative min-h-[540px] overflow-hidden rounded-[2.2rem] border border-white/[0.04] bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                  <Image
                    alt={activeSlide.titleHighlight}
                    className="object-cover opacity-90"
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    src={activeSlide.imageSrc}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04)_0%,rgba(5,5,5,0.14)_32%,rgba(5,5,5,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="rounded-[1.8rem] border border-white/[0.04] bg-black/35 p-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                      <p className="font-utility text-[11px] uppercase tracking-[0.3em] text-secondary">
                        {activeSlide.eyebrow}
                      </p>
                      <p className="mt-3 font-headline text-2xl font-semibold text-white">
                        {activeSlide.titleHighlight}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/60">
                        {activeSlide.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {heroSlides.map((slide, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={slide.titleHighlight}
                        className={`rounded-[1.75rem] border p-5 text-left transition-all ${
                          isActive
                            ? "border-secondary/20 bg-secondary/10 shadow-[0_0_24px_rgba(0,229,255,0.1),inset_0_1px_0_rgba(255,255,255,0.02)]"
                            : "border-white/[0.04] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] hover:bg-white/[0.05]"
                        }`}
                        onClick={() => goToSlide(index)}
                        type="button"
                      >
                        <p className={`font-utility text-[10px] uppercase tracking-[0.28em] ${slide.accentClass}`}>
                          {slide.eyebrow}
                        </p>
                        <p className="mt-3 font-headline text-lg font-semibold text-white">
                          {slide.titlePrefix}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/58">
                          {slide.titleHighlight}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
