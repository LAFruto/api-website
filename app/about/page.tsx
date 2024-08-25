import AboutHero from "../../components/about/AboutHero";
import Officers from "@/components/about/Officers";
import Timeline from "@/components/about/Timeline";
import Statements from "@/components/about/Statements";
import Register from "@/components/Register";
import { db } from "@/lib/db";

const About = async () => {
  const officers = await db.officer.findMany({
    include: {
      socials: true,
    },
  });
  const timeline = await db.timeline.findMany();

  return (
    <>
      <AboutHero />
      <Statements />
      <Timeline timeline={timeline} />
      <Officers officers={officers} />
      <Register />
    </>
  );
};

export default About;
