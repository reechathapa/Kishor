import { Counter } from "./Counter";
import { MaskedLines, Reveal } from "./motion";

export function Strategy() {
  return (
    <section className="section bg-orange split strategy" id="about">
      <div className="strategy-top">
        <div className="strategy-meta-l micro">
          <span>Launched</span>
          <span>
            <Counter value={24} />+ projects
          </span>
        </div>
        <div className="strategy-head">
          <span className="micro">2019-26©</span>
          <MaskedLines
            className="display"
            as="h2"
            lines={["Structure", "before", "surface."]}
          />
        </div>
      </div>

      <div className="strategy-body">
        <div className="col">
          <Reveal>
            <p className="strategy-blurb">
              <span className="dimw">Visitors judge</span>{" "}
              <span className="em">whether a page deserves them</span>{" "}
              <span className="dimw">long before they read a line of it.
              Credibility settles in the first second, and it is built out
              of</span>{" "}
              <span className="em">spacing, type, image quality,</span>{" "}
              <span className="dimw">and how clearly the page is ordered.</span>
            </p>
          </Reveal>
          <div className="strategy-foot">
            <a href="#why-us">About us</a>
          </div>
        </div>

        <div className="col strategy-visual">
          <Reveal delay={0.1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="portrait"
              src="/img/strategy-portrait.jpg"
              alt="Woman in a white turtleneck walking, black and white editorial photograph"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.2} className="strategy-stat">
            <div className="num">
              <Counter value={12} />+
            </div>
            <p className="cap">
              Sectors where our builds
              <br />
              beat the client&apos;s previous baseline
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
