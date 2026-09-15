export const BRAND = {
  name: "KISHOR",
  reg: "®",
  studio: "STUDIO",
  taglinePre: "Conversion-first",
  taglineEm: "design & dev",
  taglinePost: "studio",
  est: "(EST. 2019 — VERSION 1.0.4)",
  disciplines: ["DESIGN", "DEVELOPMENT", "MARKETING"],
  slotsLabel: "SLOTS FOR APR:",
  slotsLeft: "2 LEFT",
  person: {
    name: "Kishor",
    role: "Founder & CEO",
    roleFooter: "CREATIVE DIRECTOR",
    avatar: "/img/avatar.jpg",
  },
  contact: {
    phone: "+00 00 0000 0000",
    email: "hello@kishor.studio",
    hours: "WE USUALLY RESPOND TO ALL DIGITAL ENQUIRIES WITHIN 2 BUSINESS HOURS.",
    address: "00 Placeholder Street, Your City, XX0 0XX",
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
    title: "Box mode",
    marquee: "BOX MODE",
    tags: ["Branding", "Development"],
    year: "/2026",
    image: "/img/project-box.jpg",
    alt: "Sculptural stack of minimal cardboard boxes in black and white",
    href: "#work",
  },
  {
    index: "(02)",
    title: "Nomad Stays",
    marquee: "NOMAD STAYS",
    tags: ["Web design", "Development"],
    year: "/2026",
    image: "/img/project-nomad.jpg",
    alt: "Minimal cabin bedroom with linen bedding in black and white",
    href: "#work",
  },
  {
    index: "(03)",
    title: "We run brand",
    marquee: "WE RUN BRAND",
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
    price: "$2,900",
    cols: [
      "Kishor Studio opens every project with an audit of your current customer journey. We identify the moments where users lose context or delay a decision, then restructure the flow so each next step feels like the obvious thing to do. Behavioral patterns backed by data.",
      "This approach reduces drop-offs before design even begins. It builds an environment where choosing you becomes the path of least resistance for your customer.",
    ],
    image: "/img/services-climb.jpg",
    alt: "Woman climbing a steep snowy rock cliff, black and white",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    price: "$3,900",
    cols: [
      "We translate strategic insights into high-fidelity interfaces that prioritize clarity and visual impact. Every element is tested through interactive prototypes, ensuring that the user experience is intuitive, seamless, and perfectly aligned with your brand's unique identity.",
      "By prototyping before coding, we eliminate guesswork and ensure technical feasibility. You get a pixel-perfect preview of the final product, allowing for rapid iteration and a design that truly resonates with your target audience.",
    ],
    image: "/img/project-box.jpg",
    alt: "Minimal packaging boxes arranged sculpturally, black and white",
  },
  {
    num: "03",
    title: "Development",
    price: "$4,500",
    cols: [
      "Our development process focuses on clean, scalable code and high-performance engineering. We build responsive websites and custom web applications using modern frameworks that ensure fast loading times, robust security, and a future-proof architecture.",
      "We bridge the gap between complex functionality and effortless performance. The result is a high-speed digital product that functions flawlessly across all devices, providing a rock-solid foundation for your business to scale and grow.",
    ],
    image: "/img/project-run.jpg",
    alt: "Runner sprinting in a white t-shirt, black and white",
  },
  {
    num: "04",
    title: "Support & Growth",
    price: "$1,200",
    cols: [
      "Launching is just the beginning. We provide proactive monitoring, security updates, and performance tuning to keep your platform running at peak efficiency. Our team remains available to implement new features and refine the UX based on real-world user data.",
      "This continuous optimization ensures your site evolves alongside your business needs. We minimize downtime and technical debt, giving you the peace of mind to focus on your core operations while we handle the technical heavy lifting.",
    ],
    image: "/img/project-nomad.jpg",
    alt: "Calm minimal cabin interior in black and white",
  },
  {
    num: "05",
    title: "SEO",
    price: "$990",
    cols: [
      "Our SEO strategy goes beyond keywords; we optimize the technical architecture and content hierarchy for maximum visibility. We ensure search engines can crawl, index, and rank your site effectively, driving high-quality organic traffic directly to your platform.",
      "Visibility leads to authority. By aligning your site with search intent, we help you capture high-intent leads and maintain a competitive edge. It's about building a sustainable traffic source that grows in value over time.",
    ],
    image: "/img/blog-flowers.jpg",
    alt: "White flowers with dark leaves on a dark background, black and white",
  },
];

