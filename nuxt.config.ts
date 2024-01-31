// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {},
  modules: ["@vueuse/nuxt"],

  css: ["~/assets/main.css"],
  runtimeConfig: {
    public: {
      wallet_cloud: process.env.WALLET_CLOUD,
    },
  },
});
