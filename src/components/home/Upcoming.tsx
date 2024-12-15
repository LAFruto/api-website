import AnimatedArrow from "../AnimatedArrow";
import Image from "next/image";

const Upcoming = () => {
  return (
    <div className="max-container px-[10%] my-12  ">
      <div className="relative h-[400px] lg:h-[600px] w-full bg-orange-50 overflow-hidden cursor-pointer rounded-[1rem] group">
        <Image
          src={"/images/upcoming_cybersec.png"}
          alt={"upcoming workshop"}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full relative object-cover ease-in-out duration-300 group-hover:scale-[`1.1]  group-hover:brightness-90 group-hover:saturate-100 group-hover:sepia-30 group-hover:opacity-70 !overflow-hidden cursor-pointer"
          priority
        />
        <div className="w-[80%] max-w-[40rem] bg-orange-50 cursor-pointer flex-col items-start p-[1.875rem] flex absolute top-auto bottom-[7%] left-[5%] right-auto rounded-xl gap-4 ease-in-out duration-300 hover:bg-orange-90 hide">
          <div className="flex gap-2">
            <span className="py-1 px-3 border-[1px] border-black-50 rounded-xl text-xs lg:text-sm">@Mapúa-MCM</span>
            <span className="py-1 px-3 border-[1px] border-black-50 rounded-xl text-xs lg:text-sm">
              First Term: 2024-2025
            </span>
          </div>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold !leading-normal">
            UPCOMING: Cybersec Workshop
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
