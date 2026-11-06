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
  headline: "A marketplace. A community. Software built around people.",
  subheadline:
    "I am Theophilus Mensah, a software engineer in Ghana and founder of Argus Platforms Limited. I build web and mobile products, including FlipMall and NerdSpace.",
};

// TODO: add a real email address the contact form and mailto links use this.
export const CONTACT_EMAIL = "mtheophilus565@gmail.com";

// TODO: add a WhatsApp number (international format, no spaces, e.g. 233XXXXXXXXX)
// to activate the WhatsApp CTA in the contact section.
export const WHATSAPP_NUMBER = "233598048561";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theophilus-mensah-857519208/", key: "linkedin" },
  { label: "GitHub", href: "https://github.com/Junior-99", key: "github" },
  { label: "Instagram", href: "https://www.instagram.com/juniorsworld_0/?hl=en", key: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@juniorsworld_0?lang=en-GB", key: "tiktok" },
  {"label": "YouTube", "href": "https://www.youtube.com/@juniorsworld_0", "key": "youtube"},
  {"label": "Twitch", "href": "https://www.twitch.tv/juniorthenerdking", "key": "twitch"},
  {"label": "X", "href": "https://x.com/Theo_MJ_", "key": "x"},
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
    "I work across the interface and the systems behind it. My projects include a student marketplace, a fandom community app and business websites with practical enquiry flows.",
  paragraphs: [
    "My core discipline is full-stack development. I build web and mobile applications from interface to data. I'm equally comfortable designing a system's architecture as I am polishing the interaction a user touches first.",
    "Beyond the codebase, I think about products as businesses. I founded Argus Platforms Limited to build digital products and software platforms with real users behind them, and I built FlipMall to test that thinking directly: a marketplace shaped around a specific community's actual buying and selling habits.",
    "I also write, develop concepts, and work in film and performance. Those creative disciplines inform how I structure an experience. Building a product and building a story require the same instinct: understand what an audience actually needs, then construct something that delivers it clearly.",
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
    "slug": "flipmall",
    "name": "FlipMall",
    "tag": "Featured product / Marketplace",
    "year": "",
    "summary": "A marketplace shaped around how students discover products, run small stores and talk to local sellers.",
    "problem": "Campus trading is scattered across group chats and word of mouth. Buyers need a place to discover goods and connect with sellers.",
    "story": "I designed and developed a marketplace with mobile apps and a companion website. The experience connects product discovery, seller stores and conversations in one flow.",
    "features": [
      "Product discovery and listings",
      "Seller storefronts",
      "Buyer and seller conversations",
      "Mobile apps and companion website"
    ],
    "tech": [
      "React Native",
      "Expo",
      "React",
      "Firebase"
    ],
    "links": {
      "live": "https://flipmall.store",
      "github": ""
    },
    "images": [
      "/projects/flipmall-discover.png"
    ],
    "imageNote": "FlipMall product capture"
  },
  {
    "slug": "nerdspace",
    "name": "NerdSpace",
    "tag": "Featured product / Community",
    "year": "Store release preparation",
    "summary": "A social home for people who want to talk about the stories, games and worlds they love.",
    "problem": "Shared interests often become scattered conversations. NerdSpace brings communities and their discussions into a dedicated social experience.",
    "story": "I am building the mobile experience, community rooms, profiles, messaging and supporting web presence. The work includes moderation, account controls and annual membership infrastructure. Store release preparation and final device checks are ongoing.",
    "features": [
      "Interest-based community rooms",
      "Profiles, posts and conversations",
      "Moderation and account controls",
      "Public support and membership website"
    ],
    "tech": [
      "React Native",
      "Expo",
      "Firebase"
    ],
    "links": {
      "live": "https://junior-99.github.io/nerdspace-site/",
      "github": "https://github.com/Junior-99/nerdspace-site"
    },
    "images": [
      "/projects/nerdspace.png"
    ],
    "imageNote": "Original NerdSpace room illustration, not an app screenshot"
  }
];

export const pricingNote =
  "All prices shown are estimated ranges designed to help you plan your project budget. Final pricing depends on specific requirements, features, complexity, integrations, timeline, and other project needs.";

