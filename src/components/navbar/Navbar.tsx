"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const visible = useScrollVisibility();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full min-h-28 flex items-center px-[5%] transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-[80rem] w-full h-full px-8 py-3.5 gap-8 flex justify-between items-center bg-white m-auto relative shadow-xl rounded-2xl">
        <Link href="/">
          <Image
            src="/images/text_logo2.png"
            alt="API Logo"
            width={80}
            height={80}
            className="w-full h-auto"
            priority
          />
        </Link>

        <nav className="h-full items-center static hidden lg:flex">
          <NavLinks />
        </nav>

        <Link href="/contact" className="btn-orange hidden lg:flex">
          contact us
        </Link>

        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;
