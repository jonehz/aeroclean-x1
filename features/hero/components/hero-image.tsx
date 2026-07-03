"use client";

import { motion } from "framer-motion";

export function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="
        relative
        h-[500px]
        w-[400px]
      "
    >
      <div
        className="
          absolute
          inset-0
          rounded-[80px]
          bg-gradient-to-b
          from-green-400
          to-cyan-400
          blur-3xl
          opacity-20
        "
      />

      <div
        className="
          relative
          h-full
          rounded-[80px]
          border
          bg-white
          shadow-2xl
          dark:bg-slate-900
        "
      />
    </motion.div>
  );
}