import { STATS, TESTIMONIALS } from "@/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          pagination?: string;
          navigation?: string;
          style?: React.CSSProperties;
          init?: string; // Add the init attribute here
        },
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface StatProps {
  title: string;
  number: string;
}

const StatItem = ({ title, number }: StatProps) => {
  return (
    <div className="flexCenter flex-col text-white">
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

const TestimonialItem = ({
  image,
  name,
  position,
  quote,
}: TestimonialProps) => {
  return (
    <div className="w-20% text-white flexCenter flex-col gap-4">
      <Image
        className="rounded-full"
        src={image}
        alt={name}
        width={150}
        height={150}
      />
      <h6 className="bold-16 uppercase">
        {name} / {position}
      </h6>
      <p className="regular-16 w-full lg:w-[50%] text-center">"{quote}"</p>
      <div className="mt-8"></div>
    </div>
  );
};

const Impact = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      loop: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    };

    // Assign it to swiper element
    if (swiperRef.current) {
      // Check if swiperRef.current is not null
      Object.assign(swiperRef.current, params);

      // initialize swiper
      swiperRef.current.initialize();
    }
  }, []);

  return (
    <section className="padding-container bg-blue-50 rounded-lg py-12 lg:py-16 flexCenter flex-col">
      <div className="max-container w-full flexCenter flex-col grid-cols-3 gap-12 lg:grid lg:gap-2">
        {/* Render stats */}
        {STATS.map((stat, index) => (
          <StatItem key={index} title={stat.title} number={stat.number} />
        ))}
      </div>
      <hr className="max-container w-full lg:w-[70%] my-20" />
      {/* Swiper container for testimonials */}
      <div className="w-full max-container">
        <swiper-container
          init="false"
          pagination="true"
          ref={swiperRef}
          style={{ "--swiper-pagination-color": "#fff" } as React.CSSProperties}
        >
          {/* Render testimonials */}
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
      </div>
    </section>
  );
};

export default Impact;