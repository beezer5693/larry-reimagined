"use client";

import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-white px-5 shadow-lg shadow-neutral-300/20 md:px-10">
      <div className="relative flex w-full max-w-screen-2xl items-center justify-between py-4">
        <Link className="text-xl font-medium text-black" href="/">
          L|B
        </Link>
        <NavLinks links={NAV_LINKS} path={currentPath} />
        <div className="hidden max-w-max md:block">
          <Link href={"/contact"}>
            <Button className="hover:brightness-125">
              <span>book larry</span>
              <ArrowUpRight className="-mt-0.5 ml-2" size={16} />
            </Button>
          </Link>
        </div>
        <Menu className="ml-auto text-black md:hidden" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
