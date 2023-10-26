"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import mindset from "../../../../../public/assets/home/mindset1.jpg";

const MindsetSection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 pb-24 md:px-10 lg:pb-40">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:gap-40">
        <div className="flex max-w-max flex-col self-stretch">
          <div className="flex flex-col gap-8 pb-10 text-gray-950 lg:py-24">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 1, delay: 0.35 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
              }}
              className="text-5xl font-semibold tracking-tighter md:text-6xl lg:text-left lg:text-7xl"
            >
              Your mindset <br /> matters.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 1, delay: 0.45 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 55 },
              }}
              className="max-w-[50ch] pb-3 font-semibold text-gray-600/90 lg:max-w-[40ch] lg:text-left lg:text-lg"
            >
              Every day,{" "}
              <span className="text-gray-950">
                95% of us process a staggering 60,000 thoughts, and an
                overwhelming 80% of these tend to be negative, regardless of our
                success.
              </span>{" "}
              Can you imagine the personal growth that could be made in our
              lives through a shift in this mindset? Let me show you how.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.55 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <Link
                className="inline-block w-full sm:max-w-max"
                href="/contact"
              >
                <Button className="group w-full hover:brightness-125">
                  <span>get in touch</span>
                  <ArrowRight
                    className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                    size={20}
                  />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex-1 self-stretch">
          <Image
            src={mindset}
            className="h-full w-full object-cover object-left grayscale"
            alt="Man on bycicle"
            quality={65}
            height={500}
            width={700}
          />
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
