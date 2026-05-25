import Link from "next/link";

import { MobileNavigationMenu } from "@/components/navigation/mobile-navigation-menu";
import { siteNavigation } from "@/components/navigation/primary-navigation";

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
            <MobileNavigationMenu
              currentPath={currentPath}
              navClassName="absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-3rem))] border border-white/5 bg-black/95 p-4 shadow-2xl shadow-black/40"
              summaryClassName="interactive-scale inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-primary [&::-webkit-details-marker]:hidden"
            />
            <Link
              className="min-w-0 truncate whitespace-nowrap font-headline text-lg font-bold tracking-tight sm:text-xl"
              href="/"
            >
              <span className="sm:hidden">DIGIT</span>
              <span className="hidden sm:inline">DIGIT Academy</span>
            </Link>
            <Link
              className={`absolute right-0 top-1/2 inline-flex min-h-11 -translate-y-1/2 items-center rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
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
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${
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
