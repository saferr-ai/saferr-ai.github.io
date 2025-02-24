"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
// import { PageTransitionContext } from "../page-transition";

const getDirectionVariant = (dir) => {
  const directions = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  };
  return directions[dir || "up"];
};

export default function FadeIn({
  delay = 0,
  duration = 0.5,
  variants,
  children,
  className,
  transition = {},
  dir = "up",
}) {
  const defaultVariants = getDirectionVariant(dir);
  // const { pageIsReady } = useContext(PageTransitionContext);

  return (
    <motion.div
      className={className}
      variants={variants || defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ...transition,
        duration,
        delay,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}