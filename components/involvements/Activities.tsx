import { ACTIVITIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AnimatedArrow from "../AnimatedArrow";

interface ActivityProps {
  image: string;
  title: string;
  tags: string[];
  url: string;
}

const ActivityItem = ({ image, title, tags, url }: ActivityProps) => {
  return (
    <Link href={url}>
      <div className="relative h-[400px] lg:h-[600px] w-full bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
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
            <AnimatedArrow />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Activities = () => {
  return (
    <section className="max-container padding-container py-24 flex flex-col lg:grid grid-cols-2 gap-8">
      {ACTIVITIES.map((activity, index) => (
        <ActivityItem
          // key={index}
          image={activity.image}
          title={activity.title}
          tags={activity.tags}
          url={activity.url}
        />
      ))}
    </section>
  );
};

export default Activities;
