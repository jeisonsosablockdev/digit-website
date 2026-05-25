import Link from "next/link";

import { siteNavigation } from "@/components/navigation/primary-navigation";

const mobileNavigationMenuStyles = {
  home: {
    nav: "absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-white/10 bg-[rgba(8,8,10,0.96)] p-4 shadow-2xl shadow-black/50 backdrop-blur-xl",
    summary:
      "interactive-scale flex h-10 w-10 list-none items-center justify-center rounded-full bg-[#18181b] text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] [&::-webkit-details-marker]:hidden"
  },
  shell: {
    nav: "absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-3rem))] border border-white/5 bg-black/95 p-4 shadow-2xl shadow-black/40",
    summary:
      "interactive-scale inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-primary [&::-webkit-details-marker]:hidden"
  }
} as const;

export function MobileNavigationMenu({
  currentPath,
  variant
}: Readonly<{
  currentPath?: string;
  variant: keyof typeof mobileNavigationMenuStyles;
}>) {
  const styles = mobileNavigationMenuStyles[variant];

  return (
    <details className="group relative shrink-0">
      <summary aria-label="Abrir navegacion" className={styles.summary}>
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
      <nav aria-label="Navegacion principal movil" className={styles.nav}>
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
  );
}
