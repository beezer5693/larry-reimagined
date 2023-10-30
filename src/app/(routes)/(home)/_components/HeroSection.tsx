import Parallax from "@/components/shared/animation/Parallax";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bg from "../../../../../public/assets/home/bg.jpg";
import larry from "../../../../../public/assets/home/hero-larry.png";

const HeroSection = () => {
  return (
    <section className="relative mt-10 flex w-full justify-center px-5 pt-24 before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[2px] md:px-10 lg:pt-32">
      <Parallax percentage={"150%"}>
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
      <div className="relative flex max-w-screen-2xl flex-col gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <h1 className="text-center text-6xl font-semibold tracking-tighter text-white md:px-10 lg:px-0 lg:text-7xl xl:text-8xl">
            Dare to think{" "}
            <span className="font-extrabold italic text-[#3a53f5]">
              Different.
            </span>
          </h1>
          <p className="max-w-[40ch] text-center font-semibold text-white lg:max-w-[55ch] lg:px-0 lg:text-lg">
            Embrace the {`"Dare to Think Different"`} motto igniting a
            transformative journey toward personal and professional excellence.
          </p>
          <div className="flex w-full flex-col justify-center gap-3 pt-3 sm:flex-row">
            <Link className="sm:max-w-max" href="/talks">
              <Button className="w-full hover:opacity-90" variant={"secondary"}>
                <span>See My Talks</span>
                <ArrowUpRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link className="sm:max-w-max" href="/contact">
              <Button className="group w-full hover:brightness-125">
                <span>{"Let's Chat"}</span>
                <ArrowRight
                  className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                  size={16}
                />
              </Button>
            </Link>
          </div>
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
