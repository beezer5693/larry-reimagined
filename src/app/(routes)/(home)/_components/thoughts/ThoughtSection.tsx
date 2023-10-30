"use client";

import { NEGATIVE_THOUGHTS } from "@/constants";
import Thoughts from "./Thoughts";
import AnimateElement from "@/components/shared/animation/AnimateElement";
import { motion } from "framer-motion";

const ThoughtSection = () => {
  return (
    <section className="mx-auto flex w-full justify-center bg-white px-5 pt-24 md:px-10 lg:pt-40">
      <div className="w-full max-w-[1400px] space-y-16 lg:space-y-20">
        <div className="flex flex-col items-start gap-8 lg:items-center">
          <AnimateElement y={50} duration={0.75}>
            <h2 className="balance-text text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:text-center lg:text-7xl">
              Thoughts that limit our potential.
            </h2>
          </AnimateElement>
          <AnimateElement
            className="sm:max-w-max"
            y={50}
            duration={0.75}
            delay={0.2}
          >
            <p className="balance-text font-medium text-gray-600/90 sm:max-w-[65ch] lg:text-center lg:text-xl">
              The{" "}
              <span className="text-gray-950">
                conversations we have with ourselves on a daily basis have a
                significant impact on the results we get.
              </span>{" "}
              <span className="text-gray-950"></span> Do any of these thoughts
              ever hold you back in your life or career?
            </p>
          </AnimateElement>
        </div>
        <Thoughts data={NEGATIVE_THOUGHTS} />
      </div>
    </section>
  );
};

export default ThoughtSection;
