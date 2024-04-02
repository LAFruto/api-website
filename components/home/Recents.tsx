import { RECENTS } from "@/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Button from "../Button";

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

interface RecentProps {
  image: string;
  title: string;
  tags: string[];
  url: string;
}

const RecentItem = ({ image, title, tags, url }: RecentProps) => {
  return (
    <div className="relative h-[600px] w-full bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
        <Image
          src={image}
          alt={title}
          fill
          className="relative object-cover ease-in-out duration-300 group-hover:scale-[1.1]  group-hover:brightness-90 group-hover:saturate-100 group-hover:sepia-30 group-hover:opacity-70 !overflow-hidden cursor-pointer"
        />
      <div className="w-[80%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl gap-4 ease-in-out duration-300 hover:bg-orange-90">
        <div className="flex gap-2 ">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="py-2 px-2.5 border-[1px] border-black-50 rounded-full regular-14 "
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="bold-20 lg:bold-32 !leading-normal">{title}</h4>
        <div className="flexCenter gap-1 mt-0.5">
          <h6 className="regular-16">READ MORE</h6>
          <div className="w-[1.9rem] col-y-[0.2rem] flex-none px-[0.2rem] flex overflow-hidden">
            <div className="w-[1.5rem] h-[1.5rem] flex-col flex-none justify-center items-center flex transition-transform translate-x-[-2rem] group-hover:translate-x-1 duration-300 ease-in-out">
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.59814 7.06201C1.04586 7.06201 0.598145 7.50973 0.598145 8.06201C0.598144 8.6143 1.04586 9.06201 1.59814 9.06201L1.59814 7.06201ZM38.7251 8.76912C39.1156 8.3786 39.1156 7.74543 38.7251 7.35491L32.3612 0.990947C31.9706 0.600422 31.3375 0.600422 30.9469 0.990946C30.5564 1.38147 30.5564 2.01464 30.9469 2.40516L36.6038 8.06201L30.9469 13.7189C30.5564 14.1094 30.5564 14.7426 30.9469 15.1331C31.3375 15.5236 31.9706 15.5236 32.3612 15.1331L38.7251 8.76912ZM1.59814 9.06201L38.018 9.06201L38.018 7.06201L1.59814 7.06201L1.59814 9.06201Z"
                  fill="#2A2D34"
                />
              </svg>
            </div>
            <div className="w-[1.5rem] h-[1.5rem] flex-col flex-none justify-center items-center flex transition-transform translate-x-[-1.5rem] group-hover:translate-x-1 duration-300 ease-in-out">
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.59814 7.06201C1.04586 7.06201 0.598145 7.50973 0.598145 8.06201C0.598144 8.6143 1.04586 9.06201 1.59814 9.06201L1.59814 7.06201ZM38.7251 8.76912C39.1156 8.3786 39.1156 7.74543 38.7251 7.35491L32.3612 0.990947C31.9706 0.600422 31.3375 0.600422 30.9469 0.990946C30.5564 1.38147 30.5564 2.01464 30.9469 2.40516L36.6038 8.06201L30.9469 13.7189C30.5564 14.1094 30.5564 14.7426 30.9469 15.1331C31.3375 15.5236 31.9706 15.5236 32.3612 15.1331L38.7251 8.76912ZM1.59814 9.06201L38.018 9.06201L38.018 7.06201L1.59814 7.06201L1.59814 9.06201Z"
                  fill="#2A2D34"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Recents = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 25,
      centeredSlides: true,
      initialSlide: 1,

      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },

      injectStyles: [
        `
          .swiper {
            overflow: visible !important;
            width: 100%;
            height: 600px;
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
    <section className="bg-orange-50 rounded-lg py-12 lg:py-24">
      <div className="max-container padding-container py-12 lg:pb-16">
        <div className="px-0 xl:px-20 flex flex-col lg:grid grid-cols-2 gap-4">
          <h1 className="bold-52 lg:bold-64 col-span-1">Our recent milestones</h1>
          <div className="flex flex-col justify-between items-start gap-8">
            <p>
              Explore our latest triumphs and accolades as we push innovation
              boundaries. From winning competitions to pioneering workshops.
            </p>
            <Button
              type={"button"}
              title={"explore our achievements"}
              variant={"btn_blue"}
            />
          </div>
        </div>

      </div>
      <div className="flex flex-col gap-2 w-full pr-[8%] px-[5%] ">
        <swiper-container init="false" ref={swiperRef}>
          {RECENTS.map((recent, index) => (
            <swiper-slide key={index}>
              <RecentItem
                image={recent.image}
                title={recent.title}
                tags={recent.tags}
                url={recent.url}
              />
            </swiper-slide>
          ))}
        </swiper-container>

        <div className="flex gap-2 items-center mt-12">
          <div className="swiper-btn-prev w-14 h-14 items-center flex justify-center bg-blue-50 rounded-full hover:bg-blue-90 duration-300 ease-in-out">
            <div className="w-6 h-6 flex flex-col justify-center items-center scale-x-[-1]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-2 stroke-white"
              >
                <path
                  d="M1.59814 7.06201C1.04586 7.06201 0.598145 7.50973 0.598145 8.06201C0.598144 8.6143 1.04586 9.06201 1.59814 9.06201L1.59814 7.06201ZM38.7251 8.76912C39.1156 8.3786 39.1156 7.74543 38.7251 7.35491L32.3612 0.990947C31.9706 0.600422 31.3375 0.600422 30.9469 0.990946C30.5564 1.38147 30.5564 2.01464 30.9469 2.40516L36.6038 8.06201L30.9469 13.7189C30.5564 14.1094 30.5564 14.7426 30.9469 15.1331C31.3375 15.5236 31.9706 15.5236 32.3612 15.1331L38.7251 8.76912ZM1.59814 9.06201L38.018 9.06201L38.018 7.06201L1.59814 7.06201L1.59814 9.06201Z"
                  fill="#2A2D34"
                />
              </svg>
            </div>
          </div>
          <div className="swiper-btn-next w-14 h-14 items-center flex justify-center bg-blue-50 rounded-full hover:bg-blue-90 duration-300 ease-in-out">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-2 stroke-white"
              >
                <path
                  d="M1.59814 7.06201C1.04586 7.06201 0.598145 7.50973 0.598145 8.06201C0.598144 8.6143 1.04586 9.06201 1.59814 9.06201L1.59814 7.06201ZM38.7251 8.76912C39.1156 8.3786 39.1156 7.74543 38.7251 7.35491L32.3612 0.990947C31.9706 0.600422 31.3375 0.600422 30.9469 0.990946C30.5564 1.38147 30.5564 2.01464 30.9469 2.40516L36.6038 8.06201L30.9469 13.7189C30.5564 14.1094 30.5564 14.7426 30.9469 15.1331C31.3375 15.5236 31.9706 15.5236 32.3612 15.1331L38.7251 8.76912ZM1.59814 9.06201L38.018 9.06201L38.018 7.06201L1.59814 7.06201L1.59814 9.06201Z"
                  fill="#2A2D34"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recents;
