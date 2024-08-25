import Image from "next/image";

interface BannerProps {
  image: string;
  title: string;
}

const Banner = ({ image, title }: BannerProps) => {
  return (
    <Image
      src={image}
      alt={title}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-[500px] object-cover mt-[-1rem]"
    />
  );
};

export default Banner;
