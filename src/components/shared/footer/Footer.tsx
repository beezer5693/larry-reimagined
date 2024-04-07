import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CopyRightNotice from "./CopyRightNotice";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <section className="relative mt-auto flex w-full flex-col items-center bg-[#0f0e10] px-5 pb-32 pt-24 md:px-10">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center gap-8 text-white lg:items-start">
          <div className="space-y-3">
            <p className="text-center text-xl font-semibold uppercase tracking-wider lg:text-left">
              LARRY BRYAN
            </p>
            <p className="text-center text-sm font-medium lg:text-left">
              151 N Nob Hill Rd, Suite 350
              <br />
              Plantation, FL 33324
            </p>
          </div>
          <div className="space-y-3 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase text-white">
              Connect With Larry
            </p>
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
      <CopyRightNotice />
    </section>
  );
};

export default Footer;
