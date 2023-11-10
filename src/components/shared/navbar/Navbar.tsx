"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add("overflow-x-hidden");
    }
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center border-b border-gray-200 bg-white px-5 md:px-10">
      <div className="relative flex h-14 w-full max-w-screen-xl items-center justify-between">
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
            <Button className="px-4 py-2.5 hover:brightness-110">
              <span className="text-[.8rem] text-white">book larry</span>
            </Button>
          </Link>
        </div>
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-auto cursor-pointer lg:hidden"
        >
          <Hamburger toggled={isMenuOpen} size={24} />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMobileMenu} />
    </div>
  );
};

export default Navbar;
