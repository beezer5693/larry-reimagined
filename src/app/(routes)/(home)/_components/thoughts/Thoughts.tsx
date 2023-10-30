"use client";

import { useRef } from "react";
import Thought from "./Thought";
import { useScroll, useTransform, motion } from "framer-motion";

type ThoughtProps = {
  data: {
    thought: string;
    description: string;
  }[];
};

const Thoughts = ({ data }: ThoughtProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mx-auto w-full max-w-screen-xl"
    >
      <div className="relative flex flex-1 self-stretch">
        <div className="grid w-full grid-cols-3 gap-3">
          {data.map((thought, i) => (
            <Thought key={i} data={thought} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Thoughts;
