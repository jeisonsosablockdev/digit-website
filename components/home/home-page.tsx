import Link from "next/link";

import {
  architectureLayers,
  structureSteps
} from "@/components/home/landing-data";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { primaryNavigation } from "@/components/site-shell";
import { Icon } from "@/components/ui/icon";

const siteNavigation = primaryNavigation.filter((item) => item.href !== "/iniciar-sesion");

function TopAppBar() {
  return (
    <header className="fixed left-4 right-4 top-4 z-50 flex h-16 items-center justify-between rounded-full bg-black/60 px-4 glass-effect">
      <div className="flex items-center gap-4">
        <details className="group relative">
          <summary
            aria-label="Abrir navegacion"
            className="interactive-scale flex h-10 w-10 list-none items-center justify-center rounded-full bg-[#18181b] text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] [&::-webkit-details-marker]:hidden"
          >
            <span className="sr-only">Abrir navegacion</span>
            <span className="relative h-3.5 w-4 group-open:hidden">
              <span className="absolute left-0 top-0 h-[1.5px] w-4 rounded-full bg-white/90" />
              <span className="absolute left-0 top-[6px] h-[1.5px] w-4 rounded-full bg-white/90" />
              <span className="absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-white/90" />
            </span>
            <span className="relative hidden h-4 w-4 group-open:block">
              <span className="absolute left-0 top-[7px] h-[1.5px] w-4 rotate-45 rounded-full bg-white/90" />
              <span className="absolute left-0 top-[7px] h-[1.5px] w-4 -rotate-45 rounded-full bg-white/90" />
            </span>
          </summary>
          <nav
            aria-label="Navegacion principal movil"
            className="absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-white/10 bg-[rgba(8,8,10,0.96)] p-4 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-2">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-2xl px-4 py-3 text-base text-on-surface-variant transition-colors hover:bg-white/5 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
        <Link className="font-headline text-xl font-bold tracking-tight text-white" href="/">
          DIGIT TRADING
        </Link>
      </div>
      <Link
        aria-label="Profile"
        className="interactive-scale flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black text-white shadow-[0_0_15px_rgba(124,77,255,0.5)]"
        href="/iniciar-sesion"
      >
        <Icon className="h-5 w-5" name="person" />
      </Link>
    </header>
  );
}

function StructureSection() {
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

function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20" id="architecture-layers-section">
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
      <div className="mx-auto max-w-md">
        <div className="relative mb-14">
          <h2 className="mb-8 text-center font-headline text-4xl font-bold leading-normal tracking-tighter text-white">
            Alcanza la rentabilidad conoce la{"  "}
            <div>
              <span className="bg-gradient-to-r from-[#7C4DFF] to-[#cdbdff] bg-clip-text text-transparent">
                arquitectura
              </span>
            </div>
            <div className="mt-3">
              <span className="ml-1.5 inline-block bg-gradient-to-r from-[#7C4DFF] to-[#cdbdff] bg-clip-text text-5xl text-transparent">
                DIGIT
              </span>
            </div>
          </h2>
          <p className="mx-auto mt-4 mb-14 max-w-xs text-center font-body text-base leading-relaxed text-on-surface-variant">
            Descubre la infraestructura diseñada para potenciar tu ejecución. Un ecosistema
            integrado para llevar tus habilidades al siguiente nivel profesional.
          </p>
        </div>
        <div className="space-y-4">
          {architectureLayers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-lg bg-surface p-8 shadow-2xl transition-all duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="bg-background px-6 py-20" id="newsletter-section">
      <div className="mx-auto max-w-md">
        <div
          className="glass-effect relative overflow-hidden rounded-[2.5rem] border border-white/5 p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 13, 22, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)"
          }}
        >
          <span className="mb-8 block font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
            EL CÍRCULO DIGIT
          </span>
          <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-white">
            Únete a 20k+ Traders
          </h2>
          <p className="mb-10 px-4 font-body text-base leading-relaxed text-on-surface-variant">
            Recibe análisis de mercado semanales y señales de trading exclusivas directamente en tu
            bandeja de entrada.
          </p>
          <div className="space-y-4">
            <div className="relative">
              <input
                className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 font-body text-white placeholder:text-on-surface-variant/50 focus:border-primary/50 focus:outline-none"
                placeholder="Ingresa tu correo"
                type="email"
              />
            </div>
            <Link
              className="interactive-scale block w-full rounded-full bg-white py-4 text-center font-headline font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform"
              href="/recursos"
            >
              Unirse a la Comunidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
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

function MembershipSection() {
  return (
    <section className="bg-background px-6 py-20" id="total-access-section">
      <div className="mx-auto max-w-md">
        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/5 p-10 text-center shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(20, 20, 25, 1) 0%, rgba(10, 10, 12, 1) 100%)"
          }}
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-secondary/10 blur-[80px]" />
          <span className="mb-8 block font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-[#00E5FF]">
            únete a DIGIT
          </span>
          <h2 className="mb-6 font-headline text-3xl font-bold leading-tight tracking-tight text-white">
            Domina el sistema: elige tu evolución hoy.
          </h2>
          <p className="mb-10 px-2 font-body text-base leading-relaxed text-on-surface-variant">
            Accede a todas las capas de DIGIT OS
          </p>
          <Link
            className="interactive-scale block w-full rounded-[2rem] bg-white py-5 text-center font-headline font-bold text-black shadow-xl transition-all hover:bg-gray-100"
            href="/membresia"
          >
            Explorar la membresía
          </Link>
        </div>
      </div>
    </section>
  );
}

function BottomNavBar() {
  const items = [
    { icon: "home" as const, label: "Home", href: "/", active: true },
    { icon: "school" as const, label: "Academy", href: "/academia" },
    { icon: "show_chart" as const, label: "Performance", href: "/plataforma" },
    { icon: "groups" as const, label: "Community", href: "/recursos" },
    { icon: "person" as const, label: "Profile", href: "/iniciar-sesion" }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-around rounded-full border border-white/10 bg-glass-bg px-2 py-2 glass-effect shadow-2xl shadow-[0_0_25px_rgba(124,77,255,0.15)]">
      {items.map((item) => (
        <Link
          key={item.label}
          aria-label={item.label}
          aria-current={item.active ? "page" : undefined}
          className={`interactive-scale flex items-center justify-center p-3 ${
            item.active
              ? "rounded-full bg-secondary/10 text-secondary"
              : "text-on-surface-variant"
          }`}
          href={item.href}
        >
          <Icon className="h-6 w-6" name={item.icon} />
        </Link>
      ))}
    </nav>
  );
}

export function HomePageSections() {
  return (
    <div className="min-h-screen bg-background pb-32 font-body text-on-surface selection:bg-primary/30">
      <TopAppBar />
      <HeroCarousel />
      <StructureSection />
      <ArchitectureSection />
      <CommunitySection />
      <ManifestoSection />
      <MembershipSection />
      <section className="bg-[#050505] px-6 py-20">
        <div className="flex items-center justify-center" />
      </section>
      <BottomNavBar />
    </div>
  );
}
