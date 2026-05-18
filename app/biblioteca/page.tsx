import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Biblioteca | DIGIT Trading Academy",
  alternates: {
    canonical: "/biblioteca"
  }
};

export default function BibliotecaPage() {
  return (
    <BlankRoutePage currentPath="/biblioteca" title="Biblioteca">
      <h1 className="sr-only">Biblioteca</h1>
    </BlankRoutePage>
  );
}
