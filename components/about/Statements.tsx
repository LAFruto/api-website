"use client";

import Banner from "../Banner";

const Statements = () => {
  return (
    <div>
      <Banner image={"/images/statement_1.png"} title={"mission banner"} />
      <div className="relative z-10 bg-orange-50 rounded-xl py-16 my-[-.5rem]">
        <div className="max-container padding-container flex flex-col">
          <h4 className="bold-32">OUR MISSION</h4>
          <p className="mt-6">
            To cultivate a dynamic community of tech and innovation enthusiasts in MMCM and provide Mapúa Malayans a
            platform for learning, collaboration, and hands-on experience. We aim to equip our members with the skills,
            knowledge, and confidence needed to excel in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
      <Banner image={"/images/statement_2.png"} title={"vision banner"} />
      <div className="relative z-10 bg-blue-50 rounded-xl py-16 mt-[-.5rem]">
        <div className="max-container padding-container flex flex-col  ">
          <h4 className="text-white bold-32">OUR VISION</h4>
          <p className="text-white mt-6">
            To be a leading catalyst for tech innovation where students inside and outside of MMCM come together to
            explore, create, and push the boundaries of technology. We envision a vibrant community that not only excels
            in competitive spirit but also contributes meaningfully to the broader tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statements;
