import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Plataforma | DIGIT Trading Academy",
  alternates: {
    canonical: "/plataforma"
  }
};

export default function PlataformaPage() {
  return <BlankRoutePage currentPath="/plataforma" title="Plataforma" />;
}
