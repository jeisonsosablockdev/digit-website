import type { Metadata } from "next";

import { HomePageSections } from "@/components/home/home-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "DIGIT Trading Academy | Plataforma integral",
  description:
    "Academia estructurada, performance system, biblioteca aplicada y entorno de seguimiento dentro de una sola experiencia.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <HomePageSections />
    </SiteShell>
  );
}
