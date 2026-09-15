import { POSTS } from "@/data/content";
import { MaskedLines, Reveal } from "./motion";

export function News() {
  return (
    <section className="section bg-paper split news" id="news">
      <div className="news-top">
        <div className="col">
          <a className="btn btn-ink" href="#news">
            See more
          </a>
        </div>
        <div className="col">
          <MaskedLines
            className="display news-head"
            as="h2"
            lines={["News and", "updates."]}
          />
        </div>
      </div>

      <div className="news-grid">
        {POSTS.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 0.08}>
            <a className={`post post--${p.variant}`} href="#news">
              {p.variant === "panel" ? (
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="avatar" src="/img/avatar.jpg" alt="" loading="lazy" />
                  <span className="arrow" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M6 20 L20 6 M10 6 H20 V16" />
                    </svg>
                  </span>
                  <h3>{p.title}</h3>
                  <time>{p.date}</time>
                </div>
              ) : (
                <>
                  <div className="thumb zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image ?? ""} alt={p.alt} loading="lazy" />
                  </div>
                  <h3>{p.title}</h3>
                  <time>{p.date}</time>
                </>
              )}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
