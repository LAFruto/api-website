"use client";

import { FAQs } from "@/constants";
import Image from "next/image";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface FAQProps {
  question: string;
  answer: string;
  image: string;
}

const FAQItem = ({ index, question, answer, image }: FAQProps & { index: number }) => {
  return (
    <div className="h-[32rem] md:h-[24rem] rounded-xl flex flex-col bg-orange-50 hover:bg-orange-90 transition-colors duration-300 ease-in-out md:flex-row">
      <div className="relative bg-blue-50 w-full h-[80px] sm:h-full md:w-1/2 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt="FAQ illustration"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-between p-8 gap-4">
        <div className="w-full gap-x-6 justify-center items-start flex flex-col-reverse md:flex-row">
          <div className="w-full max-w-[32rem]">
            <h4 className="text-xl font-bold md:text-2xl lg:text-3xl">{question}</h4>
          </div>
          <div className="flex gap-x-2">
            <h3 className="text-4xl font-bold">{"0" + (index + 1)}</h3>
          </div>
        </div>
        <div className="w-full gap-x-16 justify-center items-start flex flex-col-reverse lg:flex-row">
          <p className="text-base md:text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 lg:py-24 text-neutral-900 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        Frequently Asked
        <br /> Questions
      </h1>
      <div className="w-[80%] rounded-xl !max-w-[56rem]">
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-full h-full !overflow-visible">
          {FAQs.map((FAQ, index) => (
            <SwiperSlide key={index}>
              <FAQItem key={index} index={index} question={FAQ.question} answer={FAQ.answer} image={FAQ.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FAQ;
