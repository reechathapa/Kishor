import { Counter } from "./Counter";
import { MaskedLines, Reveal } from "./motion";

export function Strategy() {
  return (
    <section className="section bg-orange split strategy" id="about">
      <div className="strategy-top">
        <div className="strategy-meta-l micro">
          <span>Launched</span>
          <span className="m2">
            <Counter value={24} />+ projects
          </span>
        </div>
        <div className="strategy-head">
          <span className="micro">2019-26©</span>
          <MaskedLines
            className="display"
            as="h2"
            lines={["Strategy", "before", "pixels."]}
          />
        </div>
      </div>

      <div className="strategy-body">
        <div className="col">
          <Reveal>
            <p className="strategy-blurb">
              <span className="dimw">People decide</span>{" "}
              <span className="em">if they trust your site</span>{" "}
              <span className="dimw">before they read a word on it. That's not a
              metaphor. Visual credibility forms almost instantly, and it's
              shaped by</span>{" "}
              <span className="em">spacing, typography, image quality,</span>{" "}
              <span className="dimw">and structure.</span>
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
              Industries where our sites
              <br />
              consistently outperform benchmarks
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
