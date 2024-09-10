import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "API Mapúa-MCM",
  description: "API Mapúa-MCM's Website",
  authors: [{ name: "Association of Proactive Innovators" }],
  creator: "Association of Proactive Innovators",
  publisher: "Association of Proactive Innovators",
  category: "technology",
  openGraph: {
    title: "API Mapúa-MCM",
    description:
      "A tech-focused club in Mapúa-MCM dedicated to nurturing student growth through workshops, competitions, and opportunities for hands-on learning and skill development.",
    url: "https://api-mmcm.org",
    siteName: "API Mapúa-MCM",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/open-graph.png",
        width: 1200,
        height: 630,
        alt: "API Mapúa-MCM image",
      },
    ],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-beige-50  text-neutral-900", inter.className)}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
