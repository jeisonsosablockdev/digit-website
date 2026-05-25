import Link from "next/link";

export function MembershipSection() {
  return (
    <section className="bg-background px-6 py-20 lg:px-8 lg:py-28" id="total-access-section">
      <div className="mx-auto max-w-md lg:max-w-[1280px]">
        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.04] p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.02)] lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-10 lg:p-14 lg:text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(20, 20, 25, 1) 0%, rgba(10, 10, 12, 1) 100%)"
          }}
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-secondary/10 blur-[80px]" />
          <div>
            <span className="mb-8 block font-headline text-[10px] font-bold uppercase tracking-[0.4em] text-[#00E5FF]">
              únete a DIGIT
            </span>
            <h2 className="mb-6 font-headline text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Domina el sistema: elige tu evolución hoy.
            </h2>
            <p className="mb-10 px-2 font-body text-base leading-relaxed text-on-surface-variant lg:mb-0 lg:max-w-2xl lg:px-0 lg:text-lg lg:leading-8">
              Accede a todas las capas de DIGIT OS
            </p>
          </div>
          <Link
            className="interactive-scale block w-full rounded-[2rem] bg-white py-5 text-center font-headline font-bold text-black shadow-xl transition-all hover:bg-gray-100 lg:w-auto lg:px-8"
            href="/membresia"
          >
            Explorar la membresía
          </Link>
        </div>
      </div>
    </section>
  );
}
