import Link from "next/link";

type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/metodo-digit", label: "Metodo DIGIT" },
  { href: "/plataforma", label: "Plataforma" },
  { href: "/academia", label: "Academia" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/membresia", label: "Membresia" },
  { href: "/elite", label: "Elite" },
  { href: "/recursos", label: "Recursos" },
  { href: "/iniciar-sesion", label: "Iniciar sesion" }
];

const siteNavigation = primaryNavigation.filter((item) => item.href !== "/iniciar-sesion");

export function SiteShell({
  children,
  currentPath = "/"
}: Readonly<{
  children: React.ReactNode;
  currentPath?: string;
}>) {
  const isSessionEntryRoute = currentPath === "/iniciar-sesion";

  return (
    <>
      <header className="glass-effect sticky top-0 z-50 border-b border-white/5 bg-black/70">
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6">
          <div className="relative flex items-center gap-3 pr-24 xl:hidden">
            <details className="group relative shrink-0">
              <summary className="interactive-scale inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-primary">
                <span className="sr-only">Abrir navegacion</span>
                <span className="relative h-4 w-5 group-open:hidden">
                  <span className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white" />
                  <span className="absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white" />
                  <span className="absolute left-0 top-3 h-0.5 w-5 rounded-full bg-white" />
                </span>
                <span className="relative hidden h-4 w-4 group-open:block">
                  <span className="absolute left-0 top-[7px] h-0.5 w-4 rotate-45 rounded-full bg-white" />
                  <span className="absolute left-0 top-[7px] h-0.5 w-4 -rotate-45 rounded-full bg-white" />
                </span>
              </summary>
              <nav
                aria-label="Navegacion principal movil"
                className="absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-3rem))] border border-white/5 bg-black/95 p-4 shadow-2xl shadow-black/40"
              >
                <ul className="flex flex-col gap-2">
                  {siteNavigation.map((item) => {
                    const isActive = currentPath === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          className={`block rounded-2xl px-4 py-3 text-base transition-colors ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-on-surface-variant hover:bg-white/5 hover:text-white"
                          }`}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </details>
            <Link
              className="min-w-0 truncate whitespace-nowrap font-headline text-lg font-bold tracking-tight sm:text-xl"
              href="/"
            >
              <span className="sm:hidden">DIGIT</span>
              <span className="hidden sm:inline">DIGIT Academy</span>
            </Link>
            <Link
              className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                isSessionEntryRoute
                  ? "border-primary bg-primary text-white"
                  : "border-white/15 bg-white/10 text-white hover:border-primary hover:bg-white/15"
              }`}
              href="/iniciar-sesion"
            >
              Empieza
            </Link>
          </div>
          <div className="hidden items-center justify-between gap-6 xl:flex">
            <div className="flex min-w-0 items-center gap-8">
              <Link className="shrink-0 whitespace-nowrap font-headline text-xl font-bold tracking-tight" href="/">
                DIGIT Academy
              </Link>
              <nav aria-label="Navegacion principal">
                <ul className="flex items-center gap-2">
                  {siteNavigation.map((item) => {
                    const isActive = currentPath === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          className={`rounded-full px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-on-surface-variant hover:bg-white/5 hover:text-white"
                          }`}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <Link
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isSessionEntryRoute
                  ? "border-primary bg-primary text-white"
                  : "border-white/15 bg-white/10 text-white hover:border-primary hover:bg-white/15"
              }`}
              href="/iniciar-sesion"
            >
              Empieza
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

export function BlankRoutePage({
  children,
  currentPath,
  title
}: Readonly<{
  children?: React.ReactNode;
  currentPath: string;
  title: string;
}>) {
  return (
    <SiteShell currentPath={currentPath}>
      <section className="mx-auto flex min-h-[calc(100vh-109px)] w-full max-w-[1280px] items-center justify-center px-6 py-16">
        {children ?? <h1 className="sr-only">{title}</h1>}
      </section>
    </SiteShell>
  );
}