export const pricingGroups = [
  {
    id: "websites",
    title: "Websites",
    tiers: [
      { name: "Landing Page", standard: "$300 to $500", launch: "$250 to $400" },
      { name: "Personal Website", standard: "$350 to $600", launch: "$300 to $500" },
      { name: "Portfolio Website", standard: "$400 to $650", launch: "$350 to $600" },
      { name: "Small Business Website", standard: "$500 to $850", launch: "$400 to $700" },
      { name: "Corporate Website", standard: "$750 to $1,650", launch: "$650 to $1,400" },
      { name: "School / Institution Website", standard: "$650 to $1,650", launch: "$600 to $1,400" },
      { name: "NGO Website", standard: "$600 to $1,400", launch: "$500 to $1,150" },
    ],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    tiers: [
      { name: "Small Online Store", standard: "$600 to $1,100", launch: "$400 to $900" },
      { name: "Professional E-Commerce", standard: "$900 to $1,800", launch: "$750 to $1,400" },
      { name: "Advanced E-Commerce Platform", standard: "$1,400 to $2,700+", launch: "$900 to $2,700+" },
      { name: "Multi-vendor Marketplace", standard: "$1,800+", launch: "Custom Quote" },
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    tiers: [
      { name: "Simple Mobile App", standard: "$750 to $1,400", launch: "$650 to $1,200" },
      { name: "Business App", standard: "$1,400 to $2,700", launch: "$1,200 to $2,300" },
      { name: "Marketplace App", standard: "$2,700 to $6,300", launch: "$2,300 to $5,400" },
      { name: "Complex Platform", standard: "$4,500+", launch: "Custom Quote" },
    ],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    tiers: [
      { name: "Simple Web App", standard: "$750 to $1,400", launch: "$600 to $1,100" },
      { name: "Business Management System", standard: "$1,400 to $2,700", launch: "$1,200 to $2,300" },
      { name: "SaaS Platform", standard: "$2,700 to $6,300+", launch: "$2,300 to $5,400" },
      { name: "Custom Platform", standard: "$4,500+", launch: "Custom Quote" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Dashboards",
    tiers: [
      { name: "Basic Dashboard", standard: "$600 to $1,100", launch: "$500 to $900" },
      { name: "Business Analytics System", standard: "$1,400 to $3,200", launch: "$1,100 to $2,700" },
      { name: "Advanced Analytics Platform", standard: "$3,200+", launch: "Custom Quote" },
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    tiers: [
      { name: "Website AI Chatbot", standard: "$750 to $1,650", launch: "$650 to $1,400" },
      { name: "AI Business Assistant", standard: "$1,400 to $3,600", launch: "$1,100 to $3,200" },
      { name: "Workflow Automation", standard: "$1,400 to $4,500", launch: "$1,100 to $3,800" },
      { name: "Custom AI Platform", standard: "$2,700+", launch: "Custom Quote" },
    ],
  },
];

// Optional "ideas lab" entries safe to leave empty/short and grow over time.
export const ideas = [
  {
    "title": "A marketplace is a connected journey",
    "kind": "FlipMall / Product note",
    "description": "A product listing is only one step. Discovery needs to connect to the seller store and then to a useful conversation. I treat those transitions as part of the same experience when working on FlipMall."
  },
  {
    "title": "Community needs clear boundaries",
    "kind": "NerdSpace / Engineering note",
    "description": "Rooms, profiles and messaging bring different expectations about visibility and access. NerdSpace has pushed me to treat permissions, moderation and account controls as part of the product experience."
  },
  {
    "title": "Give a visitor a useful next step",
    "kind": "Website concepts / Design note",
    "description": "The ten independent website concepts each center a concrete task: a room-fit brief, a meal plan, a commission request or a visit plan. A distinct visual direction works best when it also helps someone decide what to do next."
  }
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
    title: "Building NerdSpace",
    description: "Developing a community app and its public web presence, with mobile store release preparation underway.",
  },
  {
    period: "Ongoing",
    title: "Full-Stack Development",
    description:
      "Working across React, React Native, Firebase, Django and Python to ship complete products from frontend to backend.",
  },
  // TODO: add earlier milestones (education, first project, earlier roles) with real dates.
];

export const services = {
  intro:
    "I work with founders, businesses and teams who need software built properly: websites, applications, e-commerce, dashboards and AI-driven tools.",
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
    "$500 to $1,500",
    "$1,500 to $3,000",
    "$3,000 to $6,000",
    "$6,000+",
  ],
};
