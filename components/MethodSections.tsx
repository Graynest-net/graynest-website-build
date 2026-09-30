import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"

const METHOD = [
  {
    id: "scope",
    eyebrow: "01 · SCOPE BEFORE SPEND",
    title: ["PLAN FIRST.", "spend second."],
    body: "Before anything is built, we learn the problem, the users, and the constraints. You get a plan you can hold us to, and a clear picture of what it takes, before you commit to the build.",
    points: [
      "The problem, users and constraints, written down",
      "System design and data model, reviewed before build",
      "A plan with phases, so the first spend is the smallest one that proves it",
    ],
  },
  {
    id: "phase-1",
    eyebrow: "02 · PHASE-1 SHIP",
    title: ["SHIP PHASE ONE.", "then decide."],
    body: "The first phase is a working product in real hands, in weeks. The next decision comes from real usage, not slide decks.",
    points: [
      "Something working early, not a prototype behind glass",
      "We stay through the first wave of real usage",
      "Phase two is scoped from what phase one taught us",
    ],
  },
] as const

/**
 * The two-step buying method, as anchorable sections (#scope, #phase-1) that the
 * header links to.
 */
export function MethodSections() {
  return (
    <>
      {METHOD.map((step, index) => (
        <section
          key={step.id}
          id={step.id}
          className={`section-padding relative overflow-hidden border-t border-[var(--gn-line)] ${
            index === 1 ? "section-tint" : ""
          }`.trim()}
        >
          <div className="grid-12">
            <Reveal className="col-span-full lg:col-span-5 lg:self-start">
              <p className="micro mb-6 flex items-center gap-3">
                <CoreGlow size={12} /> {step.eyebrow}
              </p>
              <h2 className="h2">
                {step.title[0]}
                <br />
                <span className="accent-word">{step.title[1]}</span>
              </h2>
              <p className="body-lg mt-8 max-w-[48ch]">{step.body}</p>
            </Reveal>

            <Reveal className="col-span-full lg:col-span-7 mt-10 lg:mt-0" delay={0.1}>
              <ul className="method-points">
                {step.points.map((point, i) => (
                  <li key={point} className="method-point">
                    <span className="micro">{String(i + 1).padStart(2, "0")}</span>
                    <span className="body">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  )
}
