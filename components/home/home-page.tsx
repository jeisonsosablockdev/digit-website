import { HeroSection } from "@/components/home/hero-section";
import {
  ComparisonSection,
  FaqSection,
  FooterCtaSection,
  MembershipSection,
  ProfilesSection,
  SiteFooterSection,
  ThesisSection
} from "@/components/home/conversion-sections";
import {
  LayersSection,
  LibrarySection,
  PlatformPreviewSection
} from "@/components/home/platform-sections";
import {
  PositioningSection,
  ProgressSection,
  WorkflowSection
} from "@/components/home/process-sections";

export function HomePageSections() {
  return (
    <div className="pb-32 pt-16">
      <HeroSection />
      <ProgressSection />
      <PositioningSection />
      <LayersSection />
      <WorkflowSection />
      <PlatformPreviewSection />
      <LibrarySection />
      <MembershipSection />
      <ProfilesSection />
      <ThesisSection />
      <ComparisonSection />
      <FaqSection />
      <FooterCtaSection />
      <SiteFooterSection />
    </div>
  );
}
