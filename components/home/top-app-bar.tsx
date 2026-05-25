import Link from "next/link";

import { MobileNavigationMenu } from "@/components/navigation/mobile-navigation-menu";
import { Icon } from "@/components/ui/icon";

export function TopAppBar() {
  return (
    <header className="fixed left-4 right-4 top-4 z-50 flex h-16 items-center justify-between rounded-full bg-black/60 px-4 glass-effect">
      <div className="flex items-center gap-4">
        <MobileNavigationMenu variant="home" />
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
