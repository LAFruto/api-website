import { useState } from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { cn } from "@/lib/utils";
import X from "../icons/X";
import Menu from "../icons/Menu";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <button onClick={toggleNav} className="block">
        {isOpen ? <X /> : <Menu />}
      </button>

      <nav
        className={cn(
          "lg:hidden shadow-xl rounded-2xl px-8 text-right left-0 right-0 absolute ease-in-out bg-white duration-400 transition-all",
          isOpen ? "top-20 py-8 h-[280px]" : "top-20 h-0 px-8 py-0 overflow-hidden"
        )}
      >
        <NavLinks mobile onClick={toggleNav} />
        <Link href="/contact" className="btn-orange text-center block mt-4" onClick={toggleNav}>
          contact us
        </Link>
      </nav>
    </div>
  );
}
