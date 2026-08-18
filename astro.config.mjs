// @ts-check
import { defineConfig } from 'astro/config';

/* Deployed to GitHub Pages as a project site, so the whole site lives
   under /edoy/ rather than at the domain root.

   To move to a custom domain later: set `site` to that domain and
   delete the `base` line. BASE_URL then becomes '/' and the image
   paths in src/data/site.js follow automatically. */
export default defineConfig({
  site: 'https://bitsnpixs.github.io',
  base: '/edoy',

  // static output - the site is content from src/data/site.js, no server needed
  output: 'static',
});
