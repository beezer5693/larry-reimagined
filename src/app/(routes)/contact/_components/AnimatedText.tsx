"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
    hidden: {
      y: 0,
      opacity: 0,
    },
  };

  return (
    <motion.span variants={container} initial="hidden" animate="visible">
      {words.map((word) => (
        <motion.span className={className} variants={child} key={word}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
