import type { ReactNode } from "react"
import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"
import { LogoMarquee } from "@/components/LogoMarquee"

// One-colour marks (currentColor) so they follow the theme. Paths from the official
// Nokia 2023 and Red Hat 2019 logos, and the Mashvisor site header logo.
const NokiaLogo = () => (
  <svg viewBox="0 0 338.667 79.687" className="track-record-logo" role="img" aria-label="Nokia" fill="currentColor">
    <path d="M114.194 1.145c-21.865 0-38.831 15.914-38.831 38.698 0 23.81 16.965 38.699 38.831 38.698s38.866-14.889 38.831-38.698c-.032-21.587-16.965-38.698-38.831-38.698zm0 10.654c15.258 0 27.627 11.484 27.627 28.044 0 16.867-12.369 28.045-27.627 28.045S86.567 56.709 86.567 39.843c0-16.561 12.369-28.044 27.627-28.044zm119.913-9.376v74.839h11.224V2.423zm-30.985 0l-41.655 37.419 41.655 37.42h16.702l-41.718-37.42 41.718-37.419zM296.843 0l-6.092 11.252 20.667 38.388h-41.447l-14.953 27.623h12.348l9.03-16.573h40.895l9.029 16.573h12.347zM0 0v77.263h11.455v-51.06L70.98 79.686V63.667z" />
  </svg>
)

const RedHatLogo = () => (
  <svg viewBox="0 0 613 145" className="track-record-logo" role="img" aria-label="Red Hat" fill="currentColor">
    <path d="M127.47 83.49c12.51 0 30.61-2.58 30.61-17.46a14 14 0 0 0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89 8.69 103.76.5 97.51.5 91.69.5 90 8 83.06 8c-6.68 0-11.64-5.6-17.89-5.6-6 0-9.91 4.09-12.93 12.5 0 0-8.41 23.72-9.49 27.16a6.43 6.43 0 0 0-.22 1.94c0 9.22 36.3 39.45 84.94 39.45M160 72.07c1.73 8.19 1.73 9.05 1.73 10.13 0 14-15.74 21.77-36.43 21.77-46.76.03-87.72-27.37-87.72-45.48a18.45 18.45 0 0 1 1.51-7.33C22.27 52 .5 55 .5 74.22c0 31.48 74.59 70.28 133.65 70.28 45.28 0 56.7-20.48 56.7-36.65 0-12.72-11-27.16-30.83-35.78" />
    <path d="M579.74 92.8c0 11.89 7.15 17.67 20.19 17.67a52.11 52.11 0 0 0 11.89-1.68V95a24.84 24.84 0 0 1-7.68 1.16c-5.37 0-7.36-1.68-7.36-6.73V68.3h15.56V54.1h-15.56v-18l-17 3.68V54.1h-11.29v14.2h11.25v24.5zm-53 .32c0-3.68 3.69-5.47 9.26-5.47a43.12 43.12 0 0 1 10.1 1.26v7.15a21.51 21.51 0 0 1-10.63 2.63c-5.46 0-8.73-2.1-8.73-5.57zm5.2 17.56c6 0 10.84-1.26 15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52 0-16.94 2-26 6.1l6.1 12.52c6.52-2.74 12-4.42 16.83-4.42 7 0 10.62 2.73 10.62 8.31v2.73a49.53 49.53 0 0 0-12.62-1.58c-14.31 0-22.93 6-22.93 16.73 0 9.78 7.78 17.24 20.19 17.24l.02-.03zm-92.46-.91h18.09V80.92h30.29v28.82H506V36.12h-18.07v28.29h-30.29V36.12h-18.09l-.07 73.65zm-68.86-27.9c0-8 6.31-14.1 14.62-14.1A17.22 17.22 0 0 1 397 72.09v19.45A16.36 16.36 0 0 1 385.24 96c-8.2 0-14.62-6.1-14.62-14.09v-.04zm26.61 27.91h16.83V32.44l-17 3.68v20.93a28.3 28.3 0 0 0-14.2-3.68c-16.19 0-28.92 12.51-28.92 28.5a28.25 28.25 0 0 0 28.4 28.6 25.12 25.12 0 0 0 14.93-4.83l-.04 4.14zM320 67c5.36 0 9.88 3.47 11.67 8.83h-23.2C310.15 70.3 314.36 67 320 67zm-28.67 15c0 16.2 13.25 28.82 30.28 28.82 9.36 0 16.2-2.53 23.25-8.42l-11.26-10c-2.63 2.74-6.52 4.21-11.14 4.21a14.39 14.39 0 0 1-13.68-8.83h39.65v-4.23c0-17.67-11.88-30.39-28.08-30.39a28.57 28.57 0 0 0-29 28.81l-.02.03zM262 51.58c6 0 9.36 3.78 9.36 8.31 0 4.53-3.36 8.31-9.36 8.31h-17.89V51.58H262zm-36 58.16h18.09V82.92h13.77l13.89 26.82H292l-16.2-29.45a22.27 22.27 0 0 0 13.88-20.72c0-13.25-10.41-23.45-26-23.45H226v73.62z" />
  </svg>
)

