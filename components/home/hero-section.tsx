import { ActionButtons } from "@/components/home/action-buttons";

export function HeroSection() {
  return (
    <section className="hero-bg-gradient relative overflow-hidden px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-4">
          <span className="font-headline text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
            La Evolucion del Entrenamiento
          </span>
        </div>
        <h1 className="mb-6 max-w-[17rem] font-headline text-[2.125rem] font-bold leading-[1.05] tracking-tight sm:max-w-[320px] sm:text-[2.5rem] sm:leading-[1.1] md:max-w-5xl md:text-[4.5rem] md:leading-[0.98]">
          Construye una práctica con estructura. Opera con criterio.{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          <span className="gradient-text-precision">
            Convierte tu progreso en un proceso medible.
          </span>
        </h1>
        <p className="mb-6 max-w-[17rem] text-base leading-relaxed text-on-surface-variant sm:max-w-[320px] md:max-w-2xl md:text-lg">
          DIGIT Trading Academy reúne academia, journaling, biblioteca,
          revisión y desarrollo personal dentro de un entorno diseñado para
          fortalecer criterio, consolidar disciplina y hacer visible la
          evolución del operador.
        </p>
        <p className="mb-10 max-w-[17rem] text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/80 sm:max-w-[320px] md:max-w-3xl">
          Academia estructurada, performance system, biblioteca aplicada y
          entorno de seguimiento dentro de una sola experiencia.
        </p>
        <div className="max-w-[17rem] sm:max-w-sm">
          <ActionButtons />
        </div>
        <div className="absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
      </div>
    </section>
  );
}
