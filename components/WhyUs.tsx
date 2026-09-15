import { Counter } from "./Counter";
import { LogoMark } from "./LogoMark";
import { MaskedLines, Reveal } from "./motion";

export function WhyUs() {
  return (
    <section className="section bg-paper split whyus" id="why-us">
      <div className="grid2">
        <div className="col whyus-l">
          <span className="whyus-label">Why us?</span>
          <Reveal className="stat-card dark" delay={0.1}>
            <p className="cap">
              Average review score
              <br />
              across our platforms
            </p>
            <div className="row">
              <span className="num">
                /<Counter value={4.9} decimals={1} />
              </span>
              <a
                className="link-arrow"
                href="#contact"
                aria-label="Read our reviews"
              >
                Our Reviews
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M2 9 L9 2 M4 2 H9 V7" />
                </svg>
              </a>
            </div>
          </Reveal>
          <Reveal className="whyus-square" delay={0.2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/whyus-square.jpg"
              alt="Close-up black and white portrait of a woman resting her chin on her hand"
              loading="lazy"
            />
            <LogoMark color="#ffffff" />
          </Reveal>
        </div>

        <div className="col whyus-r">
          <MaskedLines
            className="display whyus-head"
            as="h2"
            lines={["Trusted", "by referral"]}
          />
          <Reveal className="stat-card light" delay={0.15}>
            <p className="cap">
              New work arrives
              <br />
              through direct referral
            </p>
            <div className="row">
              <span className="num">
                /<Counter value={89} />%
              </span>
              <a
                className="link-arrow"
                href="#contact"
                aria-label="Start a project"
              >
                Start a Project
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M2 9 L9 2 M4 2 H9 V7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
