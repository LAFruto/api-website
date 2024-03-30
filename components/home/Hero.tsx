import Button from "../Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container py-28">
      <div className="flex flex-col-reverse lg:grid grid-cols-2 px-0 gap-4 lg:gap-12 xl:px-8">
        <div className="flex justify-center flex-col gap-4 py-2 lg:gap-6 lg:py-16">
          <h1 className="bold-40 lg:bold-64 xl:bold-64">
            Empowering tomorrow's visionaries
          </h1>
          <p className="regular-16 mt-4 xl:max-w[50px]">
            We are a tech-focused club in <b>Mapua Malayan Colleges Mindanao</b>
            , dedicated to nurturing student growth through workshops,
            competitions, and opportunities for hands-on learning and skill
            development.
          </p>
          <div className="mt-2">
            <Button
              type="button"
              title="get started"
              variant="btn_orange"
            />
          </div>
        </div>
        <div className="block">
          <Image src="/images/hero.png" alt="hero" width={500} height={500}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
{
  /* <div className="relative flex flex-1 items-start">
            <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

            </div>
        </div> */
}
