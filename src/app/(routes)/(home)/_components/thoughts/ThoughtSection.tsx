"use client";

import { NEGATIVE_THOUGHTS } from "@/constants";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Thoughts from "./Thoughts";
import struggle from "../../../../../../public/assets/home/struggling.jpeg";

const ThoughtSection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 py-24 md:px-10 lg:py-40">
      <div className="w-full max-w-screen-xl space-y-16 lg:space-y-20">
        <div className="flex flex-col items-start gap-5 lg:items-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.75, delay: 0.35 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="pb-3 font-medium text-black"
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
            className="text-4xl font-bold tracking-tighter text-black sm:text-5xl lg:text-center"
          >
            Thoughts That Limit <br className="lg:hidden" /> Our Potential.
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
            className="max-w-[70ch] text-black lg:text-center"
          >
            The conversations we have with ourselves on a daily basis have a
            significant impact on the results we get. Do any of these thoughts
            ever hold you back in your life or career?
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
          className="flex h-[700px] w-full flex-col-reverse items-center gap-5 md:h-[800px] lg:h-[550px] lg:flex-row lg:pl-0"
        >
          <Thoughts data={NEGATIVE_THOUGHTS} />
        </motion.div>
      </div>
    </section>
  );
};

export default ThoughtSection;
