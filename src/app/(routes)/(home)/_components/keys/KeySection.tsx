"use client";

import Button from "@/components/ui/Button";
import { KEYS_TO_MASTER } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import Keys from "./Keys";

const KeySection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 py-24 md:px-10">
      <div className="w-full max-w-screen-xl">
        <div className="space-y-10 lg:space-y-16">
          <div className="flex flex-col justify-center gap-5 text-black lg:items-center">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              className="pb-3 font-medium text-black"
            >
              {`"Change your thoughts, and you change your world."`}{" "}
              <span className="block sm:inline-block">
                - Norman Vincent Peale
              </span>
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              className="text-4xl font-bold tracking-tighter text-black sm:text-5xl lg:text-center"
            >
              5 Keys to a New Mindset.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              className="max-w-[65ch] pb-2 text-black lg:text-center"
            >
              It took me some time to realize how my mindset influenced my life,
              but you {"don't"} have to take as long as I did. Applying my Five
              Keys to a New Mindset can expedite the process, offering a
              transformative effect, a more positive outlook on life, and
              unleashing new, positive behaviors that elevate your personal and
              professional life to new heights.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              className="flex w-full flex-col gap-3 sm:w-[350px] sm:flex-row"
            >
              <Link className="inline-block w-full" href="/talks">
                <Button
                  className="w-full bg-black text-white hover:opacity-80"
                  variant={"secondary"}
                >
                  <span>See My Talks</span>
                </Button>
              </Link>
              <Link className="inline-block w-full" href="/contact">
                <Button className="w-full hover:brightness-125">
                  <span>reach out</span>
                  <ArrowUpRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>
          <Keys keys={KEYS_TO_MASTER} />
        </div>
      </div>
    </section>
  );
};

export default KeySection;
