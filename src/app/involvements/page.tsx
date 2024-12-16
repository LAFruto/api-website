import InvolvementsHero from "@/components/involvements/InvolvementsHero";
import Register from "@/components/Register";
import Involvements from "@/components/involvements/Involvements";
import { getAllContent } from "@/data";
import { Suspense } from "react";

const InvolvementsPage = async () => {
  const involvements = await getAllContent();

  return (
    <>
      <Suspense
        fallback={<div className="relative z-0 flex h-full w-full items-center justify-center">Loading...</div>}
      >
        <InvolvementsHero />
        <Involvements involvements={involvements} />
        <Register />
      </Suspense>
    </>
  );
};

export default InvolvementsPage;
