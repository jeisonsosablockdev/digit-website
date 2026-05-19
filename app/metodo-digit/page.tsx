import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Metodo DIGIT | DIGIT Trading Academy",
  alternates: {
    canonical: "/metodo-digit"
  }
};

export default function MetodoDigitPage() {
  return (
    <BlankRoutePage currentPath="/metodo-digit" title="Metodo DIGIT" />
  );
}
