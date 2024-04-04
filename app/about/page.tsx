import About_Hero from "../../components/about/About_Hero";
import Officers from "@/components/about/Officers";
import Timeline from "@/components/about/Timeline";
import Statements from "@/components/about/Statements";
import Register from "@/components/Register";

const About = () => {
  return ( 
    <>
      <About_Hero />
      <Statements />
      <Timeline />
      <Officers />
      <Register />
    </>  
  );
}
 
export default About;