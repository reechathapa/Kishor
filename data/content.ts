/**
 * All copy in this file is original placeholder content written for the site
 * owner. Names, figures, prices, quotes, client marks and article titles are
 * stand-ins chosen to match the reference layout's visual rhythm (line counts
 * and character lengths) — replace them with real data before launch.
 * Anything that must not be invented (testimonials, clients, statistics) is
 * flagged with `PLACEHOLDER` below.
 */

export const BRAND = {
  name: "KISHOR",
  reg: "®",
  studio: "STUDIO",
  taglinePre: "Conversion-first",
  taglineEm: "design & dev",
  taglinePost: "studio",
  est: "(EST. 2021 — VERSION 1.0.0)",
  disciplines: ["DESIGN", "DEVELOPMENT", "MARKETING"],
  slotsLabel: "SLOTS FOR OCT:",
  slotsLeft: "2 LEFT", // PLACEHOLDER availability
  person: {
    name: "Kishor",
    role: "Founder & CEO",
    roleFooter: "CREATIVE DIRECTOR",
    avatar: "/img/avatar.jpg",
  },
  contact: {
    phone: "+00 00 0000 0000", // PLACEHOLDER
    email: "hello@kishor.studio",
    hours: "BRIEFS ARE READ BY A HUMAN, AND ANSWERED WITHIN TWO WORKING DAYS.",
    address: "00 Placeholder Street, Your City, XX0 0XX", // PLACEHOLDER
    hoursOpen: ["Mon–Fri: 09:00 – 18:00", "Sat: 10:00 – 16:00"],
  },
  nav: [
    { label: "WORKS", href: "#work" },
    { label: "BLOG", href: "#news" },
    { label: "ABOUT", href: "#why-us" },
    { label: "CONTACT", href: "#contact" },
  ],
};

export const PROJECTS = [
  {
    index: "(01)",
    title: "Carton Supply Co.",
    marquee: "CARTON SUPPLY CO.",
    tags: ["Branding", "Development"],
    year: "/2026",
    image: "/img/project-box.jpg",
    alt: "Sculptural stack of minimal cardboard boxes in black and white",
    href: "#work",
  },
  {
    index: "(02)",
    title: "Northline Cabins",
    marquee: "NORTHLINE CABINS",
    tags: ["Web design", "Development"],
    year: "/2026",
    image: "/img/project-nomad.jpg",
    alt: "Minimal cabin bedroom with linen bedding in black and white",
    href: "#work",
  },
  {
    index: "(03)",
    title: "Pace Athletic",
    marquee: "PACE ATHLETIC",
    tags: ["Web design", "Branding"],
    year: "/2026",
    image: "/img/project-run.jpg",
    alt: "Runner in a white t-shirt sprinting in profile, black and white",
    href: "#work",
  },
];

export const SERVICES = [
  {
    num: "01",
    title: "Strategy & Research",
    price: "$2,900", // PLACEHOLDER rate card
    cols: [
      "We open each engagement by mapping the journey your customers are already on. Where they hesitate, where they lose the thread, and what would make the next step feel like the obvious one — then we restructure the flow around those moments.",
      "Settling that before any design work begins is what keeps the rest of the project honest. Decisions get easier, drop-off falls away, and the design has a real problem to solve instead of a mood to match.",
    ],
    image: "/img/services-climb.jpg",
    alt: "Woman climbing a steep snowy rock cliff, black and white",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    price: "$3,900", // PLACEHOLDER rate card
    cols: [
      "Insights become interfaces here. We design in high fidelity and put every significant flow into a clickable prototype, so the experience is tested against how people behave rather than how we hope they will.",
      "Prototyping ahead of code removes most of the guesswork and surfaces feasibility questions while they are still cheap to answer. You approve a working preview of the product, not a flat picture of it.",
    ],
    image: "/img/project-box.jpg",
    alt: "Minimal packaging boxes arranged sculpturally, black and white",
  },
  {
    num: "03",
    title: "Development",
    price: "$4,500", // PLACEHOLDER rate card
    cols: [
      "The build is typed, component-driven and boring in the best sense. We ship responsive sites and custom applications on modern frameworks, with performance budgets, sensible caching and security handled from the first commit.",
      "Functionality should never cost you speed. What lands is a fast, maintainable product that behaves the same on a five-year-old phone as it does on a large desktop display.",
    ],
    image: "/img/project-run.jpg",
    alt: "Runner sprinting in a white t-shirt, black and white",
  },
  {
    num: "04",
    title: "Support & Growth",
    price: "$1,200", // PLACEHOLDER rate card
    cols: [
      "Launch starts the measurement period, it does not end the project. We watch uptime and Core Web Vitals, keep dependencies patched, and tune whichever part of the funnel the data keeps flagging.",
      "That loop stops a site from decaying the month it ships. You get predictable maintenance and a team that already knows the codebase when the next feature is needed.",
    ],
    image: "/img/project-nomad.jpg",
    alt: "Calm minimal cabin interior in black and white",
  },
  {
    num: "05",
    title: "SEO",
    price: "$990", // PLACEHOLDER rate card
    cols: [
      "We treat search as an engineering problem first: crawlable architecture, clean internal linking, structured data, and a content hierarchy that matches the queries you actually want to win.",
      "Relevance compounds. Aligning the site with genuine search intent lowers what you pay for every visitor and keeps working long after the launch announcement.",
    ],
    image: "/img/blog-flowers.jpg",
    alt: "White flowers with dark leaves on a dark background, black and white",
  },
];

