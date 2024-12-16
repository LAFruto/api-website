"use client";

import Image from "next/image";

interface ActivityProps {
  image: string;
  month: string;
  description: string;
  index: number;
}

export type Timeline = {
  image: string;
  date: Date;
  description: string;
};

const TimelineItem = ({ image, month, description, index }: ActivityProps) => {
  return (
    <div className={`flex flex-col lg:grid lg:grid-cols-3 items-center place-items-center w-3/4`}>
      <div
        className={`${
          index % 2 === 0 ? "lg:order-3" : "lg:order-1 "
        }  flexCenter w-[350px] h-[350px] overflow-hidden rounded-full hide !delay-300`}
      >
        <Image src={image} alt="image" width={1000} height={1000} className="w-full h-full object-cover" />
      </div>
      <div className="order-2 w-0 border-[1px] border-blue-50 border-black lg:h-96 h-12"></div>
      <div
        className={`${
          index % 2 === 0 ? "lg:order-1 lg:text-right" : "lg:order-3 lg:text-left"
        } flex flex-col gap-2 justify-center text-center mb-4 p-6 lg:mb-0 hide !delay-100`}
      >
        <h4 className="bold-20 mt-5 capitalize  text-neutral-900">{month}</h4>
        <p className=" text-neutral-900">{description}</p>
      </div>
    </div>
  );
};
``;

const TimelineList = ({ timeline }: { timeline: Timeline[] }) => {
  const displayedYears = new Set<string>();
  return (
    <section className="max-container padding-container flexCenter flex-col py-24">
      <h2 className="bold-40 lg:bold-64 mb-10 text-neutral-900 hide !delay-100">How we started.</h2>
      {timeline.map((timeline, index) => {
        const year = new Date(timeline.date).getFullYear().toString();
        const month = timeline.date.toLocaleString("default", {
          month: "long",
        });
        const showYear = !displayedYears.has(year);
        if (showYear) {
          displayedYears.add(year);
        }
        return (
          <div key={index} className="flexCenter flex-col">
            {showYear && (
              <div className="bg-orange-50 border-black text-neutral-900 rounded-xl">
                <h3 className="bold-32 py-4 px-12">{year}</h3>
              </div>
            )}
            {showYear && <div className={`flex w-0 border-[1px] border-blue-50 h-12 lg:h-96 lg:hidden`} />}
            <TimelineItem
              key={index}
              image={timeline.image}
              month={month}
              description={timeline.description}
              index={index}
            />
          </div>
        );
      })}
      <div className="bg-orange-50 border-black rounded-xl">
        <h3 className="bold-18 py-4 px-8">More to come!</h3>
      </div>
    </section>
  );
};

export default TimelineList;
