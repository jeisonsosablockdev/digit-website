const layers = [
  {
    icon: "school",
    iconColor: "text-primary border-primary/20 bg-primary/10",
    title: "Academy Core",
    description:
      "Currículum estructurado desde fundamentos hasta estrategias avanzadas."
  },
  {
    icon: "trending_up",
    iconColor: "text-secondary border-secondary/20 bg-secondary/10",
    title: "Performance System",
    description:
      "Herramientas de journaling, métricas y análisis de ejecución."
  },
  {
    icon: "local_library",
    iconColor: "text-primary border-primary/20 bg-primary/10",
    title: "Library Intelligence",
    description:
      "Repositorio de recursos, setups históricos y análisis de mercado."
  },
  {
    icon: "self_improvement",
    iconColor: "text-secondary border-secondary/20 bg-secondary/10",
    title: "Growth Layer",
    description:
      "Módulos de desarrollo personal, mentalidad y gestión emocional."
  },
  {
    icon: "groups",
    iconColor: "text-primary border-primary/20 bg-primary/10",
    title: "Community Environment",
    description:
      "Espacio de interacción, revisión de casos y apoyo entre pares."
  }
];

const libraryItems = [
  { icon: "bookmark", color: "text-secondary", label: "Modelos y Setups históricos" },
  { icon: "play_circle", color: "text-primary", label: "Grabaciones de sesiones en vivo" },
  { icon: "menu_book", color: "text-secondary", label: "Documentación de estrategias" }
];

const profiles = [
  {
    title: "Profesional en transición",
    color: "text-primary",
    description:
      "Busca estructura para llevar su consistencia al siguiente nivel."
  },
  {
    title: "Aspiracional digital",
    color: "text-secondary",
    description:
      "Necesita fundaciones sólidas y un entorno que lo aleje del ruido."
  },
  {
    title: "Profesional consolidado",
    color: "text-white",
    description:
      "Requiere herramientas de optimización y comunidad de alto nivel."
  }
];

const faqs = [
  {
    question: "¿Necesito experiencia previa para unirme?",
    answer:
      "No, el Academy Core está diseñado para llevarte desde los fundamentos hasta conceptos avanzados de manera estructurada."
  },
  {
    question: "¿Qué incluye la membresía mensual?",
    answer:
      "Acceso a DIGIT OS, todas las capas de formación, sesiones de trading en vivo, biblioteca de recursos y la comunidad privada."
  },
  {
    question: "¿En qué mercados se enfocan?",
    answer:
      "Nuestros principios de análisis e institucional son aplicables a Forex, Índices, Criptomonedas y Commodities."
  },
  {
    question: "¿Ofrecen señales de trading?",
    answer:
      "No. Nuestra filosofía es enseñarte a pescar, no darte el pescado. Desarrollamos tu criterio para que operes de forma independiente."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, la membresía es flexible y puedes gestionar tu suscripción en cualquier momento desde tu panel de usuario."
  }
];

const navItems = [
  { icon: "home", active: true, label: "Home" },
  { icon: "school", active: false, label: "Academy" },
  { icon: "query_stats", active: false, label: "Performance" },
  { icon: "hub", active: false, label: "Community" },
  { icon: "person", active: false, label: "Profile" }
];

