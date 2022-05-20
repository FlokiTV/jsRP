import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    paths: {
      base: "/nui",
    },
    adapter: adapter({
      pages: "nui",
      assets: "nui",
      fallback: "index.html",
      precompress: false,
    }),
  },
};

export default config;
