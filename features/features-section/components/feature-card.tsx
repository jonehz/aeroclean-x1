"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Moon,
  Smartphone,
  Leaf,
} from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const ICONS = {
  brain: Brain,
  moon: Moon,
  smartphone: Smartphone,
  leaf: Leaf,
};

export function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  const Icon = ICONS[icon as keyof typeof ICONS];

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border
        p-8
        transition
        backdrop-blur-sm
      "
    >
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-green-100
          dark:bg-green-950
        "
      >
        <Icon size={28} />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p
        className="
          mt-4
          text-slate-600
          dark:text-slate-300
        "
      >
        {description}
      </p>
    </motion.article>
  );
}