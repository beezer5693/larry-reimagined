"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type CardProps = {
  data: {
    thought: string;
    description: string;
  };
  id: number;
};

const Thought = ({ data, id }: CardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.15 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
      }}
      className={cn(
        "relative col-span-1 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#3a53f5] to-[#2e42c4] p-10 text-white shadow-xl shadow-[#3a53f5]/40 ",
      )}
      key={data.thought}
    >
      <p className="text-center text-xs font-bold sm:text-base md:text-lg lg:text-2xl">
        {data.thought}
      </p>
    </motion.div>
  );
};

export default Thought;
