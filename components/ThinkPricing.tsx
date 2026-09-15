import { BRAND, PLANS, PLAN_ROWS } from "@/data/content";
import { Signature } from "./Signature";
import { MaskedLines, Reveal } from "./motion";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-label="Included">
        <path d="M1 5.5 L5 9.5 L13 1" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="dash">-</span>;
  }
  return <span>{value}</span>;
}

export function ThinkPricing() {
  return (
    <section className="section bg-ink grain split think" id="pricing">
      <div className="grid2">
        <div className="col">
          <span className="think-label">How we think</span>
          <div className="think-quote-wrap">
            <Reveal>
              <blockquote className="think-quote">
                “The hardest part of building a website isn&apos;t the code —
                it&apos;s knowing what to leave out. Every element that
                doesn&apos;t serve the visitor is working against you.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="think-cap">
                Our team treats simplicity as a
                <br />
                discipline, not a shortcut.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="col">
          <Reveal className="think-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="photo"
              src="/img/think-portrait.jpg"
              alt={`Colour portrait of ${BRAND.person.name} in golden hour light`}
              loading="lazy"
            />
            <Signature className="sign" />
            <div className="who">
              <div className="name">{BRAND.person.name}</div>
              <div className="role">
                Founder at
                <br />
                <b>{BRAND.name}®</b>
              </div>
            </div>
          </Reveal>

          <MaskedLines className="display pricing-head" as="h2" lines={["Pricing."]} />
        </div>
      </div>

      <Reveal className="pricing">
        <div className="pricing-names">
          {PLANS.map((p) => (
            <div className="pricing-name" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="pricing-row head" role="row">
          <span className="feature">Feature</span>
          {PLANS.map((p) => (
            <span className="pricing-cell" key={p.name}>
              <span className="price">{p.price}</span>
              <span className="per">/month</span>
            </span>
          ))}
        </div>

        {PLAN_ROWS.map((row, ri) => (
          <div className="pricing-row" key={ri}>
            <span className="feature">{row.feature}</span>
            {row.values.map((v, vi) => (
              <span className="pricing-cell" key={vi}>
                <Cell value={v} />
              </span>
            ))}
          </div>
        ))}

        <div className="pricing-cta">
          <span />
          {PLANS.map((p) => (
            <span key={p.name}>
              <a
                className={p.featured ? "btn btn-orange" : "btn btn-ghost-light"}
                href="#contact"
              >
                Get started
              </a>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
