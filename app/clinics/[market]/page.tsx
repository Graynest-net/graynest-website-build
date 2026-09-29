import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import {
  BellRing,
  CalendarCheck,
  CalendarX2,
  Clock3,
  Globe,
  Mail,
  MessageCircle,
  MessageCircleQuestion,
  MessageSquareReply,
  MoonStar,
  Repeat2,
  ShieldCheck,
  UserRoundCheck,
  Zap,
} from "lucide-react"
import { CONTACT, COPY, MARKETS, firstMonthPrice, formatPrice, type Market } from "@/content/clinics-onepager"
import { SheetFit } from "./SheetFit"
import styles from "./sheet.module.css"

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-plex-arabic",
})

const MARKET_LABELS: Record<Market, string> = {
  ps: "Palestine · ILS",
  jo: "Jordan · JOD",
  tr: "Türkiye · TRY",
  en: "English · USD",
}

const PROBLEM_ICONS = [MoonStar, CalendarX2, Repeat2]
const DOES_ICONS = [CalendarCheck, BellRing, MessageCircleQuestion, MessageSquareReply, UserRoundCheck, Clock3]

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(MARKETS).map((market) => ({ market }))
}

function isMarket(value: string): value is Market {
  return value in MARKETS
}

export async function generateMetadata({ params }: { params: Promise<{ market: string }> }): Promise<Metadata> {
  const { market } = await params
  if (!isMarket(market)) return {}
  const copy = COPY[MARKETS[market].lang]

  return {
    title: `GrayNest – ${copy.tag}`,
    description: copy.subhead,
    alternates: { canonical: `/clinics/${market}` },
    // Sales collateral with dated local prices: shared by link, kept out of search.
    robots: { index: false, follow: false },
  }
}

/**
 * Clinic one-pager: a single A4 sheet per market, printable and exportable.
 */
