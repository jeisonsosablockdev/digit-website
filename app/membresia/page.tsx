import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Membresia | DIGIT Trading Academy",
  alternates: {
    canonical: "/membresia"
  }
};

export default function MembresiaPage() {
  return (
    <BlankRoutePage currentPath="/membresia" title="Membresia">
      <h1 className="sr-only">Membresia</h1>
    </BlankRoutePage>
  );
}
