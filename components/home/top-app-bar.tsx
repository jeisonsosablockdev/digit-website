import Link from "next/link";

import { primaryNavigation } from "@/components/site-shell";
import { Icon } from "@/components/ui/icon";

const siteNavigation = primaryNavigation.filter((item) => item.href !== "/iniciar-sesion");

export function TopAppBar() {
  return (
    <header className="fixed left-4 right-4 top-4 z-50 flex h-16 items-center justify-between rounded-full bg-black/60 px-4 glass-effect">
      <div className="flex items-center gap-4">
        <details className="group relative">
          <summary
            aria-label="Abrir navegacion"
            className="interactive-scale flex h-10 w-10 list-none items-center justify-center rounded-full bg-[#18181b] text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] [&::-webkit-details-marker]:hidden"
          >
            <span className="sr-only">Abrir navegacion</span>
            <span className="relative h-3.5 w-4 group-open:hidden">
              <span className="absolute left-0 top-0 h-[1.5px] w-4 rounded-full bg-white/90" />
              <span className="absolute left-0 top-[6px] h-[1.5px] w-4 rounded-full bg-white/90" />
              <span className="absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-white/90" />
            </span>
            <span className="relative hidden h-4 w-4 group-open:block">
              <span className="absolute left-0 top-[7px] h-[1.5px] w-4 rotate-45 rounded-full bg-white/90" />
              <span className="absolute left-0 top-[7px] h-[1.5px] w-4 -rotate-45 rounded-full bg-white/90" />
            </span>
          </summary>
          <nav
            aria-label="Navegacion principal movil"
            className="absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-white/10 bg-[rgba(8,8,10,0.96)] p-4 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-2">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-2xl px-4 py-3 text-base text-on-surface-variant transition-colors hover:bg-white/5 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
        <Link className="font-headline text-xl font-bold tracking-tight text-white" href="/">
          DIGIT TRADING
        </Link>
      </div>
      <Link
        aria-label="Profile"
        className="interactive-scale flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black text-white shadow-[0_0_15px_rgba(124,77,255,0.5)]"
        href="/iniciar-sesion"
      >
        <Icon className="h-5 w-5" name="person" />
      </Link>
    </header>
  );
}
