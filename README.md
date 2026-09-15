# Kishor® Studio

A pixel-faithful reconstruction of the [Mattis® Framer template](https://mattis.framer.website/)
agency landing page, rebuilt as a production Next.js app and rebranded as
**Kishor® Studio**.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Framer Motion for reveals, masked headline lines, accordions, counters and the
  pinned horizontal work scroller
- Self-hosted Roboto (`@fontsource/roboto`) — 400 / 500 / 700 / 900
- Hand-written design-token CSS (`app/globals.css`), no utility framework

## Design tokens (measured from the reference at a 1500px viewport)

```text
Container:  full-bleed, horizontal padding 30px (2vw), 50% center hairline
Palette:    orange #FF4400 · ink #111111 · ink-card #0A0A0A
            paper #E9E9E9 · paper-2 #F6F6F6 · band #F7F7F7 · white #FFFFFF
Type:       Roboto — hero wordmark 156px/0.78 (900), display 88px & 78px/0.95 (700)
            lead 30px/1.2, body 13px/1.45, micro 11px uppercase
Section boundaries stepped 28px at the centre line (right half rises)
```

## Sections

Header · Hero (framed wordmark, crosshair guides, signature, live local time) ·
Strategy (orange) · We build websites · Work (pinned horizontal scroller with
blurred backdrops + title marquee) · Why us (stat cards) · Services accordion ·
How we do it (orange stats) · FAQ accordion · How we think + Pricing table ·
Testimonials carousel · Client logo band · News grid · Footer with contact form

## Content

The reference supplies **layout only**. Every word on the page is original
placeholder copy written for the site owner ("Kishor®") and lives in
`data/content.ts` plus the section components — no text is carried over from
the reference template.

Things that must not be invented are flagged `PLACEHOLDER` in `data/content.ts`
and are obvious on the page:

- client testimonials and the founder statement (bracketed placeholders)
- client logo band (stand-in marks + dummy brand names)
- statistics, rate card prices, contact details and address
- project names and article titles

Imagery is AI-generated stand-ins matched to the reference's composition,
aspect ratio and crop.

## Develop

Requires Node.js **20.9+** (Next.js 16 runtime requirement).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint     # eslint (flat config, eslint-config-next)
npm run typecheck
```

## Security

Next.js is pinned to **16.3.5** and React to **19.3.0** — both above the patched
releases for CVE-2025-66478 / CVE-2025-55182 (React Server Components RCE,
advisories of 2025-12-03 and 2025-12-11). `npm audit` reports 0 vulnerabilities.
Do not downgrade `next` below 16.0.10 (or to any 15.x below 15.5.9) without
re-checking <https://nextjs.org/blog/CVE-2025-66478>.
