"use client";

import { NextButton, PrevButton, usePrevNextButtons } from "@/app/carousel/CarouselArrows";
import { Content } from "@/data";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import AnimatedArrow from "../AnimatedArrow";
import Button from "../Button";

interface RecentItemProps {
  content: Content;
}

const RecentItem = ({ content }: RecentItemProps) => {
  const month = content.date.split(" ")[1];
  const year = content.date.split(" ")[2];

  return (
    <Link
      href={`/involvements/${content.slug}`}
      className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden rounded-3xl pr-8"
    >
      <div className="relative h-[600px] w-full bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
        <Image
          src={content.thumbnail}
          alt={content.title}
          fill
          className="relative object-cover ease-in-out duration-300 group-hover:scale-[1.1]  group-hover:brightness-90 group-hover:saturate-100 group-hover:sepia-30 group-hover:opacity-70 !overflow-hidden cursor-pointer"
        />
        <div className="w-[80%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl gap-4 ease-in-out duration-300 hover:bg-orange-90  hide !delay-300">
          <div className="flex gap-2">
            <span key={month} className="py-1 px-3 border-[1px] border-black-50 rounded-xl text-xs lg:text-sm">
              {`${month} ${year}`}
            </span>
            {content.tags &&
              content.tags.map((tag, index) => (
                <span key={index} className="py-1 px-3 border-[1px] border-black-50 rounded-xl text-xs lg:text-sm">
                  {tag}
                </span>
              ))}
          </div>
          <h4 className="text-xl md:text-3xl lg:text-4xl font-extrabold !leading-normal">{content.title}</h4>
          <div className="flexCenter gap-1 mt-0.5">
            <h6 className="text-sm lg:text-base">READ MORE</h6>
            <AnimatedArrow />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Recents = ({ involvements }: { involvements: Content[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ stopOnInteraction: true })]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="bg-orange-50 rounded-lg py-12 lg:py-16">
      <div className="max-container padding-container mb-4 py-4 lg:py-12 lg:pb-16">
        <div className="px-0 xl:px-20 flex flex-col lg:grid grid-cols-2 gap-4">
          <h1 className="bold-52 lg:bold-64 col-span-1 hide !delay-100">Our recent milestones</h1>
          <div className="flex flex-col justify-between items-start gap-8">
            <p className="hide !delay-200">
              Explore our latest triumphs and accolades as we push innovation boundaries. From winning competitions to
              pioneering workshops.
            </p>
            <Link href={"/involvements"}>
              <Button type="button" title="explore our involvements" variant={"btn-blue hide !delay-300"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full pr-[8%] px-[5%]">
        <div className="h-full" ref={emblaRef}>
          <div className="flex h-full">
            {involvements.slice(0, 4).map((recent, index) => (
              <RecentItem content={recent} key={index} />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Recents;
