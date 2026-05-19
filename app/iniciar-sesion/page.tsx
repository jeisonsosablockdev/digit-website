import type { Metadata } from "next";

import { BlankRoutePage } from "@/components/blank-route-page";

export const metadata: Metadata = {
  title: "Iniciar sesion | DIGIT Trading Academy",
  alternates: {
    canonical: "/iniciar-sesion"
  }
};

export default function IniciarSesionPage() {
  return (
    <BlankRoutePage currentPath="/iniciar-sesion" title="Iniciar sesion" />
  );
}
