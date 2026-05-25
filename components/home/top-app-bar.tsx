import Link from "next/link";

import { MobileNavigationMenu } from "@/components/navigation/mobile-navigation-menu";
import { Icon } from "@/components/ui/icon";

export function TopAppBar() {
  return (
    <header className="fixed left-4 right-4 top-4 z-50 flex h-16 items-center justify-between rounded-full bg-black/60 px-4 glass-effect">
      <div className="flex items-center gap-4">
        <MobileNavigationMenu
          navClassName="absolute left-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-white/10 bg-[rgba(8,8,10,0.96)] p-4 shadow-2xl shadow-black/50 backdrop-blur-xl"
          summaryClassName="interactive-scale flex h-10 w-10 list-none items-center justify-center rounded-full bg-[#18181b] text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] [&::-webkit-details-marker]:hidden"
        />
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
