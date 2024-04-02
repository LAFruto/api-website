"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-20 !fixed top-0 left-0 right-0 bottom-auto w-full min-h-28 items-center pl-[5%] pr-[5%] flex bg-black">
      <div className="max-w-[80rem] w-full h-full px-8 py-3.5 gap-8 flexBetween items-center bg-white m-auto relative shadow-xl rounded-2xl">
        {/* DESKOTOP NAVBAR */}
        <a>
          <Image
            src="/images/text_logo2.png"
            alt="menu"
            width={100}
            height={100}
            className="inline-block cursor-pointer"
          />
        </a>

        <nav className="h-full items-center static hidden lg:flex">
          <ul className="hidden h-full gap-4 lg:flex">
            {NAV_LINKS.map((link, index) => (
              <li
                key={index}
                className="transition duration-500 ease-in-out rounded-full px-6 py-2 hover:bg-gray-10"
              >
                <Link
                  href={link.href}
                  className="bold-16 text-black-90 flexCenter cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="btn_orange hidden lg:flex">
          contact us
        </Link>

        {/* MOBILE NAVBAR */}
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? (
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          )}
        </div>
        <nav
          className={`lg:hidden shadow-xl rounded-2xl px-8 text-right left-0 right-0 absolute ease-in-out bg-white duration-400 transition-all
              ${
                nav
                  ? "top-20  py-8 h-[280px] "
                  : "top-20 h-0 px-8 py-0 overflow-hidden"
              }
            `}
        >
          <ul className={`h-full gap-4 flex-col flex`}>
            {NAV_LINKS.map((link, index) => (
              <li
                key={index}
                className="transition duration-500 ease-in-out rounded-full px-6 py-2 hover:bg-gray-10"
              >
                <Link
                  href={link.href}
                  className="bold-16 text-black-90 flexCenter cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Link href="/" className="btn_orange text-center">
              contact us
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
