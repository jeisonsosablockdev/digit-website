import { architectureLayers } from "@/components/home/landing-data";
import { Icon } from "@/components/ui/icon";

export function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28" id="architecture-layers-section">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #7C4DFF 0%, transparent 70%)", filter: "blur(100px)" }}
        />
      </div>
      <div
        className="pointer-events-none absolute -left-[20%] top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgb(124, 77, 255) 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <div className="mx-auto max-w-md lg:max-w-[1280px] lg:grid lg:grid-cols-[minmax(320px,380px)_minmax(0,1fr)] lg:gap-16">
        <div className="relative mb-14 lg:mb-0 lg:pt-4">
          <h2 className="mb-8 text-center font-headline text-4xl font-bold leading-normal tracking-tighter text-white lg:text-left lg:text-5xl">
            Alcanza la rentabilidad conoce la{"  "}
            <div>
              <span className="bg-gradient-to-r from-[#7C4DFF] to-[#cdbdff] bg-clip-text text-transparent">
                arquitectura
              </span>
            </div>
            <div className="mt-3">
              <span className="ml-1.5 inline-block bg-gradient-to-r from-[#7C4DFF] to-[#cdbdff] bg-clip-text text-5xl text-transparent lg:ml-0 lg:text-6xl">
                DIGIT
              </span>
            </div>
          </h2>
          <p className="mx-auto mt-4 mb-14 max-w-xs text-center font-body text-base leading-relaxed text-on-surface-variant lg:mx-0 lg:max-w-sm lg:text-left lg:text-lg lg:leading-8">
            Descubre la infraestructura diseñada para potenciar tu ejecución. Un ecosistema
            integrado para llevar tus habilidades al siguiente nivel profesional.
          </p>
        </div>
        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          {architectureLayers.map((layer) => (
            <div key={layer.title} className="relative">
              {(layer.title === "Performance System" || layer.title === "Library Intelligence") && (
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-10 -bottom-6 -top-6 -z-10 rounded-full blur-[60px] ${
                    layer.title === "Performance System" ? "bg-[#00E5FF]/18" : "bg-[#7C4DFF]/20"
                  }`}
                />
              )}
              <article
                className="h-full rounded-lg bg-surface p-8 shadow-2xl transition-all duration-300 lg:rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(11, 11, 18, 0.95) 0%, rgba(11, 11, 18, 0.85) 100%)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.8) 0px 10px 40px -15px, rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset"
                }}
              >
                <div
                  className={`mb-6 flex h-10 w-10 items-center justify-center rounded-2xl border ${layer.iconClass}`}
                >
                  <Icon className="h-5 w-5" name={layer.icon} />
                </div>
                <h3 className="mb-3 font-headline text-xl font-bold tracking-tight text-white">
                  {layer.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-[#a1a1aa]">
                  {layer.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
