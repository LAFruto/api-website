import Officers from "@/components/about/Officers";
import About_Hero from "../../components/about/About_Hero";
import Statements from "@/components/about/Statements";
import Timeline from "@/components/about/Timeline";
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