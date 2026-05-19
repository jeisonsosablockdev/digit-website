import { Icon } from "@/components/ui/icon";
import {
  landingLayers,
  libraryItems,
  osItems
} from "@/components/home/landing-data";

export function LayersSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10">
          <h2 className="mb-3 max-w-3xl font-headline text-2xl font-bold md:text-4xl">
            Cinco capas dentro de una misma arquitectura.
          </h2>
          <div className="h-1 w-12 rounded-full bg-primary" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {landingLayers.map((layer) => (
            <div
              key={layer.title}
              className="interactive-scale flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface-container/40 p-6 hover:border-primary/40"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${layer.iconColor}`}
              >
                <Icon className="h-6 w-6" name={layer.icon} />
              </div>
              <div>
                <h3 className="mb-2 font-headline text-lg font-bold">
                  {layer.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformPreviewSection() {
  return (
    <section className="bg-surface-container/20 px-6 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10">
          <h2 className="mb-3 max-w-3xl font-headline text-2xl font-bold md:text-4xl">
            DIGIT OS organiza el entorno del usuario.
          </h2>
          <div className="mb-6 h-1 w-12 rounded-full bg-secondary" />
          <p className="mb-8 text-sm text-on-surface-variant md:text-base">
            Un dashboard centralizado para navegar por tu evolución como trader.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-primary/5 md:max-w-xl">
          <div className="flex items-center gap-2 border-b border-white/5 bg-surface-container px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-4 text-[10px] uppercase tracking-widest text-on-surface-variant/50">
              DIGIT OS
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            {osItems.map(([icon, color, label]) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-surface-container/50 p-4"
              >
                <Icon className={`h-7 w-7 ${color}`} name={icon} />
                <span className="text-xs font-bold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LibrarySection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10 text-center">
          <h2 className="mb-4 font-headline text-2xl font-bold md:text-4xl">
            La biblioteca transforma estudio en comprensión aplicable.
          </h2>
          <p className="text-sm text-on-surface-variant md:text-base">
            Recursos estratégicos para consulta y revisión continua.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {libraryItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-surface-container/30 p-4"
            >
              <Icon className={`h-6 w-6 ${item.color}`} name={item.icon} />
              <span className="text-sm font-medium text-white md:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
