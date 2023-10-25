"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import meetLarry from "../../../../../public/assets/home/meet-larry.png";

const About = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden bg-[#f5f5f7] px-7 py-24 md:px-10 lg:py-40">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-5 lg:flex-row-reverse">
        <div className="flex flex-col gap-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1, delay: 0.35 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
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
              className="max-w-[50ch] pb-2 font-semibold text-gray-600/90 lg:text-lg"
            >
              Larry spent his lifetime learning and developing the necessary
              mindset to become an ultra-successful producer in the insurance
              and investment businesses where he discovered consistent
              predictable strategies, behaviors, and ways of thinking that he
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
              className="max-w-[50ch] pb-2 font-semibold text-gray-600/90 lg:text-lg"
            >
              His start was disheartening at best, as he experienced more
              hurdles and obstacles than most people do, from the loss of his
              biological father at the age of 4 months old to failing out of
              college, to cleaning toilets as a janitor, to the suicide of three
              family members, and to being the victim of a multi-million scam,
              just to name a few. How he overcame and dealt with everything, and
              then achieved what he did, is all about how he{" "}
              {`"Dared to Think Differently"`}.
            </motion.p>
          </div>
        </div>
        <div className="h-[500px] lg:h-[900px]">
          <Image
            className="hidden w-auto object-cover brightness-110 lg:block"
            src={meetLarry}
            height={500}
            width={500}
            alt="Larry pointing at you"
          />
          <Image
            className="w-auto object-cover brightness-110 lg:hidden"
            src={meetLarry}
            height={200}
            width={200}
            alt="Larry pointing at you"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
