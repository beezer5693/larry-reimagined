import Parallax from "@/components/shared/animation/Parallax";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightBold, PiArrowUpRightBold } from "react-icons/pi";
import bg from "../../../../../public/assets/home/bg.jpg";
import larry from "../../../../../public/assets/home/hero-larry.png";
import AnimateElement from "@/components/shared/animation/AnimateElement";

const HeroSection = () => {
  return (
    <section className="relative flex w-full justify-center px-5 pt-24 before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[2px] md:px-10 lg:pt-32">
      <Parallax percentage={"200%"}>
        <Image
          src={bg}
          fill
          alt="crowd at conference"
          className="object-cover"
          quality={65}
          sizes="100vw"
          priority
        />
      </Parallax>
      {/* Hero left/top */}
      <div className="relative flex max-w-screen-2xl flex-col gap-20">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <AnimateElement y={50} duration={0.75}>
            <h1 className="text-center text-6xl font-semibold tracking-tighter text-white md:px-10 lg:px-0 lg:text-7xl xl:text-8xl">
              Dare to think{" "}
              <span className="font-extrabold italic text-[#3a53f5]">
                Different.
              </span>
            </h1>
          </AnimateElement>
          <AnimateElement
            className="sm:max-w-max"
            y={50}
            duration={0.75}
            delay={0.1}
          >
            <p className="max-w-[40ch] text-center font-semibold text-white lg:max-w-[55ch] lg:px-0 lg:text-lg">
              Embrace the {`"Dare to Think Different"`} motto igniting a
              transformative journey toward personal and professional
              excellence.
            </p>
          </AnimateElement>
          <AnimateElement y={50} duration={0.75} delay={0.2}>
            <div className="flex w-full flex-col justify-center gap-3 pt-3 sm:flex-row">
              <Link className="sm:max-w-max" href="/talks">
                <Button
                  className="w-full hover:opacity-90"
                  variant={"secondary"}
                >
                  <span>See My Talks</span>
                  <PiArrowUpRightBold className="ml-2" size={16} />
                </Button>
              </Link>
              <Link className="sm:max-w-max" href="/contact">
                <Button className="group w-full hover:brightness-125">
                  <span>{"Let's Chat"}</span>
                  <PiArrowRightBold
                    className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                    size={16}
                  />
                </Button>
              </Link>
            </div>
          </AnimateElement>
        </div>

        {/* Hero right/bottom */}
        <div className="relative flex items-end justify-center self-stretch">
          <Image
            className="object-cover"
            src={larry}
            height={575}
            width={575}
            sizes="(min-width: 600px) 500px, calc(91.43vw - 30px)"
            alt="Larry Bryan"
            quality={65}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
