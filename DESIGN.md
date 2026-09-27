---
name: GrayNest
description: A charcoal projection room where one ember of red marks the work in progress.
colors:
  ember: "#ea2e00"
  ember-hot: "#ff4a1c"
  charcoal-950: "#111114"
  charcoal-900: "#16161a"
  charcoal-850: "#1b1b1f"
  charcoal-800: "#202024"
  charcoal-700: "#232326"
  charcoal-600: "#2b2b2f"
  bone-50: "#fafafa"
  bone-100: "#edebe7"
  bone-300: "#bdbab4"
  text-secondary: "rgba(250, 250, 250, 0.66)"
  text-tertiary: "rgba(250, 250, 250, 0.42)"
  line: "rgba(250, 250, 250, 0.08)"
  line-strong: "rgba(250, 250, 250, 0.14)"
  glass-border: "rgba(255, 255, 255, 0.11)"
  glass-border-hover: "rgba(255, 255, 255, 0.22)"
  on-ember: "#fafafa"
typography:
  display:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(48px, 8.4vw, 168px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  accent:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "inherit"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(28px, 3.4vw, 52px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(22px, 2vw, 32px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  none: "0"
  sm: "16px"
  md: "24px"
  lg: "28px"
  pill: "999px"
spacing:
  stack-tight: "clamp(16px, 2vw, 24px)"
  stack: "clamp(24px, 3vw, 40px)"
  stack-loose: "clamp(40px, 6vw, 72px)"
  section: "clamp(80px, 11vh, 150px)"
  section-cinematic: "clamp(96px, 13vh, 176px)"
  gutter: "clamp(20px, 8vw, 128px)"
  grid-gap: "clamp(16px, 2vw, 32px)"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ember-hot}"
    textColor: "{colors.on-ember}"
  button-glass:
    textColor: "{colors.bone-50}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  glass-pill:
    textColor: "{colors.bone-50}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "36px"
  nav-pill:
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "42px"
  card-glass:
    textColor: "{colors.bone-50}"
    rounded: "{rounded.md}"
    padding: "clamp(24px, 3vw, 36px)"
  card-cinema:
    textColor: "{colors.bone-50}"
    rounded: "{rounded.lg}"
    padding: "0"
  input-contact:
    textColor: "{colors.bone-50}"
    rounded: "{rounded.sm}"
    padding: "15px 18px"
    width: "100%"
  theme-toggle:
    textColor: "{colors.bone-50}"
    rounded: "{rounded.pill}"
    height: "40px"
    width: "40px"
---

# Design System: GrayNest

## Overview

**Creative North Star: "The Projection Room"**

The site behaves like a film being run rather than a page being read. A grain overlay sits fixed above every pixel at all times; sections are acts, not blocks, most of them claiming a full `100svh`; photographic plates carry the meaning while type sits on top of them; and the visitor is the projectionist — scroll is the transport, and the two hero doors, the manifesto, and the office film all respond to it directly. The room is charcoal, and exactly one thing in it glows.

The register is three things at once, and dropping any one of them breaks it: **precise** (a strict 12-column grid, `-0.025em` tracking on every display line, two named easing curves and nothing improvised), **warm** (bone and paper rather than white, off-black rather than black, a faint red haze in the corners of the room), and **cinematic** (blur, veil gradients, depth by tone). Light mode is not an afterthought or an inversion: it is the same room at dawn, with paper surfaces and charcoal type, and the ember unchanged at `#ea2e00`.

Confirmed anti-reference: **the loud agency showreel.** No cursor followers, no marquee tickers, no WebGL for its own sake, nothing moving in more than one place at a time. This system already runs GSAP, Lenis, and a scroll-scrubbed video; that budget is spent. Motion here is a transport mechanism the visitor controls, never a performance played at them.

**Key Characteristics:**
- Dark is the default state (`:root` is the dark theme); light is a full, equal counterpart.
- One accent, one hue. Red appears where something is happening and nowhere else.
- Display type is uppercase, black-weight, and enormous; its counterpoint is a light italic in red.
- Surfaces are translucent and near-invisible at rest; they resolve on state.
- Fixed film grain and a fixed ambient glow sit outside the document flow and unify every page.
- Every motion path has a `prefers-reduced-motion` answer already written.

## Colors

A two-temperature palette: a cold charcoal-to-bone neutral spine, and a single hot accent that never shares the stage. Every neutral token is theme-swapped under `[data-theme="light"]`; the accent is not.

### Primary
- **Projector Ember** (`#ea2e00`): the only chromatic color in the system. It marks the live thing — primary CTAs, the accent word inside a headline, focus rings, the glow behind a media plate, the scrubbed manifesto word. **Ember Hot** (`#ff4a1c`) exists solely as its hover state.

### Neutral
- **Charcoal** (`#111114` → `#2b2b2f`, six steps): the room. `#16161a` is the page, `#111114` the deeper ground behind heroes and doors, `#232326`/`#2b2b2f` the lifted tones inside media placeholders and falloff gradients. In light mode the same six tokens become **Paper** (`#f7f5f1` page, `#ffffff` lifted, `#e8e4dc` ground).
- **Bone** (`#fafafa`, `#edebe7`, `#bdbab4`): type and marks on charcoal. Inverts to charcoal type (`#16161a`, `#1b1b1f`, `#6b6760`) in light mode.
- **Text Secondary** (`66%` bone) and **Text Tertiary** (`42%` bone): body copy and labels are opacity-stepped from the type color, never separate greys. Light mode uses `68%` / `45%` charcoal.
- **Line** (`8%`) and **Line Strong** (`14%`): all dividers and hairlines are translucent, so they read correctly on any surface beneath them.

### Named Rules

**The One Ember Rule.** There is a single chromatic hue in this system. A screen carries one ember-colored element that matters — a CTA, an accent word, a glow — and the rest of its red presence is ambient haze below `0.16` alpha. A second accent color, or a second saturated CTA in the same viewport, is a defect.

**The Both Rooms Rule.** No color decision ships until it has been seen in both themes. Every neutral is a theme-swapped token, never a literal hex, and the only correct way to write charcoal or bone into a component is `var(--gn-ink-*)` / `var(--gn-bone-*)`. The two documented exceptions are the fixed dark hero plates (`.hero-plate`, `.two-door-hero`) and the `.has-dark-hero` nav override, which stay dark in both themes on purpose.

**The Opacity Spine Rule.** Secondary and tertiary text, lines, and glass borders are alpha steps of the type color, not new hues. Adding a mid-grey token is how this palette gets muddy.

## Typography

**Display Font:** Satoshi (self-hosted `woff2`, weights 300 italic / 400 / 500 / 700 / 900), falling back to Avenir Next, Segoe UI, sans-serif.
**Body Font:** Satoshi. This is a single-family system; the entire range of voice comes from weight, case, and tracking.
**Label Font:** Satoshi 500 at 12px, uppercase, `0.12em` tracked.

**Character:** One geometric sans worked to both extremes — black uppercase at 168px and light italic at body size — which is why the pairing reads as engineered rather than decorated. A `--font-alexandria` variable is declared in `:root` but referenced nowhere in the codebase; it is dormant, not part of the system. Do not introduce a second family without a deliberate decision.

### Hierarchy
- **Display** (900, `clamp(48px, 8.4vw, 168px)`, line-height `0.9`, `-0.025em`, uppercase): hero and section-opening statements. Always in `.display-line`, which clips and reveals each line from below. Never more than a few words per line.
- **Accent** (300 italic, inherits size, `-0.02em`, sentence case, ember with a `40px` glow): the counter-voice inside a display line. One per headline.
- **Headline** (800, `clamp(28px, 3.4vw, 52px)`, `1.02`, uppercase): section titles (`.h2`).
- **Title** (700, `clamp(22px, 2vw, 32px)`, `1.15`, sentence case): card and subsection titles (`.h3`).
- **Manifesto** (700, `clamp(32px, 4.8vw, 64px)`, `1.18`, `-0.03em`, centered, max `22ch`): the scroll-scrubbed statement type. Words sit at `0.15` opacity and resolve to full as the scrub passes.
- **Body Lead** (400, `20px`, `1.55`, max `60ch`, secondary text color): the paragraph under a headline.
- **Body** (400, `17px`, `1.6`): default document type.
- **Label** (500, `12px`, `0.12em`, uppercase, tertiary text color): the `.micro` eyebrow. Numbered and dotted in practice — `01 · AI AGENTS`.

### Named Rules

**The Two Voices Rule.** A display headline has exactly two registers: black uppercase, and one light italic ember phrase. That contrast is the brand's signature. Three weights in one headline, or an ember phrase in upright roman, both collapse it.

**The Eyebrow Contract.** Every major block opens with a `.micro` label above its headline, and on numbered sequences it carries the index and the section name (`02 · SOFTWARE + AI`). It is the system's orientation device; a block without one reads as unplaced.

**The Tight Display Rule.** Display and headline type is always negatively tracked (`-0.025em` to `-0.03em`) and set at or below `1.02` line-height. Loose, default-tracked large type is the single fastest way to make this site look generic.

## Layout

A 12-column grid (`.grid-12`) capped at `1440px`, with `clamp(16px, 2vw, 32px)` gutters between columns and a page gutter of `clamp(20px, 8vw, 128px)` that widens dramatically on desktop — the outer margin is a deliberate part of the composition, not leftover space. Page gutters are resolved through `max(var(--gn-page-gutter), env(safe-area-inset-*))`, so notched devices are handled at the token level rather than per component.

Vertical rhythm comes from three stack tokens (`clamp(16–24px)` tight, `clamp(24–40px)` base, `clamp(40–72px)` loose) and two section rhythms: `clamp(80px, 11vh, 150px)` for standard sections and `clamp(96px, 13vh, 176px)` for cinematic ones. Heroes and signature acts claim `min-height: 100svh` and center their content.

Responsive behavior is deliberately coarse: one primary breakpoint at `768px` (center nav appears, hamburger disappears, hero plate gradients rotate from horizontal to vertical) and a secondary one at `1024px`. Everything between those points is handled by `clamp()` rather than by breakpoint, which is why the type and spacing scales are fluid rather than stepped. Cards are `col-span-full` on mobile and `md:col-span-6` on desktop; the fixed nav reserves `72px` plus the top safe area.

### Named Rules

**The Fluid-First Rule.** Reach for `clamp()` before a media query. Breakpoints exist for structural changes (a nav that relocates, a gradient that rotates), not for resizing type or padding.

**The Full-Height Act Rule.** Signature sections are `100svh` (never `100vh`, which breaks on mobile browser chrome) and hold one idea. If a section needs two ideas, it is two sections.

## Elevation & Depth

**This system is flat, and its depth comes from tone and light rather than from stacked shadows.** The two fixed layers that create the room — a `body::after` ambient wash of ember and bone radial gradients, and a `body::before` film grain at `0.05` opacity in dark / `0.03` in light — sit outside the document flow and behind or above everything, so depth is a property of the page, not of the components on it. Within a page, recession is produced by veil gradients (`--gn-hero-veil`, `--gn-card-veil`, `--gn-overlay-soft`) and by the falloff radial that lifts a section's center a single tonal step.

A small shadow vocabulary does exist, and it is closed: every entry is bound to glass. No component earns a shadow simply for being important.

### Shadow Vocabulary
- **Glass Highlight** (`inset 0 1px 0 rgba(255,255,255,0.10)`; `0.90` in light): the top-edge catch light that makes a translucent surface read as a physical pane. Present on every glass element.
- **Glass Shadow** (`0 12px 40px rgba(0,0,0,0.32)`; `rgba(22,22,26,0.07)` in light): seats a glass surface over the ambient wash. Not a lift.
- **Ember Lift** (`0 8px 24px rgba(234,46,0,0.22)`, hover `0 12px 36px var(--gn-red-glow)`): only on the primary button, and it is light from the button, not a shadow under it.
- **Drawer Shadow** (`-24px 0 80px var(--gn-shadow)`): the agent drawer only, which genuinely floats over the page.

### Named Rules

**The Flat-By-Tone Rule.** New surfaces get depth from tone, translucency, and veil gradients — not from a drop shadow. The four shadows above are the whole vocabulary; adding a fifth requires a decision, and the standing direction is to reduce this list over time, never extend it.

**The Grain Is Sacred Rule.** The fixed grain and ambient layers are part of the identity and are never disabled, per-page overridden, or given a higher opacity to "add texture." They are calibrated per theme.

## Shapes

Two radii and nothing between them. **Anything interactive and inline is a full pill** (`999px`): buttons, the nav cluster, glass pills, the theme toggle, the skip link, the agent launcher. **Anything that contains content is softly rounded** — `16px` for inputs, `24px` for feature cards, `28px` for cinema cards, scene frames, and the contact panel. Media inside a rounded container is squared to `0` and clipped by the parent, so a plate always meets its frame flush.

Borders are always `1px` and always translucent (`--gn-glass-border` at `11%`, hovering to `22%`), never a solid line. The recurring non-rectangular form is the **hexagon**: a stroked SVG polygon at `rgba(250,250,250,0.14)`, tiled into a background grid at `0.05` opacity under an ember radial glow, and echoed in the product's own imagery language. It is structural background geometry, never a decorative sticker on a card.

### Named Rules

**The Pill-Or-Panel Rule.** If it is a control, it is a `999px` pill. If it is a container, it is `16`/`24`/`28px`. There are no `4px` or `8px` radii in this system, and a control with a small radius reads as imported from elsewhere.

**The Hairline Rule.** Every border is `1px` and alpha-based, so it works over glass, photography, and flat tone alike. A solid-color border is a defect.

## Components

Character across the set: **machined and frictionless.** Exact heights, full pills, instant and specific response. Two easing curves do all the work — `--gn-ease-enter` `cubic-bezier(0.16, 1, 0.3, 1)` for anything arriving, `--gn-ease-move` `cubic-bezier(0.65, 0, 0.35, 1)` for anything traveling — at `0.35s` / `0.8s` / `1.4s` with a `0.12s` stagger.

### Buttons
- **Shape:** full pill (`999px`), fixed `52px` height, `1px` translucent border.
- **Primary:** ember fill with a top-down white `0.16 → 0` gloss gradient, bone text, 700 weight at `15px`, `0 28px` padding, inset highlight plus ember lift.
- **Hover:** fill shifts to Ember Hot (`#ff4a1c`), the lift widens to `0 12px 36px` of ember glow. `:disabled` drops to `0.5` opacity and loses the shadow entirely.
- **Glass (secondary):** glass fill, `22%` hover border, bone text, 600 weight, `0 24px` padding. This is the default for any non-primary action.
- **Magnetic:** `.magnetic-cta` adds a cursor-following translate at `0.2s` on `--gn-ease-move`, used on principal CTAs only. It is disabled by the reduced-motion block.

### Chips
- **Glass Pill:** `36px` tall, `0 16px`, glass fill, label typography (12px / 500 / `0.08em` / uppercase). Used for media-slot captions and status markers. Static; it is a marker, not a control.

### Cards / Containers
- **Corner Style:** `24px` for feature cards, `28px` for cinema cards and scene frames.
- **Background:** the glass fill gradient over whatever the ambient layer provides; never an opaque panel color.
- **Shadow:** glass highlight plus glass shadow, per Elevation. Nothing more.
- **Border:** `1px` at `11%`, to `22%` on hover.
- **Internal padding:** `clamp(24px, 3vw, 36px)` for feature cards. Cinema cards run their media full-bleed to the card edge and pad only the copy block.
- **Hover:** `translateY(-4px)` on feature cards, `-6px` on cinema cards, with the media plate inside scaling to `1.04` over `1.1s` on `--gn-ease-move`. The card moves less than the image inside it; that differential is the effect.

### Inputs / Fields
- **Style:** `16px` radius, glass background at `5%`, `1px` translucent border, inset highlight, `15px 18px` padding, tertiary-color placeholder.
- **Focus:** border becomes ember, plus a `4px` ember haze ring (`--gn-red-haze`) *and* the global `2px` ember outline at `3px` offset. Focus is unmistakable by design.

### Navigation
- **Style:** fixed, transparent at rest, `72px` tall plus top safe area. On scroll it gains a full-bleed frosted layer (`blur(28px) saturate(1.8)`) drawn as a `::before` so Safari paints the notch area edge-to-edge, and a hairline bottom border.
- **Desktop:** a centered glass pill (`42px`, `0 22px`) holding `14px`/500 links in secondary text color, resolving to full bone on hover, separated by tertiary-color dots. Brand mark (32px) left, theme toggle and CTA right.
- **Mobile (< 768px):** the pill is replaced by a `44px` hamburger opening a full-screen `blur(40px)` menu whose links are `clamp(42px, 12vw, 56px)` black uppercase, staggered in at `0.06s` intervals.
- **Auto-hide:** the bar translates `-100%` on downward scroll and returns on upward.

### Signature Components

- **The Two-Door Hero:** two full-height photographic panels in a flex row. Hovering one grows its `flex-basis` and dims and desaturates the other over `0.7s` on `--gn-ease-move`. Each door gets its own tinted radial base (`--gn-door-a` / `--gn-door-b`) and its own off-center ember glow, so the pair is asymmetric on purpose. This is the site's primary navigation decision, rendered as a physical choice.
- **The Manifesto Scrub:** centered `22ch` statement type, words at `0.15` opacity resolving to full — and to ember on the accent word — as ScrollTrigger scrubs through them, with a blurred ember haze orb behind. The visitor reads at the speed they scroll.
- **The Office Scroll Film:** a pinned section that scrubs a video's `currentTime` against scroll position, swapping the day plate for the night plate with the theme. The same camera path in both.
- **MediaSlot:** every image and video on the site is addressed by manifest id through one component, with `world` and `system` registers that select different placeholder gradients. An unfilled slot still renders a branded, theme-aware, animating placeholder — no broken frames, no grey boxes.
- **The Agent Launcher & Drawer:** a fixed glass pill bottom-right (one `1.6s` attract pulse, then still) opening a `min(420px, 100%)` right-hand drawer at `blur(36px)`, translating in over `0.5s` on `--gn-ease-enter`.

### Named Rules

**The Two Curves Rule.** `--gn-ease-enter` for arrival, `--gn-ease-move` for travel, at `0.35`/`0.8`/`1.4s`. A new cubic-bezier or duration in a component is a defect; the vocabulary is complete.

**The Reduced-Motion Parity Rule.** Every animated component appears in the `prefers-reduced-motion: reduce` block with a resolved static end state — scrubbed words at full opacity, panels un-dimmed, reveals visible. A new animation is not finished until its entry there is written.

**The Differential Hover Rule.** On any card with media, the container moves a few pixels and the media inside it scales further and slower. Moving both by the same amount, or only the container, kills the effect.

## Do's and Don'ts

### Do:
- **Do** write every color as a `--gn-*` token so both themes follow automatically, and check the result in light and dark before calling it done.
- **Do** open each major block with a `.micro` eyebrow, and number it when it belongs to a sequence.
- **Do** give display headlines exactly one light-italic ember phrase as their counter-voice.
- **Do** use `100svh` and the `--gn-gutter-left` / `--gn-gutter-right` safe-area tokens for anything full-bleed.
- **Do** reach for `clamp()` before adding a breakpoint.
- **Do** make interactive things full pills (`999px`) and containers `16`/`24`/`28px`.
- **Do** add a `prefers-reduced-motion` end state in the same commit as the animation.
- **Do** route new imagery through `MediaSlot` with a manifest id and a real `alt` description, so an unshot plate still renders as a branded placeholder.

### Don't:
- **Don't** introduce a second accent hue, or put two ember-filled CTAs in one viewport.
- **Don't** add a fifth shadow. Depth comes from tone, translucency, and the veil gradients; the shadow list is closed and meant to shrink.
- **Don't** add a new easing curve, duration, or a second type family — including the dormant `--font-alexandria`.
- **Don't** set a solid-color border, or a radius between `0` and `16px`.
- **Don't** raise the grain opacity, disable the fixed ambient layers, or override them per page.
- **Don't** animate more than one thing in a viewport at once, or add cursor followers, tickers, or ambient WebGL — the confirmed anti-reference is the loud agency showreel, and the motion budget is already spent on scroll.
- **Don't** set large display type at default tracking; it must stay at `-0.025em` or tighter.
- **Don't** use `100vh` anywhere.
