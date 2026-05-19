import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Membresia | DIGIT Trading Academy",
  alternates: {
    canonical: "/membresia"
  }
};

export default function MembresiaPage() {
  return <BlankRoutePage currentPath="/membresia" title="Membresia" />;
}
