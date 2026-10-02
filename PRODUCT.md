# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary, in order of who the site must win:

1. **Startup founders, any market.** Need a product team that ships: an MVP in weeks, then someone who stays. Not location-bound, buying in English.
2. **Regional and Gulf businesses.** Arabic-speaking companies beyond Palestine, drawn by agents that speak real Arabic and by a team in the same time zone.
3. **International / Western clients.** English-first companies buying software engineering and AI work.

Secondary and being retargeted: **Palestinian SMB owners** (retail, clinics, salons, cafés, after-sales). They are the audience the existing `/ai-agents` page was written for. The owner has decided that framing no longer reflects who GrayNest wants; future work on that page should retarget it to businesses at larger scale. SMB-scale work is not being dropped as a service, only as the lead story.

## Product Purpose

GrayNest is a software and AI agency. It sells two things through one door:

- **AI agents** — voice and chat agents that answer the phone, WhatsApp, Instagram/Facebook, and website chat; take details, book, sell, and hand off to a human.
- **Software engineering + AI** — web, mobile, backend, and internal tools, with AI used only where it earns its place.

Success is a qualified inbound conversation: a founder or business decision-maker who arrives, understands which of the two doors is theirs, and starts a project (`hello@graynest.co`, the contact form, or the live agent).

## Positioning

Four claims a neighbouring agency could not truthfully copy, all four binding:

- **Palestinian Arabic voice agents.** Agents that sound local — dialect, not MSA or generic TTS Arabic.
- **Agency and product team in one house.** The same team builds the agent and the software behind it, so the agent connects to real systems instead of sitting on top of them.
- **Senior engineers who stay until it works.** No junior churn, no handoff at launch. MVP in weeks; ownership through launch and after.
- **Built in Palestine, on purpose.** A local team and local economy are part of the offer, not a footnote.

## Operating Context

- Buyers evaluate on desktop and phone, often after hours, often before talking to anyone. The site is frequently the entire first meeting.
- The deciding moment for agents is hearing or reading one, not being told about one.
- Two distinct intents arrive at the same homepage and must be separated early: "answer my customers" vs "build my product".

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. shadcn/Base UI components, GSAP + ScrollTrigger, Lenis smooth scroll, Vercel Analytics. Deployed on Vercel; repo is linked to a v0 project that can push commits to `main`.
- Light and dark themes are both first-class, with a user-facing toggle and a pre-hydration theme script.
- The sitewide **Ask GrayNest** widget runs on `@elevenlabs/react` (Talk = voice, Chat = text) behind `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`. Optional `NEXT_PUBLIC_AGENT_PHONE` and `NEXT_PUBLIC_AGENT_WHATSAPP`.
- Media is addressed through a manifest (`content/media-manifest.json`, `content/media-assets.ts`) and rendered via `MediaSlot`; unfilled slots fall back to branded placeholders that still animate and theme-switch.
- Routes: `/`, `/ai-agents`, `/software-engineering`, `/contact`, `/privacy`, plus a 404. Offer landing pages in their own light world: `/clinics/[market]` (ps/jo/tr/en) and `/teardown/ar` + `/teardown/en` (`/teardown` redirects to Arabic). The homepage offer strip (`components/PromoBar.tsx`) currently points at the teardown.
- **Language:** the site ships in English only. The agents are bilingual — Palestinian Arabic and English. No Arabic RTL version of the site is required; do not build one unless the owner asks. The offer landing pages are the exception: they ship in Arabic (right-to-left) as well, because their campaigns run in Arabic.
- Contact channels are `hello@graynest.co` and `instagram.com/graynestcomp`. Phone and WhatsApp exist only when the env vars are set.

## Brand Commitments

- Name: **GrayNest**. Tagline territory in use: "Software, AI Agents".
- Logo assets are committed (`app/icon.png`, `app/apple-icon.png`, `public/`), including a dark-mode variant used in the footer.
- Voice: cinematic editorial, short and concrete, specific over promotional. The register to hold is the site's own best lines — "YOUR SHOP CLOSES AT 9. Your agent doesn't.", "Answers stock and price questions after closing, and reserves the item for the morning."
- Honesty is a brand commitment, not a preference: no invented numbers, no invented customers, nothing labelled live that is a mock. See `anti-slop/audit-001-2026-09-27.md`.

## Evidence on Hand

- **Real:** the ElevenLabs Ask GrayNest agent. It works and can be heard and read as the demo; it is the strongest proof the site has.
- **Real and cleared by the owner (2026-10-01):** the team's individual experience: each engineer has given development services to Nokia, Red Hat, Stella Stays, and 20+ startups (new and established). These are not GrayNest clients. Shown as type in `components/TrackRecord.tsx`, always framed as the engineers' own experience, never as GrayNest's client work, logos or endorsements. Add no other names without the owner.
- **Real but unpublishable today:** other client work, including named clients and case studies. Permission is not cleared. Future work must not publish client names, logos, project details or outcomes until the owner supplies them.
- **Does not exist — never fabricate:** statistics, user counts, uptime or performance figures, testimonials, press, awards, team headcount, pricing.
- The static chat card on `/ai-agents` labelled "LIVE DEMO" is a mock; it must not be presented as live (open finding in the audit).

## Product Principles

1. **Two doors, chosen early.** Every surface makes it obvious within one screen whether the visitor is here for agents or for a build, and lets them commit.
2. **Show, don't assert.** The agent is demonstrable; use it. Where nothing can be demonstrated, say less rather than claim more.
3. **Nothing unearned.** No number, name, logo or label the owner has not supplied. An honest absence beats a plausible invention.
4. **Local is the substance, not the sticker.** Palestine and Palestinian Arabic show up as capability and craft, not as a badge.
5. **Weeks, then stay.** Speed to something real, followed by ownership, is the promise the copy and the flow must both carry.

## Accessibility & Inclusion

- Keyboard and screen-reader basics are already in place (skip link, `lang`, theme-color per scheme) and must be preserved.
- All GSAP motion honours `prefers-reduced-motion`; the scroll-scrubbed film and reveals must keep a static, readable fallback.
- Both themes are shipped surfaces: contrast has to hold in light and dark, not just the one being designed in.
