import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KRUNCHD — Clean. Crunchy. Complete.",
  description:
    "Premium healthy snacks made with real ingredients. No junk, no compromise. High protein, clean label snacks for modern professionals in India.",
  keywords: [
    "healthy snacks",
    "protein snacks",
    "clean label",
    "no junk food",
    "premium snacks India",
    "KRUNCHD",
  ],
  openGraph: {
    title: "KRUNCHD — Clean. Crunchy. Complete.",
    description:
      "Premium healthy snacks made with real ingredients. No junk, no compromise.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
