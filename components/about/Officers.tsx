"use client";

import Image from "next/image";
import { mapToIcon } from "@/lib/utils";
import { OFFICER } from "@/constants";

const OfficerItem = ({ firstName, lastName, position, image, socials }: OFFICER) => {
  return (
    <div className="relative h-[500px] bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
      <Image
        src={image}
        alt={lastName}
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full relative object-cover !overflow-hidden"
      />
      <div className="w-[90%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl space-y-2 ease-in-out duration-300 hover:bg-orange-90">
        <div className="flex justify-between w-full items-center">
          <h4 className="bold-20">{`${firstName} ${lastName}`}</h4>
          <div className="flex space-x-2">
            {socials &&
              socials.map((social, index) => {
                const Icon = mapToIcon(social.type);
                return (
                  <div key={index} className="hover:-translate-y-1 ease-in-out transition">
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

const Officers = ({ officers }: { officers: OFFICER[] }) => {
  return (
    <section className="flexCenter flex-col py-24 gap-8">
      <h2 className="bold-40 lg:bold-64 capitalize">Meet the Officers!</h2>
      <div className="padding-container max-container justify-items-center gap-10 place-content-center md:grid lg:grid-cols-2 xl:grid-cols-3 flex flex-col">
        {officers.map((officer, index) => (
          <OfficerItem
            key={index}
            lastName={officer.lastName}
            firstName={officer.firstName}
            position={officer.position}
            image={officer.image}
            socials={officer.socials}
          />
        ))}
      </div>
    </section>
  );
};

export default Officers;
