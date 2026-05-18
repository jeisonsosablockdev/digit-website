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

export function SiteShell({
  children,
  currentPath = "/"
}: Readonly<{
  children: React.ReactNode;
  currentPath?: string;
}>) {
  return (
    <>
      <header className="glass-effect sticky top-0 z-50 border-b border-white/5 bg-black/70">
        <div className="mx-auto max-w-[1280px] px-6 py-5">
          <div className="flex items-center gap-6">
            <Link className="font-headline text-xl font-bold tracking-tight" href="/">
              DIGIT Academy
            </Link>
          </div>
          <details className="group mt-4 lg:hidden">
            <summary className="interactive-scale inline-flex cursor-pointer list-none items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-primary">
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
              <span>{currentPath === "/iniciar-sesion" ? "Navegacion" : "Menu"}</span>
            </summary>
            <nav
              aria-label="Navegacion principal movil"
              className="mt-4 border border-white/5 bg-black/95 p-4 shadow-2xl shadow-black/40"
            >
              <ul className="flex flex-col gap-2">
                {primaryNavigation.map((item) => {
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
          <nav aria-label="Navegacion principal" className="mt-4 hidden lg:block">
            <ul className="flex min-w-max items-center gap-2 overflow-x-auto">
              {primaryNavigation.map((item) => {
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
