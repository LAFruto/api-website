import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import Recents from "@/components/home/Recents";
import Team from "@/components/home/Team";
import FAQ from "@/components/home/FAQ";
import Register from "@/components/Register";
import { db } from "@/lib/db";

export default async function Home() {
  const recents = await db.involvement.findMany({
    orderBy: {
      date: "desc",
    },
    take: 5,
  });

  return (
    <>
      <Hero />
      <Partners />
      <Impact />
      <Team />
      <Recents recents={recents} />
      <FAQ />
      <Register />
    </>
  );
}
