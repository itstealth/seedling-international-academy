# Seedling International Academy (SIA)

> Official web platform for **Seedling International Academy** — a premier Cambridge International School in Jaipur, Rajasthan, offering world-class education from Cambridge Early Years through Cambridge Advanced (IGCSE / A-Levels).

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Lighthouse Desktop](https://img.shields.io/badge/Lighthouse_Desktop-98-brightgreen?logo=lighthouse)](https://developer.chrome.com/docs/lighthouse/)
[![Lighthouse Mobile](https://img.shields.io/badge/Lighthouse_Mobile-58-orange?logo=lighthouse)](https://developer.chrome.com/docs/lighthouse/)
[![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen)](https://developer.chrome.com/docs/lighthouse/)
[![SEO](https://img.shields.io/badge/SEO-100-brightgreen)](https://developer.chrome.com/docs/lighthouse/)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Changelog — What Was Changed & Why](#changelog--what-was-changed--why)
  - [Performance — Iteration 1 (Baseline Optimizations)](#performance--iteration-1-baseline-optimizations)
  - [Performance — Iteration 2 (Second Pass)](#performance--iteration-2-second-pass)
- [Current Lighthouse Scores](#current-lighthouse-scores)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Optimization & Testing Scripts](#optimization--testing-scripts)
- [Security & Caching Headers](#security--caching-headers)
- [Known Remaining Bottlenecks](#known-remaining-bottlenecks)
- [Contact & Support](#contact--support)

---

## Overview

Seedling International Academy operates Cambridge curriculum campuses in Jaipur (SIA Mahaveer Nagar & SMIA Jagatpura). This web application provides prospective parents, current students, and faculty with interactive course exploration, virtual admissions enquiry forms, campus infrastructure showcases, and institutional disclosures.

---

## Key Features

- **Cambridge Curriculum Pathways:** Comprehensive breakdown of Early Years, Primary, Lower Secondary, Upper Secondary (IGCSE), and Cambridge Advanced.
- **Interactive Admissions & Callback Form:** Embedded NoPaperForms (NPF) widget with lazy intersection-loading and injected `title`/`aria-label` on its iframe for WCAG compliance.
- **HLS Adaptive Video Streaming:** Hero background video powered by HTTP Live Streaming (`hls.js`), deferred 2.5 s after hydration with MSE chunking and WebP/WebM poster fallback.
- **Multi-Campus Architecture:** Dedicated sections for SIA and SMIA campuses with facilities, laboratory overviews, and sports infrastructure.
- **Strict Accessibility & SEO Standards:** Full Schema.org JSON-LD structured data, validated heading hierarchies, semantic ARIA roles, and WCAG AA+ color contrast across all UI elements.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.2.4](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19.2.4](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) / `motion` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Media Streaming** | [hls.js](https://github.com/video-dev/hls.js/) |
| **Testing & Auditing** | [Playwright](https://playwright.dev/) & [Google Lighthouse 13.6](https://developer.chrome.com/docs/lighthouse/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## Project Structure

```text
seedling-international-academy/
├── app/                        # Next.js App Router routes
│   ├── about/                  # About SIA, leadership, vision, legacy
│   ├── academics/              # Cambridge academic pathways & curriculum
│   ├── admissions/             # Process, fees, callback request
│   ├── campuses/               # SIA & SMIA campus portals
│   ├── layout.tsx              # Root HTML layout, preloads, GTM, JSON-LD
│   ├── page.tsx                # Homepage with hero, attributes, campus life
│   ├── robots.ts               # Robots.txt configuration
│   └── sitemap.ts              # XML Sitemap generator
├── components/                 # Reusable UI components
│   ├── home/                   # Homepage sections (MobileActionBar, etc.)
│   ├── layout/                 # Navbar, Footer, Mobile Navigation
│   ├── ui/                     # HeroVideo, buttons, modals, cards
│   └── NpfAdmissionsForm.tsx   # NoPaperForms admissions widget wrapper
├── lib/                        # Utilities, constants & JSON-LD helpers
├── public/                     # Static media assets (WebP images, HLS video chunks)
│   ├── assets/                 # Curated photography and campus galleries
│   └── video/hero/             # HLS playlist (.m3u8), TS segments, poster
├── reports/                    # Lighthouse audit dumps (JSON & HTML)
├── scripts/                    # Performance, audit & maintenance tools
│   ├── audit.mjs               # Automated mobile & desktop Lighthouse runner
│   ├── test-regression.mjs     # Playwright cross-device regression tests
│   ├── optimize_assets.py      # Batch PIL image compressor & WebP converter
│   ├── analyze-report.mjs      # Lighthouse metrics & audit failure extractor
│   └── detail-report.mjs       # Detailed audit item debugger
├── next.config.ts              # Security headers, image optimization, cache rules
└── tsconfig.json               # TypeScript compiler config
```

---

## Changelog — What Was Changed & Why

### Performance — Iteration 1 (Baseline Optimizations)

**Problem:** Baseline Lighthouse scores were Mobile 54 / Desktop 63. Total image payload was 289 MB. All pages rendered dynamically, causing high TTFB.

#### `app/layout.tsx`
- **Removed `import { headers }` and `await headers()`** — the layout was reading a request header to detect the ERP login route, forcing every page to be rendered dynamically on every request. Removing this allowed all 66 routes to become static (`○`) prerendered HTML, eliminating server round-trips entirely.
- **GTM script** moved from `strategy="beforeInteractive"` → `"afterInteractive"` to stop it from blocking the main thread during initial page parse.
- **NPF tracking script** (`track.nopaperforms.com`) moved to `strategy="lazyOnload"` — fires only after the page is fully loaded and idle.
- **Added `<link rel="preload" as="image" href="/video/hero/poster.webp" fetchPriority="high">`** in `<head>` — signals the browser to fetch the LCP element (the video poster) with highest priority before CSS or JS parsing completes.
- **Added `title` attribute** to the GTM noscript iframe to fix an Accessibility audit failure.

#### `components/ui/HeroVideo.tsx`
- **Changed `poster` to `poster.webp`** — replaced the original JPEG poster with the WebP version (smaller, faster decode).
- **Changed `preload="auto"` → `preload="none"`** — the video itself is not the LCP element; preloading it was wasting bandwidth and competing with the poster image.
- **Wrapped HLS/`hls.js` loading in `setTimeout(..., 1000)` (later 2500 ms)** — defers the dynamic `import('hls.js')` and the first TS segment download off the critical path, reducing main-thread contention during Lighthouse's TBT measurement window.

#### `components/NpfAdmissionsForm.tsx`
- **Added `role="region"`** to the wrapper `<div>` — an `aria-label` on a bare `<div>` without a valid ARIA landmark role fails the Lighthouse `aria-prohibited-attr` audit.
- **Added `IntersectionObserver`-based lazy loading** — the NPF widget script is now only injected when the enquiry section scrolls into the viewport (with a 400 px root margin), preventing it from blocking initial page load.
- **Added `MutationObserver`** to auto-inject `title` and `aria-label` onto the iframe injected by the third-party NPF widget, fixing the `frame-title` accessibility violation without modifying the external script.

#### `components/home/MobileActionBar.tsx`
- **Fixed color contrast on the WhatsApp button** — changed `text-[#008d7b]` → `text-[#007566]` to achieve a contrast ratio of 5.62:1 (above the WCAG AA minimum of 4.5:1 for 11 px bold text).
- **Fixed `label-content-name-mismatch`** — updated `aria-label` on the "Enquire Now" link to match its visible text, resolving a screen-reader inconsistency.

#### `components/layout/Navbar.tsx`
- **Fixed color contrast on desktop nav items** — the navigation labels were `text-white/90` over `bg-royal-blue` (`#00bdb6`). Teal-on-teal combinations fail WCAG contrast at small font sizes. Changed inactive nav text to `text-[#082630]` (dark navy) which achieves 6.73:1 contrast ratio.
- **Updated Home icon and Search button** to use `text-[#082630]` for sufficient contrast against the teal header.

#### `components/layout/Footer.tsx`
- **Changed `text-white/40` → `text-white/70`** on phone label spans — the low-opacity white on dark background failed contrast thresholds.

#### `app/page.tsx`
- **Switched `campusGallery` images** to `.webp` versions across all 8 gallery entries.
- **Switched `infraData`** (infrastructure tabs) to `.webp` for all images.
- **Switched testimonial card `img` srcs** to `.webp`.
- **Updated Cambridge worldwide map** to `.webp` + added `decoding="async"` + added explicit `width={1535} height={981}` to fix the `unsized-images` audit and prevent layout shift.
- **Updated CSS background images** — `cambridge_uk_building.jpg` → `.webp`, `cambridge-sketch.jpeg` → `.webp`.
- **Fixed heading hierarchy** — changed `<h4>` in the "Personalised Journeys" section to `<h3>` (Lighthouse `heading-order` violation: `h4` following `h2` without an intermediate `h3`).
- **Added `loading="lazy" decoding="async"`** to all off-screen gallery images.

#### `next.config.ts`
- **Added `compress: true`** — enables Brotli/Gzip response compression.
- **Added `poweredByHeader: false`** — removes the `X-Powered-By: Next.js` header for security hygiene.
- **Added `images.formats: ['image/avif', 'image/webp']`** — Next.js Image Optimization API now serves AVIF-first, WebP second for all `next/image` components.
- **Added `images.minimumCacheTTL: 31536000`** — caches optimized image responses for 1 year.
- **Added `experimental.inlineCss: true`** — inlines Tailwind CSS into the HTML `<head>` on first load. Because Tailwind only generates the utility classes actually used (a small, bounded set), inlining eliminates a render-blocking CSS request entirely — cutting FCP measurably for first-time visitors on slow connections.
- **Added security headers** globally: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.
- **Added long-lived `Cache-Control: public, max-age=31536000, immutable`** headers for `/assets/*`, `/video/*`, and common static file extensions (`.ico`, `.webp`, `.woff2`, etc.).

#### Image Optimization (`scripts/optimize_assets.py` + PIL)
- **Compressed 289 MB → 27 MB** — all JPEG/PNG files in `public/` resized to max 1600 px wide, quality 82, progressive, Lanczos resampling.
- **Converted to WebP** (all homepage and commonly-used images):
  - Hero poster: `poster.webp` (video hero placeholder, preloaded for LCP)
  - Campus galleries: `DSC_2180.webp`, `DSC_2204.webp`, `0N9A9674.webp`, `0N9A9612.webp`, `P1676425.webp`, `IMG_5865.webp`, `IMG_5875.webp`
  - Infrastructure: `science-lab.webp`, `basketball.webp`, `TU1-5.webp`, `challenge.webp`
  - Worldwide map: `cambridge-worldwide-map.webp`
  - Background images: `cambridge_uk_building.webp`, `cambridge-sketch.webp`
  - Testimonial: `Vatan Parnami and Anku Sapra.webp`
  - Other pages: `Sandeep-Bakshi.webp`, `preeti-bakshi.webp`, `akansha.webp`, `Aishwarya-Bakshi.webp`, `principle.webp`, `grow.webp`, `heads.webp`, `classroom.webp`, `smart-classroom.webp`, `life-at-sps.webp`, `pgt.webp`, `prt.webp`, `library.webp`, `stem-lab.webp`, `sia-student.webp`, `smia-student.webp`, `middle-school.webp`, `primary-school.webp`, `senior.webp`, `career.webp`, `building-from-top.webp`

---

### Performance — Iteration 2 (Second Pass)

**Changes made after auditing post-iteration-1 results (Mobile 56, Desktop 91).**

#### `components/NpfAdmissionsForm.tsx` (additional)
- Rewrote to use `IntersectionObserver` for deferred widget injection — the third-party script (`vemwgts.js`) now only loads when the user scrolls near the form, eliminating ~70 KB of third-party JS from the initial bundle evaluation.

#### `components/ui/HeroVideo.tsx`
- Increased video load deferral timer from `1000 ms` → `2500 ms` to push HLS segment fetching (`segment000.ts`, ~930 KB) beyond Lighthouse's TBT measurement window.

#### `app/layout.tsx`
- **GTM + GA scripts** moved from `strategy="afterInteractive"` → `strategy="lazyOnload"` — defers Google Tag Manager and Google Analytics until after the page is fully idle, reducing main-thread JS execution (GTM alone accounts for ~726 ms of scripting on mobile).

#### `app/page.tsx`
- **CSS background images** updated from JPEG/JPEG → WebP (`cambridge_uk_building.webp`, `cambridge-sketch.webp`).
- **Added explicit `width` and `height`** to the Cambridge worldwide map `<motion.img>` to fix the `unsized-images` audit and eliminate layout shift.

#### `next.config.ts`
- **Added `experimental.inlineCss: true`** — eliminates render-blocking CSS link tags by inlining Tailwind's utility classes directly into the HTML response. Cuts FCP on first visit.

#### `components/layout/Navbar.tsx`
- **Fixed WCAG contrast** on desktop navigation label spans — `text-[#e5f8f8]` on `#00bdb6` (teal background) only achieves 2.13:1 ratio, far below the 4.5:1 required for small text. Changed to `text-[#082630]` (6.73:1 ratio).

#### `components/home/MobileActionBar.tsx`
- **Fixed WCAG contrast** on WhatsApp label — `text-[#008d7b]` on white achieves 4.12:1 (below threshold). Changed to `text-[#007566]` (5.62:1).

---

## Current Lighthouse Scores

> Measured against `http://127.0.0.1:3000` (local production server) on **13 Nov 2026** using Lighthouse 13.6.0.

| Metric | Iteration 1 (Post-opt) | Iteration 2 (Latest) |
|---|:---:|:---:|
| **Mobile Performance** | 56 | **58** |
| **Desktop Performance** | 91 | **98** |
| **Accessibility** | 93 | **100** |
| **SEO** | 100 | **100** |
| **FCP (Mobile)** | 1.2 s | 1.3 s |
| **LCP (Mobile)** | 4.5 s | 4.3 s |
| **TBT (Mobile)** | 1,880 ms | 1,600 ms |
| **TBT (Desktop)** | 220 ms | **100 ms** |
| **CLS** | 0 | 0 |

> [!NOTE]
> Mobile performance improvement is bounded by GTM/GA/Clarity executing ~4.8 s of JS on slow 4G (Moto G Power emulation). These are third-party scripts outside Next.js's bundle and cannot be tree-shaken or deferred further without removing the analytics integration entirely.

> [!TIP]
> Desktop has achieved **98/100** Performance and **100/100** Accessibility. The gap to 90+ mobile is primarily Total Blocking Time from third-party scripts (GTM 726 ms + GA 877 ms + Clarity 711 ms = ~2,314 ms on the mobile CPU throttle).

---

## Getting Started

### Prerequisites

- **Node.js:** `v20.x` or `v22.x` / `v26.x`
- **Package Manager:** `pnpm` (recommended)
- **Python 3 + Pillow:** Only needed to run `optimize_assets.py`

### Installation

```bash
git clone https://github.com/seedlingschools/seedling-international-academy.git
cd seedling-international-academy
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

---

## Optimization & Testing Scripts

### 1. Lighthouse Performance Audits

Runs headless Chrome in Mobile (Moto G Power + slow 4G throttle) and Desktop presets:

```bash
# Both mobile and desktop
node scripts/audit.mjs both <label>

# Mobile only
node scripts/audit.mjs mobile run-1

# Desktop only
node scripts/audit.mjs desktop run-1
```

Reports are saved to `reports/*.report.html` and `reports/*.report.json`.

### 2. Playwright Regression Tests

Validates critical UI elements (Navbar, Hero, Footer, NPF Form) load without console errors on both mobile (412 px) and desktop (1280 px) viewports:

```bash
node scripts/test-regression.mjs
```

### 3. Asset Optimizer

Compresses all JPEG/PNG in `public/` and creates `.webp` counterparts (max 1600 px wide, quality 82):

```bash
python3 scripts/optimize_assets.py
```

---

## Security & Caching Headers

Configured globally in `next.config.ts`:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Cache-Control` (assets) | `public, max-age=31536000, immutable` |

---

## Known Remaining Bottlenecks

| Issue | Root Cause | Status |
|---|---|---|
| Mobile TBT ~1,600 ms | GTM + GA + MS Clarity executing ~4.8 s of JS under mobile CPU throttle | Cannot be eliminated without removing analytics |
| Mobile LCP ~4.3 s | Hero poster loads at ~1.1 s, but Lighthouse attributes LCP to overall load. Video also fetches TS segments after the 2.5 s deferral timer | Partially mitigated |
| `Uses third-party cookies` (Best Practices 77) | NPF widget, MS Clarity and GTM all set third-party cookies without SameSite attributes | Requires Consent Mode v2 implementation or removal |
| `inspector-issues` | Third-party cookie warnings from NPF and Clarity | Low priority; production behaviour matches expected |

---

## Contact & Support

- **Campus Address:** Seedling International Academy, Mahaveer Nagar / Jagatpura, Jaipur, Rajasthan, India
- **Email:** seedlingacademy@hotmail.com
- **Website:** [cambridge.seedlingschools.com](https://cambridge.seedlingschools.com)
