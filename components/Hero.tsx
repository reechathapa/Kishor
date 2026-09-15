"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRAND } from "@/data/content";
import { Signature } from "./Signature";
import { EASE } from "./motion";

function useLocalTime() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const date = d.toLocaleDateString("en-GB", {
        month: "long",
        day: "2-digit",
      });
      const time = d.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setNow(`${date}, ${time}`.toUpperCase());
    };
    fmt();
    const id = window.setInterval(fmt, 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export function Hero() {
  const time = useLocalTime();
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section className="hero grain" id="top">
      <div className="hero-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/hero-bg.jpg" alt="" fetchPriority="high" />
      </div>
      <span className="hero-cross-v" aria-hidden="true" />
      <span className="hero-cross-h" aria-hidden="true" />

      <div className="hero-frame">
        <span className="hero-dot tl" aria-hidden="true" />
        <span className="hero-dot tr" aria-hidden="true" />
        <span className="hero-dot bl" aria-hidden="true" />
        <span className="hero-dot br" aria-hidden="true" />

        <div>
          <motion.p className="hero-est" {...fade(0.15)}>
            {BRAND.est}
          </motion.p>
          <div className="hero-wordmark">
            <h1 className="line-mask hero-title">
              <motion.span
                initial={reduce ? false : { y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.25, ease: EASE }}
              >
                {BRAND.name}
              </motion.span>
            </h1>
            <motion.span className="hero-reg" {...fade(0.55)}>
              {BRAND.reg}
            </motion.span>
            <motion.span className="hero-wordmark-sub" {...fade(0.45)}>
              {BRAND.studio}
            </motion.span>
          </div>
        </div>

        <motion.div className="hero-mid" {...fade(0.5)}>
          <p className="hero-blurb">
            <span className="em">We align strategy, design, and engineering into</span>{" "}
            <span className="dimw">a single</span>{" "}
            <span className="em">
              high-performance loop. Your vision, executed with surgical precision
              and
            </span>{" "}
            <span className="dimw">conversion-first</span>{" "}
            <span className="em">logic.</span>
          </p>
          <div className="hero-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BRAND.person.avatar} alt={`Portrait of ${BRAND.person.name}`} />
            <div>
              <div className="hero-person-name">{BRAND.person.name}</div>
              <div className="hero-person-role">CEO</div>
            </div>
          </div>
        </motion.div>

        <Signature className="hero-sign" />

        <motion.ul className="hero-tags" {...fade(0.65)}>
          {BRAND.disciplines.map((d, i) => (
            <li key={d} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
              {i > 0 && (
                <span className="slash" aria-hidden="true">
                  /
                </span>
              )}
              {d}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div className="hero-meta" {...fade(0.8)}>
        <span className="hero-slots">
          {BRAND.slotsLabel}
          <span className="hero-ticks" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <b>{BRAND.slotsLeft}</b>
        </span>
        <span>
          LOCAL TIME: <b>{time || "—"}</b>
        </span>
      </motion.div>
    </section>
  );
}
