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
  vite: {
    define: {
      "process.test": false,
      // This is required for shiki to work (used to render markdown code blocks)
      "process.env.VSCODE_TEXTMATE_DEBUG": false,
    },
    build: {
      target: ["esnext"],
    },

    server: {},
  },
  buildModules: ["@nuxt/typescript-build"],
  hooks: {
    "vite:extendConfig"(config, { isServer }) {
      console.log(
        isServer ? "server" : "client",
        "config target is",
        config.build!.target
      );
    },
  },
  nitro: {
    esbuild: {
      options: {
        // This is how you could modify nitro esbuild config
        // see https://esbuild.github.io/api/#target
        target: "es2020",
      },
    },
  },
});
