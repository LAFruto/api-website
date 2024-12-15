import AboutHero from "../../components/about/AboutHero";
import Officers from "@/components/about/Officers";
import Timeline from "@/components/about/Timeline";
import Statements from "@/components/about/Statements";
import Register from "@/components/Register";
import { OFFICERS, TIMELINES } from "@/constants";

const About = async () => {
  return (
    <>
      <AboutHero />
      <Statements />
      <Timeline timeline={TIMELINES} />
      <Officers officers={OFFICERS} />
      <Register />
    </>
  );
};

export default About;