// Redrawn from the MonMedX raster logo: a split medical cross with a twisted DNA lens.
// One colour like the others; the two-tone wordmark survives as full and muted ink,
// and hovering it brings back the brand teal.
const MonMedXLogo = ({ id }: { id: string }) => (
  <svg viewBox="0 0 109 30" className="track-record-logo track-record-logo--monmedx" role="img" aria-label="MonMedX">
    <defs>
      <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
        <rect width="31" height="30" fill="#fff" />
        <rect x="0" y="13.9" width="31" height="1.3" fill="#000" />
        <path d="M14.2 3.8C18.6 4.4 24.6 8.6 25.6 13.7H9.9C9.8 9.6 11.2 5.8 14.2 3.8Z" fill="#000" />
        <path d="M4 15.4H22.6C22.4 19.6 20.4 23.6 16.6 25.6C12 24.8 6 20.4 4 15.4Z" fill="#000" />
        <g fill="none" stroke="#fff" strokeWidth="0.55" strokeLinecap="round" opacity="0.55">
          <path d="M13.4 5.6C13 9 17 8 18.4 10.4S22.6 12.4 24.4 13.2" />
          <path d="M11 11.4C14.6 9.6 15.4 12.6 18.2 12S21 8.6 20.2 6.6" />
          <path d="M5.4 16.4C8.4 17 9.6 19.6 12 19.4S15.6 21.6 15.8 24.4" />
          <path d="M8.6 20.6C9.6 18.2 12.6 18.4 14.4 17.6S19.4 16.8 21.6 16.2" />
        </g>
      </mask>
    </defs>
    <g className="mx-accent" fill="currentColor" mask={`url(#${id})`}>
      <rect x="7.6" y="0" width="15.6" height="30" rx="4.2" />
      <rect x="0" y="7.2" width="31" height="15.4" rx="4.2" />
    </g>
    <text x="35.5" y="20.4" fontSize="15.2" fontWeight="500" textLength="73" lengthAdjust="spacingAndGlyphs" className="track-record-svg-text">
      <tspan className="mx-accent mx-muted">MON</tspan>
      <tspan fill="currentColor">MED</tspan>
      <tspan className="mx-accent mx-muted">X</tspan>
    </text>
  </svg>
)

// Redrawn from the NoteGen logo: a notepad tile with a heartbeat trace beside the
// wordmark. One colour, with the notepad lines knocked out; teal returns on hover.
const NoteGenLogo = ({ id }: { id: string }) => (
  <svg viewBox="135 148 1493 260" className="track-record-logo track-record-logo--notegen" role="img" aria-label="NoteGen">
    <defs>
      <mask id={id} maskUnits="userSpaceOnUse" x="135" y="148" width="260" height="260">
        <rect x="135" y="148" width="260" height="260" fill="#fff" />
        <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
          <rect x="168" y="181" width="194" height="194" rx="26" strokeWidth="10" />
          <path d="M168 228H362" strokeWidth="9" />
          <path d="M207 171V187M245 171V187M284 171V187M322 171V187" strokeWidth="9" />
          <path d="M167 294H214L232 327L248 263L268 314L286 272L297 311L306 294H363" strokeWidth="11" />
        </g>
        <circle cx="167" cy="294" r="10" fill="#000" />
        <circle cx="363" cy="294" r="10" fill="#000" />
      </mask>
    </defs>
    <rect className="ng-accent" x="135" y="148" width="260" height="260" rx="46" fill="currentColor" mask={`url(#${id})`} />
    <text x="466" y="375" fontSize="286" fontWeight="900" textLength="1162" lengthAdjust="spacingAndGlyphs" fill="currentColor" className="track-record-svg-text">
      NoteGen
    </text>
  </svg>
)

