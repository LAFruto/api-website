import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import Promotional from "@/components/home/Promotional";
import Recents from "@/components/home/Recents";
import Register from "@/components/Register";
import { getAllContent } from "@/data";
import { Suspense } from "react";

export default async function Home() {
  const involvements = await getAllContent();

  return (
    <>
      <Suspense
        fallback={<div className="relative z-0 flex h-full w-full items-center justify-center">Loading...</div>}
      >
        <Hero />
        <Partners />
        {/* <Upcoming /> */}
        <Impact />
        <Promotional />
        <Recents involvements={involvements} />
        <FAQ />
        <Register />
      </Suspense>
    </>
  );
}
