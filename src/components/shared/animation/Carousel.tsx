"use client";

import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { KEYS_TO_MASTER } from "@/constants";
import thinkingDifferent from "../../../../public/assets/home/thinking2.jpg";
import grit from "../../../../public/assets/home/grit2.jpg";
import leadership from "../../../../public/assets/home/leadership.jpg";
import courage from "../../../../public/assets/home/courage.jpg";
import awareness from "../../../../public/assets/home/awareness.jpg";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const images = [thinkingDifferent, leadership, grit, courage, awareness];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative mt-14 flex max-w-[1000px] flex-col items-center lg:mt-20">
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
          <div className="relative flex w-full items-center">
            <motion.div
              className="relative flex flex-nowrap gap-4"
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
            >
              {images.map((image, idx) => (
                <motion.div
                  animate={{
                    opacity: current === idx ? 1 : 0.4,
                  }}
                  className="relative min-w-fit before:absolute before:inset-0 before:bg-black/40"
                  key={idx}
                >
                  <Image
                    src={image}
                    alt={image.src}
                    className={cn("h-full object-cover")}
                    quality={65}
                  />
                  {current === idx && (
                    <div className="absolute left-1/2 top-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-between gap-2 px-10 text-white md:gap-3.5 lg:gap-5">
                      <h4 className="text-center text-3xl font-semibold capitalize sm:text-4xl md:text-5xl lg:text-6xl">
                        {KEYS_TO_MASTER[current].title}
                      </h4>
                      <p className="balance-text text-center leading-5 sm:text-lg lg:text-xl">
                        {KEYS_TO_MASTER[current].description}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <div className="absolute -bottom-14 right-2 flex items-center justify-center gap-2">
              <button
                disabled={current === 0}
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-300/60 text-gray-600  transition duration-300 ease-in-out hover:bg-gray-300/50 disabled:opacity-60"
                onClick={onPrevClick}
              >
                <ChevronLeft size={26} className="mr-1 stroke-2" />
              </button>
              <button
                disabled={current === images.length - 1}
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-300/60 transition duration-300 ease-in-out hover:bg-gray-300/50 disabled:opacity-60"
                onClick={onNextClick}
              >
                <ChevronRight
                  size={26}
                  className="ml-1 stroke-2 text-gray-600"
                />
              </button>
            </div>
          </div>
        </MotionConfig>
      </div>
    </div>
  );
};
export default Carousel;
