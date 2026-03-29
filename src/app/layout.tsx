import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#111827",
};

export const metadata: Metadata = {
  title:
    "Junkyard Car Parts | Global Auto Parts Marketplace & Copart-Sourced Parts",
  description:
    "Shop verified inventory from a global auto parts marketplace. Copart auction parts where permitted, crypto car parts payments with Bitcoin, and bonded mechanic installation from verified pros.",
  keywords: [
    "global auto parts Bitcoin",
    "Copart-sourced parts",
    "bonded mechanic installation",
    "crypto car parts marketplace",
    "global auto parts marketplace",
    "Copart auction parts",
    "crypto car parts payments",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`${inter.className} min-h-dvh overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] antialiased [text-size-adjust:100%]`}
      >
        <Navbar />
        <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
