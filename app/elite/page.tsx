import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Elite | DIGIT Trading Academy",
  alternates: {
    canonical: "/elite"
  }
};

export default function ElitePage() {
  return <BlankRoutePage currentPath="/elite" title="Elite" />;
}
