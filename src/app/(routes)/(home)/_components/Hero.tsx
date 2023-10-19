import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import larry from "../../../../../public/assets/home/hero-larry.png";
import bg from "../../../../../public/assets/home/main-landing.jpeg";

const Hero = () => {
  return (
    <section className="relative flex w-full justify-center px-7 md:px-10">
      {/* Hero background */}
      <Image
        className="object-cover grayscale"
        src={bg}
        alt="crowd of people"
        fill
        quality={65}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Hero left/top */}
      <div className="relative flex max-w-screen-2xl flex-col gap-10">
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-3">
          <h1 className="text-center text-5xl font-semibold tracking-tighter text-white md:px-10 lg:px-0 lg:text-7xl">
            Dare to think{" "}
            <span className="relative font-extrabold italic text-[#3a53f5]">
              Different.
            </span>
          </h1>
          <p className="max-w-[40ch] text-center font-medium text-white lg:max-w-[50ch] lg:px-0 lg:text-lg">
            Embrace the {`"Dare to Think Different"`} motto igniting a
            transformative journey toward personal and professional excellence.
          </p>
          <div className="flex w-full flex-col gap-3 pt-5 sm:w-[350px] sm:flex-row">
            <Link className="w-full sm:inline-block" href="/talks">
              <Button
                className="relative w-full hover:opacity-90"
                variant={"secondary"}
              >
                <span>See My Talks</span>
              </Button>
            </Link>
            <Link className="w-full sm:inline-block" href="/talks">
              <Button className="w-full hover:brightness-125">
                <span>{"Let's Chat"}</span>
                <ArrowUpRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero right/bottom */}
        <div className="flex items-end justify-center self-stretch">
          <Image
            className="object-cover"
            src={larry}
            height={500}
            width={500}
            sizes="(min-width: 1460px) 545px, (min-width: 1040px) calc(34vw + 55px), (min-width: 780px) 700px, (min-width: 400px) 94.44vw, calc(68.75vw + 79px)"
            alt="Larry Bryan"
            quality={65}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
