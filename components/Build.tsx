import { MaskedLines, Reveal } from "./motion";

export function Build() {
  return (
    <section className="section bg-paper split build">
      <div className="grid2">
        <div className="col build-l">
          <MaskedLines
            className="display build-head"
            as="h2"
            lines={["We", "build", "websites."]}
          />
          <div className="build-foot">
            <a className="see" href="#work">
              ↓ See the work
            </a>
            <a className="showreel" href="#work" aria-label="Play showreel">
              Showreel
              <span className="play" aria-hidden="true">
                <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                  <path d="M0 0 L9 5 L0 10 Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="col build-r">
          <div className="build-copy-top">
            <span className="build-year">2019-26©</span>
          </div>
          <Reveal>
            <p className="build-blurb">
              <span className="dimw">Where moving forward feels</span>{" "}
              <span className="em">obvious, natural,</span>{" "}
              <span className="dimw">and</span>{" "}
              <span className="em">impossible to overthink.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="zoom">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="build-img"
              src="/img/build-silhouette.jpg"
              alt="Silhouette of a person with braided hair against a light background"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
