import { BRAND } from "@/data/content";
import { Counter } from "./Counter";
import { MaskedLines, Reveal } from "./motion";

const DOTS = [
  { top: "12%", left: "4.8%" },
  { top: "38%", left: "82.9%" },
  { top: "62%", left: "4.8%" },
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
              style={{ top: `calc(${d.top} + 60px)`, left: d.left }}
              aria-hidden="true"
            />
          ))}
          <Reveal className="how-stat indent">
            <div className="num">
              <Counter value={60} />+
            </div>
            <p className="cap">
              <span className="em">Projects shipped</span>
              <br />
              with measurable
              <br />
              conversion lift
            </p>
          </Reveal>
          <Reveal className="how-stat" delay={0.1}>
            <div className="num">
              <Counter value={3.2} decimals={1} />S
            </div>
            <p className="cap">
              Average time to first
              <br />
              <span className="em">meaningful action</span> on our
              <br />
              sites
            </p>
          </Reveal>
          <Reveal className="how-stat indent" delay={0.2}>
            <div className="num">
              <Counter value={89} />%
            </div>
            <p className="cap">
              Of clients come from
              <br />
              <span className="em">direct referrals</span>
            </p>
          </Reveal>
        </div>

        <div className="col">
          <MaskedLines
            className="display how-head"
            as="h2"
            lines={[
              "Every",
              "result here",
              "started with",
              "a problem",
              "worth",
              "solving.",
            ]}
          />
          <Reveal delay={0.15}>
            <p className="how-blurb">
              We <span className="em">don&apos;t chase volume</span>. We take on
              projects where our process can make a{" "}
              <span className="em">measurable difference</span>. Most clients
              stay for years.
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
