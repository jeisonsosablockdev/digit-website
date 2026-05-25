import Link from "next/link";

import { ActionButtons } from "@/components/home/action-buttons";
import { communitySignals, footerLinks } from "@/components/home/landing-data";

export function CommunitySection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-[720px]">
        <div className="glass-effect relative overflow-hidden rounded-[2.5rem] border border-white/6 bg-[linear-gradient(135deg,rgba(15,13,22,0.95)_0%,rgba(10,10,10,0.95)_100%)] p-8 text-center sm:p-10">
          <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-secondary/10 blur-[80px]" />
          <div className="relative z-10">
            <span className="mb-8 block font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              EL CIRCULO DIGIT
            </span>
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Únete a 20k+ Traders
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant">
              Recibe análisis de mercado, sesiones en vivo y acceso al entorno
              donde la ejecución se entrena con acompañamiento real.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {communitySignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-utility font-semibold uppercase tracking-[0.18em] text-white/70"
                >
                  {signal}
                </span>
              ))}
            </div>
            <Link
              className="interactive-scale inline-flex min-w-[240px] items-center justify-center rounded-full bg-white px-6 py-4 font-headline text-base font-bold text-black"
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

export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center">
      <div className="absolute right-0 top-1/2 -z-10 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-secondary/20 blur-[120px]" />
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-headline text-4xl font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-5xl">
          El trading como herramienta de
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            expansión personal y financiera
          </span>
          .
        </h2>
        <p className="mx-auto max-w-3xl text-xl italic leading-relaxed text-secondary sm:text-2xl">
          &quot;Disciplina, estructura y criterio convierten la práctica en una
          base de expansión sostenida.&quot;
        </p>
        <div className="mx-auto mt-12 max-w-sm">
          <ActionButtons
            secondaryHref="/metodo-digit"
            secondaryLabel="Comienza tu entrenamiento"
            primaryClassName="rounded-full"
            secondaryClassName="rounded-full bg-[#111111]"
          />
        </div>
      </div>
    </section>
  );
}

export function MembershipSection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-[720px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/6 bg-[linear-gradient(135deg,rgba(20,20,25,1)_0%,rgba(10,10,12,1)_100%)] p-10 text-center shadow-2xl shadow-black/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-secondary/10 blur-[80px]" />
          <div className="relative z-10">
            <span className="mb-8 block font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              unete a DIGIT
            </span>
            <h2 className="mb-6 font-headline text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Domina el sistema: elige tu evolución hoy.
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-on-surface-variant">
              Accede a todas las capas de DIGIT OS, formación guiada, sesiones
              en vivo y una comunidad construida para sostener tu proceso.
            </p>
            <Link
              className="interactive-scale inline-flex w-full items-center justify-center rounded-[2rem] bg-white px-6 py-5 font-headline text-base font-bold text-black shadow-xl sm:w-auto sm:min-w-[320px]"
              href="/membresia"
            >
              Explorar la membresía
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooterSection() {
  return (
    <footer className="border-t border-white/5 bg-surface px-6 py-10 pb-24">
      <div className="mb-8 flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            className="transition-colors hover:text-primary"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="text-center text-[10px] uppercase tracking-[0.12em] text-on-surface-variant/50">
        © 2026 DIGIT Trading Academy. Plataforma integral.
      </div>
    </footer>
  );
}