// 1-Shift Logistics: heavy "1SHIFT" set tight against a light "LOGISTICS".
const OneShiftLogo = () => (
  <svg viewBox="0 5 116 20" className="track-record-logo" role="img" aria-label="1-Shift Logistics" fill="currentColor">
    <text x="0" y="20.2" fontSize="14.4" fontWeight="900" textLength="45" lengthAdjust="spacingAndGlyphs" className="track-record-svg-text">
      1SHIFT
    </text>
    <text x="46.2" y="20.2" fontSize="14.4" fontWeight="300" textLength="69.8" lengthAdjust="spacingAndGlyphs" className="track-record-svg-text">
      LOGISTICS
    </text>
  </svg>
)

// The symbol is a pin with the bars and arrow cut out of it, so it stays one colour.
const MashvisorLogo = () => (
  <svg viewBox="0 0 151 32" className="track-record-logo" style={{ height: "118%" }} role="img" aria-label="Mashvisor" fill="currentColor">
    <path d="M23.74 17a14.92 14.92 0 0 0 .55-1.72l.11-.5c.05-.25.09-.5.12-.76l.06-.42a12.76 12.76 0 0 0-.19-3.72A12.35 12.35 0 0 0 12.32 0 12.34 12.34 0 0 0 .06 13.6l.06.42c.03.26.07.51.12.76l.11.5A10.9 10.9 0 0 0 .9 17l.15.39v-.01a12.5 12.5 0 0 0 1.78 2.89 64.5 64.5 0 0 0 4.66 4.95c1.6 1.6 3.25 3.2 4.8 4.75l.03-.04.04.04c1.55-1.55 3.2-3.15 4.8-4.75a64.02 64.02 0 0 0 4.65-4.95 12.5 12.5 0 0 0 1.77-2.9l.02.02.14-.4Zm-2.97-3.85-.02.25-.08.52-.05.27a8.55 8.55 0 0 1-5.1 6.1l-.17.06a8.96 8.96 0 0 1-1.76.47c-.08 0-.17.03-.26.04a8.09 8.09 0 0 1-4.04-.51l-.17-.06a8.54 8.54 0 0 1-5.1-6.1l-.05-.28a9.5 9.5 0 0 1-.07-.52l-.03-.24a8.51 8.51 0 0 1 8.45-9.3 8.51 8.51 0 0 1 8.45 9.3Z" />
    <path d="M4.16 21.68h2.59v-7.22l-2.59 1.3v5.92ZM7.54 14.07v7.61h2.59v-4.53l-2.01-3.37-.58.29ZM10.91 21.68h2.6V16.4l-2.6 2.07v3.21ZM14.3 21.68h2.58v-8l-2.59 2.08v5.92ZM17.67 13.05v8.63h2.59l.77-7.07-2.51-2.24-.85.68Z" />
    <path d="m11.3 16.85 7.26-5.88 1.23 1.13L21.07 7l-5.54 1.18 1.15 1.05-4.68 3.8-2.44-3.94-6.84 3.44L4 14.7l4.54-2.3 2.76 4.46Z" />
    <path d="M18.02 30.24c0 .97-2.57 1.76-5.74 1.76-3.17 0-5.74-.79-5.74-1.76 0-.98 2.57-1.77 5.74-1.77 3.17 0 5.74.8 5.74 1.77Z" opacity="0.35" />
    <path d="m36.38 4.94 2.78 13.86h.06l2.82-13.86h5.82v19.63h-3.6V8.9h-.06l-3.47 15.67h-3.06L34.19 8.9h-.05v15.67h-3.62V4.94h5.86ZM58.25 4.94l5.17 19.63h-4.1l-.9-4.15h-5.2l-.9 4.15h-4.1l5.16-19.63h4.87Zm-.52 12.23-1.89-8.82h-.05l-1.89 8.82h3.83ZM66.86 19.02c0 .45.04.87.11 1.25.08.37.22.7.41.94.2.26.47.46.81.6.34.15.76.23 1.27.23.6 0 1.15-.2 1.63-.6.48-.39.72-1 .72-1.82 0-.44-.06-.82-.18-1.14a2.27 2.27 0 0 0-.58-.87 4.2 4.2 0 0 0-1.08-.7c-.45-.21-1-.43-1.66-.65-.87-.29-1.63-.61-2.27-.96a6.08 6.08 0 0 1-1.6-1.22c-.43-.47-.74-1-.94-1.62-.2-.62-.3-1.33-.3-2.14 0-1.94.54-3.39 1.61-4.34 1.08-.95 2.56-1.43 4.43-1.43.88 0 1.68.1 2.42.3.74.18 1.38.5 1.92.93.53.43.95.98 1.25 1.65.3.67.45 1.47.45 2.4v.55h-3.77c0-.93-.16-1.65-.5-2.16-.32-.5-.87-.75-1.63-.75-.44 0-.8.06-1.1.19-.29.13-.52.3-.7.5-.17.22-.29.46-.35.74-.07.27-.1.56-.1.85 0 .6.13 1.11.39 1.53.25.4.8.79 1.64 1.14l3.03 1.32c.75.33 1.36.67 1.83 1.03s.85.74 1.14 1.15c.28.41.48.87.59 1.36.1.5.16 1.05.16 1.65 0 2.07-.6 3.58-1.8 4.52-1.19.95-2.85 1.42-4.98 1.42-2.23 0-3.82-.48-4.77-1.46-.96-.97-1.44-2.36-1.44-4.18v-.8h3.94v.59ZM80.73 4.94v7.5h4.6v-7.5h3.93v19.63h-3.94v-8.72h-4.6v8.72H76.8V4.94h3.94ZM96.59 19.45h.08l2.9-14.51h4.07l-4.48 19.63H94.1L89.6 4.94h4.21l2.77 14.51ZM104.19 4.94h3.94v19.63h-3.94V4.94ZM113.13 19.02c0 .45.04.87.1 1.25a2.01 2.01 0 0 0 1.22 1.55c.34.14.77.22 1.28.22.6 0 1.14-.2 1.62-.6.48-.39.73-1 .73-1.82 0-.44-.06-.82-.18-1.14a2.27 2.27 0 0 0-.59-.87 4.2 4.2 0 0 0-1.08-.7c-.44-.21-1-.43-1.65-.65-.88-.29-1.64-.61-2.27-.96a6.08 6.08 0 0 1-1.6-1.22c-.43-.47-.75-1-.94-1.62-.2-.62-.3-1.33-.3-2.14 0-1.94.53-3.39 1.6-4.34 1.08-.95 2.56-1.43 4.44-1.43.87 0 1.68.1 2.42.3.73.18 1.37.5 1.91.93.54.43.96.98 1.26 1.65.3.67.45 1.47.45 2.4v.55h-3.77c0-.93-.17-1.65-.5-2.16-.33-.5-.87-.75-1.64-.75-.44 0-.8.06-1.1.19-.28.13-.52.3-.7.5-.16.22-.28.46-.35.74-.06.27-.1.56-.1.85 0 .6.13 1.11.39 1.53.26.4.8.79 1.64 1.14l3.03 1.32c.75.33 1.36.67 1.84 1.03.47.36.85.74 1.13 1.15.28.41.48.87.59 1.36.11.5.16 1.05.16 1.65 0 2.07-.6 3.58-1.79 4.52-1.2.95-2.85 1.42-4.99 1.42-2.22 0-3.81-.48-4.77-1.46-.96-.97-1.44-2.36-1.44-4.18v-.8h3.94v.59ZM122.85 10.64c.14-1.25.44-2.33.9-3.23.47-.9 1.14-1.6 2.01-2.1.88-.5 2.05-.76 3.53-.76s2.65.26 3.53.76c.87.5 1.55 1.2 2 2.1.47.9.78 1.98.91 3.23.14 1.26.2 2.63.2 4.11 0 1.5-.06 2.88-.2 4.13a9.05 9.05 0 0 1-.9 3.21 4.8 4.8 0 0 1-2.01 2.07c-.87.47-2.05.71-3.53.71a7.42 7.42 0 0 1-3.53-.71 4.79 4.79 0 0 1-2-2.07 9.13 9.13 0 0 1-.9-3.21c-.15-1.25-.21-2.62-.21-4.13 0-1.48.06-2.85.2-4.1Zm3.83 7.48c.06.93.19 1.68.38 2.25.2.58.47 1 .82 1.27.36.27.83.4 1.41.4a2.3 2.3 0 0 0 1.41-.4c.36-.27.63-.69.82-1.27.2-.57.32-1.32.38-2.25.07-.92.1-2.05.1-3.37 0-1.32-.03-2.43-.1-3.35a9.52 9.52 0 0 0-.38-2.25 2.5 2.5 0 0 0-.82-1.28 2.3 2.3 0 0 0-1.4-.4c-.6 0-1.06.14-1.42.4-.35.26-.63.7-.82 1.28a9.7 9.7 0 0 0-.38 2.25c-.07.92-.1 2.04-.1 3.35 0 1.32.03 2.45.1 3.37ZM144.44 4.94c1.64 0 2.91.42 3.83 1.25.9.84 1.36 2.1 1.36 3.8 0 1.33-.26 2.4-.79 3.24a3.67 3.67 0 0 1-2.46 1.6v.06c.98.15 1.7.47 2.16.96.45.5.74 1.3.85 2.4l.08 1.19.05 1.44c.04 1.05.1 1.84.17 2.4.1.54.34.92.7 1.12v.16h-4.26c-.2-.27-.32-.59-.38-.94-.06-.36-.1-.73-.11-1.12l-.11-3.76a3.1 3.1 0 0 0-.57-1.82c-.35-.44-.94-.66-1.76-.66h-2.1v8.3h-3.94V4.94h7.28Zm-1.7 8.58c.95 0 1.68-.23 2.2-.68.5-.44.76-1.2.76-2.26 0-1.82-.91-2.73-2.74-2.73h-1.86v5.67h1.64Z" />
  </svg>
)

