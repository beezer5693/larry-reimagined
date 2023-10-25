"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import meetLarry from "../../../../../public/assets/home/meet-larry.png";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden bg-[#f5f5f7] px-7 py-24 md:px-10 lg:py-40">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-10 lg:flex-row-reverse lg:gap-20">
        <div className="flex flex-col justify-center gap-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1, delay: 0.35 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="text-4xl font-semibold tracking-tighter text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Meet Larry.
          </motion.h2>
          <div className="space-y-2">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 1, delay: 0.45 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 55 },
              }}
              className="max-w-[45ch] pb-2  font-semibold text-gray-600/90 lg:text-lg"
            >
              I have spent most of my life learning and developing the necessary
              mindset to become an ultra-successful producer in the insurance
              and investment businesses where I discovered consistent
              predictable strategies, behaviors, and ways of thinking that I
              used to achieve extraordinary goals and income levels.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 1, delay: 0.55 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 55 },
              }}
              className="max-w-[45ch] pb-2  font-semibold text-gray-600/90 lg:text-lg"
            >
              The outset of my journey was fraught with formidable challenges,
              surpassing the typical hurdles encountered by most individuals.
              From the profound loss of my biological father when I was just
              four months old, to academic setbacks resulting in my departure
              from college, to the humbling experience of working as a janitor,
              to enduring the tragic suicide of three family members, and even
              falling victim to a multi-million-dollar scam—these were but a few
              of the trials I faced.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 1, delay: 0.55 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 65 },
              }}
              className="max-w-[45ch] pb-2  font-semibold text-gray-600/90 lg:text-lg"
            >
              However, my ability to overcome and navigate these adversities,
              eventually achieving the levels of success I did, can be
              attributed to my unwavering commitment to{" "}
              {`"Dare to Think Different"`}.
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.55 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 60 },
            }}
          >
            <Link className="inline-block w-full lg:max-w-max" href="/about">
              <Button
                variant={"secondary"}
                className="w-full bg-gray-900 text-white  hover:opacity-90"
              >
                <span>Learn More About Larry</span>
                <ArrowUpRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="h-[500px] lg:h-[900px]">
          <Image
            className="hidden w-auto object-cover brightness-110 lg:block"
            src={meetLarry}
            height={500}
            width={500}
            quality={65}
            alt="Larry pointing at you"
          />
          <Image
            className="w-auto object-cover brightness-110 lg:hidden"
            src={meetLarry}
            height={200}
            width={200}
            quality={65}
            alt="Larry pointing at you"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
