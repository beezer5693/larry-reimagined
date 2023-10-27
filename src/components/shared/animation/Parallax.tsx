"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactElement } from "react";

const Parallax = ({
  children,
  percentage,
}: {
  children: ReactElement;
  percentage: string;
}) => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", percentage]);

  return (
    <motion.div style={{ y }} className="absolute inset-0 -z-20">
      {children}
    </motion.div>
  );
};

export default Parallax;
