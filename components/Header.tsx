"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BRAND } from "@/data/content";
import { LogoMark } from "./LogoMark";
import { EASE } from "./motion";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label={`${BRAND.name} studio — home`}>
          <LogoMark className="brand-mark" />
          <span className="brand-name">
            {BRAND.name}
            {BRAND.reg}
          </span>
          <span className="brand-sep" aria-hidden="true" />
          <span className="brand-tag">
            {BRAND.taglinePre} <b>{BRAND.taglineEm}</b> {BRAND.taglinePost}
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {BRAND.nav.map((item, i) => (
            <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
              {i > 0 && (
                <span className="nav-slash" aria-hidden="true">
                  /
                </span>
              )}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
          <a className="btn btn-orange nav-cta" href="#contact">
            Start a Project
          </a>
        </nav>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <button className="mobile-close" onClick={() => setOpen(false)}>
              Close ✕
            </button>
            {BRAND.nav.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-orange"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
