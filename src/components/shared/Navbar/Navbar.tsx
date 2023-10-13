"use client";

import Link from "next/link";
import Tabs from "./Tabs";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { Menu } from "lucide-react";

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
    <div className="sticky top-0 z-50 flex w-full justify-center bg-[#101217] px-5">
      <div className="relative flex w-full max-w-screen-xl items-center justify-between border-b border-dashed border-white bg-[#101217] py-4">
        <div>
          <Link className="text-xl font-medium text-white" href="/">
            L|B
          </Link>
        </div>
        <div className="hidden md:block">
          <Tabs tabs={tabs} path={currentPath} />
        </div>
        <div className="flex-1 md:hidden">
          <Menu className="ml-auto text-white" size={24} />
        </div>
        <Button
          variant={"primaryWithHoverAnimation"}
          className2="bg-yellow-300"
          className="hidden md:block"
        >
          Book Larry
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
