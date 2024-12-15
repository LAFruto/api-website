import Officers from "@/components/about/Officers";
import Statements from "@/components/about/Statements";
import Timeline from "@/components/about/Timeline";
import Register from "@/components/Register";
import { OFFICERS, TIMELINES } from "@/constants";
import AboutHero from "../../components/about/AboutHero";

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
