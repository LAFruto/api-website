"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedArrow from "../AnimatedArrow";
import { Involvement, Tag } from "@prisma/client";

interface InvolvementPreviewProps {
  image: string;
  title: string;
  url: string;
  date: Date;
  tags: Tag[];
}

const InvolvementItem = ({ image, title, url, date, tags }: InvolvementPreviewProps) => {
  const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();
  const year = date.getFullYear();
  return (
    <Link href={`/involvements/${url}`}>
      <div className="relative h-[400px] lg:h-[600px] w-full bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
        <Image
          src={image}
          alt={title}
          fill
          className="relative object-cover ease-in-out duration-300 group-hover:scale-[1.1]  group-hover:brightness-90 group-hover:saturate-100 group-hover:sepia-30 group-hover:opacity-70 !overflow-hidden cursor-pointer"
        />
        <div className="w-[80%] max-w-[36.5625rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl gap-4 ease-in-out duration-300 hover:bg-orange-90">
          <div className="flex gap-2">
            <span key={month} className="py-1 px-3 border-[1px] border-black-50 rounded-xl text-xs lg:text-sm">
              {`${month} ${year}`}
            </span>
            {tags.length > 0 &&
              tags.map((tag, index) => (
                <span key={index} className="py-1 px-3 border-[1px] border-black-50 rounded-xl text-xs lg:text-sm">
                  {tag}
                </span>
              ))}
          </div>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold !leading-normal">{title}</h4>
          <div className="flexCenter gap-1 mt-0.5">
            <h6 className="text-sm lg:text-base">READ MORE</h6>
            <AnimatedArrow />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Involvements = ({ involvements }: { involvements: Involvement[] }) => {
  return (
    <section className="max-container padding-container py-24 flex flex-col lg:grid grid-cols-2 gap-8">
      {involvements.map((activity) => (
        <InvolvementItem
          key={activity.url}
          image={activity.image}
          title={activity.title}
          url={activity.url}
          date={activity.date}
          tags={activity.tags}
        />
      ))}
    </section>
  );
};

export default Involvements;