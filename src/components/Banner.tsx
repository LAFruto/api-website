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
      width={1200}
      height={1200}
      className="w-full h-[500px] object-cover mt-[-1rem]"
      priority
    />
  );
};

export default Banner;
