import { ADVISORS, OFFICERS } from "@/constants";
import Image from "next/image";
import React from "react";

interface PersonProps {
  image: string;
  name: string;
  position: string;
  link: string;
}

const PersonItem = ({ image, name, position, link }: PersonProps) => {
  return (
    <div className="relative h-[600px] w-full bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-ful w-full` relative object-cover ease-in-out duration-300 group-hover:scale-[1.1]  group-hover:brightness-90 group-hover:saturate-100 group-hover:sepia-30 group-hover:opacity-70 !overflow-hidden cursor-pointer"
        />
      <div className="w-[80%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl gap-4 ease-in-out duration-300 hover:bg-orange-90">
        <h4 className="bold-20 lg:bold-32 !leading-normal">{name}</h4>
        <p className="bold-20 lg:bold-32 !leading-normal">{position}</p>
      </div>
    </div>
  );
};

const Officers = () => {
  return (
    <section className="flexCenter flex-col py-24 gap-8">
      <h2 className="bold-40 lg:bold-64 capitalize">Meet the Officers!</h2>
      <div className="padding-container max-container justify-items-center place-content-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 flex flex-col">
        {OFFICERS.map((officer) => (
          <PersonItem
            key={officer.name}
            image={officer.image}
            name={officer.name}
            position={officer.position}
            link={officer.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Officers;
