import { SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="relative z-10 rounded-tl-lg rounded-tr-lg mt-[-15px]  py-12 lg:py-16 bg-orange-50">
      <div className="padding-container max-container w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4 col-span-12 lg:col-span-8 xl:col-span-6">
          <div className="flex flex-col gap-5">
            <ul className="regular-14 flex gap-4 text-gray-30">
              {SOCIALS.map((social) => (
                <li className="hover:-translate-y-1 ease-in-out transition">
                  <SocialIcon
                    url={social.link}
                    target="_blank"
                    className="rounded-xl"
                    bgColor="transparent"
                    style={{ backgroundColor: social.color }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="bold-52 mt-5 capitalize">
            Be Proactive, Lead Boldy.
          </h2>
        </div>
        <hr className="w-full mt-6 black-50 bg-black-50 black-50 border-black-50 "/>
        <div className="flex flex-col gap-4 lg:justify-between lg:flex-row mt-6">
          <p className="hover:text-white ease-in-out transition duration-300 cursor-pointer">Privacy Notice</p>
          <p>&copy; Association of Proactive Innovators 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
