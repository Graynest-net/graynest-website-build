import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"
import { MediaSlot } from "@/components/MediaSlot"

const PLAN = {
  id: "scope",
  eyebrow: "01 · SCOPE BEFORE SPEND",
  title: ["PLAN FIRST.", "spend second."],
  body: "Before anything is built, we learn the problem, the users, and the constraints. You get a plan you can hold us to, and a clear picture of what it takes, before you commit to the build.",
  points: [
    "The problem, users and constraints, written down",
    "System design and data model, reviewed before build",
    "A plan with phases, so the first spend is the smallest one that proves it",
  ],
  mediaId: "method.plan.workflow",
  alt: "Three windows from the planning workflow: a design tool with onboarding screens laid out, a knowledge base page explaining how meal plans work, and a weekly plan board for week 41",
} as const

const SHIP = {
  id: "phase-1",
  eyebrow: "02 · PHASE-1 SHIP",
  title: ["SHIP PHASE ONE.", "then decide."],
  body: "The first phase is a working product in real hands, in weeks. The next decision comes from real usage, not slide decks.",
  points: [
    "Something working early, not a prototype behind glass",
    "We stay through the first wave of real usage",
    "Phase two is scoped from what phase one taught us",
  ],
  mediaId: "method.ship.web",
  alt: "The NutriFit web app in a browser, open on a consultation: body composition measurements beside the patient's health context",
  caption: "NutriFit's platform for nutritionists, built by GrayNest.",
} as const

/**
 * The two-step buying method, as anchorable sections (#scope, #phase-1) that the
 * header links to. The two steps are deliberately laid out differently so they
 * don't read as one repeated block.
 */
export function MethodSections() {
  return (
    <>
      {/* Plan: copy beside the planning workflow, then the steps as a sequence across the width. */}
      <section
        id={PLAN.id}
        className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]"
      >
        <div className="grid-12 items-center">
          <Reveal className="col-span-full lg:col-span-5">
            <p className="micro mb-6 flex items-center gap-3">
              <CoreGlow size={12} /> {PLAN.eyebrow}
            </p>
            <h2 className="h2">
              {PLAN.title[0]}
              <br />
              <span className="accent-word">{PLAN.title[1]}</span>
            </h2>
            <p className="body-lg mt-8 max-w-[48ch]">{PLAN.body}</p>
          </Reveal>

          <Reveal className="col-span-full lg:col-span-7 mt-10 lg:mt-0" delay={0.1}>
            <MediaSlot id={PLAN.mediaId} type="image" aspect="4:3" register="system" alt={PLAN.alt} />
          </Reveal>

          <Reveal className="col-span-full mt-10 md:mt-12" delay={0.15}>
            <ol className="method-steps">
              {PLAN.points.map((point, i) => (
                <li key={point} className="method-step">
                  <span className="method-step-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="body">{point}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Ship: copy across the top, then the product shot running off the section's bottom edge. */}
      <section
        id={SHIP.id}
        className="section-padding method-ship relative overflow-hidden border-t border-[var(--gn-line)] section-tint"
      >
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5">
            <p className="micro mb-6 flex items-center gap-3">
              <CoreGlow size={12} /> {SHIP.eyebrow}
            </p>
            <h2 className="h2">
              {SHIP.title[0]}
              <br />
              <span className="accent-word">{SHIP.title[1]}</span>
            </h2>
          </Reveal>

          <Reveal className="col-span-full lg:col-span-7 mt-8 lg:mt-0" delay={0.1}>
            <p className="body-lg max-w-[54ch]">{SHIP.body}</p>
            <ul className="method-points mt-8">
              {SHIP.points.map((point, i) => (
                <li key={point} className="method-point">
                  <span className="micro">{String(i + 1).padStart(2, "0")}</span>
                  <span className="body">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="col-span-full mt-10 md:mt-14" delay={0.15}>
            <figure className="method-ship-shot">
              <figcaption className="micro mb-4">{SHIP.caption}</figcaption>
              <MediaSlot id={SHIP.mediaId} type="image" aspect="1600:1117" register="system" alt={SHIP.alt} />
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  )
}