// Marks are render functions: the marquee renders the row twice, and SVG mask ids must stay unique.
const RECORD: Array<{ key: string; mark: (copy: number) => ReactNode; note: string }> = [
  { key: "nokia", mark: () => <NokiaLogo />, note: "Telecom" },
  { key: "redhat", mark: () => <RedHatLogo />, note: "Enterprise open source" },
  { key: "mashvisor", mark: () => <MashvisorLogo />, note: "Real estate analytics" },
  { key: "monmedx", mark: (copy) => <MonMedXLogo id={`monmedx-cut-${copy}`} />, note: "Healthcare platform" },
  { key: "notegen", mark: (copy) => <NoteGenLogo id={`notegen-cut-${copy}`} />, note: "Clinical AI notes" },
  { key: "1shift", mark: () => <OneShiftLogo />, note: "Logistics startup" },
  { key: "startups", mark: () => <span className="track-record-name">11+ startups</span>, note: "New and established" },
]

/**
 * The team's experience. These are brands our engineers built for individually,
 * not GrayNest clients, so the copy never implies GrayNest shipped for them.
 * The row loops as an endless, draggable marquee; the second copy is hidden from assistive tech.
 */
export function TrackRecord() {
  return (
    <section
      aria-labelledby="track-record-title"
      className="track-record relative border-t border-[var(--gn-line)]"
    >
      <div className="grid-12">
        <Reveal className="col-span-full">
          <p className="micro mb-4 flex items-center gap-3">
            <CoreGlow size={12} /> TEAM EXPERIENCE
          </p>
          <h2 id="track-record-title" className="body max-w-[52ch]">
            Between them, the engineers behind GrayNest have built software for global
            brands and for more than ten startups, new and established.
          </h2>
        </Reveal>
      </div>

      <Reveal className="track-record-marquee mt-8" delay={0.1}>
        <LogoMarquee>
          {[0, 1].map((copy) => (
            <ul key={copy} className="track-record-list" aria-hidden={copy === 1 || undefined}>
              {RECORD.map((item) => (
                <li key={item.key} className="track-record-item">
                  <span className="track-record-mark">{item.mark(copy)}</span>
                  <span className="micro">{item.note}</span>
                </li>
              ))}
            </ul>
          ))}
        </LogoMarquee>
      </Reveal>
    </section>
  )
}
