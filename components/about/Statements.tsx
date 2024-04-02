import Image from "next/image";

const Statements = () => {
  return (
    <div>
      <Image
        src={"/images/statement_1.JPG"}
        alt="mission image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[500px] object-cover"
      />
      <div className="relative z-10 flex flex-col bg-orange-50 rounded-xl p-24 my-[-.5rem]">
        <h4 className="bold-32">OUR MISSION</h4>
        <p className="mt-6">
          To cultivate a dynamic community of tech and innovation enthusiasts in
          MMCM and provide Mapúa Malayans a platform for learning,
          collaboration, and hands-on experience. We aim to equip our members
          with the skills, knowledge, and confidence needed to excel in the
          ever-evolving tech landscape.
        </p>
      </div>
      <Image
        src={"/images/statement_2.png"}
        alt="vision image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[500px] object-cover"
      />
      <div className="relative z-10 flex flex-col text-left bg-blue-50 rounded-xl p-24 mt-[-.5rem]">
        <h4 className="text-white bold-32">OUR VISION</h4>
        <p className="text-white mt-6">
          To be a leading catalyst for tech innovation where students inside and
          outside of MMCM come together to explore, create, and push the
          boundaries of technology. We envision a vibrant community that not
          only excels in competitive spirit but also contributes meaningfully to
          the broader tech landscape.
        </p>
      </div>
    </div>
  );
};

export default Statements;
