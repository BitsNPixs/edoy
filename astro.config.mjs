// @ts-check
import { defineConfig } from 'astro/config';

/* Served from the root of the custom domain, so there is no base path.
   public/CNAME is what tells GitHub Pages which domain to answer on.

   To go back to the project-site URL: add `base: '/edoy'` and delete
   public/CNAME - the image paths in src/data/site.js follow BASE_URL
   either way. */
export default defineConfig({
  site: 'https://edoylife.com',

  // static output - the site is content from src/data/site.js, no server needed
  output: 'static',
});
