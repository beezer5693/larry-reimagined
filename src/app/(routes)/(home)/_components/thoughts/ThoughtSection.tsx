"use client";

import { NEGATIVE_THOUGHTS } from "@/constants";
import { motion } from "framer-motion";
import Thoughts from "./Thoughts";

const ThoughtSection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 py-24 md:px-10 lg:py-40">
      <div className="w-full max-w-screen-xl space-y-16 lg:space-y-20">
        <div className="flex flex-col items-start gap-8 lg:items-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.75, delay: 0.35 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="font-medium text-black"
          >
            {`"Your mindset determines everything." - Larry Bryan`}
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.75, delay: 0.45 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 55 },
            }}
            className="text-4xl font-semibold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-center lg:text-7xl"
          >
            Thoughts that limit <br className="" /> our potential.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.75, delay: 0.55 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 65 },
            }}
            className="max-w-[55ch] font-semibold text-gray-600/90 lg:text-center lg:text-lg"
          >
            The{" "}
            <span className="text-black">
              conversations we have with ourselves on a daily basis have a
              significant impact on the results we get.
            </span>{" "}
            <span className="text-black"></span> Do any of these thoughts ever
            hold you back in your life or career?
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.25, delay: 0.65 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="flex w-full flex-col items-center justify-center"
        >
          <div className="w-full max-w-[1000px]">
            <Thoughts data={NEGATIVE_THOUGHTS} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThoughtSection;
