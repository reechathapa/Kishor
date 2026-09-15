"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TESTIMONIALS } from "@/data/content";
import { EASE, MaskedLines } from "./motion";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI((v) => (v + 1) % TESTIMONIALS.length);

  return (
    <section className="section bg-paper2 split testi step-right-up">
      <div className="grid2">
        <div className="col">
          <MaskedLines
            className="display testi-head"
            as="h2"
            lines={["What our", "clients say."]}
          />
        </div>
        <div className="col">
          <span className="testi-label">Client stories</span>
          <div className="testi-tools">
            <p className="testi-copy">
              The work should <span className="em">carry the argument</span>.
              Occasionally the people behind it have{" "}
              <span className="em">something to add</span>.
            </p>
            <div className="testi-arrows">
              <button onClick={prev} aria-label="Previous testimonial">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 1 L1 5.5 L6 10" />
                </svg>
              </button>
              <button className="active" onClick={next} aria-label="Next testimonial">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 1 L6 5.5 L1 10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="testi-stage">
        <div className="testi-quote">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}
            >
              <span className="mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{t.quote}</blockquote>
              <div className="name">{t.name}</div>
              <div className="role">{t.role}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="testi-figure zoom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.image} alt={t.alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
