// ─────────────────────────────────────────────────────────────────────────
// All site copy and facts live here. Nothing below is invented items not
// yet provided are clearly marked TODO so they're easy to find and fill in.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Theophilus Mensah",
  shortName: "Theo",
  role: "Software Engineer & Full-Stack Developer",
  identities: [
    "Software Engineer",
    "Full-Stack Developer",
    "Product Builder",
    "Technology Entrepreneur",
  ],
  location: "Ghana", // TODO: confirm city if you'd like it displayed
  headline: "I build software, products and ideas that solve real problems.",
  subheadline:
    "Full-stack developer and founder turning early ideas into working products from marketplace platforms to the systems that run underneath them.",
};

// TODO: add a real email address the contact form and mailto links use this.
export const CONTACT_EMAIL = "mtheophilus565@gmail.com";

// TODO: add a WhatsApp number (international format, no spaces, e.g. 233XXXXXXXXX)
// to activate the WhatsApp CTA in the contact section.
export const WHATSAPP_NUMBER = "";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theophilus-mensah-857519208/", key: "linkedin" },
  { label: "GitHub", href: "https://github.com/Junior-99", key: "github" },
  { label: "Instagram", href: "https://www.instagram.com/juniorsworld_0/?hl=en", key: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@juniorsworld_0?lang=en-GB", key: "tiktok" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Ideas", href: "#ideas" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  intro:
    "I'm a software engineer who builds full products, not just features. My work sits at the intersection of engineering and entrepreneurship: writing the code, shaping the product decisions, and building the company around it.",
  paragraphs: [
    "My core discipline is full-stack development building web and mobile applications end to end, from interface down to data. I'm equally comfortable designing a system's architecture as I am polishing the interaction a user touches first.",
    "Beyond the codebase, I think about products as businesses. I founded Argus Platforms Limited to build digital products and software platforms with real users behind them, and I built FlipMall to test that thinking directly a marketplace shaped around a specific community's actual buying and selling habits.",
    "I also write, develop concepts, and work in film and performance. None of that competes with the engineering it feeds it. Building a product and building a story require the same instinct: understand what an audience actually needs, then construct something that delivers it clearly.",
  ],
  pillars: [
    {
      title: "Engineering",
      description: "Full-stack web & mobile development, software architecture, APIs and data.",
    },
    {
      title: "Product",
      description: "Turning a problem into a working product scoping, building, shipping, iterating.",
    },
    {
      title: "Entrepreneurship",
      description: "Founding and running Argus Platforms Limited; building for African markets and talent.",
    },
    {
      title: "Creative work",
      description: "Writing, concept development, film and performance a second, related discipline.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    title: "Backend & Data",
    items: ["Firebase", "Django", "Python", "APIs", "Databases"],
  },
  {
    title: "Product & Practice",
    items: ["UI/UX Implementation", "Product Development", "Software Architecture", "Problem Solving"],
  },
];

// Image paths are optional. Drop files into src/assets/projects/<slug>/ and
// list their imported paths here until then, a designed placeholder panel
// is shown instead of a broken image.
export const projects = [
  {
    slug: "flipmall",
    name: "FlipMall",
    tag: "Featured Product",
    year: "", // TODO: add year/status if you'd like it shown
    summary:
      "A student-focused marketplace for buying, selling and discovering affordable products within a local community.",
    problem:
      "Students routinely buy and sell within their own communities pre-owned items, small business goods, everyday essentials but that activity is scattered across chats, flyers and word of mouth, with no shared, trustworthy place to do it.",
    story:
      "FlipMall is built around a student-based ecosystem: a marketplace where students can buy, sell pre-owned items, sell products from their own small businesses, and discover affordable options nearby. The goal is a local marketplace that reflects how students actually trade with each other, rather than a generic e-commerce template.",
    features: [
      "Buy and sell within a student community",
      "Support for pre-owned and secondhand items",
      "A storefront path for students running small businesses",
      "Discovery built around affordability and locality",
    ],
    tech: ["React", "Expo", "React Native", "Firebase"], // TODO: confirm exact stack used
    links: {
      live: "", // TODO: add live link if available
      github: "", // TODO: add repo link if available
    },
    images: [], // TODO: add screenshots to src/assets/projects/flipmall/
  },
  {
    slug: "argus",
    name: "Argus Platforms Limited",
    tag: "Company Founder & CEO",
    year: "",
    summary:
      "The technology company I founded building digital products, software platforms, mobile applications and AI solutions.",
    problem:
      "Argus exists to build ambitious technology products from the ground up, with a particular focus on contributing to technological advancement through African innovation and young technology talent.",
    story:
      "As Founder and CEO, I lead Argus's work across digital products, software platforms, mobile applications, websites, and AI solutions. It's the vehicle for the products I build beyond individual freelance work including FlipMall and the standard set of services offered below.",
    features: [
      "Websites and web applications",
      "Mobile applications",
      "E-commerce and marketplace platforms",
      "AI solutions and workflow automation",
    ],
    tech: ["React", "Tailwind CSS", "Django", "Python"],
    links: {
      live: "", // TODO: add Argus website link when available
      github: "",
    },
    images: [],
  },
];

export const pricingNote =
  "All prices shown are estimated ranges designed to help you plan your project budget. Final pricing depends on specific requirements, features, complexity, integrations, timeline, and other project needs.";

export const pricingGroups = [
  {
    id: "websites",
    title: "Websites",
    tiers: [
      { name: "Landing Page", standard: "$300 – $500", launch: "$250 – $400" },
      { name: "Personal Website", standard: "$350 – $600", launch: "$300 – $500" },
      { name: "Portfolio Website", standard: "$400 – $650", launch: "$350 – $600" },
      { name: "Small Business Website", standard: "$500 – $850", launch: "$400 – $700" },
      { name: "Corporate Website", standard: "$750 – $1,650", launch: "$650 – $1,400" },
      { name: "School / Institution Website", standard: "$650 – $1,650", launch: "$600 – $1,400" },
      { name: "NGO Website", standard: "$600 – $1,400", launch: "$500 – $1,150" },
    ],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    tiers: [
      { name: "Small Online Store", standard: "$600 – $1,100", launch: "$400 – $900" },
      { name: "Professional E-Commerce", standard: "$900 – $1,800", launch: "$750 – $1,400" },
      { name: "Advanced E-Commerce Platform", standard: "$1,400 – $2,700+", launch: "$900 – $2,700+" },
      { name: "Multi-vendor Marketplace", standard: "$1,800+", launch: "Custom Quote" },
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    tiers: [
      { name: "Simple Mobile App", standard: "$750 – $1,400", launch: "$650 – $1,200" },
      { name: "Business App", standard: "$1,400 – $2,700", launch: "$1,200 – $2,300" },
      { name: "Marketplace App", standard: "$2,700 – $6,300", launch: "$2,300 – $5,400" },
      { name: "Complex Platform", standard: "$4,500+", launch: "Custom Quote" },
    ],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    tiers: [
      { name: "Simple Web App", standard: "$750 – $1,400", launch: "$600 – $1,100" },
      { name: "Business Management System", standard: "$1,400 – $2,700", launch: "$1,200 – $2,300" },
      { name: "SaaS Platform", standard: "$2,700 – $6,300+", launch: "$2,300 – $5,400" },
      { name: "Custom Platform", standard: "$4,500+", launch: "Custom Quote" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Dashboards",
    tiers: [
      { name: "Basic Dashboard", standard: "$600 – $1,100", launch: "$500 – $900" },
      { name: "Business Analytics System", standard: "$1,400 – $3,200", launch: "$1,100 – $2,700" },
      { name: "Advanced Analytics Platform", standard: "$3,200+", launch: "Custom Quote" },
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    tiers: [
      { name: "Website AI Chatbot", standard: "$750 – $1,650", launch: "$650 – $1,400" },
      { name: "AI Business Assistant", standard: "$1,400 – $3,600", launch: "$1,100 – $3,200" },
      { name: "Workflow Automation", standard: "$1,400 – $4,500", launch: "$1,100 – $3,800" },
      { name: "Custom AI Platform", standard: "$2,700+", launch: "Custom Quote" },
    ],
  },
];

// Optional "ideas lab" entries safe to leave empty/short and grow over time.
export const ideas = [
  {
    title: "Building in public, as a student founder",
    kind: "Essay / Note",
    description:
      "Notes on building FlipMall alongside a full course load what changes about product decisions when your users are the people sitting next to you in class.",
  },
  {
    title: "Where film and software actually overlap",
    kind: "Concept",
    description:
      "A running set of thoughts on structure how pacing a scene and pacing a user flow draw on the same underlying instinct for what an audience needs next.",
  },
  {
    title: "Africa-built, globally useful",
    kind: "Thesis",
    description:
      "The working premise behind Argus: technology products built by and for African talent don't need to be scaled down to be taken seriously they need to be built well.",
  },
];

// Add real milestones as they happen dates/companies are only included
// once confirmed, nothing here is invented.
export const journey = [
  {
    period: "Ongoing",
    title: "Founder & CEO, Argus Platforms Limited",
    description:
      "Leading Argus's work building digital products, software platforms, mobile applications and AI solutions.",
  },
  {
    period: "Ongoing",
    title: "Building FlipMall",
    description:
      "Designing and developing a student-focused marketplace ecosystem from the ground up.",
  },
  {
    period: "Ongoing",
    title: "Full-Stack Development",
    description:
      "Working across React, React Native, Firebase, Django and Python to ship complete products frontend to backend.",
  },
  // TODO: add earlier milestones (education, first project, earlier roles) with real dates.
];

export const services = {
  intro:
    "I work with founders, businesses and teams who need software built properly websites, applications, e-commerce, dashboards and AI-driven tools.",
  types: [
    "Website development",
    "Web applications",
    "Mobile applications",
    "E-commerce",
    "Dashboards & analytics",
    "AI solutions",
    "Custom software",
  ],
  budgetRanges: [
    "Under $500",
    "$500 – $1,500",
    "$1,500 – $3,000",
    "$3,000 – $6,000",
    "$6,000+",
  ],
};