export const HOW_STATS = [
  {
    value: 60, // PLACEHOLDER statistic
    suffix: "+",
    cap: ["BUILDS DELIVERED", "AGAINST A STATED", "CONVERSION GOAL"],
    em: [0],
    indent: true,
  },
  {
    value: 3.2, // PLACEHOLDER statistic
    suffix: "S",
    decimals: 1,
    cap: ["MEDIAN TIME TO FIRST", "MEANINGFUL CLICK ONCE", "A PAGE LOADS"],
    em: [1],
    indent: false,
  },
  {
    value: 89, // PLACEHOLDER statistic
    suffix: "%",
    cap: ["OF NEW PROJECTS ARRIVE", "BY REFERRAL"],
    em: [1],
    indent: true,
  },
];

export const FAQS = [
  {
    q: "Who writes the copy — you or me?",
    a: "Either works. Send through what you have and we will edit it to fit the page, or our writers can draft it from the research phase. Nothing reaches design until you have read and approved the words.",
  },
  {
    q: "Will I see the design before development starts?",
    a: "Yes. Nothing is built until you have walked through the high-fidelity screens and signed them off. Changes at that stage cost a conversation; the same changes in code cost a sprint.",
  },
  {
    q: "What happens once the site is live?",
    a: "We stay on. Monitoring, dependency and security updates, a handover session so your team can edit content confidently, and a maintenance plan sized to how often the site actually changes.",
  },
  {
    q: "What if the result isn't what I expected?",
    a: "The work runs in milestones — wireframes, design, build — and each one needs your approval before the next begins. Surprises are rare, and course corrections happen while they are still small.",
  },
];

export const PLANS = [
  {
    name: "Foundation",
    desc: "A complete site on a proven structure. Ready to launch, nothing extra.",
    price: "$4,800", // PLACEHOLDER rate card
    featured: false,
  },
  {
    name: "Growth",
    desc: "Strategy, copy direction, and a site engineered to convert.",
    price: "$9,600", // PLACEHOLDER rate card
    featured: true,
  },
  {
    name: "Scale",
    desc: "Full-stack digital infrastructure, end to end.",
    price: "$15,900", // PLACEHOLDER rate card
    featured: false,
  },
];

export const PLAN_ROWS: { feature: string; values: (string | boolean)[] }[] = [
  { feature: "Strategy & behaviour audit", values: [true, true, true] },
  { feature: "Number of pages", values: ["Up to 5", "Up to 12", "Unlimited"] },
  { feature: "Conversion wireframes", values: [false, false, true] },
  { feature: "Copywriting support", values: [false, "Direction", "Full"] },
  { feature: "Brand identity system", values: [false, false, true] },
  {
    feature: "Analytics & reporting",
    values: ["Basic", "Advanced", "Advanced + reports"],
  },
  { feature: "A/B testing setup", values: [false, true, true] },
  { feature: "Timeline", values: ["3–4 weeks", "5–7 weeks", "Custom"] },
  { feature: "Ongoing support", values: [false, true, true] },
];

/** PLACEHOLDER — swap in real, permissioned client quotes before launch. */
export const TESTIMONIALS = [
  {
    quote:
      "“[Client quote placeholder — this slot holds a real testimonial once you have permission to publish one.]”",
    name: "[Client name]",
    role: "[Role, Company]",
    image: "/img/testimonial-portrait.jpg",
    alt: "Black and white studio portrait, placeholder for the client's photo",
  },
  {
    quote:
      "“[Second client quote placeholder — keep it to roughly three lines at this display size.]”",
    name: "[Client name]",
    role: "[Role, Company]",
    image: "/img/testimonial-portrait.jpg",
    alt: "Black and white studio portrait, placeholder for the client's photo",
  },
];

/** PLACEHOLDER — stand-in marks so the marquee keeps its rhythm. */
export const CLIENTS = [
  "Acme",
  "Northwind",
  "Globex",
  "Initech",
  "Hooli",
  "Vandelay",
];

export const POSTS = [
  {
    title: "Why redesigns stall, and the three decisions that unblock them",
    date: "31 MAR 2026",
    image: "/img/blog-laptop.jpg",
    alt: "Person in white sweater typing on a vintage laptop, grainy black and white",
    variant: "std",
  },
  {
    title: "The metric that predicts conversion better than traffic does",
    date: "31 MAR 2026",
    image: null,
    alt: "",
    variant: "panel",
  },
  {
    title: "A layout change that shortened the path to sign-up",
    date: "30 MAR 2026",
    image: "/img/blog-crouch.jpg",
    alt: "Woman crouching in a black blazer and white lace blouse, black and white",
    variant: "tall",
  },
  {
    title: "Default values are design decisions",
    date: "25 MAR 2026",
    image: "/img/blog-flowers.jpg",
    alt: "White flowers with dark glossy leaves on a dark background, black and white",
    variant: "short",
  },
];
