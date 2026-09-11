import { useState } from "react";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  );
}
export function Hero() {
  return (
    <section id="home" className="hero">
      <picture className="hero-image">
        <source media="(max-width: 640px)" srcSet="/images/hero-mobile.webp" />
        <img
          src="/images/hero.webp"
          alt="Copper earthing rods, a grounding clamp and copper strip at an electrical substation"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
      </picture>
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            ENGINEERED TO PROTECT
          </p>
          <h1>
            Advanced Earthing
            <br className="desktop-break" /> Solutions for
            <br className="desktop-break" /> <em>Safer Electrical</em>
            <br className="desktop-break" /> Systems
            <span className="gold">.</span>
          </h1>
          <p className="hero-description">
            Reliable earthing products and solutions designed to protect people,
            equipment and electrical infrastructure.
          </p>
          <div className="button-row">
            <a className="button button-gold" href="#products">
              Explore Products <Icon name="arrow" size={19} />
            </a>
            <a className="button button-outline" href="#contact">
              Get a Quote <Icon name="arrowUp" size={18} />
            </a>
          </div>
          <div className="hero-assurance">
            <Icon name="shield" size={18} />
            <span>Built for safety.</span>
            <i />
            <span>Designed to last.</span>
          </div>
        </div>
      </div>
      <div className="hero-caption">
        <span className="status-dot" />
        <span>
          A SOLID CONNECTION.
          <br />
          <strong>A SAFER WORLD.</strong>
        </span>
        <Icon name="ground" size={28} />
      </div>
      <div className="hero-coordinate" aria-hidden="true">
        01 / THE FOUNDATION OF PROTECTION
      </div>
    </section>
  );
}
export function FeatureCards() {
  const features: [IconName, string, string][] = [
    ["shield", "Safe", "Protection at the core."],
    ["bolt", "Strong", "Built for demanding environments."],
    ["layers", "Durable", "Materials that go the distance."],
    ["target", "Reliable", "Confidence in every connection."],
  ];
  return (
    <section className="features container" aria-label="Our product principles">
      {features.map(([icon, name, text], i) => (
        <article className="feature" key={name}>
          <span className="feature-icon">
            <Icon name={icon} size={28} />
          </span>
          <div>
            <h2>{name}</h2>
            <p>{text}</p>
          </div>
          <span className="feature-number">0{i + 1}</span>
        </article>
      ))}
    </section>
  );
}
export function WhyEarthing() {
  const benefits: [IconName, string, string][] = [
    [
      "shield",
      "Fault & lightning protection",
      "A considered path to earth for fault and lightning currents.",
    ],
    [
      "ground",
      "Reduced earth resistance",
      "A grounding approach matched to your site and soil conditions.",
    ],
    [
      "bolt",
      "Equipment protection",
      "Bonding and earthing that support sensitive electrical systems.",
    ],
    [
      "target",
      "System reliability",
      "A dependable foundation for safe, consistent operation.",
    ],
    [
      "layers",
      "Long service life",
      "Compatible materials selected for the installation environment.",
    ],
    [
      "check",
      "Simpler maintenance",
      "Accessible connections for periodic inspection and testing.",
    ],
  ];
  return (
    <section id="about" className="section why-section">
      <div className="container why-layout">
        <div>
          <SectionHeading
            eyebrow="THE IMPORTANCE OF EARTHING"
            title="Safety starts beneath the surface."
            text="Every reliable electrical system needs a strong foundation. The right earthing solution helps protect what matters most — from the ground up."
          />
          <a href="#solutions" className="text-link">
            Discover our solutions <Icon name="arrow" size={18} />
          </a>
          <div className="why-note">
            <Icon name="ground" size={44} />
            <p>
              Good grounding.
              <br />
              <strong>Greater peace of mind.</strong>
            </p>
          </div>
        </div>
        <div className="benefit-grid">
          {benefits.map(([icon, title, text]) => (
            <article key={title} className="benefit">
              <Icon name={icon} size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const industries: [IconName, string, string][] = [
  ["factory", "Industrial Units", "Production. Protected."],
  ["bolt", "Power Plants", "Confidence at every connection."],
  [
    "building",
    "Buildings & Commercial Projects",
    "Built into a safer foundation.",
  ],
  ["sun", "Solar & Wind Energy", "Grounding a cleaner future."],
  ["tower", "Telecom Towers", "Keeping connections resilient."],
  ["home", "Homes & Offices", "Everyday spaces. Essential safety."],
];
export function Applications() {
  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            eyebrow="WHERE WE MAKE A DIFFERENCE"
            title="Different industries. One commitment."
          />
          <p className="section-aside">
            From everyday spaces to critical infrastructure, protection belongs
            everywhere.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map(([icon, name, text], i) => (
            <a href="#contact" className="industry-card" key={name}>
              <span className="industry-top">
                <Icon name={icon} size={32} />
                <span>0{i + 1}</span>
              </span>
              <h3>{name}</h3>
              <p>{text}</p>
              <Icon name="arrowUp" className="industry-arrow" size={19} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
const solutions = [
  [
    "Electrical Earthing",
    "A dependable path to earth.",
    "Electrodes, conductors and connections selected as a complete system for your electrical installation. Start with the site conditions and project design to define the right combination.",
    "Electrodes · Earth grids · Bonding",
  ],
  [
    "Lightning Protection",
    "Protection from the top down.",
    "Coordinate air termination, down conductors and earth termination with the project’s lightning protection design. Discuss compatible components for a connected protection system.",
    "Air termination · Down conductors · Earth termination",
  ],
  [
    "Equipment Grounding",
    "Protect the systems you depend on.",
    "Create consistent bonding connections for machinery, panels and equipment. Share your equipment layout and conductor requirements to identify suitable accessories.",
    "Equipment bonding · Panels · Connections",
  ],
  [
    "Industrial Earthing",
    "Grounding for demanding environments.",
    "A coordinated range of electrodes, strips and connectors for industrial grounding networks, selected to suit site exposure and the electrical design.",
    "Industrial networks · Earth grids · Conductors",
  ],
  [
    "Solar Earthing",
    "A grounded approach to clean energy.",
    "Grounding and bonding components for solar structures, inverter installations and associated electrical infrastructure, matched to the project specification.",
    "Solar structures · Inverters · Bonding",
  ],
  [
    "Telecom Earthing",
    "Keep critical connections grounded.",
    "Earthing components for telecom sites, towers and equipment installations. Plan connections around the site layout, environment and protection requirements.",
    "Towers · Equipment · Site earthing",
  ],
  [
    "Residential & Commercial Earthing",
    "Safer spaces, from the ground up.",
    "Earthing electrodes, conductors and accessible inspection points for homes, offices and commercial buildings, coordinated with the building’s electrical design.",
    "Buildings · Distribution · Inspection access",
  ],
];
export function Solutions() {
  const [active, setActive] = useState(0);
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container solutions-layout">
        <div>
          <SectionHeading
            eyebrow="COMPLETE PROTECTION"
            title="Connected solutions. Lasting confidence."
            text="The right components. A coordinated approach. Explore grounding solutions for your application."
          />
          <div className="solution-visual">
            <img
              src="/images/hero-mobile.webp"
              alt="Copper grounding equipment with industrial electrical infrastructure"
              width="900"
              height="600"
              loading="lazy"
            />
            <span>
              <Icon name="ground" />
              FROM COMPONENT TO COMPLETE SYSTEM
            </span>
          </div>
        </div>
        <div className="solution-list">
          {solutions.map(([name, headline, description, tags], i) => (
            <article
              className={`solution ${active === i ? "active" : ""}`}
              key={name}
            >
              <h3>
                <button
                  id={`solution-button-${i}`}
                  aria-expanded={active === i}
                  aria-controls={`solution-panel-${i}`}
                  onClick={() => setActive(active === i ? -1 : i)}
                >
                  <span className="solution-number">0{i + 1}</span>
                  {name}
                  <Icon name={active === i ? "close" : "plus"} size={20} />
                </button>
              </h3>
              <div
                id={`solution-panel-${i}`}
                role="region"
                aria-labelledby={`solution-button-${i}`}
                hidden={active !== i}
                className="solution-body"
              >
                <h4>{headline}</h4>
                <p>{description}</p>
                <small>{tags}</small>
                <a href="#contact" className="text-link">
                  Discuss your project <Icon name="arrow" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function QualitySection() {
  return (
    <section className="quality-section">
      <div className="container quality-layout">
        <div className="quality-emblem">
          <Icon name="shield" size={76} />
          <span>QUALITY AT THE CORE</span>
        </div>
        <div>
          <p className="eyebrow">
            <span />
            NO COMPROMISE ON THE FOUNDATION
          </p>
          <h2>
            Small details.
            <br />
            <span className="muted">Long-term protection.</span>
          </h2>
          <p>
            Quality starts with the materials and continues through every
            connection. We focus on durable construction, material compatibility
            and the requirements of your project.
          </p>
        </div>
        <ul className="quality-list">
          {[
            "Quality materials",
            "Reliable performance",
            "Durable construction",
            "Project-specific professional standards",
            "Long-term protection",
          ].map((item) => (
            <li key={item}>
              <Icon name="check" size={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">
            <span />
            BUILD ON A SAFER FOUNDATION
          </p>
          <h2>
            Protect your people.
            <br />
            Protect your equipment.
            <br />
            <span className="gold">Protect your future.</span>
          </h2>
        </div>
        <div className="cta-action">
          <span className="cta-symbol" aria-hidden="true">
            <Icon name="ground" size={64} />
          </span>
          <p>
            Every project is different.
            <br />
            Let’s find the right grounding solution.
          </p>
          <a className="button button-gold" href="#contact">
            Talk to Our Experts <Icon name="arrowUp" size={19} />
          </a>
          <a className="text-link" href="#contact">
            Request a Quote <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
