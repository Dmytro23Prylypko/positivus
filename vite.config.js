import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    injectHTML({
      tagName: "load",
      sourceAttr: "src",
    }),
    tailwindcss(),
  ],
});
