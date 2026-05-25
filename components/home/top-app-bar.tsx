import Link from "next/link";

import { MobileNavigationMenu } from "@/components/navigation/mobile-navigation-menu";
import { siteNavigation } from "@/components/navigation/primary-navigation";
import { Icon } from "@/components/ui/icon";

export function TopAppBar() {
  return (
    <header className="fixed left-4 right-4 top-4 z-50 rounded-full bg-black/60 px-4 glass-effect lg:left-1/2 lg:w-[min(1280px,calc(100vw-3rem))] lg:-translate-x-1/2 lg:px-6">
      <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <div className="flex items-center gap-4 lg:flex-1">
          <div className="lg:hidden">
            <MobileNavigationMenu variant="home" />
          </div>
          <Link className="font-headline text-xl font-bold tracking-tight text-white lg:text-2xl" href="/">
            DIGIT TRADING
          </Link>
          <nav aria-label="Navegacion principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteNavigation.slice(1, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition-colors hover:bg-white/8 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="interactive-scale rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
            href="/recursos"
          >
            Explorar recursos
          </Link>
          <Link
            className="interactive-scale rounded-full bg-gradient-to-r from-[#7c4dff] to-[#00e5ff] px-5 py-3 text-sm font-semibold text-[#050505] shadow-[0_0_24px_rgba(124,77,255,0.3)] transition-transform"
            href="/iniciar-sesion"
          >
            Entrar a DIGIT
          </Link>
        </div>
        <Link
          aria-label="Profile"
          className="interactive-scale flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black text-white shadow-[0_0_15px_rgba(124,77,255,0.5)] lg:hidden"
          href="/iniciar-sesion"
        >
          <Icon className="h-5 w-5" name="person" />
        </Link>
        <Link
          aria-label="Profile"
          className="interactive-scale hidden h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/70 text-white shadow-[0_0_18px_rgba(124,77,255,0.35)] lg:flex"
          href="/iniciar-sesion"
        >
          <Icon className="h-5 w-5" name="person" />
        </Link>
      </div>
    </header>
  );
}
