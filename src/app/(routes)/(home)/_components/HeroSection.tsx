import Button from "@/components/ui/Button";
import { ChevronRight, Redo } from "lucide-react";
import Image from "next/image";
import larry from "../../../../../public/assets/home/hero-larry.png";
import bg from "../../../../../public/assets/home/main-landing.jpeg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full">
      <section className="relative flex justify-center px-5 md:px-10">
        {/* Hero background */}
        <Image
          className="object-cover grayscale"
          src={bg}
          alt="crowd of people"
          fill
          quality={65}
          sizes="(min-width: 1400px) 1278px, calc(94.44vw - 25px)"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        {/* Hero left/top */}
        <div className="relative flex max-w-screen-xl flex-col lg:flex-row lg:justify-between">
          <div className="relative mb-10 flex items-center justify-center lg:mb-0">
            <div className="flex flex-col items-center justify-center pt-10 sm:w-2/3 lg:mt-0 lg:w-full lg:items-start lg:pb-32 lg:pt-28 xl:pb-44 xl:pt-40">
              <h1 className="text-center text-6xl font-semibold leading-[50px] text-white sm:text-7xl md:leading-[60px] lg:text-left">
                Dare to{" "}
                <span className="hidden align-middle lg:inline-block">
                  <Redo size={40} className="rotate-[30deg] text-white" />
                </span>
                <br className="hidden lg:block" /> think{" "}
                <span className="relative font-extrabold italic text-[#3a53f5]">
                  Different.
                </span>
              </h1>
              <p className="mt-5 text-center text-white md:text-lg lg:w-2/3 lg:text-left">
                Harnessing the immense potential within to transmute personal
                obstacles into reservoirs of self-empowerment.
              </p>
              <div className="mt-10 flex w-full flex-col-reverse items-center gap-3 lg:flex-row">
                <Link className="w-full lg:max-w-max" href="/services">
                  <Button className="w-full" size={"lg"} variant={"secondary"}>
                    Services
                  </Button>
                </Link>
                <Link className="w-full lg:max-w-max" href="/contact">
                  <Button
                    variant={"primary"}
                    className="group relative w-full "
                    size={"lg"}
                  >
                    <span>Book Larry</span>
                    <ChevronRight
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 "
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero right/bottom */}
          <div className="flex items-end justify-center self-stretch">
            <Image
              className="object-cover"
              src={larry}
              height={700}
              width={700}
              sizes="(min-width: 1320px) 500px, (min-width: 1040px) calc(35vw + 45px), (min-width: 620px) 500px, calc(94vw - 64px)"
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
