"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  return (
    <ul className={`flex ${mobile ? "flex-col h-[160px] justify-between" : "h-full gap-4"}`}>
      {NAV_LINKS.map((link) => (
        <li key={link.href} className="transition duration-500 ease-in-out rounded-full px-6 py-2 hover:bg-gray-10">
          <Link
            href={link.href}
            className={`font-bold ${mobile ? "text-md" : "text-black-90"} flexCenter cursor-pointer`}
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
