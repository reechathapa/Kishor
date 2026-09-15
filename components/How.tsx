import { BRAND } from "@/data/content";
import { Counter } from "./Counter";
import { MaskedLines, Reveal } from "./motion";

const DOTS = [
  { top: 203, left: "0.8%" },
  { top: 401, left: "82.2%" },
  { top: 597, left: "0.8%" },
];

export function How() {
  return (
    <section className="section bg-orange split how step-right-up">
      <div className="grid2">
        <div className="col how-l">
          <span className="how-label">How we do it</span>
          {DOTS.map((d, i) => (
            <span
              key={i}
              className="how-dot"
              style={{ top: d.top, left: d.left }}
              aria-hidden="true"
            />
          ))}
          <Reveal className="how-stat indent">
            <div className="num">
              <Counter value={60} />+
            </div>
            <p className="cap">
              <span className="em">Builds delivered</span>
              <br />
              against a stated
              <br />
              conversion goal
            </p>
          </Reveal>
          <Reveal className="how-stat" delay={0.1}>
            <div className="num">
              <Counter value={3.2} decimals={1} />S
            </div>
            <p className="cap">
              Median time to first
              <br />
              <span className="em">meaningful click</span> once a
              <br />
              page loads
            </p>
          </Reveal>
          <Reveal className="how-stat indent" delay={0.2}>
            <div className="num">
              <Counter value={89} />%
            </div>
            <p className="cap">
              Of new projects arrive
              <br />
              <span className="em">by referral</span>
            </p>
          </Reveal>
        </div>

        <div className="col">
          <MaskedLines
            className="display how-head"
            as="h2"
            lines={[
              "Nothing",
              "we ship",
              "starts as",
              "a brief.",
              "It starts",
              "as a problem.",
            ]}
          />
          <Reveal delay={0.15}>
            <p className="how-blurb">
              We <span className="em">keep the roster small</span>. We take work
              where the process can <span className="em">move a number that
              matters</span> — and most clients come back.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="how-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BRAND.person.avatar} alt={`Portrait of ${BRAND.person.name}`} loading="lazy" />
            <div>
              <div className="name">{BRAND.person.name}</div>
              <div className="role">
                Founder at
                <br />
                <b>{BRAND.name}®</b>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
