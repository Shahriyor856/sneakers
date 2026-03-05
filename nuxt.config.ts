import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: [{ path: "~/components", pathPrefix: false }],

  imports: {
    dirs: ["stores", "helpers", "services"],
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./assets/style/main.css"],
  modules: ["@element-plus/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
});