function ActionButtons() {
  return (
    <div className="flex flex-col gap-4">
      <button className="interactive-scale w-full rounded-xl bg-primary px-6 py-4 font-headline text-base font-semibold text-white shadow-lg shadow-primary/20">
        Aplicar a DIGIT
      </button>
      <button className="interactive-scale w-full rounded-xl border border-white/10 bg-surface-container px-6 py-4 font-headline text-base font-semibold text-on-surface">
        Ver el método DIGIT
      </button>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="glass-effect fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-glass-bg px-6">
        <div className="flex items-center gap-4">
          <button aria-label="Menu" className="interactive-scale">
            <span className="material-symbols-outlined text-on-surface">menu</span>
          </button>
          <span className="font-headline text-xl font-bold tracking-tight">
            DIGIT Academy
          </span>
        </div>
        <div className="interactive-scale h-9 w-9 overflow-hidden rounded-full border border-white/10">
          <img
            alt="User"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFalGliiUQrLtWKJib7YedhAEvm9tPCxYFOuuktNzYxDSasFctdxBeDzTyBUBCNRsejow82-2r-0dtxTm5jIKPbmcXpJfw8JrC8oHO4dmmDkXBEowBPf1aU882NB2-yb6thOgiP8oO7aUKBXAQbiTbMuFOLSBBZ1Sd9JJEMw7BkQcHGadzStyJf1Kt-3uFaw2NBIKhhk22XYltkgQ-qOJ2g0p5b3-WB5goQPnpKEDszdnFw8a-gEMGB0LUZ7M_v5w2Yywgcp54Acs"
          />
        </div>
      </header>

      <main className="pb-32 pt-16">
        <section className="hero-bg-gradient relative overflow-hidden px-6 py-12">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-4">
              <span className="font-headline text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
                La Evolucion del Entrenamiento
              </span>
            </div>
            <h1 className="mb-6 max-w-[320px] font-headline text-[2.5rem] font-bold leading-[1.1] tracking-tight md:max-w-5xl md:text-[4.5rem] md:leading-[0.98]">
              Construye una práctica con estructura. Opera con criterio. <br />
              <span className="gradient-text-precision">
                Convierte tu progreso en un proceso medible.
              </span>
            </h1>
            <p className="mb-6 max-w-[320px] text-base leading-relaxed text-on-surface-variant md:max-w-2xl md:text-lg">
              DIGIT Trading Academy reúne academia, journaling, biblioteca,
              revisión y desarrollo personal dentro de un entorno diseñado para
              fortalecer criterio, consolidar disciplina y hacer visible la
              evolución del operador.
            </p>
            <p className="mb-10 max-w-[320px] text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/80 md:max-w-3xl">
              Academia estructurada, performance system, biblioteca aplicada y
              entorno de seguimiento dentro de una sola experiencia.
            </p>
            <div className="max-w-sm">
              <ActionButtons />
            </div>
            <div className="absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
          </div>
        </section>

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
                El trading no se trata de señales o atajos, sino de desarrollar
                un criterio profesional a través de un proceso iterativo de
                estudio, ejecución, análisis y mejora.
              </p>
              <ul className="space-y-3">
                {[
                  "Foco en el proceso por encima del resultado a corto plazo.",
                  "Desarrollo de criterio analítico y operativo propio.",
                  "Medición rigurosa del desempeño y la psicología.",
                  "Comunidad basada en responsabilidad y mejora mutua."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">
                      check_circle
                    </span>
                    <span className="text-sm text-on-surface-variant md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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
                El entorno donde el contexto, la ejecución y la revisión
                convergen.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-10">
              <h2 className="mb-3 max-w-3xl font-headline text-2xl font-bold md:text-4xl">
                Cinco capas dentro de una misma arquitectura.
              </h2>
              <div className="h-1 w-12 rounded-full bg-primary" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {layers.map((layer) => (
                <div
                  key={layer.title}
                  className="interactive-scale flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface-container/40 p-6 hover:border-primary/40"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${layer.iconColor}`}
                  >
                    <span className="material-symbols-outlined">
                      {layer.icon}
                    </span>
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

        <section className="px-6 py-12">
          <div className="mx-auto w-full max-w-[960px]">
            <div className="mb-8 text-center">
              <h2 className="font-headline text-2xl font-bold md:text-4xl">
                Un ciclo de trabajo orientado a mejora acumulativa.
              </h2>
            </div>
            <div className="relative flex flex-col items-center gap-6 py-8">
              <div className="absolute bottom-0 left-1/2 top-0 -z-10 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50" />
              {["1. Estudiar", "2. Ejecutar", "3. Registrar", "4. Analizar", "5. Mejorar"].map(
                (step, index) => (
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
                )
              )}
            </div>
          </div>
        </section>

        <section className="bg-surface-container/20 px-6 py-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-10">
              <h2 className="mb-3 max-w-3xl font-headline text-2xl font-bold md:text-4xl">
                DIGIT OS organiza el entorno del usuario.
              </h2>
              <div className="mb-6 h-1 w-12 rounded-full bg-secondary" />
              <p className="mb-8 text-sm text-on-surface-variant md:text-base">
                Un dashboard centralizado para navegar por tu evolución como
                trader.
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
                {[
                  ["route", "text-primary", "Mi Ruta"],
                  ["show_chart", "text-secondary", "Mi Ejecución"],
                  ["folder_open", "text-white/50", "Mis Archivos"],
                  ["calendar_month", "text-white/50", "Mi Calendario"]
                ].map(([icon, color, label]) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-surface-container/50 p-4"
                  >
                    <span className={`material-symbols-outlined text-[28px] ${color}`}>
                      {icon}
                    </span>
                    <span className="text-xs font-bold text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                  <span className={`material-symbols-outlined ${item.color}`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-white md:text-base">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              {[
                ["Buscar señales y atajos", "Construir criterio propio"],
                ["Ejecución aleatoria", "Journaling y medición rigorosa"],
                ["Aislamiento operativo", "Comunidad de retroalimentación"]
              ].map(([left, right], index) => (
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
                    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-16 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-8 font-headline text-2xl font-bold md:text-4xl">
              Construye una estructura que puedas sostener en el tiempo.
            </h2>
            <ActionButtons />
          </div>
        </section>

        <footer className="border-t border-white/5 bg-surface px-6 py-10 pb-24">
          <div className="mb-8 flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
            {["Términos", "Privacidad", "Discord", "Soporte"].map((item) => (
              <a key={item} className="transition-colors hover:text-primary" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="text-center text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/50">
            © 2024 DIGIT Trading. Plataforma Integral.
          </div>
        </footer>
      </main>

      <nav className="glass-effect fixed bottom-6 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-around rounded-full border border-white/10 bg-glass-bg px-2 py-2 shadow-2xl shadow-neon">
        {navItems.map((item) => (
          <button
            key={item.label}
            aria-label={item.label}
            className={`interactive-scale flex items-center justify-center rounded-full p-3 ${
              item.active
                ? "bg-secondary/10 text-secondary"
                : "text-on-surface-variant"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                item.active
                  ? { fontVariationSettings: '"FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24' }
                  : undefined
              }
            >
              {item.icon}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
