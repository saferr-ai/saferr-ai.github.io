"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExploreButton from "@/components/ExploreButton";
import Link from "next/link";

import PillarsSection from "@/components/Explain";
export default function Hero() {
  return (
    <div className="w-full h-full  relative p-0  box-border">
      <div className="relative  h-full z-0">
        <Image
          src="/bg6.jpg"
          width={3840}
          height={2160}
          priority
          className="w-full h-[150%] md:h-full object-fit"
        />
      </div>
      <div className="absolute top-0  left-0 w-full  flex flex-col items-start  md:items-center justify-center px-4 md:px-0">
        <motion.h3
          className="text-foreground text-lg md:text-2xl max-w-3xl text-start md:text-center  mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.0, ease: "easeOut" }}
        >
          Welcome to
        </motion.h3>
        <motion.h1
          className="text-foreground text-4xl md:text-7xl max-w-4xl  text-start md:text-center mt-5 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          SafeRR AI Lab
        </motion.h1>
        <motion.h3
          className="text-foreground text-lg md:text-2xl max-w-3xl text-start md:text-center mt-5 mb-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
        >
          Pioneering research in aligning generative AI models for safety, reliability, and robustness—committed to shaping AI for a better and more human-centric future.
        </motion.h3>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}>
          <Link href={"/research"} >
            <ExploreButton />
          </Link>
        </motion.div>
    <PillarsSection></PillarsSection>
      </div>

    </div>
  );
}

