"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import { register } from "swiper/element/bundle";

import { STATS } from "@/constants";

register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          pagination?: string;
          navigation?: string;
          style?: React.CSSProperties;
          init?: string;
        },
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface StatProps {
  title: string;
  number: string;
  className?: string;
}

const StatItem = ({ title, number, className }: StatProps) => {
  return (
    <div className={`flexCenter flex-col text-white ${className ?? ""}`}>
      <h1 className="bold-52">{number}</h1>
      <h5 className="bold-20">{title}</h5>
    </div>
  );
};

interface TestimonialProps {
  image: string;
  name: string;
  position: string;
  quote: string;
}

const TestimonialItem = ({ image, name, position, quote }: TestimonialProps) => {
  return (
    <div className="w-20% text-white flexCenter flex-col gap-4">
      <Image className="rounded-full" src={image} alt={name} width={150} height={150} />
      <h6 className="text-bold uppercase">
        {name} / {position}
      </h6>
      <p className="w-full lg:w-[50%] text-center">&quot;{quote}&quot;</p>
      <div className="mt-8"></div>
    </div>
  );
};

const Impact = () => {
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    const params = {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, params);

      swiperRef.current.initialize();
    }
  }, []);

  return (
    <section className="padding-container bg-blue-50 rounded-lg py-12 lg:py-16 flexCenter flex-col">
      <div className="max-container w-full flexCenter flex-col grid-cols-3 gap-12 lg:grid lg:gap-2">
        {STATS.map((stat, index) => (
          <StatItem key={index} title={stat.title} number={stat.number} className={`hide !delay-${index * 100}`} />
        ))}
      </div>
      {/* <hr className="max-container w-full lg:w-[70%] my-20 hide delay-200" />
      {/* <div className="w-full max-container  hide delay-300">
        <swiper-container
          init="false"
          pagination="true"
          ref={swiperRef}
          style={{ "--swiper-pagination-color": "#fff" } as React.CSSProperties}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <swiper-slide key={index}>
              <TestimonialItem
                image={testimonial.image}
                name={testimonial.name}
                position={testimonial.position}
                quote={testimonial.quote}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div> */}
    </section>
  );
};

export default Impact;
