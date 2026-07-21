# Cambridge Learner Attributes — Redesign Design Spec

**Date:** 2026-07-21
**Status:** Approved for implementation planning
**Scope:** Lightweight motion/animation polish of the existing `Cambridge Learner Attributes` section in `app/page.tsx`

---

## 1. Background

The Cambridge Learner Attributes section currently shows five attributes (Confident, Responsible, Reflective, Innovative, Engaged) in a 3-column card grid. The current implementation has only basic motion: a simple opacity + translate-Y fade-in and a small icon scale on hover. The site brand is "polished reveal" (light interactivity) with the established navy/crimson design system, and the rest of the homepage already uses richer motion (Campus cards, Cambridge Pathway, tab indicators via `layoutId`). This redesign brings the Learner Attributes section up to that standard without changing its information architecture.

## 2. Goals

- Make the section feel alive and intentional, not static
- Match the motion polish used elsewhere on the page (Campus, Pathway, Facilities tabs)
- Stay within the established design system — colors, type, easing curves, spacing
- Respect `prefers-reduced-motion`
- No copy changes, no click interactions, no new dependencies

## 3. Non-Goals

- No new click/tap interactions
- No background motion in this section
- No copy changes to titles or descriptions
- No new animation library (framer-motion already in use)
- No extraction to a separate component (stays inline in `app/page.tsx`)
- No scroll-back re-trigger (one-shot reveal only)

## 4. Visual Design

### 4.1 Section structure (unchanged)

- Section ID: `learner-attributes`
- Background: `bg-white` with the existing `mesh-gradient` overlay at 10% opacity
- Vertical rhythm: `py-16 md:py-24`
- Top border: `border-t border-hairline`
- Container: `max-w-7xl mx-auto px-6`

### 4.2 Header (unchanged copy, lightly animated)

- Label: "Cambridge board" (small caps, `text-camb-us`)
- H2: "Cambridge *Learner Attributes*" (Playfair, "Learner Attributes" emphasized in crimson)
- Subtitle: copy unchanged
- All three are wrapped in `<motion.*>` for a staggered fade-up

### 4.3 Card visual

