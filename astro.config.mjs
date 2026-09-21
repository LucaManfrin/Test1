import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config.ts";

export default defineConfig({
  output: "static",
  site: SITE.url,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap(), // ✅ Sitemap semplice, senza filtro
  ],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "github-dark",
        light: "github-light",
      },
      wrap: true,
    },
    gfm: true,
  },
});