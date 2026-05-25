import { ActionButtons } from "@/components/home/action-buttons";
import { heroSlides } from "@/components/home/landing-data";

function HeroSlide({
  accentClass,
  description,
  eyebrow,
  index,
  surfaceClass,
  titleHighlight,
  titlePrefix
}: Readonly<{
  accentClass: string;
  description: string;
  eyebrow: string;
  index: number;
  surfaceClass: string;
  titleHighlight: string;
  titlePrefix: string;
}>) {
  return (
    <article
      className={`relative min-h-[68svh] w-full shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/8 px-6 pb-8 pt-6 ${surfaceClass}`}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent opacity-30" />
      <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-utility font-semibold uppercase tracking-[0.3em] text-white/70">
        DIGIT OS
      </div>
      <div className="flex h-full flex-col justify-end">
        <span
          className={`mb-3 font-headline text-[10px] font-bold uppercase tracking-[0.25em] ${accentClass}`}
        >
          {eyebrow}
        </span>
        {index === 0 ? (
          <h1 className="mb-4 max-w-[13ch] font-headline text-[2.4rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-[2.8rem]">
            {titlePrefix}
            <br />
            <span className="gradient-text-precision">{titleHighlight}</span>
          </h1>
        ) : (
          <h2 className="mb-4 max-w-[13ch] font-headline text-[2.4rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-[2.8rem]">
            {titlePrefix}
            <br />
            <span className="gradient-text-precision">{titleHighlight}</span>
          </h2>
        )}
        <p className="max-w-[28ch] text-base leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>
    </article>
  );
}

export function HeroSection() {
  const [firstSlide, ...remainingSlides] = heroSlides;

  return (
    <section className="hero-bg-gradient relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:pb-24">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="font-headline text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
            DIGIT Trading Academy
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-utility font-semibold uppercase tracking-[0.3em] text-white/60">
            Mobile First
          </span>
        </div>

        <div className="xl:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 no-scrollbar sm:-mx-6 sm:px-6">
            {heroSlides.map((slide, index) => (
              <HeroSlide key={slide.titleHighlight} index={index} {...slide} />
            ))}
          </div>
          <div className="mb-6 flex items-center justify-center gap-2">
            {heroSlides.map((slide, index) => (
              <span
                key={slide.titleHighlight}
                className={`h-1 rounded-full ${
                  index === 0 ? "w-10 bg-primary" : "w-6 bg-white/20"
                }`}
              />
            ))}
          </div>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-white/45">
            Desliza para explorar la narrativa DIGIT
          </p>
          <div className="mx-auto max-w-md">
            <ActionButtons />
          </div>
        </div>

        <div className="hidden gap-6 xl:grid xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="flex flex-col gap-6">
            <HeroSlide index={0} {...firstSlide} />
            <div className="max-w-md">
              <ActionButtons />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {remainingSlides.map((slide, index) => (
              <HeroSlide key={slide.titleHighlight} index={index + 1} {...slide} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
