/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { motion } from "framer-motion";

import CountingNumbers from "./counting-numbers";

export default function WebVitals({
  value,
  duration,
  RoundValue,
}: {
  value;
  duration;
  RoundValue;
}) {
  return (
    <div className="relative h-full w-full">
      <motion.svg className="" viewBox="0 0 100 100" width={100} height={100}>
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: RoundValue }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#22C55E"
        />
      </motion.svg>
      <CountingNumbers
        value={value}
        duration={duration}
        className="absolute inset-0 mx-auto flex items-center justify-center text-3xl font-semibold text-green-500"
      />
    </div>
  );
}
