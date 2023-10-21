import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BookSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#3a53f5] px-7 py-10 lg:px-10 lg:py-16">
      <p className="text-center text-3xl font-semibold tracking-tighter text-white lg:text-4xl">
        <span className="align-middle">
          Ready to book Larry for your next event?
        </span>{" "}
        <Link className="group" href="/contact">
          <span className="relative align-middle before:absolute before:bottom-[1px] before:left-0 before:h-[3px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:group-hover:w-full">
            Get In Touch
          </span>
        </Link>
        <ArrowRight className="ml-3 inline-block align-middle" size={30} />
      </p>
    </div>
  );
};
export default BookSection;
