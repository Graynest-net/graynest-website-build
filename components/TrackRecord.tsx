import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"

const RECORD = [
  { name: "Nokia", note: "Telecom" },
  { name: "Red Hat", note: "Enterprise open source" },
  { name: "Stella Stays", note: "Hospitality" },
  { name: "20+ startups", note: "New and established" },
] as const

/**
 * The team's track record, set in type rather than as a logo wall: the names are
 * where our engineers have shipped, not endorsements, so no brand marks.
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
            <CoreGlow size={12} /> TRACK RECORD
          </p>
          <h2 id="track-record-title" className="body max-w-[38ch]">
            Our team has shipped software for global brands and for more than twenty
            startups, from first release to long-running products.
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
