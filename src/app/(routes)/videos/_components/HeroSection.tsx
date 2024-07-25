"use client";

import Image from "next/image";
import React from "react";
import larryVideo from "../../../../../public/assets/videos/larry-videos.png";
import AnimateElement from "@/components/shared/animation/AnimateElement";

function HeroSection() {
  return (
    <section className="relative mb-28 flex w-full flex-col bg-white md:mb-36 xl:mb-44">
      <div className="w-full bg-gradient-to-b from-zinc-950 to-zinc-800 px-5 md:px-10">
        <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-lg">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
            <div className="mx-auto flex w-full max-w-[450px] flex-col gap-7 pt-20 text-white lg:pt-0">
              <AnimateElement y={50} duration={0.75}>
                <h1 className="bg-gradient-to-b from-white from-85% to-gray-400 bg-clip-text pb-2 text-center text-5xl font-semibold leading-[55px] text-transparent lg:text-left lg:text-6xl lg:leading-[65px]">
                  Key insights <br /> to elevate your sales career
                </h1>
              </AnimateElement>
              <AnimateElement duration={0.75} y={40} delay={0.5}>
                <p className="text-balance text-center text-lg font-medium lg:text-left">
                  Access practical strategies and actionable tips designed to
                  drive measurable results and transform your professional
                  journey.
                </p>
              </AnimateElement>
            </div>
            <div className="flex w-full items-end justify-center pt-5 lg:pt-32">
              <Image
                className="hidden lg:block"
                src={larryVideo}
                alt="Larry"
                height={350}
                width={350}
                quality={65}
                priority
              />
              <Image
                className="lg:hidden"
                src={larryVideo}
                alt="Larry"
                height={250}
                width={250}
                quality={65}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
