---
version: 1
slug: "app-clinics-market-page-tsx"
primary_target: "app/clinics/[market]/page.tsx"
related_targets: []
---

# Clinics offer landing page

Scope: `/clinics/[market]` — one long-scroll sales landing page, generated per market (ps/jo/tr/en) in Arabic, English, Turkish. Visitor mode: **Persuade**. Replaces the former fixed A4 print sheet at this route; the static PDF/PNG collateral in `scripts/` is out of scope.

Audience: a clinic owner or office manager evaluating alone, usually on a phone, often after hours, before talking to anyone.
Job: understand in one screen that WhatsApp patients get booked, confirmed and reminded without their receptionist.
Action: message the real agent on WhatsApp (`Try the agent →`, wa.me), repeated down the page. Secondary: email / site.
Proof / content: the honest proof is that the WhatsApp number IS the live agent — message it and you meet exactly what a patient meets. No invented numbers, customers, testimonials, or stats (PRODUCT.md honesty commitment). The "see it working" thread is a labelled product demonstration, not claimed live data.
Constraints: light always, whatever the site theme; three languages with AR right-to-left; per-market pricing math stays in `content/clinics-onepager.ts`; the discount/validity dates are factual and dated.

## Direction contract

THESIS: This surface owns one idea — *message the front desk that never closes, and watch it book the patient in front of you.* It refuses the category default: the AI-feature-grid SaaS page (a wall of equal-weight feature cards, "AI-powered / intelligent / automation" repeated, every capability equally loud, contact-us as the only action). One outcome-led promise, one live conversation as the proof, one WhatsApp action carried the whole way down.

OWN-WORLD: Inherited light offer-sheet world, expanded to full page. Warm paper ground (#faf8f4 → #f6f4ef → #efece5), charcoal ink (#17171b) with alpha-tinted secondaries (never flat gray on tint), a single ember accent (#ea2e00, ink #c62700) spent once per viewport. Satoshi: black 900 uppercase display at −0.03em, exactly one light-italic ember counter-voice phrase per display headline; medium/regular body at 65–75ch. Hairline borders (ink 9–15% alpha), never boxes-as-structure and never a colored border above 1px. Depth from whitespace and one soft card shadow (real offset + blur), never stacked or same-size cards. Faint stroked-hexagon geometry as structural background only. The WhatsApp surface — white card, ember outbound bubble, paper inbound bubble, online dot — is the recurring product motif and the page's one elevated object.

STORY: A clinic owner on their phone after hours grasps within one screen that patients who message on WhatsApp get booked and reminded with no receptionist in the loop; believes it because the number on the page is the actual agent, messageable now; and messages it.

FIRST VIEWPORT: Left-weighted, asymmetric. Black uppercase two-line promise ("Every patient booked. / Every appointment confirmed.") with a light-italic ember third line ("On WhatsApp, around the clock."). One supporting sentence under it. One ember pill CTA "Try the agent →" and a quiet glass secondary beside it. A single hairline row of four proof markers (WhatsApp · 24/7 · their own dialect · live in 7 days). Right column: an elevated, live-feeling WhatsApp thread card — the only image in the viewport. Paper ground, faint hex field bleeding from the top corner, one ember radial bloom behind the card. Primary action sits at the end of the promise column, above the fold.

FORM: Long-scroll Persuade page with the brief-pinned section order — Promise → Problem (3 concrete) → See it working (animated WhatsApp thread, the centerpiece) → Outcomes (3, not a feature list) → How it works (3 steps, live in 7 days) → Proof (talk to the real thing) → Price (first month / then / setup + 4–5 included) then Guarantee → Final CTA ("Ready to stop losing patients on WhatsApp?"). Chosen directly from the pinned brief inside the settled world; no concept-seed roll, because the structure is brief-pinned and the visual world is inherited. Build path: code-led (project default). Seed key: n/a (brief-pinned).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
