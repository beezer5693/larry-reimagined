"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiArrowRightBold } from "react-icons/pi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center border-b border-gray-200 bg-white md:px-10">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between py-3">
        <Link
          className="text-lg font-semibold tracking-wider text-gray-950"
          href="/"
        >
          LARRY BRYAN
        </Link>
        <NavLinks links={NAV_LINKS} path={currentPath} />
        <div className="hidden max-w-max lg:block">
          <Link
            className="group inline-flex items-center text-xs"
            href={"/contact"}
          >
            <Button className="px-4 py-2.5 hover:brightness-125">
              <span className="text-[.8rem] text-white">book larry</span>
              <PiArrowRightBold
                className="ml-1 transition duration-500 ease-in-out group-hover:translate-x-1"
                size={12}
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
