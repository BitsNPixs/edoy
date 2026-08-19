/* =========================================================
   EDOY - client behaviour
   The markup is rendered at build time, so nothing here builds
   HTML: it only wires up the looping sliders, the mobile
   side-bar and the sticky header.
   ========================================================= */

const smooth = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

/* ---- looping slider: repeat + grab-to-move, shared by every row ----
   `count` is the number of real slides; the track holds several copies
   of that set (see COPIES in src/data/site.js). */
function makeLoopSlider(vp, track, count) {
    let step = 0, setW = 0;

    const measure = () => {
        const kids = track.children;
        if (kids.length <= count) return;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        step = kids[0].getBoundingClientRect().width + gap;
        /* measured, not step * count - tiles in a row can differ in width
           (the lifestyle shot is wider than the product tiles) */
        setW = kids[count].offsetLeft - kids[0].offsetLeft;
        vp.scrollLeft = setW * 2;           /* park on the middle copy */
    };

    requestAnimationFrame(measure);

    /* width only: mobile Chrome fires resize when the URL bar slides away,
       and re-measuring there would park every row back on the middle copy
       mid-scroll. Nothing horizontal changes when only the height does. */
    let resizeId, lastW = innerWidth;
    addEventListener('resize', () => {
        if (innerWidth === lastW) return;
        lastW = innerWidth;
        clearTimeout(resizeId);
        resizeId = setTimeout(measure, 150);
    });

    /* endless loop: hop a whole set once we drift off the middle copy.
       The band is 2 sets wide, so a single step never lands on the seam
       and cuts a smooth scroll short. */
    const normalize = () => {
        if (!setW) return;
        if (vp.scrollLeft < setW) vp.scrollLeft += setW;
        else if (vp.scrollLeft > setW * 3) vp.scrollLeft -= setW;
    };

    vp.addEventListener('scroll', normalize);

    /* grab to move - mouse only, touch already has native momentum scrolling */
    let dragging = false, startX = 0, startLeft = 0, moved = 0;

    vp.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse') return;
        dragging = true;
        moved = 0;
        startX = e.clientX;
        startLeft = vp.scrollLeft;
        vp.setPointerCapture(e.pointerId);
        vp.classList.add('is-dragging');
    });

    vp.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        moved = Math.max(moved, Math.abs(dx));
        vp.scrollLeft = startLeft - dx;
    });

    const endDrag = (e) => {
        if (!dragging) return;
        dragging = false;
        vp.classList.remove('is-dragging');
        if (e.pointerId != null && vp.hasPointerCapture(e.pointerId)) {
            vp.releasePointerCapture(e.pointerId);
        }
    };

    vp.addEventListener('pointerup', endDrag);
    vp.addEventListener('pointercancel', endDrag);

    /* a drag that ends on a link must not count as a click */
    vp.addEventListener('click', (e) => {
        if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    /* re-centre first, so repeated presses can't drift onto the seam */
    return (dir) => {
        normalize();
        vp.scrollBy({ left: dir * step, behavior: smooth });
    };
}

/* ---- wire every [data-slider] viewport, then its arrow buttons ---- */
const nudges = new Map();

document.querySelectorAll('[data-slider]').forEach((vp) => {
    const track = vp.firstElementChild;
    const count = Number(vp.dataset.count);
    if (!track || !count) return;
    nudges.set(vp.id, makeLoopSlider(vp, track, count));
});

document.querySelectorAll('[data-nudge]').forEach((btn) => {
    btn.addEventListener('click', () => {
        const nudge = nudges.get(btn.dataset.target);
        if (nudge) nudge(Number(btn.dataset.dir));
    });
});

/* ---- mobile side-bar ---- */
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
const backdrop = document.getElementById('navBackdrop');
const siteHeader = document.getElementById('siteHeader');

const setNav = (open) => {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    /* the burger must stay reachable while the menu is open */
    if (open) siteHeader.classList.remove('is-hidden');
};

toggle.addEventListener('click', () => {
    setNav(!document.body.classList.contains('nav-open'));
});

backdrop.addEventListener('click', () => setNav(false));

nav.addEventListener('click', (e) => {
    if (e.target.closest('.site-nav__link')) setNav(false);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNav(false);
});

/* ---- sticky header: background once scrolled,
        hides on the way down, returns on the way up ---- */
const STUCK_AT = 10;    /* px before the background fades in */
const JITTER = 6;       /* ignore trackpad noise */

/* cached so the scroll handler never forces a layout */
let headerH = siteHeader.offsetHeight;
let lastY = window.scrollY;

const onScroll = () => {
    const y = Math.max(0, window.scrollY);

    siteHeader.classList.toggle('is-stuck', y > STUCK_AT);

    const dy = y - lastY;

    if (Math.abs(dy) > JITTER) {
        /* never hide it out from under an open menu */
        const hide = dy > 0 && y > headerH &&
            !document.body.classList.contains('nav-open');
        siteHeader.classList.toggle('is-hidden', hide);
        lastY = y;
    }
};

/* deliberately no requestAnimationFrame here: the work is two class
   toggles, and a dropped frame callback would latch the guard flag
   and kill the header for the rest of the session */
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { headerH = siteHeader.offsetHeight; });

onScroll();
