"use client";

import Link from "next/link";
import Tabs from "./Tabs";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

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
    <div className="sticky top-0 z-50 flex w-full justify-center bg-white px-5">
      <div className="relative flex w-full max-w-[1060px] items-center justify-between border-b border-dashed border-black bg-white py-4">
        <div>
          <Link className="text-xl font-medium" href="/">
            L|B
          </Link>
        </div>
        <div className="hidden md:block">
          <Tabs tabs={tabs} path={currentPath} />
        </div>
        <Button className="hidden md:block">Book Larry</Button>
      </div>
    </div>
  );
};
export default Navbar;
