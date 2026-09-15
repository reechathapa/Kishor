"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQS } from "@/data/content";
import { EASE, MaskedLines } from "./motion";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-paper split faq step-right-up" id="faq">
      <div className="grid2">
        <div className="col">
          <p className="faq-label">FAQ</p>
          <MaskedLines
            className="display faq-head"
            as="h2"
            lines={["Before we", "get started."]}
          />
        </div>

        <div className="col">
          <div className="faq-list">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div className="acc-item" key={f.q} data-open={isOpen}>
                  <h3>
                    <button
                      className="faq-q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="acc-num">{`0${i + 1}`}</span>
                      <span className="q">{f.q}</span>
                      <span className="acc-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        className="faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="faq-cta">
            <a className="btn btn-ink" href="#contact">
              Ask a question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
