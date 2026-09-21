import { defineConfig } from "astro/config";
//import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config.ts";

export default defineConfig({
  output: "static",
  site: SITE.url,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap()
      //filter: (page) =>
        //!page.includes("/404") && !page.includes("/search-index.json"),
    //}),a
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