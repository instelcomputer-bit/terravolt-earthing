export type Category =
  | "All products"
  | "Lightning protection"
  | "Rods & electrodes"
  | "Strips & conductors"
  | "Clamps & accessories";
export type Product = {
  id: string;
  name: string;
  category: Category;
  description: string;
  detail: string;
  image?: string;
  imageAlt?: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
  source?: string;
};
export const categories: Category[] = [
  "All products",
  "Rods & electrodes",
  "Strips & conductors",
  "Clamps & accessories",
  "Lightning protection",
];
export const products: Product[] = [
  {
    id: "copper-rods",
    name: "Copper Bonded Rods",
    category: "Rods & electrodes",
    description: "Grounding rods for your earthing installation.",
    detail:
      "Copper bonded rods for electrical grounding systems. Share your soil conditions, required length and project specification so the appropriate rod can be selected.",
  },
  {
    id: "gi-electrodes",
    name: "GI Electrode",
    category: "Rods & electrodes",
    description: "A robust foundation for your earthing system.",
    detail:
      "Galvanized iron electrodes for project-specific earthing installations. Electrode dimensions and coating requirements should be selected to suit the site and design.",
  },
  {
    id: "spike-rods",
    name: "Spike Rod",
    category: "Rods & electrodes",
    description: "Pointed profiles for driven installations.",
    detail:
      "Pointed grounding rods for suitable soil conditions. Confirm the required material, diameter, installation depth and coupling arrangement with your project designer.",
  },
  {
    id: "rod-clamp",
    name: "Copper Bonded Rod with Clamp",
    category: "Rods & electrodes",
    description: "A dependable electrode-to-conductor connection.",
    detail:
      "A copper-bonded electrode paired with a compatible mechanical clamp. Share conductor dimensions and installation conditions to confirm the right combination.",
  },
  {
    id: "copper-strip",
    name: "Copper Strip",
    category: "Strips & conductors",
    description: "High-conductivity pathways for grounding.",
    detail:
      "Flat copper conductors for bonding and earthing networks. Width, thickness and jointing requirements are selected against the electrical design.",
  },
  {
    id: "gi-strip",
    name: "GI Strip",
    category: "Strips & conductors",
    description: "Durable conductors for industrial networks.",
    detail:
      "Galvanized iron strip for earthing grids and bonding applications. Confirm the specified cross-section, coating and compatibility with adjacent materials.",
  },
  {
    id: "earthing-clamps",
    name: "Earthing Clamp",
    category: "Clamps & accessories",
    description: "Secure connections. Consistent contact.",
    detail:
      "Mechanical clamps for connecting grounding conductors and electrodes. Selection depends on rod diameter, conductor size and material compatibility.",
  },
  {
    id: "chemicals",
    name: "Chemical Earthing",
    category: "Clamps & accessories",
    description: "Ground enhancement for suitable soil conditions.",
    detail:
      "Ground enhancement compounds for use where the system design calls for them. Request the material data sheet and confirm environmental suitability before installation.",
  },
  {
    id: "pit-chamber",
    name: "Earth Pit Chamber",
    category: "Clamps & accessories",
    description: "Practical access for inspection and testing.",
    detail:
      "Inspection chambers help protect and provide access to earth termination points. Confirm opening dimensions and the required load rating for your installation.",
  },
  {
    id: "gi-clamps",
    name: "GI Clamp",
    category: "Clamps & accessories",
    description: "Strong fixings for compatible GI conductors.",
    detail:
      "Galvanized clamps for mechanically securing compatible earthing conductors. Provide conductor dimensions and the mounting arrangement when enquiring.",
  },
  {
    id: "connectors",
    name: "Connector & Lugs",
    category: "Clamps & accessories",
    description: "Clean terminations that complete the circuit.",
    detail:
      "Cable lugs and connectors for bonding and grounding connections. Match the cable cross-section, stud size and termination method to your project specification.",
  },
  {
    id: "accessories",
    name: "Earthing Accessories",
    category: "Clamps & accessories",
    description: "The details that bring your system together.",
    detail:
      "Couplers, fasteners and flexible bonding accessories for complete grounding assemblies. Send your bill of materials to discuss compatible components.",
  },
  {
    id: "thunderstroke-protect-60",
    name: "SS Remedies Thunderstroke Protect 60",
    category: "Lightning protection",
    image: "/images/thunderstroke-protect-60.webp",
    description: "Remedies stainless steel ESE lightning protection terminal.",
    detail:
      "The Remedies Thunder Stroke Protector-60 is an early streamer emission (ESE) air terminal for a designed lightning protection system. It connects to the installation’s down-conductor and earthing network.",
    specifications: [
      { label: "Brand", value: "Remedies" },
      { label: "Manufacturer model", value: "Thunder Stroke Protector-60" },
      { label: "Material", value: "304 stainless steel" },
      { label: "Mounting", value: "Pole mounted" },
      { label: "Type", value: "ESE active lightning terminal" },
    ],
    features: [
      "Stainless steel construction",
      "Testable device with an internal ion generator",
      "No external power source required",
    ],
    source: "https://www.remediesearthing.in/lightning-arrester.html",
  },
  {
    id: "lightning-arrester",
    name: "ESE Lightning Arrester Models — With Digital Meter",
    category: "Lightning protection",
    image: "/images/ese-lightning-arrester-models.webp",
    imageAlt: "ESE Lightning Arrester Models - Multiple Lightning Protection Products",
    description:
      "Five ESE lightning arrester models, available with digital meter.",
    detail:
      "ESE (Early Streamer Emission) lightning arrester models: THUNDER PROTECT 60, THUNDER PROTECT 50, THUNDER PROTECT REL-4, THUNDER PROTECT REL-1 and THUNDER PROTECT AMTRA. Available with digital meter. The image shows the five arrester models; the digital meter is not pictured. Specify your preferred model when ordering and confirm meter details, mounting requirements and final specifications at quotation.",
    specifications: [
      { label: "Product type", value: "ESE Lightning Arrester" },
      { label: "Models", value: "THUNDER PROTECT 60, THUNDER PROTECT 50, THUNDER PROTECT REL-4, THUNDER PROTECT REL-1, THUNDER PROTECT AMTRA" },
      { label: "Configuration", value: "With Digital Meter" },
    ],
    features: [
      "Five distinct lightning arrester models",
      "With Digital Meter",
      "Full model selection shown together for easy comparison",
    ],
  },
  {
    id: "copper-bonded-lightning-arrester",
    name: "Copper Bonded Lightning Arrester 14 mm, 11 KV",
    category: "Lightning protection",
    image: "/images/copper-bonded-lightning-arrester.webp",
    description: "Copper bonded lightning arrester, 14 mm, 11 KV.",
    detail:
      "Copper bonded lightning arrester supplied under the 14 mm, 11 KV product designation. Confirm the required mounting arrangement and installation compatibility when ordering.",
    specifications: [
      { label: "Material", value: "Copper bonded" },
      { label: "Diameter", value: "14 mm" },
      { label: "Voltage designation", value: "11 KV" },
    ],
    features: [
      "Copper bonded construction",
      "For lightning protection installations",
    ],
  },
  {
    id: "solid-copper-earth-rod",
    name: "Pure Copper Earth Rod",
    category: "Rods & electrodes",
    image: "/images/solid-copper-earth-rod.webp",
    description: "Pure copper rod for electrical earthing systems.",
    detail:
      "A pure copper earth rod for grounding installations. Required length, diameter and connection accessories are selected to suit your project.",
    specifications: [
      { label: "Material", value: "Pure copper" },
      { label: "Product type", value: "Earth rod" },
    ],
    features: [
      "Pure copper construction",
      "Grounding electrode for earthing systems",
    ],
  },
  {
    id: "poly-plastic-earthing-pit-cover",
    name: "Poly Plastic Earthing Pit Cover",
    category: "Clamps & accessories",
    image: "/images/poly-plastic-earthing-pit-cover.webp",
    description: "Plastic cover for access to earthing inspection points.",
    detail:
      "A poly plastic earthing pit cover for protecting an earth termination inspection point while retaining access for testing and maintenance. Confirm the opening size and required load capacity for your site.",
    specifications: [
      { label: "Material", value: "Poly plastic" },
      { label: "Application", value: "Earthing pit access" },
    ],
    features: [
      "Plastic construction",
      "Access for earthing inspection and maintenance",
    ],
  },
];
