"use client";

import { SOCIALS } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-40 rounded-tl-lg rounded-tr-lg mt-[-15px]  py-12 lg:py-16 bg-orange-50 text-neutral-900">
      <div className="padding-container max-container w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4 col-span-12 lg:col-span-8 xl:col-span-6">
          <div className="flex flex-col gap-5">
            <ul className="flex space-x-4">
              {SOCIALS.map((social, index) => {
                const Icon = social.icon;
                return (
                  <div key={index} className={`hide !delay-${index * 100}`}>
                    <li key={index} className={`hover:-translate-y-1 hover:ease-in-out transition`}>
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <Icon className={`rounded-lg h-10 w-10 fill-neutral-900`} />
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="bold-46 lg:bold-64 mt-5 capitalize hide !delay-300">Be Proactive, Lead Boldy.</h2>
        </div>
        <hr className="w-full mt-6 black-50 black-50 border-black-50 hide !delay-300" />
        <div className="flex flex-col gap-4 lg:justify-between lg:flex-row mt-6 hide !delay-300">
          <Link href="/privacy">
            <p className="hover:underline ease-in-out transition duration-200 cursor-pointer">Privacy Notice</p>
          </Link>
          <p>&copy; Association of Proactive Innovators 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