export default async function ClinicSheetPage({
  params,
  searchParams,
}: {
  params: Promise<{ market: string }>
  searchParams: Promise<{ export?: string; tools?: string }>
}) {
  const { market } = await params
  if (!isMarket(market)) notFound()

  const config = MARKETS[market]
  const copy = COPY[config.lang]
  const sp = await searchParams
  // Bare-sheet mode for the PNG/PDF exporter: no toolbar, no page padding, no scaling.
  const isExport = sp.export === "1"
  // The market switcher / download buttons are author tools, hidden from prospects. Add ?tools=1 to show them.
  const showTools = sp.tools === "1"
  const starter = config.prices.starter
  const firstMonth = firstMonthPrice(market)
  const starterIncludes = copy.tiers.find((t) => t.id === "starter")?.includes ?? copy.offerIncludes

  return (
    <main
      id="main"
      className={`${styles.page} ${isExport ? styles.export : ""} ${plexArabic.variable}`.trim()}
    >
      {showTools && (
      <nav className={styles.toolbar} aria-label="Sheet versions">
        <ul className={styles.toolbarMarkets}>
          {(Object.keys(MARKETS) as Market[]).map((m) => (
            <li key={m}>
              <a href={`/clinics/${m}`} aria-current={m === market ? "page" : undefined}>
                {MARKET_LABELS[m]}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.toolbarFiles}>
          <a href={`/clinics/graynest-clinics-${market}.pdf`} download>
            PDF
          </a>
          <a href={`/clinics/graynest-clinics-${market}.png`} download>
            PNG
          </a>
        </div>
      </nav>
      )}

      <SheetFit>
        <article
          className={styles.sheet}
          lang={config.lang}
          dir={copy.dir}
          data-lang={config.lang}
          data-sheet
          data-export={isExport ? "" : undefined}
        >
          <div className={styles.backdrop} aria-hidden="true">
            <svg className={styles.hexField} viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice">
              {HEXES.map(([cx, cy, r], i) => (
                <polygon key={i} points={hexPoints(cx, cy, r)} fill="none" stroke="rgba(22,22,26,0.05)" strokeWidth="1" />
              ))}
            </svg>
          </div>

          <header className={styles.header}>
            <img
              className={styles.logo}
              src="/brand/graynest-lockup-light.svg"
              alt="GrayNest"
              width={150}
              height={52}
            />
            <span className={styles.tag}>{copy.tag}</span>
          </header>

          <section className={styles.hero}>
            <div className={styles.heroText}>
              <h1 className={styles.headline}>
                {copy.headline.map((line) => (
                  <span key={line} className={styles.headlineLine}>
                    {line}
                  </span>
                ))}
                <span className={styles.headlineAccent}>{copy.headlineAccent}</span>
              </h1>
              <p className={styles.subhead}>{copy.subhead}</p>
              <span className={styles.heroFlag}>{copy.discountBadge}</span>
            </div>

            <figure className={styles.chatCard}>
              <figcaption className={styles.chatBar}>
                <span className={styles.chatAvatar} aria-hidden="true" />
                <span className={styles.chatName}>GrayNest</span>
                <span className={styles.chatStatus}>online</span>
              </figcaption>
              <p className={styles.bubbleIn}>{copy.chat.patient}</p>
              <p className={styles.bubbleOut}>{copy.chat.agent}</p>
            </figure>
          </section>

          <ul className={styles.problems}>
            {copy.problems.map((problem, i) => {
              const ProblemIcon = PROBLEM_ICONS[i]
              return (
                <li key={problem}>
                  <ProblemIcon className={styles.problemIcon} size={16} strokeWidth={1.75} aria-hidden="true" />
                  <span>{problem}</span>
                </li>
              )
            })}
          </ul>

          <section className={styles.block}>
            <h2 className={styles.label}>{copy.doesLabel}</h2>
            <ul className={styles.does}>
              {copy.does.map((item, i) => {
                const DoesIcon = DOES_ICONS[i]
                return (
                  <li key={item}>
                    <DoesIcon className={styles.doesIcon} size={15} strokeWidth={1.75} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className={styles.block}>
            <h2 className={styles.label}>{copy.startsLabel}</h2>
            <ol className={styles.steps}>
              {copy.steps.map((step, i) => (
                <li key={step.day} data-live={i === copy.steps.length - 1 ? "" : undefined}>
                  <span className={styles.stepNode} aria-hidden="true" />
                  <span className={styles.stepDay}>{step.day}</span>
                  <span className={styles.stepText}>{step.text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.guarantee}>
            <ShieldCheck className={styles.guaranteeIcon} size={30} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h2 className={styles.guaranteeTitle}>{copy.guaranteeTitle}</h2>
              <p className={styles.guaranteeText}>{copy.guaranteeText}</p>
            </div>
          </section>

          <section className={styles.offer} aria-label={copy.discountBadge}>
            <div className={styles.offerMain}>
              <span className={styles.discountBadge}>{copy.discountBadge}</span>
              <p className={styles.offerAmount}>
                <span className={styles.offerWas}>{formatPrice(starter.monthly, market)}</span>
                <span className={styles.offerMonthly}>{formatPrice(firstMonth, market)}</span>
                <span className={styles.offerFirstMonth}>{copy.firstMonthLabel}</span>
              </p>
              <p className={styles.offerAfter}>
                {copy.afterLabel} {formatPrice(starter.monthly, market)} {copy.perMonth} · +{" "}
                {formatPrice(starter.setup, market)} {copy.setupLabel}
              </p>
            </div>
            <div className={styles.offerDetail}>
              <span className={styles.offerLive}>
                <Zap size={13} strokeWidth={2.25} aria-hidden="true" />
                {copy.liveIn}
              </span>
              <p className={styles.offerIncludes}>{starterIncludes}</p>
              {copy.offerScope ? <p className={styles.offerScope}>{copy.offerScope}</p> : null}
              <p className={styles.validity}>
                {copy.validity}
                {copy.priceNote ? ` ${copy.priceNote}` : ""}
              </p>
            </div>
            <p className={styles.offerEnds}>{copy.offerEnds}</p>
          </section>

          <footer className={styles.cta}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>
                {copy.ctaTitle} <span className={styles.ctaAccent}>{copy.ctaAccent}</span>
              </h2>
              <p>{copy.ctaText}</p>
              <ul className={styles.contacts}>
                <li>
                  <MessageCircle size={14} strokeWidth={2} aria-hidden="true" />
                  <a href={CONTACT.whatsappUrl} dir="ltr">
                    {CONTACT.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <Mail size={14} strokeWidth={2} aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`} dir="ltr">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <Globe size={14} strokeWidth={2} aria-hidden="true" />
                  <a href={`https://${CONTACT.web}`} dir="ltr">
                    {CONTACT.web}
                  </a>
                </li>
              </ul>
            </div>
            <a className={styles.qr} href={CONTACT.whatsappUrl} aria-label={`WhatsApp ${CONTACT.whatsappDisplay}`}>
              <img src="/media/clinics.qr.whatsapp.svg" alt="" width={92} height={92} />
              <span>{copy.scanLabel}</span>
            </a>
          </footer>

          <p className={styles.smallPrint}>{copy.smallPrint}</p>
        </article>
      </SheetFit>
    </main>
  )
}

/** Soft background hexes as [cx, cy, radius], placed away from the text column. */
const HEXES: [number, number, number][] = [
  [690, 120, 170],
  [560, 330, 90],
  [770, 420, 120],
  [40, 610, 110],
  [720, 760, 80],
  [120, 1020, 150],
]

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`
  }).join(" ")
}
