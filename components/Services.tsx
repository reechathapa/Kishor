"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SERVICES } from "@/data/content";
import { EASE, Reveal } from "./motion";

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-ink grain split services step-right-up">
      <div className="grid2">
        <div className="col">
          <span className="services-label">Services</span>
        </div>
        <div className="col">
          <Reveal>
            <p className="lead services-intro">
              Every engagement starts with how your customers actually decide —
              and what is quietly stopping them from deciding today.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="accordion">
        {SERVICES.map((s, i) => {
          const isOpen = open === i;
          return (
            <div className="acc-item" key={s.num} data-open={isOpen}>
              <h3>
                <button
                  className="acc-head"
                  aria-expanded={isOpen}
                  aria-controls={`acc-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="acc-num">{s.num}</span>
                  <span className="acc-title">{s.title}</span>
                  <span className="acc-icon" aria-hidden="true" />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`acc-panel-${i}`}
                    className="acc-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <div className="acc-body grid2">
                      <div className="col" />
                      <div className="col">
                        <p className="acc-price">
                          Price: from <b>{s.price}</b>
                        </p>
                        <div className="acc-cols">
                          {s.cols.map((c, ci) => (
                            <p key={ci}>{c}</p>
                          ))}
                        </div>
                        <div className="acc-media zoom">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.image} alt={s.alt} loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
