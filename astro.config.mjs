import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://chcoomilk.github.io",
  base: "/mayor-aqua",
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: +process.env.PORT || 3000,
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
