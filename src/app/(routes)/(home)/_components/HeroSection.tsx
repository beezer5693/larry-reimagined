import Button from "@/components/ui/Button";
import { ChevronRight, Redo } from "lucide-react";
import Image from "next/image";
import larry from "../../../../../public/assets/home/hero-larry.png";
import bg from "../../../../../public/assets/home/main-landing.jpeg";

const HeroSection = () => {
  return (
    <div className="w-full">
      <section className="relative flex justify-center px-10">
        {/* Hero background */}
        {/* <div className="absolute inset-0 translate-x-2 translate-y-2 border border-black bg-black"></div> */}
        <Image
          className="object-cover grayscale"
          src={bg}
          alt="crowd of people"
          fill
          quality={65}
          sizes="(min-width: 1400px) 1278px, calc(94.44vw - 25px)"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute left-0 right-0 top-0 h-52 bg-gradient-to-b from-black/50 to-transparent"></div>
        {/* Hero left/top */}
        <div className="flex max-w-screen-xl flex-col rounded-sm border border-black lg:flex-row lg:justify-between">
          <div className="relative flex flex-1 flex-col items-center justify-center self-stretch lg:items-start lg:justify-start lg:px-0 lg:pb-0">
            <div className="relative py-20 lg:py-40">
              <h1 className="relative text-center text-6xl font-medium leading-[55px] tracking-tighter text-[#101217] md:text-8xl md:leading-[80px] lg:text-left lg:text-7xl lg:leading-[60px] xl:text-8xl xl:leading-[80px]">
                <span className="relative px-2">
                  <span className="absolute inset-0 -skew-x-6 -skew-y-2 bg-yellow-300"></span>
                  <span className="relative">Dare to</span>
                </span>{" "}
                <span className="hidden align-middle lg:inline-block">
                  <Redo size={40} className="rotate-[30deg] text-white" />
                </span>{" "}
                <span
                  style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
                  className="relative text-white lg:hidden"
                >
                  think
                </span>{" "}
                <br />{" "}
                <span
                  style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
                  className="relative hidden text-white lg:inline-block"
                >
                  think
                </span>{" "}
                <span
                  style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
                  className="relative font-extrabold italic text-white"
                >
                  Different.
                </span>
              </h1>
              <p className="mt-5 max-w-[45ch] text-center leading-5 text-white md:text-xl md:leading-6 lg:text-left lg:text-lg lg:leading-5">
                Harnessing the immense potential within to transmute personal
                obstacles into reservoirs of self-empowerment.
              </p>
              <div className="mt-10 flex flex-col-reverse items-center gap-3 lg:flex-row">
                <Button
                  className="w-full rounded-sm hover:translate-x-0 hover:translate-y-0"
                  className2="hidden"
                  size={"lg"}
                  variant={"secondaryWithHoverAnimation"}
                  path={"/services"}
                >
                  Services
                </Button>
                <Button
                  variant={"secondaryWithHoverAnimation"}
                  className="group relative w-full rounded-sm hover:translate-x-0 hover:translate-y-0 hover:bg-yellow-300"
                  className2="hidden"
                  size={"lg"}
                  path="/contact"
                >
                  <span>Book Larry</span>
                  <ChevronRight
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 "
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Hero right/bottom */}
          <div className="relative flex justify-center self-stretch px-5 lg:w-[45%] lg:pr-5">
            <div className="relative self-end">
              <Image
                className="object-cover"
                src={larry}
                height={600}
                width={600}
                sizes="(min-width: 1320px) 500px, (min-width: 1040px) calc(35vw + 45px), (min-width: 620px) 500px, calc(94vw - 64px)"
                alt="Larry Bryan"
                quality={65}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
