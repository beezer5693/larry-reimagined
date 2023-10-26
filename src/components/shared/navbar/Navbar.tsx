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
    <div className="sticky top-0 z-50 flex w-full justify-center border-b border-neutral-300 bg-white/80 px-7 backdrop-blur-lg md:px-10">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between py-1.5">
        <Link className="text-lg font-semibold text-gray-950" href="/">
          L/B
        </Link>
        <NavLinks links={NAV_LINKS} path={currentPath} />
        <div className="hidden max-w-max lg:block">
          <Link
            className="group inline-flex items-center text-xs"
            href={"/contact"}
          >
            <Button className="px-4 py-2 hover:brightness-125">
              <span className="text-[.7rem] text-white">book larry</span>
              <ArrowRight
                className="ml-1 transition duration-500 ease-in-out group-hover:translate-x-1"
                size={14}
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
