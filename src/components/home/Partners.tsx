import { PARTNERS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface PartnerProps {
  logo: string;
  name: string;
  link: string;
  className?: string;
}

const PartnerItem = ({ logo, name, link, className }: PartnerProps) => {
  return (
    <section className={`flex flex-col items-center ${className ?? ""}`}>
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
      <h2 className="font-bold capitalize hide">TRUSTED BY DAVAO TECH ORGANIZATIONS</h2>
      <div className="flexCenter gap-4 lg:gap-12 mt-5">
        {PARTNERS.map((partner, index) => (
          <PartnerItem
            key={partner.name}
            logo={partner.logo}
            name={partner.name}
            link={partner.link}
            className={`hide !delay-${index * 100}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
