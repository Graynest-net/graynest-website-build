import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import { ArrowRight, Globe, Mail, MessageCircle, ShieldCheck } from "lucide-react"
import { CONTACT, COPY, MARKETS, firstMonthPrice, formatPrice, type Market } from "@/content/clinics-onepager"
import { ChatDemo } from "./ChatDemo"
import { Reveal } from "./Reveal"
import styles from "./page.module.css"

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-plex-arabic",
})

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
    title: `GrayNest — ${copy.headline.join(" ")} ${copy.headlineAccent}`,
    description: copy.subhead,
    alternates: { canonical: `/clinics/${market}` },
    // Sales page with dated local prices: shared by link, kept out of search.
    robots: { index: false, follow: false },
  }
}

export default async function ClinicOfferPage({
  params,
}: {
  params: Promise<{ market: string }>
}) {
  const { market } = await params
  if (!isMarket(market)) notFound()

  const config = MARKETS[market]
  const copy = COPY[config.lang]
  const starter = config.prices.starter
  const firstMonth = firstMonthPrice(market)
  // Hero snapshot: the patient's ask and the agent's instant answer.
  const teaser = copy.thread.slice(0, 2)

  return (
    <main
      id="main"
      className={`${styles.page} ${plexArabic.variable}`.trim()}
      lang={config.lang}
      dir={copy.dir}
      data-lang={config.lang}
      data-clinic
    >
      <div className={styles.field} aria-hidden="true">
        <svg className={styles.hexField} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          {HEXES.map(([cx, cy, r], i) => (
            <polygon key={i} points={hexPoints(cx, cy, r)} fill="none" stroke="rgba(23,23,27,0.05)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="https://graynest.co">
          <img src="/brand/graynest-lockup-light.svg" alt="GrayNest" width={132} height={46} />
        </a>
        <span className={styles.tag}>{copy.tag}</span>
        <a className={styles.headerCta} href={CONTACT.whatsappUrl}>
          <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
          {copy.primaryCta}
        </a>
      </header>

      {/* ---------- Hero: the promise ---------- */}
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
          <div className={styles.heroActions}>
            <a className={styles.ctaPrimary} href={CONTACT.whatsappUrl}>
              {copy.primaryCta}
              <ArrowRight className={styles.ctaArrow} size={18} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a className={styles.ctaGhost} href="#see-it-working">
              {copy.secondaryCta}
            </a>
          </div>
          <ul className={styles.proofRow}>
            {copy.proofChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.heroCard}>
          <figure className={styles.chatCard} data-static>
            <figcaption className={styles.chatBar}>
              <span className={styles.chatAvatar} aria-hidden="true" />
              <span className={styles.chatMeta}>
                <span className={styles.chatName}>GrayNest</span>
                <span className={styles.chatStatus}>{copy.chatOnline}</span>
              </span>
            </figcaption>
            <div className={styles.chatThread}>
              {teaser.map((msg, i) => (
                <p key={i} className={msg.from === "agent" ? styles.bubbleOut : styles.bubbleIn}>
                  {msg.text}
                </p>
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <Reveal as="section" className={styles.problem}>
        <h2 className={styles.problemTitle}>{copy.problemTitle}</h2>
        <ul className={styles.problemList}>
          {copy.problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </Reveal>

      {/* ---------- See it working: the demonstration ---------- */}
      <section className={styles.demo} id="see-it-working">
        <Reveal className={styles.demoText}>
          <h2 className={styles.sectionTitle}>
            {copy.demoTitle} <span className={styles.accent}>{copy.demoTitleAccent}</span>
          </h2>
          <p className={styles.demoCaption}>{copy.demoCaption}</p>
          <p className={styles.demoNote}>{copy.demoNote}</p>
          <a className={styles.ctaPrimary} href={CONTACT.whatsappUrl}>
            {copy.primaryCta}
            <ArrowRight className={styles.ctaArrow} size={18} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className={styles.demoStage}>
          <ChatDemo
            thread={copy.thread}
            name="GrayNest"
            online={copy.chatOnline}
            typing={copy.chatTyping}
            replay={copy.chatReplay}
          />
        </Reveal>
      </section>

      {/* ---------- Outcomes ---------- */}
      <section className={styles.outcomes}>
        <Reveal as="h2" className={styles.sectionTitle}>
          {copy.outcomesLabel}
        </Reveal>
        <div className={styles.outcomeGrid}>
          {copy.outcomes.map((outcome, i) => (
            <Reveal key={outcome.title} className={styles.outcome} delay={i * 80}>
              <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
              <p className={styles.outcomeText}>{outcome.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className={styles.steps}>
        <Reveal className={styles.stepsHead}>
          <h2 className={styles.sectionTitle}>{copy.stepsTitle}</h2>
        </Reveal>
        <ol className={styles.stepList}>
          {copy.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 80}>
              <span className={styles.stepNum}>{step.n}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- Proof ---------- */}
      <Reveal as="section" className={styles.proof}>
        <h2 className={styles.proofTitle}>
          {copy.proofTitle} <span className={styles.accent}>{copy.proofTitleAccent}</span>
        </h2>
        <p className={styles.proofText}>{copy.proofText}</p>
        <a className={styles.ctaPrimary} href={CONTACT.whatsappUrl}>
          {copy.primaryCta}
          <ArrowRight className={styles.ctaArrow} size={18} strokeWidth={2.25} aria-hidden="true" />
        </a>
      </Reveal>

      {/* ---------- Price + guarantee ---------- */}
      <section className={styles.pricing}>
        <Reveal className={styles.priceCard}>
          <div className={styles.priceHead}>
            <span className={styles.discountBadge}>{copy.discountBadge}</span>
          </div>
          <p className={styles.priceAmount}>
            <span className={styles.priceWas}>{formatPrice(starter.monthly, market)}</span>
            <span className={styles.priceNow}>{formatPrice(firstMonth, market)}</span>
            <span className={styles.priceUnit}>{copy.firstMonthLabel}</span>
          </p>
          <p className={styles.priceAfter}>
            {copy.afterLabel} {formatPrice(starter.monthly, market)} {copy.perMonth} · + {formatPrice(starter.setup, market)}{" "}
            {copy.setupLabel}
          </p>
          <ul className={styles.includes}>
            {copy.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {copy.offerScope ? <p className={styles.priceScope}>{copy.offerScope}</p> : null}
          <div className={styles.priceMeta}>
            <span className={styles.offerEnds}>{copy.offerEnds}</span>
            <span className={styles.validity}>
              {copy.validity}
              {copy.priceNote ? ` ${copy.priceNote}` : ""}
            </span>
          </div>
        </Reveal>

        <Reveal className={styles.guarantee}>
          <ShieldCheck className={styles.guaranteeIcon} size={26} strokeWidth={1.75} aria-hidden="true" />
          <h3 className={styles.guaranteeTitle}>{copy.guaranteeTitle}</h3>
          <p className={styles.guaranteeText}>{copy.guaranteeText}</p>
        </Reveal>
      </section>

      {/* ---------- Final CTA ---------- */}
      <Reveal as="section" className={styles.final}>
        <div className={styles.finalText}>
          <h2 className={styles.finalTitle}>
            {copy.finalTitle} <span className={styles.accent}>{copy.finalAccent}</span>
          </h2>
          <a className={styles.ctaPrimary} href={CONTACT.whatsappUrl}>
            {copy.finalCta}
            <ArrowRight className={styles.ctaArrow} size={18} strokeWidth={2.25} aria-hidden="true" />
          </a>
          <ul className={styles.contacts}>
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
          <img src="/media/clinics.qr.whatsapp.svg" alt="" width={104} height={104} />
          <span>{copy.scanLabel}</span>
        </a>
      </Reveal>

      <footer className={styles.footer}>
        <p className={styles.smallPrint}>{copy.smallPrint}</p>
      </footer>
    </main>
  )
}

/** Soft background hexes as [cx, cy, radius], placed toward the corners. */
const HEXES: [number, number, number][] = [
  [1300, 120, 220],
  [1180, 470, 120],
  [80, 260, 150],
  [180, 760, 110],
]

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`
  }).join(" ")
}
