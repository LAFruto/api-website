"use client"

import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <section className="bg-blue-50 text-white rounded-lg ">
      <div className="padding-container max-container flex justify-between items-center">
        <div className="py-12">
          <h1 className="bold-46 lg:bold-64 leading-[1.1] mb-6 lg:mb-12 ">
            Join our <br /> association!
          </h1>
          <Link
            href="https://forms.gle/7rpkGUD8eEBCr1WL6"
            target="_blank"
            className="btn_orange"
          >
            register here
          </Link>
        </div>
        <div>
          <Image
            src={"/images/register.png"}
            alt="register"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-[500px] pl-6 hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
