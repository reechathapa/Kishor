import { BRAND } from "@/data/content";
import { LogoMark } from "./LogoMark";
import { MaskedLines, Reveal } from "./motion";

export function Footer() {
  return (
    <footer className="section bg-ink grain split footer" id="contact">
      <div className="grid2">
        <div className="col">
          <LogoMark className="footer-mark" color="#ffffff" />
          <Reveal className="footer-l-card">
            <div className="room zoom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/footer-room.jpg"
                alt="Dark green study room with a grey wingback armchair"
                loading="lazy"
              />
              <span className="who">
                {BRAND.person.name}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={BRAND.person.avatar} alt="" loading="lazy" />
              </span>
            </div>
            <p className="note">
              I read every brief myself and reply within two working days.
            </p>
            <p className="role">{BRAND.person.roleFooter}</p>
          </Reveal>

          <div className="footer-contact">
            <span className="label">Contact</span>
            <a className="phone" href={`tel:${BRAND.contact.phone.replace(/\s/g, "")}`}>
              {BRAND.contact.phone}
            </a>
            <br />
            <a className="mail" href={`mailto:${BRAND.contact.email}`}>
              {BRAND.contact.email}
            </a>
            <p className="hours">{BRAND.contact.hours}</p>
          </div>

          <div className="footer-logo">
            <LogoMark color="#ffffff" />
            <span>
              {BRAND.name}
              {BRAND.reg}
            </span>
          </div>

          <div className="footer-rule" aria-hidden="true" />
        </div>

        <div className="col">
          <MaskedLines
            className="display footer-head"
            as="h2"
            lines={["Start a", "project."]}
          />
          <Reveal>
            <p className="footer-blurb">
              Send a full brief or a half-formed idea — both are useful starting
              points. No pitch decks, no call funnel,{" "}
              <span className="em">just a direct reply</span>.
            </p>
          </Reveal>

          <form className="form" action="#contact" method="get">
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input id="f-name" name="name" type="text" placeholder="Alex Johnson" />
            </div>
            <div className="field">
              <label htmlFor="f-email">Your email address</label>
              <input id="f-email" name="email" type="email" placeholder="example@email.com" />
            </div>
            <div className="field">
              <label htmlFor="f-need">What are you looking for?</label>
              <div className="select">
                <select id="f-need" name="need" defaultValue="I need a new website">
                  <option>I need a new website</option>
                  <option>I need a redesign</option>
                  <option>I need branding</option>
                  <option>Something else</option>
                </select>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M1 1 L6 6 L11 1" />
                </svg>
              </div>
            </div>
            <div className="form-send">
              <button className="btn btn-white" type="submit">
                Send message
              </button>
              <p className="form-note">
                By submitting, you agree to our <b>Terms</b> and{" "}
                <b>Privacy Policy</b>.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="grid2 footer-cols">
        <div className="col" />
        <div className="col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div>
            <span className="label">Navigation</span>
            <nav className="footer-nav" aria-label="Footer">
              <a href="#top">Home</a>
              <a href="#work">Works</a>
              <a href="#contact">Contact</a>
              <a href="#news">Blog</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <div>
            <span className="label">Visit us</span>
            <p className="footer-addr">{BRAND.contact.address}</p>
            <p className="footer-hours">
              {BRAND.contact.hoursOpen[0]}
              <br />
              {BRAND.contact.hoursOpen[1]}
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#top">Privacy policy</a>
        <a href="#top">Terms of service</a>
        <span className="grow" />
        <span>© 2026 {BRAND.name}®. All rights reserved.</span>
        <span className="footer-built">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
            <path d="M0 0 L12 0 L6 7 Z M0 8 L6 8 L0 14 Z" />
          </svg>
          Hand-built in React
        </span>
        <span className="footer-created">
          Created by
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND.person.avatar} alt="" loading="lazy" />
          {BRAND.person.name}
        </span>
      </div>
    </footer>
  );
}
