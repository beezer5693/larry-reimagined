import { ArrowUpRight } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <section className="relative flex w-full flex-col items-center bg-black px-7 pb-32 pt-24 md:px-10">
      <div className="flex w-full max-w-screen-xl items-start justify-between gap-10">
        <div className="flex flex-col gap-8 text-white">
          <div className="space-y-3">
            <p className="text-4xl font-bold">Larry Bryan</p>
            <p className="font-medium">
              151 N Nob Hill Rd, Suite 350
              <br />
              Plantation, FL 33324
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Connect With Larry</p>
            <SocialLinks />
          </div>
          <div className="text-sm">
            <p>
              Website by{" "}
              <Link
                href={"https://www.wisdomstudios.co"}
                className="relative before:absolute before:bottom-[1px] before:left-0 before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:hover:w-full"
              >
                Wisdom Studios
              </Link>
              <ArrowUpRight size={14} className="ml-1 inline-block" />
            </p>
          </div>
        </div>
        <Subscribe />
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white">
        © {new Date().getFullYear()} Larry Bryan. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;

// © {new Date().getFullYear()} Larry Bryan. All rights reserved.
