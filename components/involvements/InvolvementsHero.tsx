"use client";

import Image from "next/image";
import Button from "../Button";
import { useEffect } from "react";
import Link from "next/link";

const InvolvementsHero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".hide").forEach((el) => observer.observe(el));
  });
  return (
    <section className="relative z-20 bg-blue-50 pt-32 rounded-bl-xl rounded-br-xl">
      <div className="max-container padding-container flex flex-col-reverse gap-4 grid-cols-2 lg:grid">
        <div>
          <div className="flex flex-col py-6 px-0 lg:px-6 gap-8">
            <h1 className="text-white bold-46 lg:bold-64 !leading-[1.1] hide !delay-100">Innovative Successes</h1>
            <p className="text-white hide !delay-200">
              API has made a significant impact, extending its influence not only in Davao but also on a national scale.
            </p>
            <Link href="/contact">
              <Button type="button" variant="btn-orange w-[70%] hide !delay-300" title="collaborate with us" />
            </Link>
          </div>
        </div>
        <div className="hidden flex-col lg:items-center lg:flex">
          <Image
            src={"/images/involvements.png"}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="flex min-w-[300px] w-[450px] h-full object-contain object-bottom hide !delay-300"
          />
        </div>
      </div>
    </section>
  );
};

export default InvolvementsHero;
