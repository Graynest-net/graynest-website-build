import { ArrowRight, Globe, Mail, MessageCircle } from "lucide-react"
import { CONTACT } from "@/content/clinics-onepager"
import { TEARDOWN_COPY, TEARDOWN_LANGS, teardownWhatsappUrl, type TeardownLang } from "@/content/teardown"
import { Reveal } from "@/components/offer/Reveal"
import styles from "./TeardownPage.module.css"

/**
 * App Teardown landing page. One page, one action: send the link on WhatsApp.
 * Lives in the same light offer-sheet world as the clinics page; `fontClass`
 * carries the Arabic faces, which only the Arabic route loads.
 */
export function TeardownPage({ lang, fontClass = "" }: { lang: TeardownLang; fontClass?: string }) {
  const copy = TEARDOWN_COPY[lang]
  const whatsapp = teardownWhatsappUrl(lang)
  const other = TEARDOWN_LANGS.find((entry) => entry.lang !== lang)

  return (
    <main
      id="main"
      className={`${styles.page} ${fontClass}`.trim()}
      lang={lang}
      dir={copy.dir}
      data-lang={lang}
      data-teardown
    >
      <div className={styles.field} aria-hidden="true">
        <svg className={styles.hexField} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          {HEXES.map(([cx, cy, r], i) => (
            <polygon key={i} points={hexPoints(cx, cy, r)} fill="none" stroke="rgba(23,23,27,0.05)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="/">
          <img src="/brand/graynest-lockup-light.svg" alt="GrayNest" width={132} height={46} />
        </a>
        <span className={styles.tag}>{copy.tag}</span>
        {other ? (
          <a className={styles.langSwitch} href={other.href} lang={other.lang} hrefLang={other.lang}>
            {other.label}
          </a>
        ) : null}
        <a className={styles.headerCta} href={whatsapp} data-event="teardown_whatsapp_header">
          <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
          {copy.primaryCta}
        </a>
      </header>

      {/* ---------- Hero: the offer ---------- */}
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
            <a className={styles.ctaPrimary} href={whatsapp} data-event="teardown_whatsapp_hero">
              {copy.primaryCta}
              <ArrowRight className={styles.ctaArrow} size={18} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a className={styles.ctaGhost} href="#what-we-check">
              {copy.secondaryCta}
            </a>
          </div>
          <ul className={styles.proofRow}>
            {copy.proofChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        {/* What arrives: the recording and the written summary, drawn as wireframes
            so nothing on it reads as a real finding. */}
        <div className={styles.heroCard}>
          <figure className={styles.reportCard} aria-label={`${copy.cardRecording} · ${copy.cardSummary}`}>
            <figcaption className={styles.reportBar}>
              <span className={styles.recDot} aria-hidden="true" />
              <span className={styles.reportLabel}>{copy.cardRecording}</span>
              <span className={styles.reportTime} dir="ltr">
                15:00
              </span>
            </figcaption>
            <TeardownScene />
            <div className={styles.summary}>
              <p className={styles.summaryLabel}>{copy.cardSummary}</p>
              <ol className={styles.summaryList} aria-hidden="true">
                {[100, 78, 56].map((width, i) => (
                  <li key={width}>
                    <span className={styles.summaryNum}>{i + 1}</span>
                    <span className={styles.summaryBar} style={{ width: `${width}%` }} />
                  </li>
                ))}
              </ol>
              <p className={styles.summaryNote}>{copy.cardSummaryNote}</p>
            </div>
          </figure>
        </div>
      </section>

      {/* ---------- What a teardown is ---------- */}
      <Reveal as="section" className={styles.what}>
        <h2 className={styles.sectionTitle}>
          {copy.whatTitle} <span className={styles.accent}>{copy.whatTitleAccent}</span>
        </h2>
        <p className={styles.whatText}>{copy.whatText}</p>
      </Reveal>

      {/* ---------- What we check ---------- */}
      <section className={styles.checks} id="what-we-check">
        <Reveal as="h2" className={styles.sectionTitle}>
          {copy.checksTitle} <span className={styles.accent}>{copy.checksTitleAccent}</span>
        </Reveal>
        <ol className={styles.checkList}>
          {copy.checks.map((check, i) => (
            <Reveal as="li" key={check.title} delay={i * 60}>
              <span className={styles.checkNum} dir="ltr">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.checkTitle}>{check.title}</h3>
              <p className={styles.checkText}>{check.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- What you get ---------- */}
      <section className={styles.gets}>
        <Reveal as="h2" className={styles.sectionTitle}>
          {copy.getsTitle} <span className={styles.accent}>{copy.getsTitleAccent}</span>
        </Reveal>
        <div className={styles.getGrid}>
          {copy.gets.map((item, i) => (
            <Reveal key={item.title} className={styles.get} delay={i * 80}>
              <h3 className={styles.getTitle}>{item.title}</h3>
              <p className={styles.getText}>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Who it is for ---------- */}
      <section className={styles.fit}>
        <Reveal as="h2" className={styles.sectionTitle}>
          {copy.fitTitle} <span className={styles.accent}>{copy.fitTitleAccent}</span>
        </Reveal>
        <div className={styles.fitGrid}>
          <Reveal className={styles.fitFor}>
            <h3 className={styles.fitLabel}>{copy.fitForLabel}</h3>
            <p className={styles.fitText}>{copy.fitForText}</p>
          </Reveal>
          <Reveal className={styles.fitNot} delay={80}>
            <h3 className={styles.fitLabel}>{copy.fitNotLabel}</h3>
            <ul className={styles.fitList}>
              {copy.fitNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why it is free ---------- */}
      <Reveal as="section" className={styles.why}>
        <h2 className={styles.sectionTitle}>
          {copy.whyTitle} <span className={styles.accent}>{copy.whyTitleAccent}</span>
        </h2>
        <div className={styles.whyBody}>
          <p className={styles.whyText}>{copy.whyText}</p>
          <p className={styles.whyAfter}>{copy.whyAfter}</p>
        </div>
      </Reveal>

      {/* ---------- Final CTA ---------- */}
      <Reveal as="section" className={styles.final}>
        <div className={styles.finalText}>
          <h2 className={styles.finalTitle}>
            {copy.finalTitle} <span className={styles.accent}>{copy.finalAccent}</span>
          </h2>
          <p className={styles.finalNote}>{copy.finalText}</p>
          <a className={styles.ctaPrimary} href={whatsapp} data-event="teardown_whatsapp_final">
            {copy.finalCta}
            <ArrowRight className={styles.ctaArrow} size={18} strokeWidth={2.25} aria-hidden="true" />
          </a>
          <ul className={styles.contacts}>
            <li>
              <Mail size={14} strokeWidth={2} aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} dir="ltr" data-event="teardown_email">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <Globe size={14} strokeWidth={2} aria-hidden="true" />
              <a href="/" dir="ltr">
                {CONTACT.web}
              </a>
            </li>
          </ul>
        </div>

        <a className={styles.qr} href={whatsapp} aria-label={`WhatsApp ${CONTACT.whatsappDisplay}`}>
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

/**
 * The campaign illustration: a site window and a phone under a magnifier.
 * Wireframe only, so it works unchanged in both reading directions.
 */
function TeardownScene() {
  const ink = "rgba(23,23,27,"
  return (
    <svg className={styles.scene} viewBox="0 0 400 250" aria-hidden="true">
      {/* Site window */}
      <rect x="18" y="18" width="250" height="176" rx="16" fill="#fff" stroke={`${ink}0.22)`} strokeWidth="2" />
      <line x1="18" y1="52" x2="268" y2="52" stroke={`${ink}0.14)`} strokeWidth="2" />
      <circle cx="40" cy="35" r="5" fill={`${ink}0.18)`} />
      <circle cx="58" cy="35" r="5" fill={`${ink}0.18)`} />
      <circle cx="76" cy="35" r="5" fill={`${ink}0.18)`} />
      <rect x="40" y="74" width="120" height="13" rx="6.5" fill={`${ink}0.28)`} />
      <rect x="40" y="100" width="170" height="9" rx="4.5" fill={`${ink}0.16)`} />
      <rect x="40" y="118" width="140" height="9" rx="4.5" fill={`${ink}0.1)`} />
      <rect x="40" y="146" width="78" height="26" rx="13" fill={`${ink}0.34)`} />
      {/* Phone */}
      <rect x="244" y="64" width="112" height="174" rx="24" fill="#fff" stroke={`${ink}0.22)`} strokeWidth="2" />
      <rect x="282" y="76" width="36" height="7" rx="3.5" fill={`${ink}0.16)`} />
      <rect x="262" y="108" width="76" height="9" rx="4.5" fill={`${ink}0.2)`} />
      <rect x="262" y="126" width="54" height="9" rx="4.5" fill={`${ink}0.12)`} />
      <rect x="262" y="160" width="76" height="9" rx="4.5" fill={`${ink}0.2)`} />
      <rect x="262" y="178" width="46" height="9" rx="4.5" fill={`${ink}0.12)`} />
      {/* Magnifier: the one ember mark on the card */}
      <circle cx="176" cy="168" r="54" fill="rgba(234,46,0,0.07)" />
      <circle cx="176" cy="168" r="38" fill="rgba(255,255,255,0.72)" stroke="#ea2e00" strokeWidth="4" />
      <line x1="204" y1="196" x2="232" y2="224" stroke="#ea2e00" strokeWidth="7" strokeLinecap="round" />
      <polygon points={hexPoints(176, 168, 15)} fill="#ea2e00" />
    </svg>
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
