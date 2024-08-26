"use client";

import { SOCIALS } from "@/constants";

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
                  <li key={index} className="hover:-translate-y-1 ease-in-out transition">
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <Icon className={`rounded-lg h-10 w-10 fill-neutral-900`} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="bold-46 lg:bold-64 mt-5 capitalize">Be Proactive, Lead Boldy.</h2>
        </div>
        <hr className="w-full mt-6 black-50 black-50 border-black-50 " />
        <div className="flex flex-col gap-4 lg:justify-between lg:flex-row mt-6">
          <p className="hover:underline ease-in-out transition duration-300 cursor-pointer">Privacy Notice</p>
          <p>&copy; Association of Proactive Innovators 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
