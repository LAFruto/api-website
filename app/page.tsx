import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import Team from "@/components/home/Team";
import FAQ from "@/components/home/FAQ";
import Register from "@/components/Register";

export default async function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Impact />
      <Team />
      {/* <Recents recents={recents} /> */}
      <FAQ />
      <Register />
    </>
  );
}
