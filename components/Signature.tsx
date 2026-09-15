"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hand-drawn orange signature scrawl (SVG stroke, draws itself in).
 */
export function Signature({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className={className}
      viewBox="0 0 520 180"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M10 128 C42 62 72 38 86 64 C98 86 72 122 60 120 C48 118 62 84 94 74 C126 64 130 96 118 110 C106 124 98 110 110 92 C122 74 150 58 154 82 C158 106 142 124 154 124 C166 124 178 96 186 80 C194 64 202 64 200 84 C198 104 192 122 204 120 C216 118 228 92 238 78 C248 64 256 66 252 86 C248 106 242 122 254 120 C266 118 282 96 294 88 C306 80 314 84 308 96 C302 108 290 116 302 118 C314 120 332 104 346 96 C360 88 374 88 368 100 C362 112 346 120 358 124 C370 128 398 112 422 104 C446 96 472 96 488 104 C504 112 502 124 488 126 C474 128 464 120 472 110"
        stroke="#FF4400"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
      />
    </motion.svg>
  );
}
