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
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-5">
        <div className="flex items-center justify-between gap-6">
          <Link className="font-headline text-xl font-bold tracking-tight" href="/">
            DIGIT Academy
          </Link>
        </div>
          <nav aria-label="Navegacion principal" className="overflow-x-auto">
            <ul className="flex min-w-max items-center gap-2">
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
