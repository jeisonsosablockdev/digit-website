import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitacademy.com"),
  title: "DIGIT Trading Academy",
  description: "Plataforma integral de formación, journaling y performance para traders.",
  openGraph: {
    title: "DIGIT Trading Academy",
    description:
      "Plataforma integral de formación, journaling y performance para traders.",
    url: "https://digitacademy.com",
    siteName: "DIGIT Trading Academy",
    locale: "es_CO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIT Trading Academy",
    description:
      "Plataforma integral de formación, journaling y performance para traders."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
