import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  children?: any;
};

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter border ${variant} ${full && "w-full"} `}
      type={type}
    >
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      {children}
    </button>
  );
};

export default Button;
