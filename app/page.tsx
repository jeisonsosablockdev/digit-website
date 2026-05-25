import type { Metadata } from "next";

import { HomePageSections } from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "DIGIT Trading Academy - Plataforma integral",
  description:
    "Experiencia mobile-first inspirada en Stitch para traders que buscan estructura, rendimiento y comunidad.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomePageSections />;
}
