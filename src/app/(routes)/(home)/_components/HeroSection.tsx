"use client";

import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import bg from "../../../../../public/assets/home/bg.jpg";
import larry from "../../../../../public/assets/home/hero-larry.png";

const HeroSection = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "125%"]);
  return (
    <section className="relative flex w-full justify-center px-7 pt-24 before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-[1px] md:px-10">
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <Image
          src={bg}
          fill
          alt="crowd at conference"
          className="object-cover grayscale"
        />
      </motion.div>
      {/* Hero left/top */}
      <div className="relative flex max-w-screen-xl flex-col gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <h1 className="text-center text-5xl font-semibold tracking-tighter text-white md:px-10 lg:px-0 lg:text-7xl">
            Dare to think{" "}
            <span className="font-extrabold italic text-[#3a53f5]">
              Different.
            </span>
          </h1>
          <p className="max-w-[40ch] text-center font-medium text-white lg:max-w-[55ch] lg:px-0 lg:text-lg">
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
