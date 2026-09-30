# ORGANIZED CRIMES — studio website

Static site, no build step.

```
index.html          shell (header, menu, footer mount, loader)
css/                base · atmosphere · layout · motion · typography · components · home · pages · gold (accent tokens) · headings (gold title effect) · responsive · accessibility
js/core/            config (nav, helpers) · components (render helpers) · router · ui
js/data/            games.js  ← add/edit games   ·   content.js ← text, founder, team, news, jobs, legal
js/pages/           one file per page (home, about, games, founder, team, news, careers, contact, legal)
js/effects/         logo-particles.js · background.js
tools/             logo_to_js.py · build_single_file.py
assets/images/      logo/ · founder/ · games/<id>/ · team/
assets/videos/      games/<id>/
```

## Open it
Extract the whole zip first, then open `index.html` (works from disk or any static host). Keep the folders together.

## Common edits
- **Logo:** replace `assets/images/logo/logo.png`, then run `python3 tools/logo_to_js.py` (refreshes the particle-logo data).
- **One-file preview:** `python3 tools/build_single_file.py` → `dist/organized-crimes.html`.
- **Founder photo:** replace `assets/images/founder/termorgan.jpg` (portrait/square works; edges are feathered in CSS `.pt`). `termorgan-original.jpg` is your untouched colour file.
- **Add a game:** add a `G('id','Title','Genre','Status','Description')` line in `js/data/games.js`, then drop `cover.jpg`, `shot-1..4.jpg` into `assets/images/games/<id>/` and `trailer.mp4` into `assets/videos/games/<id>/`.
- **Flipside media:** drop `fl1`, `fl2`, `fl3` (png/jpg/webp) and `flmov` (mp4 recommended) into `assets/` (or `assets/images|videos/…`); they're found automatically.
- **Don’t Look Back media:** same idea — `dl1`, `dl2`, `dl3` and `dlmov` in `assets/` are found automatically.
- **Team photos:** `tp1`, `tp2`, `tp3`, `tp4` (png/jpg/webp) in `assets/` (or `assets/images/team/`) — one per team card, in order
- **Text, email, jobs, news, legal:** `js/data/content.js`.
- **New page:** create `js/pages/x.js` with `R['x']=()=>...`, add it to `N` in `js/core/config.js`, add a `<script defer>` line in `index.html`.
- **Contact form:** currently opens the visitor's email app; connect a backend (Formspree, Netlify Forms, your API) in `js/core/ui.js`.
Deploy the folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
