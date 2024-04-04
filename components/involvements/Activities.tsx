import { ACTIVITIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

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
