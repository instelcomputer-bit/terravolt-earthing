export type Category =
  | "All products"
  | "Rods & electrodes"
  | "Strips & conductors"
  | "Clamps & accessories";
export type Product = {
  id: string;
  name: string;
  category: Category;
  description: string;
  detail: string;
  material: string;
};
export const categories: Category[] = [
  "All products",
  "Rods & electrodes",
  "Strips & conductors",
  "Clamps & accessories",
];
export const products: Product[] = [
  {
    id: "copper-rods",
    name: "Copper Bonded Rods",
    category: "Rods & electrodes",
    description: "Copper conductivity. A strong steel core.",
    detail:
      "A copper-bonded steel electrode for electrical grounding systems. Share your soil conditions, required length and project specification so the appropriate rod can be selected.",
    material: "Copper-bonded steel",
  },
  {
    id: "gi-electrodes",
    name: "GI Electrodes",
    category: "Rods & electrodes",
    description: "A robust foundation for your earthing system.",
    detail:
      "Galvanized iron electrodes for project-specific earthing installations. Electrode dimensions and coating requirements should be selected to suit the site and design.",
    material: "Galvanized iron",
  },
  {
    id: "spike-rods",
    name: "Spike Rods",
    category: "Rods & electrodes",
    description: "Pointed profiles for driven installations.",
    detail:
      "Pointed grounding rods for suitable soil conditions. Confirm the required material, diameter, installation depth and coupling arrangement with your project designer.",
    material: "Material options on enquiry",
  },
  {
    id: "rod-clamp",
    name: "Copper Bonded Rod with Clamp",
    category: "Rods & electrodes",
    description: "A dependable electrode-to-conductor connection.",
    detail:
      "A copper-bonded electrode paired with a compatible mechanical clamp. Share conductor dimensions and installation conditions to confirm the right combination.",
    material: "Copper-bonded steel & brass",
  },
  {
    id: "copper-strip",
    name: "Copper Strip",
    category: "Strips & conductors",
    description: "High-conductivity pathways for grounding.",
    detail:
      "Flat copper conductors for bonding and earthing networks. Width, thickness and jointing requirements are selected against the electrical design.",
    material: "Copper",
  },
  {
    id: "gi-strip",
    name: "GI Strip",
    category: "Strips & conductors",
    description: "Durable conductors for industrial networks.",
    detail:
      "Galvanized iron strip for earthing grids and bonding applications. Confirm the specified cross-section, coating and compatibility with adjacent materials.",
    material: "Galvanized iron",
  },
  {
    id: "earthing-clamps",
    name: "Earthing Clamps",
    category: "Clamps & accessories",
    description: "Secure connections. Consistent contact.",
    detail:
      "Mechanical clamps for connecting grounding conductors and electrodes. Selection depends on rod diameter, conductor size and material compatibility.",
    material: "Brass / copper alloy options",
  },
  {
    id: "chemicals",
    name: "Earthing Chemicals",
    category: "Clamps & accessories",
    description: "Ground enhancement for suitable soil conditions.",
    detail:
      "Ground enhancement compounds for use where the system design calls for them. Request the material data sheet and confirm environmental suitability before installation.",
    material: "Ground enhancement compound",
  },
  {
    id: "pit-chamber",
    name: "Earth Pit Chamber",
    category: "Clamps & accessories",
    description: "Practical access for inspection and testing.",
    detail:
      "Inspection chambers help protect and provide access to earth termination points. Confirm opening dimensions and the required load rating for your installation.",
    material: "Polymer options",
  },
  {
    id: "gi-clamps",
    name: "GI Clamps",
    category: "Clamps & accessories",
    description: "Strong fixings for compatible GI conductors.",
    detail:
      "Galvanized clamps for mechanically securing compatible earthing conductors. Provide conductor dimensions and the mounting arrangement when enquiring.",
    material: "Galvanized steel",
  },
  {
    id: "connectors",
    name: "Connectors & Lugs",
    category: "Clamps & accessories",
    description: "Clean terminations that complete the circuit.",
    detail:
      "Cable lugs and connectors for bonding and grounding connections. Match the cable cross-section, stud size and termination method to your project specification.",
    material: "Copper / tinned copper options",
  },
  {
    id: "accessories",
    name: "Earthing Accessories",
    category: "Clamps & accessories",
    description: "The details that bring your system together.",
    detail:
      "Couplers, fasteners and flexible bonding accessories for complete grounding assemblies. Send your bill of materials to discuss compatible components.",
    material: "Project-specific materials",
  },
];
