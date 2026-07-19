# Project Tropics Roleplay Website

A dependency-free informational website built with semantic HTML5, modular CSS3, and vanilla JavaScript. It runs directly on standard static hosting; no build, backend, database, or account system is required.

## Preview locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Serving through HTTP is recommended instead of opening the files directly so the preview matches normal static hosting.

## Project structure

- The ten root-level `.html` files are small semantic page shells.
- `css/` separates global, navigation, card, footer, animation, and responsive styles.
- `js/config.js` is the single source of truth for branding, external URLs, applications, image paths, and department identity.
- `js/components.js` provides reusable UI components; `js/page-renderers.js` composes each page; the remaining scripts manage navigation, FAQs, animations, and startup.
- `assets/branding/`, `assets/backgrounds/`, and `assets/departments/` contain original, clearly labeled SVG placeholders. Reserved `assets/civilian/`, `assets/icons/`, and `assets/social/` folders are ready for future media.

## Replace images

1. Add optimized replacement files to the appropriate folder under `assets/` (WebP is recommended for photographic hero art; PNG or SVG works well for transparent logos).
2. Edit only the matching path in `SITE_CONFIG.assets` inside `js/config.js`.
3. Keep hero images near a 16:9 aspect ratio and department logos square to minimize layout shifts.
4. Add accurate alternative-text wording in the relevant reusable renderer if the final image communicates more than its department identity.

## Add community URLs

In `js/config.js`, fill in:

- `SITE_CONFIG.links.discord`, `cad`, `tiktok`, and `youtube`;
- `SITE_CONFIG.applications.sast`, `bcso`, `lspd`, `safr`, and `sadot`.

Use complete HTTPS URLs. Blank values intentionally render as disabled **Coming Soon** controls. Configured external links automatically open in a new tab with `rel="noopener noreferrer"`.

## Placeholder content remaining

- Main branding logo and favicon.
- Seven hero backgrounds and five department logos.
- Official mission statements for every department.
- All official server-rule text.
- All final FAQ answers.
- Discord, CAD, TikTok, YouTube, and five department application URLs.

The placeholder labels are deliberate and should remain visible until official content is supplied, preventing draft material from being mistaken for policy.
