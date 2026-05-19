import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Recursos | DIGIT Trading Academy",
  alternates: {
    canonical: "/recursos"
  }
};

export default function RecursosPage() {
  return <BlankRoutePage currentPath="/recursos" title="Recursos" />;
}
