import dynamic from "next/dynamic";

const Activity = dynamic(() => import("@/components/Activity"), { ssr: false });
const Page = () => {
  return <Activity />;
};

export default Page;
