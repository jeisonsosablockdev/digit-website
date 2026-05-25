import Link from "next/link";

export function ManifestoSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 py-24 text-center"
      id="expansion-tool-section"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 -mr-32 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#00E5FF] opacity-20 blur-[100px]" />
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 font-headline text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
          El trading como herramienta de{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            expansión personal y financiera
          </span>
          .
        </h2>
        <p className="font-body text-xl italic leading-relaxed text-secondary md:text-2xl">
          "Disciplina, estructura y criterio convierten la práctica en una base de <br />{" "}
          expansión sostenida."
        </p>
      </div>
      <div className="mt-12 flex w-full max-w-xs flex-col gap-4 px-6">
        <Link
          className="interactive-scale w-full rounded-full bg-gradient-to-r from-[#7c4dff] to-[#00e5ff] px-8 py-4 text-center font-headline font-bold text-black shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-all"
          href="/iniciar-sesion"
        >
          Entrar a DIGIT
        </Link>
        <Link
          className="interactive-scale w-full rounded-full border border-white/10 bg-[#111111] px-8 py-4 text-center font-headline font-bold text-white transition-all hover:bg-white/5"
          href="/metodo-digit"
        >
          Comienza tu entrenamiento
        </Link>
      </div>
    </section>
  );
}
