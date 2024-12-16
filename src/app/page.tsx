import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import Promotional from "@/components/home/Promotional";
import Recents from "@/components/home/Recents";
import Upcoming from "@/components/home/Upcoming";
import Register from "@/components/Register";
import { getAllContent } from "@/data";

export default async function Home() {
  const involvements = await getAllContent();

  return (
    <>
      <Hero />
      <Partners />
      {/* <Upcoming /> */}
      <Impact />
      <Promotional />
      <Recents involvements={involvements} />
      <FAQ />
      <Register />
    </>
  );
}
