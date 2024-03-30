import { SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="relative z-10 rounded-tl-lg rounded-tr-lg mt-[-15px] flexCenter py-24 bg-orange-50">
      <div className="padding-container max-container w-full grid grid-cols-12 gap-x-[12px]">
        <div className="flex flex-col gap-4 col-span-12 lg:col-span-8 xl:col-span-6">
          <div className="flex gap items-center">
            <Link href="/">
              <Image src="/images/logo_notext.png" alt="logo" width={70} height={70} className="mb-2" />
            </Link>``
            <h1 className='bold-88 lg:bold-124'>API</h1>
          </div>
          <div className="w-[380px]">
            <p className="regular-16 text-black xl:max-w[50px]">
              Located at Mapúa Malayan Colleges Mindanao, Gen. Douglas MacArthur Hwy, Talomo, Davao City
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-12 lg:col-span-8 xl:col-span-6">
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Connect With Us</h2>
          <div className="flex flex-col gap-5">
            <ul className="regular-14 flex gap-4 text-gray-30">
              {SOCIALS.map((social) => (
                <li>
                  <SocialIcon url={social.link} target="_blank" className="rounded-xl" bgColor="transparent" style={{ backgroundColor: social.color, }}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
