import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Elite | DIGIT Trading Academy",
  alternates: {
    canonical: "/elite"
  }
};

export default function ElitePage() {
  return (
    <BlankRoutePage currentPath="/elite" title="Elite">
      <h1 className="sr-only">Elite</h1>
    </BlankRoutePage>
  );
}
