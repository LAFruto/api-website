import Image from "next/image";
import MapEmbed from "./MapEmbed";
import Banner from "../Banner";

const Location = () => {
  return (
    <section className="relative z-10 bg-blue-50 rounded-xl">
      <div className="max-container padding-container py-16 lg:py-24 flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col justify-between w-full lg:w-[51%]">
          <h1 className="text-white leading-tight bold-46 lg:bold-64">
            Where to Find us
          </h1>
          <div className="mt-5 gap-4 flex lg:flex-col items-center lg:items-start">
            <Image
              src={"/images/mapua.png"}
              alt="mmcm"
              width={150}
              height={150}
              quality={100}
            />
            <p className="text-white">
              Located at <strong>Mapúa Malayan Colleges Mindanao</strong>, Gen.
              Douglas MacArthur Hwy, Talomo, Davao City
            </p>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
};

export default Location;
