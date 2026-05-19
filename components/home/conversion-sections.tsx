import { ActionButtons } from "@/components/home/action-buttons";
import {
  comparisonRows,
  faqs,
  footerLinks,
  profiles
} from "@/components/home/landing-data";
import { Icon } from "@/components/ui/icon";

export function MembershipSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-surface-container p-8 text-center">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              Acceso Total
            </span>
            <h2 className="mb-3 font-headline text-2xl font-bold text-white md:text-4xl">
              La membresía concentra la parte activa del sistema.
            </h2>
            <p className="mb-8 text-sm text-on-surface-variant md:text-base">
              Accede a todas las capas de DIGIT OS, sesiones en vivo y la
              comunidad privada.
            </p>
            <button className="interactive-scale w-full rounded-2xl bg-white px-6 py-4 font-headline text-base font-bold text-black md:w-auto md:min-w-[320px]">
              Explorar la membresía
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfilesSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10 text-center">
          <h2 className="font-headline text-2xl font-bold md:text-4xl">
            Diseñado para perfiles con vocación de proceso.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="rounded-2xl border border-white/10 bg-background p-6"
            >
              <h3 className={`mb-2 font-headline font-bold ${profile.color}`}>
                {profile.title}
              </h3>
              <p className="text-sm text-on-surface-variant md:text-base">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ThesisSection() {
  return (
    <section className="relative overflow-hidden bg-primary/5 px-6 py-20 text-center">
      <div className="hero-bg-gradient absolute inset-0 opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-6 font-headline text-3xl font-bold md:text-5xl">
          El trading como herramienta de expansión personal y financiera.
        </h2>
        <p className="text-lg font-medium italic text-primary md:text-2xl">
          &quot;Disciplina, estructura y criterio convierten la práctica en una
          base de expansión sostenida.&quot;
        </p>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10">
          <h2 className="mb-3 font-headline text-2xl font-bold md:text-4xl">
            La ventaja competitiva de DIGIT.
          </h2>
          <div className="mb-8 h-1 w-12 rounded-full bg-secondary" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="col-span-2 flex border-b border-white/10 pb-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            <div className="w-1/2">Enfoque Común</div>
            <div className="w-1/2 text-secondary">Sistema DIGIT</div>
          </div>
          {comparisonRows.map(([left, right], index) => (
            <div key={left} className="contents">
              <div
                className={`w-1/2 pr-2 text-on-surface-variant ${
                  index > 0 ? "pt-4" : ""
                }`}
              >
                {left}
              </div>
              <div
                className={`w-1/2 border-l border-white/10 pl-2 font-medium text-white ${
                  index > 0 ? "pt-4" : ""
                }`}
              >
                {right}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-surface-container/20 px-6 py-16">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mb-10">
          <h2 className="font-headline text-2xl font-bold md:text-4xl">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/5 bg-surface p-5 open:bg-surface-container/50"
            >
              <summary className="flex list-none items-center justify-between gap-4 font-headline font-bold text-white">
                {faq.question}
                <Icon
                  className="h-6 w-6 shrink-0 text-secondary transition-transform group-open:rotate-180"
                  name="expand_more"
                />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FooterCtaSection() {
  return (
    <section className="border-t border-white/5 px-6 py-16 text-center">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-8 font-headline text-2xl font-bold md:text-4xl">
          Construye una estructura que puedas sostener en el tiempo.
        </h2>
        <ActionButtons />
      </div>
    </section>
  );
}

export function SiteFooterSection() {
  return (
    <footer className="border-t border-white/5 bg-surface px-6 py-10 pb-24">
      <div className="mb-8 flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
        {footerLinks.map((item) => (
          <a key={item} className="transition-colors hover:text-primary" href="#">
            {item}
          </a>
        ))}
      </div>
      <div className="text-center text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/50">
        © 2024 DIGIT Trading. Plataforma Integral.
      </div>
    </footer>
  );
}
