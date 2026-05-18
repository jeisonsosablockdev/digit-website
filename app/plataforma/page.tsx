import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Plataforma | DIGIT Trading Academy",
  alternates: {
    canonical: "/plataforma"
  }
};

export default function PlataformaPage() {
  return (
    <BlankRoutePage currentPath="/plataforma" title="Plataforma">
      <h1 className="sr-only">Plataforma</h1>
    </BlankRoutePage>
  );
}
