import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://tusitio.com",
  integrations: [tailwind(), icon(), sitemap(), react()],
  output: "server",
  adapter: vercel(),
});
