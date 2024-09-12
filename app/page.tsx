import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import Recents from "@/components/home/Recents";
import FAQ from "@/components/home/FAQ";
import Register from "@/components/Register";
import Promotional from "@/components/home/Promotional";
import { getAllContent } from "@/data";

export default async function Home() {
  const involvements = await getAllContent();

  return (
    <>
      <Hero />
      <Partners />
      <Impact />
      <Promotional />
      <Recents involvements={involvements} />
      <FAQ />
      <Register />
    </>
  );
}
