import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"

const RECORD = [
  { name: "Nokia", note: "Telecom" },
  { name: "Red Hat", note: "Enterprise open source" },
  { name: "Stella Stays", note: "Hospitality" },
  { name: "20+ startups", note: "New and established" },
] as const

/**
 * The team's experience, set in type rather than as a logo wall. These are brands
 * our engineers built for individually, not GrayNest clients, so no brand marks
 * and no copy that implies GrayNest shipped for them.
 */
export function TrackRecord() {
  return (
    <section
      aria-labelledby="track-record-title"
      className="track-record relative border-t border-[var(--gn-line)]"
    >
      <div className="grid-12">
        <Reveal className="col-span-full lg:col-span-4">
          <p className="micro mb-4 flex items-center gap-3">
            <CoreGlow size={12} /> TEAM EXPERIENCE
          </p>
          <h2 id="track-record-title" className="body max-w-[38ch]">
            Between them, the engineers behind GrayNest have built software for global
            brands and for more than twenty startups, new and established.
          </h2>
        </Reveal>

        <Reveal className="col-span-full lg:col-span-8 mt-8 lg:mt-0" delay={0.1}>
          <ul className="track-record-list">
            {RECORD.map((item) => (
              <li key={item.name} className="track-record-item">
                <span className="track-record-name">{item.name}</span>
                <span className="micro">{item.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
