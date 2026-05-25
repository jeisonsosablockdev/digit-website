import Link from "next/link";

import { siteNavigation } from "@/components/navigation/primary-navigation";

export function MobileNavigationMenu({
  currentPath,
  navClassName,
  summaryClassName
}: Readonly<{
  currentPath?: string;
  navClassName: string;
  summaryClassName: string;
}>) {
  return (
    <details className="group relative shrink-0">
      <summary aria-label="Abrir navegacion" className={summaryClassName}>
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
      <nav aria-label="Navegacion principal movil" className={navClassName}>
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
