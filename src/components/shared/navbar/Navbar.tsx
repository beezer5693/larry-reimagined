"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-white/70 px-7 shadow-lg shadow-neutral-300/20 backdrop-blur-lg md:px-10">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between py-3">
        <Link
          className="border-[2px] border-black px-1 text-xl font-semibold text-gray-950"
          href="/"
        >
          L/B
        </Link>
        <NavLinks links={NAV_LINKS} path={currentPath} />
        <div className="hidden max-w-max lg:block">
          <Link href={"/contact"}>
            <Button className="group hover:brightness-125">
              <span>book larry</span>
              <ArrowRight
                className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                size={20}
              />
            </Button>
          </Link>
        </div>
        <Menu className="ml-auto text-gray-950 lg:hidden" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
