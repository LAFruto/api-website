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
