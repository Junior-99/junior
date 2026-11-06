import { useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { websiteConcepts } from "../data/otherWork";

const productWork = [
  {
    name: "Argus Platforms Limited",
    type: "Company website",
    image: "/projects/argus-preview.webp",
    alt: "Homepage of the Argus Platforms Limited company website",
    caption: "Live company website",
    description: "The studio behind my product work, with services, product showcases, pricing and a project enquiry workflow.",
    href: "https://argus-ruddy-eta.vercel.app/",
    action: "Explore Argus",
  },
  {
    name: "Campus Buddy",
    type: "Mobile prototype",
    image: "/projects/campus-buddy-design.webp",
    alt: "Campus Buddy home-screen design reference with an illustrated campus map",
    caption: "Interface design study. Sample data.",
    description: "Campus discovery and opt-in walking coordination for University of Ghana students. Profiles, buddy requests and participant chat are implemented; routes are illustrated and device validation is ongoing.",
    href: "mailto:mtheophilus565@gmail.com?subject=Campus%20Buddy%20walkthrough",
    action: "Request a walkthrough",
    contain: true,
  },
  {
    name: "EasyPay",
    type: "Sandbox MVP",
    image: "/projects/easypay-design.webp",
    alt: "EasyPay dashboard design study showing illustrative payment metrics",
    caption: "Dashboard design study. Sample data.",
    description: "A merchant API and developer console for testing payment states, account isolation and idempotent requests. The current MVP simulates payments and does not move money.",
    href: "mailto:mtheophilus565@gmail.com?subject=EasyPay%20walkthrough",
    action: "Request a walkthrough",
  },
];

const categories = ["All websites", ...new Set(websiteConcepts.map((item) => item.category))];

function ProjectLink({ href, children, label, source = false }) {
  const external = href.startsWith("https:");
  return (
    <a href={href} aria-label={label} target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined} className="archive-link">
      {source ? <Code2 size={15} aria-hidden="true" /> : null}
      {children}
      {!source && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  );
}

export default function OtherWork() {
  const [category, setCategory] = useState("All websites");
  const visible = websiteConcepts.filter((item) => category === "All websites" || item.category === category);

  return (
    <div className="container-xl archive-section">
      <div className="archive-heading">
        <div>
          <p className="archive-kicker">The wider practice</p>
          <h3 className="font-display text-3xl md:text-4xl">Other work</h3>
        </div>
        <p>Company sites, product prototypes and independent experiments. Each starts with something a visitor needs to do.</p>
      </div>

      <div className="product-archive">
        {productWork.map((item) => (
          <article key={item.name} className="product-archive-item">
            <figure>
              <a href={item.href} target={item.href.startsWith("https:") ? "_blank" : undefined}
                rel="noopener noreferrer" aria-label={`${item.action}: ${item.name}`}>
                <img src={item.image} alt={item.alt} width="1100" height="720" loading="lazy"
                  className={item.contain ? "archive-image archive-image-contain" : "archive-image"} />
              </a>
              <figcaption>{item.caption}</figcaption>
            </figure>
            <p className="archive-kicker">{item.type}</p>
            <h4 className="font-display text-2xl">{item.name}</h4>
            <p className="archive-description">{item.description}</p>
            <ProjectLink href={item.href} label={`${item.action}: ${item.name}`}>{item.action}</ProjectLink>
          </article>
        ))}
      </div>

      <div className="archive-heading website-archive-heading">
        <div>
          <p className="archive-kicker">Ten different briefs</p>
          <h4 className="font-display text-2xl md:text-3xl">Independent website concepts</h4>
        </div>
        <p>Self-initiated demonstrations across furniture, food, beauty, art and wholesale. These are concepts, not commissioned client work or business endorsements.</p>
      </div>

      <div className="archive-filter" role="group" aria-label="Filter website concepts">
        {categories.map((item) => (
          <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className="archive-count" role="status">{visible.length} {visible.length === 1 ? "website" : "websites"}{category === "All websites" ? " in the archive" : ` in ${category.toLowerCase()}`}</p>

      <div className="website-archive">
        {visible.map((item) => (
          <article key={item.href} className="website-archive-item">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="archive-preview-link" aria-label={`Explore ${item.name} website concept`}>
              <img src={item.image} alt={item.imageAlt} loading="lazy" width="1100" height="720" className="archive-image" />
              <span className="archive-preview-action" aria-hidden="true">Open website <ArrowUpRight size={18} /></span>
            </a>
            <div className="archive-item-heading">
              <h5 className="font-display text-2xl">{item.name}</h5>
              <span>{item.category}</span>
            </div>
            <p className="archive-description">{item.description}</p>
            <div className="archive-actions">
              <ProjectLink href={item.href} label={`Explore ${item.name} website concept`}>Explore website</ProjectLink>
              <ProjectLink href={item.source} label={`View ${item.name} source on GitHub`} source>Source</ProjectLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
