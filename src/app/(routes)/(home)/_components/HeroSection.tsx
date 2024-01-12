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
    <section className="relative flex w-full justify-center px-5 pt-16 md:px-10 md:pt-24 lg:pt-32">
      {/* Hero left/top */}
      <Parallax percentage={"125%"}>
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
      <div className="relative w-full max-w-[700px] lg:max-w-screen-2xl">
        <div className="mb-20 flex w-full flex-col items-center justify-center gap-5">
          <AnimateElement y={50} duration={0.75}>
            <h1 className="text-center font-semibold text-white md:px-10 lg:px-0">
              Dare to think{" "}
              <span className="font-extrabold italic text-blue-600">
                Different
              </span>
            </h1>
          </AnimateElement>
          <AnimateElement
            className="sm:max-w-max"
            y={50}
            duration={0.75}
            delay={0.1}
          >
            <p className="sub-heading balance-text text-center font-medium text-white lg:max-w-[800px] lg:px-0">
              <span>
                Your mindset is the lens through which see and experience life.
              </span>
              <span>
                {" "}
                It serves as the perceptual filter that shapes how you perceive
                and engage with the world around you, influencing your thoughts,
                emotions, and behaviors.
              </span>
              <span> Change your mindset, change your life.</span>
            </p>
          </AnimateElement>
          <AnimateElement className="w-full" y={50} duration={0.75} delay={0.2}>
            <div className="flex w-full flex-col justify-center gap-3 pt-3 sm:flex-row">
              <Link className="px-10 sm:max-w-max sm:px-0" href="/talks">
                <Button
                  className="w-full hover:opacity-90"
                  variant={"secondary"}
                >
                  <span>See My Talks</span>
                  <PiArrowUpRightBold className="ml-2" size={16} />
                </Button>
              </Link>
              <Link className="px-10 sm:max-w-max sm:px-0" href="/contact">
                <Button className="group w-full hover:brightness-110">
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
