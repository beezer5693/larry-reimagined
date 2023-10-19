import Button from "@/components/ui/Button";
import { ArrowUpRight, Redo } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import larry from "../../../../../public/assets/home/hero-larry.png";
import bg from "../../../../../public/assets/home/main-landing.jpeg";

const Hero = () => {
  return (
    <section className="relative flex w-full justify-center px-5 md:px-10">
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
          <h1 className="text-center text-6xl font-semibold leading-[55px] tracking-tighter text-white md:px-10 lg:px-0 lg:text-7xl">
            Dare to think{" "}
            <span className="relative font-extrabold italic text-[#3a53f5]">
              Different.
            </span>
          </h1>
          <p className="max-w-[40ch] text-center text-sm font-medium text-white md:text-base lg:max-w-[50ch] lg:px-0 lg:text-lg lg:leading-6">
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
                <ArrowUpRight className="-mt-0.5 ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="relative mb-10 flex items-center justify-center lg:mb-0">
          <div className="relative flex flex-col items-center justify-center pt-14 sm:w-10/12 md:pt-20 lg:mt-0 lg:w-full lg:items-start lg:pb-28 lg:pl-10 lg:pt-24 xl:pb-44 xl:pl-20 xl:pt-40 2xl:pl-32">
            <h1 className="text-center text-6xl font-semibold leading-[55px] tracking-tighter text-white sm:text-7xl sm:leading-[65px] md:px-10 lg:px-0 lg:text-left lg:text-7xl lg:leading-[65px] xl:text-8xl xl:leading-[85px]">
              Dare to {" "}
              <span className="hidden align-middle lg:inline-block">
                <Redo size={40} className="rotate-[30deg] text-white" />
              </span>
              <br className="hidden lg:block" /> think{" "}
              <span className="relative font-extrabold italic text-[#3a53f5]">
                Different.
              </span>
            </h1>
            <p className="mt-5 text-center font-medium text-white sm:px-20 md:px-32 md:text-lg lg:w-2/3 lg:px-0 lg:text-left">
              Embrace the {`"Dare to Think Different"`} motto igniting a
              transformative journey toward personal and professional
              excellence.
            </p>
            <div className="mt-10 flex w-full flex-col-reverse items-center gap-3 sm:w-2/3 lg:w-full lg:flex-row">
              <Link className="w-full lg:max-w-max" href="/talks">
                <Button
                  className="relative w-full hover:opacity-90"
                  variant={"secondary"}
                >
                  <span>See My Talks</span>
                </Button>
              </Link>
              <Link className="w-full lg:max-w-max" href="/talks">
                <Button className="w-full hover:brightness-125">
                  <span>{"Let's Chat"}</span>
                  <ArrowUpRight className="-mt-0.5 ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div> */}

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
