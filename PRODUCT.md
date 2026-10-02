# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary, in order of who the site must win:

1. **Startup founders, any market.** Need a product team that ships: an MVP in weeks, then someone who stays. Not location-bound, buying in English.
2. **Regional and Gulf businesses.** Arabic-speaking companies beyond Palestine, drawn by a senior team in the same time zone that builds bilingual (Arabic and English) products.
3. **International / Western clients.** English-first companies buying software engineering and AI work.

**Decision, 2026-10-02:** GrayNest is a software house, not an AI-agent service. The `/ai-agents` page and the agents service row were removed, and the homepage promo bar now advertises the free app teardown instead of the clinics agent; `/ai-agents` redirects to `/software-engineering`. The clinics one-pager (`/clinics/…`) stays live as a direct-link sales sheet only (not linked from the site, not in the sitemap). The "Ask GrayNest" assistant stays as a site helper, never as a product demo or "try the agent" call to action.

## Product Purpose

GrayNest is a software house. It builds:

- **Web and mobile products**, backends and APIs, and internal tools.
- **AI integration** inside those products, used only where it earns its place.

Success is a qualified inbound conversation: a founder or business decision-maker who arrives, sees the work and the way we work, and starts a project (`hello@graynest.co` or the contact form).

## Positioning

Claims a neighbouring agency could not truthfully copy, all binding:

- **Senior team with real pedigree.** The engineers have built for Nokia, Red Hat and 20+ startups (as individuals, see Evidence).
- **Senior engineers who stay until it works.** No junior churn, no handoff at launch. MVP in weeks; ownership through launch and after.
- **Built in Palestine, on purpose.** A local team and local economy are part of the offer, not a footnote.

## Operating Context

- Buyers evaluate on desktop and phone, often after hours, often before talking to anyone. The site is frequently the entire first meeting.
- The deciding moment is seeing real work: shipped products, the process film, and the team behind it.
- Two distinct intents arrive at the same homepage and must be separated early: "answer my customers" vs "build my product".

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. shadcn/Base UI components, GSAP + ScrollTrigger, Lenis smooth scroll, Vercel Analytics. Deployed on Vercel; repo is linked to a v0 project that can push commits to `main`.
- Light and dark themes are both first-class, with a user-facing toggle and a pre-hydration theme script.
- The sitewide **Ask GrayNest** widget runs on `@elevenlabs/react` (Talk = voice, Chat = text) behind `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`. Optional `NEXT_PUBLIC_AGENT_PHONE` and `NEXT_PUBLIC_AGENT_WHATSAPP`.
- Media is addressed through a manifest (`content/media-manifest.json`, `content/media-assets.ts`) and rendered via `MediaSlot`; unfilled slots fall back to branded placeholders that still animate and theme-switch.
- Routes: `/`, `/software-engineering`, `/contact`, `/privacy`, plus a 404; `/ai-agents` redirects to `/software-engineering`. Offer landing pages in their own light world: `/clinics/[market]` (ps/jo/tr/en, unlinked sales sheet, not in the sitemap) and `/teardown/ar` + `/teardown/en` (`/teardown` redirects to Arabic). The homepage offer strip (`components/PromoBar.tsx`) points at the teardown.
- **Language:** the site ships in English only. No Arabic RTL version of the site is required; do not build one unless the owner asks. The offer landing pages are the exception: they ship in Arabic (right-to-left) as well, because their campaigns run in Arabic.
- Contact channels are `hello@graynest.co` and `instagram.com/graynestcomp`. Phone and WhatsApp exist only when the env vars are set.

## Brand Commitments

- Name: **GrayNest**. Tagline territory in use: "Software that works".
- Logo assets are committed (`app/icon.png`, `app/apple-icon.png`, `public/`), including a dark-mode variant used in the footer.
- Voice: cinematic editorial, short and concrete, specific over promotional. The register to hold is the site's own best lines — "YOUR SHOP CLOSES AT 9. Your agent doesn't.", "Answers stock and price questions after closing, and reserves the item for the morning."
- Honesty is a brand commitment, not a preference: no invented numbers, no invented customers, nothing labelled live that is a mock. See `anti-slop/audit-001-2026-09-27.md`.

## Evidence on Hand

- **Real:** shipped NutriFit work (web app, mobile app); the team's individual experience (Nokia, Red Hat, 20+ startups); the Ask GrayNest site assistant, which works but is a helper, not a product being sold.
- **Real and cleared by the owner (2026-10-01, revised 2026-10-02):** the team's individual experience: engineers have given development services to Nokia, Red Hat, and 20+ startups (new and established). These are not GrayNest clients. Shown in `components/TrackRecord.tsx` with one-colour Nokia and Red Hat logos (owner's call, 2026-10-02), always framed as the engineers' own experience, never as GrayNest's client work or an endorsement. Stella Stays was removed at the owner's request. Add no other names without the owner.
- **Real but unpublishable today:** other client work, including named clients and case studies. Permission is not cleared. Future work must not publish client names, logos, project details or outcomes until the owner supplies them.
- **Does not exist — never fabricate:** statistics, user counts, uptime or performance figures, testimonials, press, awards, team headcount, pricing.

## Product Principles

1. **One door, clearly a software house.** Every surface says what GrayNest builds within one screen and leads to starting a project.
2. **Show, don't assert.** Shipped work and the process are demonstrable; use them. Where nothing can be demonstrated, say less rather than claim more.
3. **Nothing unearned.** No number, name, logo or label the owner has not supplied. An honest absence beats a plausible invention.
4. **Local is the substance, not the sticker.** Palestine and Palestinian Arabic show up as capability and craft, not as a badge.
5. **Weeks, then stay.** Speed to something real, followed by ownership, is the promise the copy and the flow must both carry.

## Accessibility & Inclusion

- Keyboard and screen-reader basics are already in place (skip link, `lang`, theme-color per scheme) and must be preserved.
- All GSAP motion honours `prefers-reduced-motion`; the scroll-scrubbed film and reveals must keep a static, readable fallback.
- Both themes are shipped surfaces: contrast has to hold in light and dark, not just the one being designed in.
