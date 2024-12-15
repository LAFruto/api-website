"use client";

import { Content } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedArrow from "../AnimatedArrow";
import Button from "../Button";
import SwiperButtons from "./SwiperButtons";

import "swiper/css";
import "swiper/css/navigation";

interface RecentItemProps {
  content: Content;
}

const RecentItem = ({ content }: RecentItemProps) => {
  const month = content.date.split(" ")[1];
  const year = content.date.split(" ")[2];

  return (
    <Link href={`/involvements/${content.slug}`} className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="relative h-[500px] lg:h-[600px] bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
        <Image
          src={content.thumbnail}
          alt={content.title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-[1.1] group-hover:brightness-90 group-hover:saturate-100 group-hover:sepia-30 group-hover:opacity-70"
        />
        <div className="w-[80%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute bottom-[7%] left-[5%] rounded-xl gap-4 transition-all duration-300 hover:bg-orange-90">
          <div className="flex gap-2 flex-wrap">
            <span className="py-1 px-3 border border-black-50 rounded-xl text-xs lg:text-sm">{`${month} ${year}`}</span>
            {content.tags &&
              content.tags.map((tag, index) => (
                <span key={index} className="py-1 px-3 border border-black-50 rounded-xl text-xs lg:text-sm">
                  {tag}
                </span>
              ))}
          </div>
          <h4 className="text-xl md:text-3xl lg:text-4xl font-extrabold leading-normal">{content.title}</h4>
          <div className="flex items-center gap-1 mt-0.5">
            <h6 className="text-sm lg:text-base">READ MORE</h6>
            <AnimatedArrow />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Recents = ({ involvements }: { involvements: Content[] }) => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-orange-50 rounded-lg py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 py-4 lg:py-12 lg:pb-16">
        <div className="px-0 xl:px-20 flex flex-col lg:grid grid-cols-2 gap-4">
          <h1 className="tex-4xl lg:text-5xl xl:text-6xl font-bold col-span-1">Our recent milestones</h1>
          <div className="flex flex-col justify-between items-start gap-8">
            <p>
              Explore our latest triumphs and accolades as we push innovation boundaries. From winning competitions to
              pioneering workshops.
            </p>
            <Link href={"/involvements"}>
              <Button type="button" title="explore our involvements" variant="btn-blue" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full px-[5%] lg:px-[10%] flex flex-col gap-8">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="w-full h-full !overflow-visible  lg:!-mx-20"
        >
          {involvements.slice(0, 4).map((recent, index) => (
            <SwiperSlide key={index}>
              <RecentItem content={recent} />
            </SwiperSlide>
          ))}
          <div className="mt-12">
            <SwiperButtons swiper={swiperRef.current} />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Recents;
