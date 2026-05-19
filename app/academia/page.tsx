import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Academia | DIGIT Trading Academy",
  alternates: {
    canonical: "/academia"
  }
};

export default function AcademiaPage() {
  return <BlankRoutePage currentPath="/academia" title="Academia" />;
}
