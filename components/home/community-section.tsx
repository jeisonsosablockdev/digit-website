import Link from "next/link";

const communitySignals = ["ANALISIS SEMANALES", "Sesiones en vivo", "COMUNIDAD PRIVADA"] as const;

export function CommunitySection() {
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
            Accede al entorno donde compartimos análisis, sesiones en vivo y recursos para seguir
            profundizando tu proceso.
          </p>
          <div className="space-y-5">
            <div className="flex flex-wrap justify-center gap-3">
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
              className="interactive-scale block w-full rounded-full bg-white py-4 text-center font-headline font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform"
              href="/recursos"
            >
              Explorar recursos de la comunidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
