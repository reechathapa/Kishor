"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Number that counts up from 0 when scrolled into view. */
export function Counter({
  value,
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  /** Animation progress, 0 → 1. Kept in state so the effect only ever writes
   *  from the animation frame callback (never synchronously in the effect). */
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, 1, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setProgress,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, duration]);

  const final = !inView ? 0 : reduceMotion ? value : progress * value;

  return <span ref={ref}>{final.toFixed(decimals)}</span>;
}
