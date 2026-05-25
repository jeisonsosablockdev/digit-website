import Link from "next/link";

import { Icon } from "@/components/ui/icon";

const items = [
  { icon: "home" as const, label: "Home", href: "/", active: true },
  { icon: "school" as const, label: "Academy", href: "/academia" },
  { icon: "show_chart" as const, label: "Performance", href: "/plataforma" },
  { icon: "groups" as const, label: "Community", href: "/recursos" },
  { icon: "person" as const, label: "Profile", href: "/iniciar-sesion" }
];

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-around rounded-full border border-white/10 bg-glass-bg px-2 py-2 glass-effect shadow-2xl shadow-[0_0_25px_rgba(124,77,255,0.15)] lg:hidden">
      {items.map((item) => (
        <Link
          key={item.label}
          aria-label={item.label}
          aria-current={item.active ? "page" : undefined}
          className={`interactive-scale flex items-center justify-center p-3 ${
            item.active
              ? "rounded-full bg-secondary/10 text-secondary"
              : "text-on-surface-variant"
          }`}
          href={item.href}
        >
          <Icon className="h-6 w-6" name={item.icon} />
        </Link>
      ))}
    </nav>
  );
}
