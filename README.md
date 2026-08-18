# EDOY — Astro

The EDOY landing page, built with [Astro](https://astro.build). Same layout, same
CSS and the same content as the original static build — the difference is that the
markup is now rendered at build time from `src/data/site.js` instead of being
written into the DOM by a script on load.

## Commands

| Command           | Does                                     |
| ----------------- | ---------------------------------------- |
| `npm install`     | install dependencies                     |
| `npm run dev`     | dev server at `http://localhost:4321`    |
| `npm run build`   | production build into `dist/`            |
| `npm run preview` | serve the built `dist/` locally          |

## Structure

```
public/images/            all image assets, served from /images/...
src/
  data/site.js            every string and image path on the page (+ COPIES)
  styles/global.css       the stylesheet, unchanged
  layouts/Layout.astro    <html>, <head>, fonts, global CSS
  components/             Header, Hero, Statement, Slider, Category, Fabric,
                          Collection, Testimonials, Outro, Footer
  scripts/site.js         client behaviour: looping sliders, mobile nav,
                          sticky header
  pages/index.astro       composes the page
```

## Editing content

`src/data/site.js` is the single source of truth, exactly as `data.js` was.
Change a heading, a piece of copy, a nav item or an image path there and the
page follows.

Adding a collection row is just another entry in `collections` — `index.astro`
maps over them, so no markup change is needed.

## How the sliders work

Each looping row repeats its slide set `COPIES` times at build time
(`src/data/site.js`) and parks on the middle copy. `src/scripts/site.js` picks up
any element with `data-slider` (using `data-count` for the real slide count),
wires grab-to-move plus the seam-hopping scroll handler, and binds the arrow
buttons through `data-nudge` / `data-target` / `data-dir`.

## Notes

`public/images/` holds every asset, referenced as `/images/...` from
`src/data/site.js`. The stylesheet is plain CSS using native nesting, loaded
globally by `Layout.astro` — no preprocessor step.
