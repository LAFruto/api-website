import { db } from "@/lib/db";
import InvolvementsHero from "@/components/involvements/InvolvementsHero";
import Register from "@/components/Register";
import Involvements from "@/components/involvements/Involvements";

const InvolvementsPage = async () => {
  const involvements = await db.involvement.findMany();
  return (
    <>
      <InvolvementsHero />
      <Involvements involvements={involvements} />
      <Register />
    </>
  );
};

export default InvolvementsPage;
