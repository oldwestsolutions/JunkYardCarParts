import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
