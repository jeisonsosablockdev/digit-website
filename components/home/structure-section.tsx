import { structureSteps } from "@/components/home/landing-data";

export function StructureSection() {
  return (
    <section
      className="bg-background px-6 py-20"
      id="structure-section"
      style={{
        background: "radial-gradient(circle, rgba(124, 77, 255, 0.15) 0%, rgb(5, 5, 5) 70%)"
      }}
    >
      <div className="mx-auto max-w-md">
        <div className="relative mb-6 text-center">
          <h2 className="mb-4 font-headline text-4xl font-bold leading-tight tracking-tight text-white">
            Constuye tu progreso
            <div>
              <span className="bg-gradient-to-b from-[#cdbdff] to-[#7c4dff] bg-clip-text text-transparent">
                con estructura.
              </span>
            </div>
          </h2>
        </div>
        <p className="mb-12 text-center font-body text-base leading-relaxed text-on-surface-variant">
          El trading no es el camino rapido, es una via para construir performance profesional
          mediante entrenamiento constante.
        </p>
        <div className="relative">
          <div className="absolute bottom-2 left-[11px] top-2 w-[2px] bg-gradient-to-b from-[#7C4DFF] via-[#5986FF] to-[#00E5FF] opacity-50" />
          <div className="space-y-12">
            {structureSteps.map((step, index) => (
              <div key={step.title} className="group relative flex items-start gap-8">
                <div className="relative z-10">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background ${step.borderClass}`}
                    style={{
                      boxShadow:
                        index === 0
                          ? "0 0 10px rgba(124,77,255,0.4)"
                          : index === 1
                            ? "0 0 10px rgba(89,134,255,0.3)"
                            : index === 2
                              ? "0 0 10px rgba(45,182,255,0.3)"
                              : "0 0 10px rgba(0,229,255,0.4)"
                    }}
                  >
                    <div className={`h-2 w-2 rounded-full ${step.dotClass}`} />
                  </div>
                </div>
                <div className={`flex-1 ${index === structureSteps.length - 1 ? "" : "pb-12"}`}>
                  <p className={`mb-1 font-utility text-sm font-semibold ${step.textClass}`}>
                    {step.number}
                  </p>
                  <h3
                    className={`mb-2 font-headline text-sm font-bold uppercase tracking-wider ${step.textClass}`}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-on-surface">
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
