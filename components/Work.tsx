"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { PROJECTS } from "@/data/content";

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(PROJECTS.length - 1) * 100}%`]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(
      PROJECTS.length - 1,
      Math.max(0, Math.round(v * (PROJECTS.length - 1)))
    );
    setActive(i);
  });

  return (
    <section
      className="work"
      id="work"
      ref={ref}
      style={{ height: reduce ? "auto" : `${PROJECTS.length * 100}vh` }}
      aria-label="Selected work"
    >
      <div
        className="work-sticky"
        style={{ position: reduce ? "static" : "sticky", height: reduce ? "auto" : undefined }}
      >
        <div className="work-corners">
          <span>{PROJECTS[active].index}</span>
          <span>Portfolio</span>
        </div>

        <motion.div className="work-track" style={reduce ? undefined : { x }}>
          {PROJECTS.map((p) => (
            <article className="work-slide" key={p.index}>
              <div className="work-slide-bg" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" loading="lazy" />
              </div>

              <div className="work-marquee marquee" aria-hidden="true">
                <div className="marquee-track" style={{ ["--marquee-dur" as string]: "26s" }}>
                  {Array.from({ length: 2 }).map((_, half) => (
                    <span key={half} style={{ display: "inline-flex" }}>
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i}>{p.marquee}</span>
                      ))}
                    </span>
                  ))}
                </div>
              </div>

              <a className="work-figure" href={p.href} aria-label={`Project: ${p.title}`}>
                <div className="zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.alt} loading="lazy" />
                </div>
                <div className="work-meta">
                  <span>{p.title}</span>
                  <span className="tags">
                    {p.tags.map((t) => (
                      <span key={t} style={{ display: "block" }}>
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className="year">{p.year}</span>
                </div>
              </a>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
