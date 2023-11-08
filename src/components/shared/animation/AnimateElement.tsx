"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimateElementProps = {
  className?: string;
  children: JSX.Element;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
};

const AnimateElement = ({
  children,
  delay,
  y,
  x,
  duration,
  className,
}: AnimateElementProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: y || 0, x: x || 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      className={cn(className)}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: duration,
        delay: delay || 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateElement;
