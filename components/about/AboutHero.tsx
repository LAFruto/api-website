"use client";

import Image from "next/image";
import Button from "../Button";
import { useEffect } from "react";
import Link from "next/link";

const AboutHero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.add("show-x");
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.remove("show-x");
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".hide").forEach((el) => observer.observe(el));
    document.querySelectorAll(".hide-x").forEach((el) => observer.observe(el));
  });
  return (
    <div className="relative z-20 bg-blue-50 pt-32 rounded-bl-xl rounded-br-xl">
      <div className="max-container padding-container flex flex-col-reverse gap-4 grid-cols-2 lg:grid">
        <div className="flex flex-col py-6 px-0 lg:px-6 gap-8 mb-6">
          <h1 className="text-white bold-46 lg:bold-64 hide !delay-100">This is API!</h1>
          <p className="text-white hide !delay-200">
            API, founded in August 2023 at Mapua Malayan Colleges of Mindanao, is a tech club offering workshops and
            competitions to college students.
          </p>
          <div className="hide !delay-300">
            <Link href="/involvements">
              <Button type="button" variant="btn-orange w-[70%]" title="explore our achievements" />
            </Link>
          </div>
        </div>
        <div className="hidden flex-col lg:items-center lg:flex">
          <Image
            src={"/images/about.png"}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="flex min-w-[300px] w-[500px] h-full object-contain object-bottom hide-x !delay-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
