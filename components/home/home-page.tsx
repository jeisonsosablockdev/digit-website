import { ArchitectureSection } from "@/components/home/architecture-section";
import { BottomNavBar } from "@/components/home/bottom-nav-bar";
import { CommunitySection } from "@/components/home/community-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { ManifestoSection } from "@/components/home/manifesto-section";
import { MembershipSection } from "@/components/home/membership-section";
import { StructureSection } from "@/components/home/structure-section";
import { TopAppBar } from "@/components/home/top-app-bar";

export function HomePageSections() {
  return (
    <div className="min-h-screen bg-background pb-32 font-body text-on-surface selection:bg-primary/30">
      <TopAppBar />
      <HeroCarousel />
      <StructureSection />
      <ArchitectureSection />
      <CommunitySection />
      <ManifestoSection />
      <MembershipSection />
      <section className="bg-[#050505] px-6 py-20">
        <div className="flex items-center justify-center" />
      </section>
      <BottomNavBar />
    </div>
  );
}
