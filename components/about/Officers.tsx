"use client";

import Image from "next/image";
import { Officer, SocialType } from "@prisma/client";
import { mapToIcon } from "@/lib/utils";

type OfficerWithSocials = {
  name: string;
  position: string;
  image: string;
  socials: {
    id: string;
    url: string;
    type: SocialType;
  }[];
};

const OfficerItem = ({ name, position, image, socials }: OfficerWithSocials) => {
  return (
    <div className="relative h-[500px] bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
      <Image
        src={image}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full relative object-cover !overflow-hidden"
      />
      <div className="w-[90%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl space-y-2 ease-in-out duration-300 hover:bg-orange-90">
        <div className="flex justify-between w-full items-center">
          <h4 className="bold-20">{name}</h4>
          <div className="flex space-x-2">
            {socials &&
              socials.map((social) => {
                const Icon = mapToIcon(social.type);
                return (
                  <div key={social.id} className="hover:-translate-y-1 ease-in-out transition">
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={Icon.muiName}>
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

type OfficersWithSocials = Officer & {
  socials: {
    id: string;
    involvementId: string | null;
    url: string;
    type: SocialType;
  }[];
};

const Officers = ({ officers }: { officers: OfficersWithSocials[] }) => {
  return (
    <section className="flexCenter flex-col py-24 gap-8">
      <h2 className="bold-40 lg:bold-64 capitalize">Meet the Officers!</h2>
      <div className="padding-container max-container justify-items-center gap-10 place-content-center md:grid lg:grid-cols-2 xl:grid-cols-3 flex flex-col">
        {officers.map((officer) => (
          <OfficerItem
            key={officer.lastName}
            name={`${officer.firstName} ${officer.lastName} `}
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
