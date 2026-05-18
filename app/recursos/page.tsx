import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Recursos | DIGIT Trading Academy",
  alternates: {
    canonical: "/recursos"
  }
};

export default function RecursosPage() {
  return (
    <BlankRoutePage currentPath="/recursos" title="Recursos">
      <h1 className="sr-only">Recursos</h1>
    </BlankRoutePage>
  );
}
