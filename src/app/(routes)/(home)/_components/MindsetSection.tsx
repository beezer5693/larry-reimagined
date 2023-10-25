"use client";

import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import mindset from "../../../../../public/assets/home/mindset1.jpg";

const MindsetSection = () => {
  return (
    <section className="flex w-full justify-center bg-black px-7 py-24 md:px-10 lg:py-40">
      <div className="flex h-[650px] w-full max-w-screen-xl flex-col items-center gap-10 sm:h-[600px] md:h-[800px] lg:h-[450px] lg:flex-row">
        <div className="flex flex-col self-stretch lg:flex-1 lg:items-center lg:justify-center lg:pr-5">
          <div className="flex flex-col gap-8 pb-5 text-white lg:pb-0">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 1, delay: 0.35 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-left lg:text-7xl"
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
              className="max-w-[55ch] pb-3 font-semibold text-gray-300/70 lg:max-w-[50ch] lg:text-left lg:text-lg"
            >
              Every day,{" "}
              <span className="text-white">
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
                hidden: { opacity: 0, y: 60 },
              }}
            >
              <Link
                className="inline-block w-full sm:max-w-max"
                href="/contact"
              >
                <Button className="w-full hover:brightness-125">
                  <span>get in touch</span>
                  <ArrowUpRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="relative flex-1 items-center justify-center self-stretch overflow-hidden rounded-lg lg:flex-none lg:basis-[45%]"
        >
          <Image
            src={mindset}
            className="object-cover grayscale"
            fill
            alt="Man on bycicle"
            quality={65}
            sizes="(min-width: 1460px) 576px, (min-width: 1040px) calc(36vw + 58px), calc(96.67vw - 46px)"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MindsetSection;
