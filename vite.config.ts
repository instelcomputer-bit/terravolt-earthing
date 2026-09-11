import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { SITE_URL } = loadEnv(mode, process.cwd(), "SITE_");
  const site = SITE_URL ? new URL(SITE_URL) : null;
  if (
    site &&
    (!["https:", "http:"].includes(site.protocol) ||
      site.username ||
      site.password ||
      site.pathname !== "/" ||
      site.search ||
      site.hash)
  ) {
    throw new Error(
      "SITE_URL must be a public http(s) origin, such as https://your-domain.com",
    );
  }
  return {
    plugins: [
      react(),
      {
        name: "production-site-metadata",
        transformIndexHtml() {
          if (!site) return [];
          return [
            {
              tag: "link",
              attrs: { rel: "canonical", href: site.href },
              injectTo: "head",
            },
            {
              tag: "meta",
              attrs: { property: "og:url", content: site.href },
              injectTo: "head",
            },
            {
              tag: "meta",
              attrs: {
                property: "og:image",
                content: new URL("/images/hero.webp", site).href,
              },
              injectTo: "head",
            },
            {
              tag: "meta",
              attrs: {
                property: "og:image:alt",
                content:
                  "Copper earthing equipment at an electrical substation",
              },
              injectTo: "head",
            },
          ];
        },
      },
    ],
  };
});
