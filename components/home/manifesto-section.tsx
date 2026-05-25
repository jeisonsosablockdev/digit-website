import Link from "next/link";

export function ManifestoSection() {
  return (
    <section
      className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 py-24 text-center lg:px-8 lg:py-32"
      id="expansion-tool-section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[96%] -top-[18%] z-0 h-[50rem] w-[36.5rem] rounded-full opacity-100 blur-[78px] md:hidden"
        style={{
          background:
            "radial-gradient(circle at 26% 50%, rgba(22, 233, 255, 0.148) 0%, rgba(22, 233, 255, 0.083) 26%, rgba(22, 233, 255, 0.039) 46%, rgba(22, 233, 255, 0.011) 62%, transparent 76%)"
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[34%] z-0 h-[20rem] w-[12rem] rounded-full opacity-100 blur-[48px] md:hidden"
        style={{
          background:
            "radial-gradient(circle at 40% 50%, rgba(22, 233, 255, 0.085) 0%, rgba(22, 233, 255, 0.045) 34%, rgba(22, 233, 255, 0.015) 58%, transparent 78%)"
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[48%] z-0 h-[9rem] w-[9rem] rounded-full bg-[#31e6ff] opacity-[0.05] blur-[44px] md:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-[14%] z-0 h-[10rem] w-[10rem] rounded-full bg-[#7C4DFF] opacity-[0.024] blur-[54px] md:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] top-1/2 z-0 hidden h-[26rem] w-[26rem] -translate-y-[38%] rounded-full opacity-50 blur-[120px] md:block"
        style={{
          background:
            "radial-gradient(circle at center, rgba(18, 231, 255, 0.38) 0%, rgba(18, 231, 255, 0.18) 38%, transparent 72%)"
        }}
      />
      <div className="pointer-events-none absolute bottom-12 left-1/2 z-0 h-40 w-40 -translate-x-[140%] rounded-full bg-[#7C4DFF] opacity-[0.044] blur-[75px]" />
      <div className="relative z-10 mx-auto max-w-[24rem] md:max-w-2xl lg:max-w-[1100px]">
        <h2 className="mb-12 font-headline text-[1.98rem] font-bold leading-[1.08] tracking-[-0.05em] text-white sm:text-4xl md:text-5xl md:tracking-tight lg:text-[4.5rem] lg:leading-[0.98]">
          <span className="block">El trading como</span>
          <span className="block whitespace-nowrap">
            herramienta de{" "}
            <span className="bg-gradient-to-r from-[#8D7BFF] via-[#A9B7FF] to-[#72CBFF] bg-clip-text text-transparent">
              expansión
            </span>
          </span>
          <span className="block text-[#2ADFFF]">personal y financiera.</span>
        </h2>
        <p className="font-body text-xl italic leading-relaxed text-[#12E7FF] md:text-2xl lg:mx-auto lg:max-w-4xl lg:text-3xl lg:leading-[1.6]">
          "Disciplina, estructura y criterio convierten la práctica en una base de <br />{" "}
          expansión sostenida."
        </p>
      </div>
      <div className="relative z-10 mt-12 flex w-full max-w-xs flex-col gap-4 px-6 lg:max-w-none lg:flex-row lg:justify-center lg:px-0">
        <Link
          className="interactive-scale w-full rounded-full bg-gradient-to-r from-[#7c4dff] to-[#00e5ff] px-8 py-4 text-center font-headline font-bold text-black shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-all lg:w-auto lg:min-w-[260px] lg:px-10"
          href="/iniciar-sesion"
        >
          Entrar a DIGIT
        </Link>
        <Link
          className="interactive-scale w-full rounded-full border border-white/10 bg-[#111111] px-8 py-4 text-center font-headline font-bold text-white transition-all hover:bg-white/5 lg:w-auto lg:min-w-[260px] lg:px-10"
          href="/metodo-digit"
        >
          Comienza tu entrenamiento
        </Link>
      </div>
    </section>
  );
}
