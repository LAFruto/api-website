import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import { FAQs } from "@/constants";

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
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface FAQProps {
  question: string;
  answer: string;
  image: string;
}

const FAQItem = ({
  index,
  question,
  answer,
  image,
}: FAQProps & { index: number }) => {
  return (
    <div className="h-[32rem] md:h-[24rem] rounded-xl flex flex-col bg-orange-50 hover:bg-orange-90 duration-300 ease-in-out md:flex-row ">
      <div className="relative bg-blue-50 w-full h-[80px] sm:h-full md:w-[50%] rounded-xl overflow-hidden flex-grow-1 flex-shrink-0 sm:flex-grow sm:flex-shrink">
        <Image
          src={image}
          alt="bg"
          fill
          sizes="300vw"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="w-full  flex flex-col justify-between p-8 gap-4">
        <div className="w-full gap-x-6 justify-center items-start flex flex-col-reverse md:flex-row">
          <div className="w-full max-w-[32rem]">
            <h4 className="bold-20 lg:bold-32">{question}</h4>
          </div>
          <div className="gap-x-2 flex regular-2">
            <h3 className="bold-40">{"0" + (index + 1)}</h3>
          </div>
        </div>
        <div className="w-full gap-x-16 justify-center items-start flex flex-col-reverse lg:flex-row">
          <p className="regular-16">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      effect: "cards",
      grabCursor: true,

      injectStyles: [
        `
          .swiper-slide-shadow {
            background: rgba(187, 88, 88, 0.1) !!important;
            border-radius: 50px !!important;
          }
        `,
      ],
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
    <section className="max-container padding-container max-container padding-container py-12 lg:py-24 flex-col flex items-center">
      <h1 className="bold-40 text-center pb-12 lg:bold-64">
        Frequently Asked
        <br /> Questions
      </h1>
      <div className=" w-[80%] rounded-xl flex-none !max-w-[56rem]">
        <swiper-container init="false" ref={swiperRef}>
          {FAQs.map((FAQ, index) => (
            <swiper-slide>
              <FAQItem
                key={index}
                index={index}
                question={FAQ.question}
                answer={FAQ.answer}
                image={FAQ.image}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default FAQ;