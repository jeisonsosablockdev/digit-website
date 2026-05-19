import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Biblioteca | DIGIT Trading Academy",
  alternates: {
    canonical: "/biblioteca"
  }
};

export default function BibliotecaPage() {
  return <BlankRoutePage currentPath="/biblioteca" title="Biblioteca" />;
}
