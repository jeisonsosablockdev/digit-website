import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Metodo DIGIT | DIGIT Trading Academy",
  alternates: {
    canonical: "/metodo-digit"
  }
};

export default function MetodoDigitPage() {
  return (
    <BlankRoutePage currentPath="/metodo-digit" title="Metodo DIGIT">
      <h1 className="sr-only">Metodo DIGIT</h1>
    </BlankRoutePage>
  );
}
