"use client";

import { motion } from "framer-motion";

import { HERO_CONTENT } from "../constants";

import { HeroActions } from "./hero-actions";

export function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="max-w-2xl"
    >
      <span
        className="
          rounded-full
          bg-green-100
          px-4
          py-2
          text-sm
          text-green-700
        "
      >
        AI Smart Air Purifier
      </span>

      <h1
        className="
          mt-8
          text-5xl
          font-bold
          leading-tight
          md:text-7xl
        "
      >
        {HERO_CONTENT.title}
      </h1>

      <p
        className="
          mt-6
          max-w-xl
          text-lg
          text-slate-600
          dark:text-slate-300
        "
      >
        {HERO_CONTENT.subtitle}
      </p>

      <HeroActions />
    </motion.div>
  );
}