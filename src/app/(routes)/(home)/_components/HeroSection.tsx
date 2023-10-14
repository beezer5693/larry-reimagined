import Button from "@/components/ui/Button";
import { Redo } from "lucide-react";
import Image from "next/image";
import larry from "../../../../../public/assets/home/hero-larry.png";

const HeroSection = () => {
  return (
    <div className="border-b border-dashed border-black pb-12 pt-7">
      <section className="relative flex flex-col rounded-sm border border-black bg-gradient-to-br from-[#3a53f5] to-[#2e42c4] pb-0 pt-14 lg:flex-row lg:justify-between lg:pt-24">
        {/* Hero background */}
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm bg-black"></div>

        {/* Hero left/top */}
        <div className="relative flex flex-1 flex-col items-center justify-center self-stretch px-10 pb-10 lg:justify-start lg:px-0 lg:pb-0 lg:pl-10 lg:pt-10">
          <div className="relative">
            <h1 className="relative text-center text-6xl font-medium leading-[55px] tracking-tighter text-[#101217] md:text-7xl lg:text-left lg:leading-[60px]">
              <span className="relative px-2">
                <span className="absolute inset-0 -skew-y-2 bg-yellow-300"></span>
                <span className="relative">Dare to</span>
              </span>{" "}
              <span className="hidden align-middle lg:inline-block">
                <Redo size={40} className="rotate-[30deg]" />
              </span>{" "}
              <span className="lg:hidden">think</span> <br />{" "}
              <span className="relative hidden lg:inline-block">think</span>{" "}
              <span
                style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
                className="relative font-extrabold italic text-white"
              >
                Different.
              </span>
            </h1>
            <p className="mt-5 max-w-[45ch] text-center leading-5 text-blue-200 lg:px-0 lg:text-left lg:text-lg lg:leading-5">
              Harnessing the immense potential within to transmute personal
              obstacles into reservoirs of self-empowerment.
            </p>
            <div className="mt-10 flex flex-col-reverse items-center gap-3 lg:flex-row">
              <Button
                className="w-full rounded-full"
                className2="rounded-full"
                size={"lg"}
                variant={"secondaryWithHoverAnimation"}
                path={"/services"}
              >
                Services
              </Button>
              <Button
                variant={"secondaryWithHoverAnimation"}
                className="relative w-full rounded-full hover:bg-yellow-300"
                className2="rounded-full"
                size={"lg"}
                path="/contact"
              >
                Book Larry
              </Button>
            </div>
          </div>
        </div>

        {/* Hero right/bottom */}
        <div className="relative flex justify-center self-stretch px-5 lg:w-[45%] lg:pr-5">
          <div className="relative rounded-bl-[2px] rounded-br-[2px] rounded-tl-full rounded-tr-full border-x border-t border-black bg-gradient-to-br from-[#3a53f5] to-[#2e42c4]">
            <Image
              className="object-cover object-bottom grayscale"
              src={larry}
              height={500}
              width={500}
              sizes="(min-width: 1360px) 575px, (min-width: 1040px) calc(53.33vw - 140px), (min-width: 780px) calc(66.25vw - 236px), calc(100vw - 42px)"
              alt="Larry Bryan"
              quality={65}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
