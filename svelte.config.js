import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      out: 'build', // update the output directory
    }),
    files: {
      assets: 'build' // update the assets path
    },
    target: '#svelte',
  }
};

export default config;