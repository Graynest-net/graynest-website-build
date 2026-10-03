import type { ReactNode } from "react"
import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"

// One-colour marks (currentColor) so they follow the theme. Paths from the official
// Nokia 2023 and Red Hat 2019 logos.
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

const RECORD: Array<{ key: string; mark: ReactNode; note: string }> = [
  { key: "nokia", mark: <NokiaLogo />, note: "Telecom" },
  { key: "redhat", mark: <RedHatLogo />, note: "Enterprise open source" },
  { key: "startups", mark: <span className="track-record-name">20+ startups</span>, note: "New and established" },
]

// Circular animated badges. Drop the real logo files in /public/logos and set `src`;
// until then the badge shows the monogram.
const BADGES: Array<{ key: string; name: string; mono: string; src?: string }> = [
  { key: "monmedx", name: "MonMedX", mono: "MM" },
  { key: "notegen", name: "Notegen.ai", mono: "N" },
  { key: "litelink", name: "Litelink Labs", mono: "LL" },
  { key: "1shift", name: "1-Shift", mono: "1S" },
]

function CircleLogo({ name, mono, src }: { name: string; mono: string; src?: string }) {
  return (
    <li className="orbit-logo">
      <span className="orbit-logo-disc">
        <span className="orbit-logo-ring" aria-hidden="true" />
        <span className="orbit-logo-ring orbit-logo-ring--rev" aria-hidden="true" />
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={name} className="orbit-logo-img" />
        ) : (
          <span className="orbit-logo-mono" aria-hidden="true">{mono}</span>
        )}
      </span>
      <span className="micro">{name}</span>
    </li>
  )
}

/**
 * The team's experience. These are brands our engineers built for individually,
 * not GrayNest clients, so the copy never implies GrayNest shipped for them.
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
              <li key={item.key} className="track-record-item">
                <span className="track-record-mark">{item.mark}</span>
                <span className="micro">{item.note}</span>
              </li>
            ))}
          </ul>
          <ul className="orbit-logo-list" aria-label="More companies">
            {BADGES.map((b) => (
              <CircleLogo key={b.key} name={b.name} mono={b.mono} src={b.src} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
