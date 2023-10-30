import { ArrowUpRight } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <section className="relative flex w-full flex-col items-center bg-neutral-950 px-5 pb-32 pt-24 md:px-10">
      <div className="flex w-full max-w-[1400px] flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center gap-8 text-white lg:items-start">
          <div className="space-y-3">
            <p className="text-center lg:text-left">
              <span className="text-xl font-semibold uppercase tracking-wider">
                LARRY BRYAN
              </span>
            </p>
            <p className="text-center text-sm font-medium lg:text-left">
              151 N Nob Hill Rd, Suite 350
              <br />
              Plantation, FL 33324
            </p>
          </div>
          <div className="space-y-3 text-center lg:text-left">
            <p className="text-sm font-medium">Connect With Larry</p>
            <SocialLinks className="opacity-80 hover:opacity-100" />
          </div>
          <div className="text-sm">
            <p className="text-center lg:text-left">
              Website by{" "}
              <Link href={"https://www.wisdomstudios.co"} className="group">
                <span className="relative before:absolute before:bottom-[1px] before:left-0 before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:group-hover:w-full">
                  Wisdom Studios
                </span>
                <ArrowUpRight size={14} className="ml-1 inline-block" />
              </Link>
            </p>
          </div>
        </div>
        <Subscribe />
      </div>
      <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center text-xs text-white">
        © {new Date().getFullYear()} Larry Bryan. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
