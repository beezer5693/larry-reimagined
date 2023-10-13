"use client";

import Link from "next/link";
import Tabs from "./Tabs";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "services", label: "Services", path: "/services" },
  { id: "contact", label: "Contact", path: "/contact" },
  { id: "podcast", label: "Podcast", path: "/podcast" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-[#fffff8] px-5">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between border-b border-dashed border-black bg-[#fffff8] py-4">
        <Link
          className="text-xl font-medium text-black dark:text-white"
          href="/"
        >
          L|B
        </Link>
        <Tabs tabs={tabs} path={currentPath} />
        <Button
          variant={"primaryWithHoverAnimation"}
          className="hidden -translate-x-[3px] -translate-y-[3px] md:block"
          className2="dark:bg-yellow-200 bg-black"
          path="/contact"
        >
          Book Larry
        </Button>
        <Menu
          className="ml-auto text-black dark:text-white md:hidden"
          size={24}
        />
      </div>
    </div>
  );
};
export default Navbar;
