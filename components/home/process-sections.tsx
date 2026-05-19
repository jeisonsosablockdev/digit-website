import { Icon } from "@/components/ui/icon";
import { progressPrinciples, workflowSteps } from "@/components/home/landing-data";

export function ProgressSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10">
          <h2 className="mb-3 max-w-3xl font-headline text-2xl font-bold md:text-4xl">
            El progreso operativo crece cuando el proceso tiene estructura.
          </h2>
          <div className="h-1 w-12 rounded-full bg-secondary" />
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="mb-6 text-sm leading-relaxed text-on-surface-variant md:text-base">
            El trading no se trata de señales o atajos, sino de desarrollar un
            criterio profesional a través de un proceso iterativo de estudio,
            ejecución, análisis y mejora.
          </p>
          <ul className="space-y-3">
            {progressPrinciples.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  name="check_circle"
                />
                <span className="text-sm text-on-surface-variant md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PositioningSection() {
  return (
    <section className="relative overflow-hidden px-6 py-12">
      <div className="absolute inset-0 border-y border-white/5 bg-surface-container/20" />
      <div className="relative z-10 mx-auto max-w-[1280px] py-8 text-center">
        <h2 className="mb-6 font-headline text-xl font-bold text-white md:text-3xl">
          Una plataforma diseñada para desarrollar operadores.
        </h2>
        <div className="glass-effect inline-block rounded-2xl border border-secondary/30 bg-background/50 p-6 shadow-lg shadow-secondary/10">
          <span className="mb-2 block font-headline text-lg italic text-secondary">
            &quot;Cada trade tiene contexto...&quot;
          </span>
          <p className="text-xs text-on-surface-variant">
            El entorno donde el contexto, la ejecución y la revisión convergen.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-2xl font-bold md:text-4xl">
            Un ciclo de trabajo orientado a mejora acumulativa.
          </h2>
        </div>
        <div className="relative flex flex-col items-center gap-6 py-8">
          <div className="absolute bottom-0 left-1/2 top-0 -z-10 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50" />
          {workflowSteps.map((step, index) => (
            <div
              key={step}
              className={`w-4/5 rounded-xl px-6 py-3 text-center ${
                index % 2 === 0
                  ? "border border-primary/30 bg-surface text-white shadow-lg shadow-primary/10"
                  : "border border-white/10 bg-surface text-on-surface-variant"
              }`}
            >
              <span className="font-headline font-bold">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
