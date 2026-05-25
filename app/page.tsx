import type { Metadata } from "next";

import { HomePageSections } from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "DIGIT Trading Academy - Plataforma integral",
  description:
    "Landing web moderna para traders que buscan estructura, rendimiento y comunidad dentro del ecosistema DIGIT.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomePageSections />;
}
