import { architectureLayers } from "@/components/home/landing-data";
import { Icon } from "@/components/ui/icon";

export function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 77, 255, 1) 0%, transparent 70%)"
        }}
      />
      <div className="mx-auto max-w-[760px]">
        <div className="mb-14 text-center">
          <h2 className="mb-8 font-headline text-[2rem] font-bold leading-tight tracking-[-0.05em] text-white sm:text-[2.8rem]">
            Alcanza la rentabilidad conoce la
            <span className="mt-2 block bg-gradient-to-r from-primary to-[#cdbdff] bg-clip-text text-transparent">
              arquitectura
            </span>
            <span className="mt-3 block bg-gradient-to-r from-primary to-[#cdbdff] bg-clip-text text-[2.5rem] text-transparent sm:text-[3.2rem]">
              DIGIT
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-on-surface-variant">
            Descubre la infraestructura diseñada para potenciar tu ejecución.
            Un ecosistema integrado para llevar tus habilidades al siguiente
            nivel profesional.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {architectureLayers.map((layer, index) => (
            <article
              key={layer.title}
              className={`interactive-scale rounded-[1.75rem] border border-white/6 bg-[linear-gradient(135deg,rgba(11,11,18,0.95)_0%,rgba(11,11,18,0.85)_100%)] p-8 shadow-2xl shadow-black/40 ${
                index === architectureLayers.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border ${layer.iconClass}`}
              >
                <Icon className="h-6 w-6" name={layer.icon} />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold tracking-tight text-white">
                {layer.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base">
                {layer.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
