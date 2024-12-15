"use client";

import { useEffect } from "react";

const PrivacyHeader = () => {
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
    <>
      <div className="bg-blue-50 pt-32 rounded-bl-xl rounded-br-xl">
        <div className="max-container padding-container flex items-center justify-center py-16">
          <h1 className="text-white bold-46 lg:bold-64 hide !delay-200">Privacy Notice</h1>
        </div>
      </div>
    </>
  );
};

export default PrivacyHeader;
