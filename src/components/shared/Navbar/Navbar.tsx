"use client";

import Link from "next/link";
import Tabs from "./Tabs";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { Moon, Sun } from "lucide-react";
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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const oppositeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-white px-5 dark:bg-[#101217]">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between border-b border-dashed border-black bg-white py-4 dark:border-white dark:bg-[#101217]">
        <div>
          <Link
            className="text-xl font-medium text-black dark:text-white"
            href="/"
          >
            L|B
          </Link>
        </div>
        <div className="hidden md:block">
          <Tabs tabs={tabs} path={currentPath} />
        </div>
        <div className="flex-1 md:hidden">
          <Menu className="ml-auto text-black dark:text-white" size={24} />
        </div>
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer"
            onClick={() => setTheme(oppositeTheme)}
          >
            {theme === "dark" ? (
              <Sun className="stoke-1" />
            ) : (
              <Moon className="stoke-1" />
            )}
          </div>
          <Button
            variant={"primaryWithHoverAnimation"}
            className2="dark:bg-yellow-200 bg-black"
            className="hidden md:block"
          >
            Book Larry
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
