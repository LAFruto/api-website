import Image from "next/image";

interface BannerProps {
  image: string;
}

const Banner = (
  {
    image
  } : BannerProps
) => {
  return (
    <div>
      <Image
        src={"/images/statement_2.png"}
        alt="vision image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
};

export default Banner;
