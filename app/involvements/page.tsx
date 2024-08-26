import InvolvementsHero from "@/components/involvements/InvolvementsHero";
import Register from "@/components/Register";
import Involvements from "@/components/involvements/Involvements";
import { getAllContent } from "@/data";

const InvolvementsPage = async () => {
  const involvements = await getAllContent();

  return (
    <>
      <InvolvementsHero />
      <Involvements involvements={involvements} />
      <Register />
    </>
  );
};

export default InvolvementsPage;
