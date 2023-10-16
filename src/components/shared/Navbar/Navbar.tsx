"use client";

import Button from "@/components/ui/Button";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-[#fffff8] px-5 shadow-lg shadow-neutral-300/20 md:px-10">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between py-4">
        <Link className="text-xl font-medium text-black" href="/">
          L|B
        </Link>
        <NavLinks links={NAV_LINKS} path={currentPath} />
        <div className="max-w-max">
          <Link href={"/contact"}>
            <Button className="group hidden md:block">
              <span>Book Larry</span>
              <ChevronRight
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 "
              />
            </Button>
          </Link>
        </div>
        <Menu className="ml-auto text-black md:hidden" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
