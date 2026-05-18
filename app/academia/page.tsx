import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Academia | DIGIT Trading Academy",
  alternates: {
    canonical: "/academia"
  }
};

export default function AcademiaPage() {
  return (
    <BlankRoutePage currentPath="/academia" title="Academia">
      <h1 className="sr-only">Academia</h1>
    </BlankRoutePage>
  );
}
