import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import larry from "../../../../../public/assets/home/hero-larry.png";
import bg from "../../../../../public/assets/home/bg.jpg";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(white, white), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "saturation",
      }}
      className="relative flex w-full justify-center px-7 pt-20 shadow-xl shadow-black/30 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-transparent before:to-black/30 before:backdrop-blur-[1px] md:px-10"
    >
      {/* Hero left/top */}
      <div className="relative flex max-w-screen-xl flex-col gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <h1 className="text-center text-5xl font-semibold tracking-tighter text-white md:px-10 lg:px-0 lg:text-7xl">
            Dare to think{" "}
            <span className="font-extrabold italic text-[#3a53f5]">
              Different.
            </span>
          </h1>
          <p className="max-w-[40ch] text-center font-medium text-white lg:max-w-[50ch] lg:px-0 lg:text-lg">
            Embrace the {`"Dare to Think Different"`} motto igniting a
            transformative journey toward personal and professional excellence.
          </p>
          <div className="flex w-full flex-col gap-3 pt-3 sm:w-[350px] sm:flex-row">
            <Link className="w-full sm:inline-block" href="/talks">
              <Button className="w-full hover:opacity-90" variant={"secondary"}>
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
        <div className="relative flex items-end justify-center self-stretch">
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

export default HeroSection;
