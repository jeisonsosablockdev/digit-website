import { structureSteps } from "@/components/home/landing-data";

export function StructureSection() {
  return (
    <section
      className="px-6 py-20"
      style={{
        background:
          "radial-gradient(circle at center, rgba(124, 77, 255, 0.15) 0%, rgba(5, 5, 5, 1) 70%)"
      }}
    >
      <div className="mx-auto max-w-[720px]">
        <div className="mb-6 text-center">
          <h2 className="mb-4 font-headline text-[2rem] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[2.6rem]">
            Construye tu progreso
            <span className="block bg-gradient-to-b from-[#cdbdff] to-primary bg-clip-text text-transparent">
              con estructura.
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-on-surface-variant">
            El trading no es el camino rapido, es una via para construir
            performance profesional mediante entrenamiento constante.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-primary via-[#5986ff] to-secondary opacity-50" />
          <div className="space-y-10">
            {structureSteps.map((step) => (
              <div key={step.title} className="relative flex items-start gap-6">
                <div className="relative z-10 pt-1">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background ${step.borderClass} ${step.glowClass}`}
                  >
                    <div className={`h-2 w-2 rounded-full ${step.dotClass}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className={`mb-1 font-utility text-sm font-semibold ${step.textClass}`}>
                    {step.number}
                  </p>
                  <h3 className={`mb-2 font-headline text-sm font-bold tracking-[0.2em] ${step.textClass}`}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
