import { products } from "./data";
import type { Product } from "./data";

export const whatsappOrderNumber = "918054916000";

export function productOrderUrl(product: Product) {
  const index = products.findIndex((item) => item.id === product.id);
  const image = new URL(
    product.image ?? `/images/${product.id}.webp`,
    window.location.href,
  ).href;
  const message = [
    "*PRODUCT ORDER ENQUIRY — EARTHING TRUSS™*",
    "Hello, I want to order this product:",
    "",
    `*Product:* ${product.name}`,
    ...(index >= 0
      ? [`*Catalogue code:* ET / ${String(index + 1).padStart(2, "0")}`]
      : []),
    `*Product ID:* ${product.id}`,
    `*Category:* ${product.category}`,
    "",
    "*Description*",
    product.description,
    product.detail,
    "",
    "*Specifications*",
    ...(product.specifications?.length
      ? product.specifications.map((spec) => `• ${spec.label}: ${spec.value}`)
      : ["Size, material and specifications to be confirmed at quotation."]),
    "",
    "*Main features*",
    ...(product.features?.length
      ? product.features
      : [product.description]
    ).map((feature) => `• ${feature}`),
    "",
    `*Product image:* ${image}`,
    ...(product.source
      ? [`*Manufacturer information:* ${product.source}`]
      : []),
    "",
    "*My requirements (please fill in):*",
    "Quantity:",
    "Required size / variant:",
    "Delivery city / PIN code:",
    "Please confirm price, availability and delivery time.",
  ].join("\n");
  return `https://wa.me/${whatsappOrderNumber}?text=${encodeURIComponent(message)}`;
}

export const contactDetails = [
  {
    icon: "phone",
    title: "Business Owner",
    value: "8054916000",
    href: "tel:8054916000",
  },
  {
    icon: "phone",
    title: "Deepak Sharma",
    value: "7986704748",
    href: "tel:7986704748",
  },
  {
    icon: "phone",
    title: "Manish Gupta",
    value: "9646138046",
    href: "tel:9646138046",
  },
  {
    icon: "phone",
    title: "Contact Us",
    value: "8054917000",
    href: "tel:8054917000",
  },
] as const;
