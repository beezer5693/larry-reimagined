import Button from "@/components/ui/Button";
import Image from "next/image";
import larry from "../../../../../public/assets/home/hero.png";
import Link from "next/link";
import { ArrowRight, Redo } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="border-b border-dashed border-black pb-10 pt-7">
      <section className="relative flex flex-col rounded-sm border border-black bg-gradient-to-br from-[#4c6df9] to-[#3254df] md:flex-row md:justify-between">
        {/* Hero background */}
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm bg-black"></div>

        {/* Hero left/top */}
        <div className="h-full px-4 pt-10 md:pl-11 md:pt-28 lg:pl-20">
          <div className="relative flex w-full flex-col items-center space-y-4 md:items-start">
            <div className="absolute -bottom-36 left-0 hidden rounded-full bg-[#101217]/80 px-4 py-0.5 lg:block">
              <Link href="/podcast">
                <p className="group inline-flex items-center text-xs font-medium text-white">
                  <span className="mr-1.5 text-lg">🎙️</span>
                  <span>Be on the lookout for upcoming podcast episodes!</span>
                  <ArrowRight
                    className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    size={14}
                  />
                </p>
              </Link>
            </div>
            <h1 className="text-center text-5xl font-medium leading-[45px] tracking-tighter text-[#101217] sm:text-6xl md:text-left md:leading-[50px] lg:text-7xl lg:leading-[60px]">
              Dare to{" "}
              <span className="hidden align-middle md:inline-block">
                <Redo size={40} className="rotate-[30deg]" />
              </span>{" "}
              <span className="md:hidden">think</span> <br />{" "}
              <span className="hidden md:inline-block">think</span>{" "}
              <span
                style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
                className="font-extrabold italic text-white"
              >
                Different.
              </span>
            </h1>
            <p className="max-w-[45ch] px-7 text-center leading-5 text-[#101217] md:px-0 md:text-left lg:text-lg lg:leading-5">
              Harnessing the immense potential within to transmute personal
              obstacles into reservoirs of self-empowerment.
            </p>
            <div className="flex w-full flex-col-reverse justify-center gap-3 pt-4 md:flex-row md:justify-start md:pt-5">
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
                className="relative w-full rounded-full hover:bg-[#38F8D3]"
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
        <div className="relative self-stretch md:w-[45%]">
          <div className="relative h-[300px] sm:h-[500px] md:h-[500px] lg:h-[575px]">
            <Image
              className="object-cover md:object-bottom"
              src={larry}
              fill
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