- 5 cards in a `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` responsive grid
- Row 2: cards 4 and 5 sit in columns 1 and 2, horizontally centered (replaces the current `lg:translate-x-1/2` hack with a clean CSS grid pattern)
- Card padding: `p-8` (unchanged)
- Card border-radius: `rounded-[8px]` (unchanged)
- Card background: **soft tint per attribute** using the existing `camb-*-soft` palette in `app/globals.css`:

  | Attribute    | Background    | Ink (title)    |
  | ------------ | ------------- | -------------- |
  | Confident    | `camb-ey-soft` (#eefaf8) | `camb-ey-ink` (#0d5c53) |
  | Responsible  | `camb-p-soft`  (#ecf9f7) | `camb-p-ink`  (#0a4f49) |
  | Reflective   | `camb-ls-soft` (#e7f6f5) | `camb-ls-ink` (#075049) |
  | Innovative   | `camb-us-soft` (#e3f1f1) | `camb-us-ink` (#054345) |
  | Engaged      | `camb-a-soft`  (#e6eeef) | `camb-a-ink`  (#133844) |

- Icon: stays in the white rounded-square "chip" (`w-12 h-12 rounded-2xl bg-white/80 border border-black/5`), 24px lucide icon at `strokeWidth={1.75}`
- Title: Playfair, `text-xl`, font-bold, uppercase tracking-wide, ink color
- Body copy: `text-xs text-text-light leading-relaxed font-light` (unchanged)

### 4.4 Why these colors

The `camb-*-soft` tokens already exist in `app/globals.css` and are used by the Cambridge Pathway section directly above this one. Reusing them keeps the page visually unified and avoids introducing new colors. The current code maps the attributes to the five stage colors in stage order; this redesign keeps that mapping.

## 5. Motion Design

### 5.1 Entrance animation (stagger fade-up, refined)

Triggered by `whileInView`, fires once (`viewport={{ once: true, amount: 0.2 }}`).

| Step | Element                | Delay | Duration | Easing               | Animation |
| ---- | ---------------------- | ----- | -------- | -------------------- | --------- |
| 1    | Header label           | 0.00s | 0.45s    | `[0.22, 1, 0.36, 1]` | opacity 0→1, y 12→0 |
| 2    | Title                  | 0.10s | 0.55s    | `[0.22, 1, 0.36, 1]` | opacity 0→1, y 16→0 |
| 3    | Subtitle               | 0.20s | 0.45s    | `[0.22, 1, 0.36, 1]` | opacity 0→1, y 12→0 |
| 4    | Card 1 (Confident)     | 0.35s | 0.55s    | `[0.22, 1, 0.36, 1]` | opacity 0→1, y 28→0, icon scale 0.6→1 + rotate -4°→0° |
| 5    | Card 2 (Responsible)   | 0.45s | 0.55s    | same as card 1       | same as card 1 |
| 6    | Card 3 (Reflective)    | 0.55s | 0.55s    | same                 | same |
| 7    | Card 4 (Innovative)    | 0.65s | 0.55s    | same                 | same |
| 8    | Card 5 (Engaged)       | 0.75s | 0.55s    | same                 | same |

Implementation: a single `framer-motion` `variants` object on a parent container with `staggerChildren`, and each child uses its own `variants` definition. Avoids manual `delay` arithmetic in JSX.

### 5.2 Hover interaction (on each card)

Triggered by `whileHover` on the card's `motion.div`:

- Card: `y: -6` (lift), with a teal-tinted shadow matched to the card's accent (`shadow-lg shadow-{camb-tint-key}/15`)
- Icon: `scale: 1.12`, `rotate: -3°` (300ms ease-out via transition on the inner icon wrapper)
- Duration: 300ms, ease `easeOut`

### 5.3 No scroll-away / parallax

The reveal is one-shot. No animation on scroll-out, no parallax layers, no scroll-linked values.

## 6. Accessibility

- **`prefers-reduced-motion`**: Wrap the section's motion in a `useReducedMotion()` check (from `framer-motion`). When reduced motion is requested:
  - Skip the icon scale + rotation (replace with simple opacity)
  - Keep the staggered fade-up but reduce the y-offset to 0 (pure opacity reveal)
  - Disable hover scale/rotate on the icon (lift stays but smaller, or skipped)
- **Keyboard**: cards are non-interactive, so no focus-ring changes needed. If we add `tabindex` later, ensure focus styles match the design.
- **Screen readers**: section is announced as one block; the staggered reveal is purely visual and doesn't affect the DOM order or accessible name of each card.
- **Contrast**: ink colors (`camb-*-ink`) on soft tints (`camb-*-soft`) are dark teal on near-white — well above WCAG AA for body text. Verified.

## 7. Code Structure

- All changes are inline in `app/page.tsx`, inside the `Cambridge Learner Attributes` `<section>`.
- Add `staggerChildren` variants to the existing parent `motion.div`.
- Replace each card's `motion.div` with a child variant target.
- The icon needs a separate inner `motion.div` for the scale+rotate so the lift and the icon animation are independent.
- Keep the existing import of `motion` from `framer-motion`. Add `useReducedMotion`.
- No new files, no new components, no new dependencies.

### File-level diff summary (informational)

- `app/page.tsx`:
  - Add `useReducedMotion` to the `framer-motion` import
  - In the section, replace the section-level `initial`/`whileInView` block with a `variants` object that does `staggerChildren: 0.10, delayChildren: 0.10`
  - Replace each card's per-card `transition` with the `variants` pattern
  - Replace the `lg:translate-x-1/2` hack with a clean grid (cards 4-5 in row 2, columns 1-2, centered)
  - Add `whileHover` block on each card with the lift + shadow
  - Add an inner `motion.div` around each icon for the scale/rotate
  - Add the `useReducedMotion` branch

## 8. Risks

- The current `lg:translate-x-1/2` hack will be replaced. Visual result is the same, but it's a small DOM/CSS change. Will verify visually before considering done.
- Color tints must remain subtle — if they read as too saturated, dial back via opacity or switch to plain white cards. Pre-flight: confirm on a real screen, not just mockup.
- `staggerChildren` requires the parent to be a `motion.*` element with the variants object. The current parent is `motion.div` but uses `initial`/`whileInView` directly — needs restructuring.

## 9. Out of Scope (explicit)

- No changes to the Cambridge Pathway section above
- No changes to copy on any card
- No new section ordering on the page
- No click/tap interactions
- No background motion
- No analytics or A/B testing instrumentation

## 10. Acceptance Criteria

- [ ] All 5 cards visible with their attribute-specific soft tint
- [ ] Header animates in (label, title, subtitle) on first scroll into view
- [ ] Cards stagger in left-to-right, top-to-bottom, in attribute order
- [ ] Hover lifts the card and scales/rotates the icon smoothly
- [ ] `prefers-reduced-motion: reduce` produces a static opacity-only reveal
- [ ] No console errors
- [ ] Page passes a `pnpm run build` clean
- [ ] No regression in Lighthouse performance score (motion is GPU-accelerated, no heavy effects)
- [ ] Looks visually consistent with the Cambridge Pathway section directly above