export const HOW_STATS = [
  {
    value: 60,
    suffix: "+",
    cap: ["PROJECTS SHIPPED", "WITH MEASURABLE", "CONVERSION LIFT"],
    em: [0],
    indent: true,
  },
  {
    value: 3.2,
    suffix: "S",
    decimals: 1,
    cap: ["AVERAGE TIME TO FIRST", "MEANINGFUL ACTION ON OUR", "SITES"],
    em: [1],
    indent: false,
  },
  {
    value: 89,
    suffix: "%",
    cap: ["OF CLIENTS COME FROM", "DIRECT REFERRALS"],
    em: [1],
    indent: true,
  },
];

export const FAQS = [
  {
    q: "Do you write the copy or do I need to provide it?",
    a: "We can handle it both ways. You can provide your own content, or our copywriters can craft professional, SEO-optimized copy tailored specifically to your brand and goals.",
  },
  {
    q: "Can I see the design before you build it?",
    a: "Absolutely. We don't start the development phase until you have reviewed and fully approved the high-fidelity design mockups in Figma.",
  },
  {
    q: "What happens after launch?",
    a: "We don't just disappear. We provide post-launch technical support, training for your team on how to manage the site, and options for ongoing maintenance and scaling.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We work in clear milestones (wireframes, design, development). By requiring your approval at each stage, we ensure the final product aligns perfectly with your vision before it's even finished.",
  },
];

export const PLANS = [
  {
    name: "Foundation",
    desc: "A solid site built on proven structure. Launch-ready, no extras.",
    price: "$4,800",
    featured: false,
  },
  {
    name: "Growth",
    desc: "Strategy, copy guidance, and a site built to convert.",
    price: "$9,600",
    featured: true,
  },
  {
    name: "Scale",
    desc: "End-to-end digital infrastructure.",
    price: "$15,900",
    featured: false,
  },
];

export const PLAN_ROWS: { feature: string; values: (string | boolean)[] }[] = [
  { feature: "Strategy & behavioral audit", values: [true, true, true] },
  { feature: "Number of pages", values: ["Up to 5", "Up to 12", "Unlimited"] },
  { feature: "Conversion wireframes", values: [false, false, true] },
  { feature: "Copywriting support", values: [false, "Direction", "Full"] },
  { feature: "Brand identity system", values: [false, false, true] },
  {
    feature: "Copywriting support",
    values: ["Basic", "Advanced", "Advanced + reports"],
  },
  { feature: "A/B testing setup", values: [false, true, true] },
  { feature: "Timeline", values: ["3–4 weeks", "5–7 weeks", "Custom"] },
  { feature: "Ongoing support", values: [false, true, true] },
];

export const TESTIMONIALS = [
  {
    quote:
      "\"We launched in two weeks and had paying customers by week three. I've worked with agencies that took months to deliver half of this.\"",
    name: "Sophie Andersen",
    role: "Co-founder",
    image: "/img/testimonial-portrait.jpg",
    alt: "Black and white studio portrait of a woman with sculpted blonde hair",
  },
  {
    quote:
      "\"The hardest part of building a website isn't the code — it's knowing what to leave out. Every element that doesn't serve the visitor is working against you.\"",
    name: "Kishor",
    role: "Founder at Kishor®",
    image: "/img/testimonial-portrait.jpg",
    alt: "Black and white studio portrait of a woman with sculpted blonde hair",
  },
];

export const CLIENTS = [
  "Watchtower",
  "Asterisk",
  "Shutterframe",
  "Visionwork",
  "PictelAI",
  "Quanta",
];

export const POSTS = [
  {
    title: "Why most redesigns fail — and what to do instead",
    date: "31 MAR 2026",
    image: "/img/blog-laptop.jpg",
    alt: "Person in white sweater typing on a vintage laptop, grainy black and white",
    variant: "std",
  },
  {
    title: "The one metric that actually predicts whether your site will convert",
    date: "31 MAR 2026",
    image: null,
    alt: "",
    variant: "panel",
  },
  {
    title: "How we cut bounce rate by 34% with one layout change",
    date: "30 MAR 2026",
    image: "/img/blog-crouch.jpg",
    alt: "Woman crouching in a black blazer and white lace blouse, black and white",
    variant: "tall",
  },
  {
    title: "Small defaults, big outcomes: lessons from behavioral design",
    date: "25 MAR 2026",
    image: "/img/blog-flowers.jpg",
    alt: "White flowers with dark glossy leaves on a dark background, black and white",
    variant: "short",
  },
];
