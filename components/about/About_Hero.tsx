import Image from "next/image";
import Button from "../Button";

const About_Hero = () => {
  return (
    <div className="relative z-20 bg-blue-50 pt-32 rounded-bl-xl rounded-br-xl">
      <div className="max-container padding-container flex flex-col-reverse gap-4 grid-cols-2 lg:grid">
        <div>
          <div className="flex flex-col py-6 px-0 lg:px-6 gap-8 mb-6">
            <h1 className="text-white bold-46 lg:bold-64">This is API!</h1>
            <p className="text-white">
              API, founded in August 2023 at Mapua Malayan Colleges of Mindanao,
              is a tech club offering workshops and competitions to college
              students.
            </p>
            <Button
              type="button"
              variant="btn_orange w-[70%]"
              title="explore our achievements"
            />
          </div>
        </div>

        <div className="flex flex-col lg:items-center ">
          <Image
            src={"/images/about.png"}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="flex min-w-[300px] w-[500px] h-full object-contain object-bottom"
          />
          <hr className="flex lg:hidden border-orange-50 border-2 rounded-lg w-full max-w-[500px]"></hr>
        </div>
      </div>
    </div>
  );
};

export default About_Hero;
