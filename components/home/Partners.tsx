"use client";

import { PARTNERS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PartnerProps {
  logo: string;
  name: string;
  link: string;
}

const PartnerItem = ({ logo, name, link }: PartnerProps) => {
  return (
    <section className="flex flex-col items-center">
      <Link
        className="overflow-hidden transition duration-300 grayscale-[95%] hover:grayscale-0 hover:scale-110"
        href={link}
        target="_blank"
      >
        <Image src={logo} alt={name} width={125} height={125} unoptimized />
      </Link>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="max-container padding-container flexCenter flex-col pb-16">
      <h2 className="font-bold capitalize">TRUSTED BY DAVAO TECH ORGANIZATIONS</h2>
      <div className="flexCenter gap-4 lg:gap-12 mt-5">
        {PARTNERS.map((partner) => (
          <PartnerItem key={partner.name} logo={partner.logo} name={partner.name} link={partner.link} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
