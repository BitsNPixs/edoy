/* =========================================================
   EDOY — Site content
   All text / image paths used by the Astro components live here.
   ========================================================= */

const content = {

  /* ---------------- SITE ---------------- */
  site: {
    lang: "en",                         /* <html lang> */
    title: "EDOY — Every Day On You",   /* browser tab */
    menuLabel: "Toggle menu",           /* hamburger, for screen readers */
    favicon: "/favicon.png"             /* browser tab icon, 192x192 */
  },

  /* ---------------- UI ICONS ---------------- */
  /* drawn rather than an image file, so the shape lives here too */
  icons: {
    heart: {
      viewBox: "0 0 24 24",
      path: "M12 20.2 4.6 13a4.6 4.6 0 1 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 1 1 19.4 13z"
    }
  },

  /* ---------------- HEADER ---------------- */
  header: {
    brand: {
      src: "/images/header-logo.png",
      alt: "EDOY",
      href: "#home"
    },
    monogram: {
      src: "/images/hero-center-logo.png",
      alt: "EDOY monogram",
      href: "#home"
    },
    nav: [
      { label: "MEN",        href: "#men" },
      { label: "WOMEN",      href: "#women" },
      { label: "ABOUT",      href: "#about" },
      { label: "CONTACT US", href: "#contact" }
    ]
  },

  /* ---------------- HERO / BANNER ---------------- */
  hero: {
    background: "/images/hero-background.png",
    title: "EVERY DAY ON YOU",
    tagline: "Nothing to prove. Everything to show.",
    description: "Formal cotton shirts, stripped of noise. Made for men and women who let quality speak.",
    buttons: [
      { label: "Discover Collections", href: "#collections", variant: "primary" },
      { label: "Know More",            href: "#about",       variant: "ghost"   }
    ],
    scroll: {
      src: "/images/down-arrow.png",
      alt: "Scroll down",
      href: "#next"
    }
  },

  /* ---------------- STATEMENT ---------------- */
  /* rendered in caps by CSS - keep the copy in normal sentence case here */
  statement: {
    lead: "We make one thing, and we make it exactly right — the plain formal shirt. No prints. No distractions. Just 100% cotton, cut with precision, finished by hand, and built to outlast trend cycles.",
    emphasis: "In a world of louder and faster, EDOY chose quieter and finer.",
    label: {
      lead: "HOT",
      script: "Sale"
    },
    controls: {
      prev: { src: "/images/left-arrow.png",  label: "Previous" },
      next: { src: "/images/right-arrow.png", label: "Next" }
    }
  },

  /* ---------------- CRAFT STATEMENT ---------------- */
  /* same component as `statement`, minus the label / arrows row.
     Rendered in caps by CSS - keep the copy in sentence case here. */
  craft: {
    lead: "A plain shirt has nowhere to hide. Every seam, every stitch, every drape has to be perfect — because there's no pattern to distract from a flaw.",
    emphasis: "That's exactly why we make only plain shirts. It's the purest test of craftsmanship, and we don't fail it."
  },

  /* ---------------- SLIDER ---------------- */
  /* the track loops, so the list below is the one true set of slides.
     `title` / `cta` are optional - add them to any slide that needs a caption. */
  slider: {
    slides: [
      {
        src: "/images/slider-image-1.png",
        alt: "Black cotton formal shirt, Black Panther Edition",
        title: "Black Panther Edition",
        cta: { label: "Shop Now", href: "#collections" }
      },
      {
        src: "/images/slider-image-2.png",
        alt: "Close-up of the black formal shirt placket and monogram"
      },
      {
        src: "/images/slider-image-3.png",
        alt: "Model seated in the black formal shirt"
      },
      {
        src: "/images/slider-image-4.png",
        alt: "Black formal shirt on a studio backdrop"
      }
    ]
  },

  /* ---------------- COLLECTION SLIDERS ---------------- */
  /* One entry = one looping row. The product PNGs are transparent cut-outs,
     so each product slide carries its own tile colour in `bg`; the caption
     flips between dark and light automatically from that colour's brightness.
     A slide with `feature: true` is the wider lifestyle shot (no caption). */
  collections: [
    {
      id: "men",
      heading: { lead: "Men's", script: "Collection" },
      link: { label: "View Collections", href: "#men" },
      wishlistLabel: "Add to wishlist",
      slides: [
        { src: "/images/product-images/men-1.png", alt: "Man wearing the Edoy forest green shirt", feature: true },
        { src: "/images/product-images/men-2.png", alt: "Edoy Men's Classical Edition shirt", title: "Edoy Men's Classical Edition", bg: "#cde2e9" },
        { src: "/images/product-images/men-3.png", alt: "Edoy Men's Forest Edition shirt",    title: "Edoy Men's Forest Edition",    bg: "#8c5428" },
        { src: "/images/product-images/men-4.png", alt: "Edoy Men's Warm Edition shirt",      title: "Edoy Men's Warm Edition",      bg: "#d3e3d2" },
        { src: "/images/product-images/men-5.png", alt: "Edoy Men's Signature Edition shirt", title: "Edoy Men's Signature Edition", bg: "#cde2e9" }
      ]
    },
    {
      id: "women",
      heading: { lead: "Women's", script: "Collection" },
      link: { label: "View Collections", href: "#women" },
      wishlistLabel: "Add to wishlist",
      slides: [
        { src: "/images/product-images/women-1.png", alt: "Woman wearing the Edoy black shirt", feature: true },
        { src: "/images/product-images/women-2.png", alt: "Edoy Women's Cool Edition shirt",      title: "Edoy Women's Cool Edition",      bg: "#887593" },
        { src: "/images/product-images/women-3.png", alt: "Edoy Women's Elite Edition shirt",     title: "Edoy Women's Elite Edition",     bg: "#759393" },
        { src: "/images/product-images/women-4.png", alt: "Edoy Women's Pro Edition shirt",       title: "Edoy Women's Pro Edition",       bg: "#909375" },
        { src: "/images/product-images/women-5.png", alt: "Edoy Women's Signature Edition shirt", title: "Edoy Women's Signature Edition", bg: "#887593" }
      ]
    }
  ],

  /* ---------------- FOOTER ---------------- */
  /* headings and links are set in caps by CSS */
  footer: {
    logo: { src: "/images/footer-logo.png", alt: "EDOY", href: "#home" },
    wordmark: { src: "/images/every-day-on-you.png", alt: "Every day on you" },
    columns: [
      {
        title: "Home",
        links: [
          { label: "Men",        href: "#men" },
          { label: "Women",      href: "#women" },
          { label: "About Us",   href: "#about" },
          { label: "Contact Us", href: "#contact" }
        ]
      },
      {
        title: "Shop",
        links: [
          { label: "Edoy Men's",   href: "#men" },
          { label: "Edoy Women's", href: "#women" }
        ]
      },
      {
        title: "Connect",
        links: [
          { label: "Instagram", href: "https://www.instagram.com/edoylife/" },
          { label: "Facebook",  href: "https://www.facebook.com/EdoyLife/" },
          { label: "Youtube",   href: "https://www.youtube.com/@EdoyLife" },
          { label: "Pintrest",  href: "https://www.pinterest.com/edoylife/" },
          { label: "X",  href: "https://x.com/EdoyLife" },
        ]
      },
      {
        title: "Contact",
        links: [
          { label: "+91 98765 43210", href: "tel:+919876543210" },   
        ]
      }
    ]
  },

  /* ---------------- CLOSING BAND ---------------- */
  /* title + copy are set in caps by CSS - keep sentence case here */
  outro: {
    mark: "/images/white-logo.png",
    title: "Dress beyond ordinary.",
    text: "Discover premium shirts crafted for effortless style, comfort, and confidence.",
    cta: { label: "Shop Collections", href: "#collections" }
  },

  /* ---------------- TESTIMONIALS ---------------- */
  /* the row loops, so this list is the one true set.
     Quote marks are added by CSS - keep the copy clean here. */
  testimonials: {
    heading: { lead: "From The", script: "Heart" },
    quoteMarks: { open: "“", close: "”" },
    controls: {
      prev: { src: "/images/left-arrow.png",  label: "Previous testimonial" },
      next: { src: "/images/right-arrow.png", label: "Next testimonial" }
    },
    items: [
      {
        quote: "The fit is the first thing people ask about. The fabric is the reason I keep coming back.",
        name: "Kevin Kart",
        role: "CEO"
      },
      {
        quote: "I own exactly three white shirts now, and all of them are EDOY. Nothing else feels this considered.",
        name: "Priya Raman",
        role: "Partner"
      },
      {
        quote: "Two years of weekly washes and the collar still sits like the day it arrived. That's rare.",
        name: "Daniel Mathew",
        role: "Architect"
      },
      {
        quote: "No logo, no print, and still the most complimented shirt in my wardrobe. That says everything.",
        name: "Ananya Iyer",
        role: "Brand Consultant"
      },
      {
        quote: "Finally a formal shirt that doesn't need ironing twice a day. It holds its shape from a 9 a.m. meeting to dinner.",
        name: "Rahul Menon",
        role: "Investment Banker"
      },
      {
        quote: "I used to buy shirts in bulk and replace them every season. Now I buy EDOY and stop thinking about it.",
        name: "Sarah Thomas",
        role: "Founder"
      },
    ]
  },

  /* ---------------- FABRIC / FEATURES ---------------- */
  fabric: {
    image: {
      src: "/images/fabric-image.png",
      alt: "Close-up of Edoy pink cotton shirting fabric"
    },
    features: [
      {
        title: "Pure Cotton",
        text: "Breathable, long-staple cotton sourced for softness that lasts wash after wash."
      },
      {
        title: "Precision Tailoring",
        text: "Structured fits for men and women, engineered for the boardroom and beyond."
      },
      {
        title: "Considered Detail",
        text: "Mother-of-pearl buttons, French seams, and a silhouette built to move with you."
      }
    ]
  },

  /* ---------------- SHOP BY CATEGORY ---------------- */
  category: {
    heading: {
      lead: "Shop By",        /* set in caps by CSS */
      script: "Category"
    },
    mark: "/images/hero-center-logo.png",   /* monogram in each card corner */
    items: [
      {
        brand: "Edoy",
        title: "Women",
        cta: "Explore Collections",
        href: "#women",
        src: "/images/women-collection.png",
        alt: "Woman seated in an Edoy stone formal shirt"
      },
      {
        brand: "Edoy",
        title: "Men",
        cta: "Explore Collections",
        href: "#men",
        src: "/images/men-collection.png",
        alt: "Man seated in an Edoy navy formal shirt"
      }
    ]
  }
};

/* ---------------- SLIDER LOOP ---------------- */
/* how many times a looping track repeats its slides at build time.
   The middle copy is the one on screen; the band either side is what
   makes the loop seamless. Keep it odd and >= 3. */
export const COPIES = 5;

/* ---------------- BASE PATH ---------------- */
/* The paths above that point at files in public/ are root-absolute, so they
   need the deploy base path in front of them. Astro sets BASE_URL from
   `base` in astro.config.mjs: it is "/" in dev and on the custom domain,
   which leaves them untouched, and "/edoy/" if the site ever moves back to
   the GitHub Pages project URL. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

const isPublicAsset = (s) => s.startsWith("/images/") || s.startsWith("/favicon.");

const withBase = (v) =>
  typeof v === "string"   ? (isPublicAsset(v) ? BASE + v : v)
  : Array.isArray(v)      ? v.map(withBase)
  : v && typeof v === "object"
    ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, withBase(x)]))
    : v;

export const siteData = withBase(content);
