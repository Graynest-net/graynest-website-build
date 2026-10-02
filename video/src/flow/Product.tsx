import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { C, FONT, liquid, TINT } from "../brand";
import { bounce, bounceIn, EI, EIO, EO, k, mix } from "../motion";
import { At } from "./Camera";

/** The product lives at world (900, 0). Everything below is in its local coordinates. */
export const PRODUCT_X = 900;

type Rect = { x: number; y: number; w: number; h: number; r: number };

// Where each keyword sits in the chat (world), so the card bursts out of the right word.
const FROM: Array<[number, number]> = [
  [-270, 62], // "Booking"
  [300, -100], // "WhatsApp"
  [-60, 62], // "reminders"
  [106, 62], // "Live"
];
const LABELS = ["Booking flow", "WhatsApp API", "Reminders", "Launch"];
const SLOT_X = [-450, -150, 150, 450];

// The same four blocks once they become the phone's UI.
const PHONE: Rect[] = [
  { x: -50, y: -290, w: 220, h: 36, r: 10 }, // header
  { x: 0, y: -145, w: 320, h: 200, r: 24 }, // calendar
  { x: 0, y: 40, w: 320, h: 110, r: 20 }, // reminder
  { x: 0, y: 290, w: 320, h: 72, r: 36 }, // button
];
// Build: when each block turns from wireframe into real UI (a code line lands).
export const FILL_AT = [288, 300, 311, 322];
// Test: when the scan beam passes each block.
const CHECK_AT = [356, 361, 368, 379];

const flyStart = (i: number) => 86 + i * 3;
const flyEnd = (i: number) => 116 + i * 3;
const morphStart = (i: number) => 172 + i * 4;

const blockRect = (i: number, f: number): Rect => {
  const [fx, fy] = FROM[i];
  const start: Rect = { x: fx - PRODUCT_X, y: fy, w: 190, h: 60, r: 30 };
  const slot: Rect = { x: SLOT_X[i], y: -20, w: 260, h: 120, r: 22 };
  const fly = k(f, [flyStart(i), flyEnd(i)], [0, 1], EIO);
  const morph = k(f, [morphStart(i), morphStart(i) + 26], [0, 1], EIO);
  const a = {
    x: mix(start.x, slot.x, fly),
    y: mix(start.y, slot.y, fly) - Math.sin(Math.PI * fly) * 220, // arc
    w: mix(start.w, slot.w, fly),
    h: mix(start.h, slot.h, fly),
    r: mix(start.r, slot.r, fly),
  };
  const p = PHONE[i];
  return { x: mix(a.x, p.x, morph), y: mix(a.y, p.y, morph), w: mix(a.w, p.w, morph), h: mix(a.h, p.h, morph), r: mix(a.r, p.r, morph) };
};

export const Product: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (f < flyStart(0)) return null;

  // Test → ship: squash, launch, stretch, land with a bounce.
  const squash = k(f, [402, 412], [0, 1], EO) * (1 - k(f, [414, 418], [0, 1]));
  const stretch = k(f, [414, 420, 436, 446], [0, 1, 1, 0]);
  const lift = f < 444 ? k(f, [414, 444], [0, -1460], EI) : -1460 + 60 * bounce(f, fps, 444, 10, 150);
  const tilt = k(f, [252, 270, 334, 348], [0, -16, -16, 0], EIO);
  const sx = 1 + 0.05 * squash - 0.07 * stretch;
  const sy = 1 - 0.08 * squash + 0.1 * stretch;
  const passed = k(f, [382, 388], [0, 1]);

  return (
    <At x={PRODUCT_X} y={0}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: `translateY(${lift + 24 * squash}px) perspective(1600px) rotateY(${tilt}deg) scale(${sx}, ${sy})`,
        }}
      >
        <Timeline />
        <Trail stretch={stretch} />

        {/* Phone body: the rim draws itself, then the glass fills in */}
        <div
          style={{
            position: "absolute",
            left: -190,
            top: -380,
            width: 380,
            height: 760,
            borderRadius: 56,
            ...liquid({ tint: passed > 0 ? "rgba(63,174,110,0.14)" : "rgba(255,255,255,0.06)" }),
            opacity: k(f, [178, 192], [0, 1]),
          }}
        />
        <svg
          width={384}
          height={764}
          viewBox="0 0 384 764"
          style={{ position: "absolute", left: -192, top: -382, overflow: "visible" }}
        >
          <rect
            x={2}
            y={2}
            width={380}
            height={760}
            rx={56}
            fill="none"
            stroke={passed > 0 ? C.green : "rgba(255,255,255,0.7)"}
            strokeOpacity={f >= 162 ? 1 : 0}
            strokeWidth={4}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={k(f, [162, 188], [1, 0], EIO)}
          />
          <rect x={152} y={22} width={80} height={14} rx={7} fill="rgba(0,0,0,0.55)" opacity={k(f, [186, 194], [0, 1])} />
        </svg>
        <div
          style={{
            position: "absolute",
            left: -160,
            top: -352,
            fontFamily: FONT,
            fontSize: 20,
            fontWeight: 700,
            color: C.text2,
            opacity: k(f, [288, 296], [0, 1]),
          }}
        >
          9:41
        </div>

        {LABELS.map((label, i) => (
          <Block key={label} i={i} label={label} />
        ))}

        <Selection />
        <ScanBeam />

        {/* Test result */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 430,
            translate: "-50% 0",
            transformOrigin: "50% 0%",
            ...bounceIn(f, fps, 383, 0.5, 8),
            opacity: k(f, [383, 386, 400, 406], [0, 1, 1, 0]),
            padding: "14px 26px",
            borderRadius: 30,
            ...liquid({ tint: TINT.green }),
            color: "#fff",
            fontFamily: FONT,
            fontSize: 30,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          ✓ 24 checks passed
        </div>

        {/* Live badge after landing */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: -500,
            translate: "-50% -50%",
            transformOrigin: "50% 100%",
            ...bounceIn(f, fps, 452, 0.3, 8),
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "16px 30px",
            borderRadius: 40,
            ...liquid({ tint: TINT.green }),
            color: "#fff",
            fontFamily: FONT,
            fontSize: 38,
            fontWeight: 900,
            whiteSpace: "nowrap",
          }}
        >
          <Pulse start={456} />
          LIVE IN PRODUCTION
        </div>
      </div>
    </At>
  );
};

/** One block: a plan card that becomes a wireframe, then real UI, then gets its check. */
const Block: React.FC<{ i: number; label: string }> = ({ i, label }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rect = blockRect(i, f);
  const morph = k(f, [morphStart(i), morphStart(i) + 26], [0, 1], EIO);
  const fill = k(f, [FILL_AT[i], FILL_AT[i] + 6], [0, 1], EO);
  const flash = k(f, [FILL_AT[i], FILL_AT[i] + 2, FILL_AT[i] + 10], [0, 1, 0]);
  const landed = f - flyEnd(i);
  const jiggle = landed > 0 ? 0.14 * Math.exp(-landed / 4) * Math.sin(landed / 1.6) : 0;
  const labelOpacity = k(morph, [0, 0.35], [1, 0]);
  const checkAt = CHECK_AT[i];

  return (
    <div
      style={{
        position: "absolute",
        left: rect.x - rect.w / 2,
        top: rect.y - rect.h / 2,
        width: rect.w,
        height: rect.h,
        borderRadius: rect.r,
        ...liquid({ tint: i === 3 && morph < 0.5 ? TINT.red : morph < 0.5 ? TINT.clear : "rgba(255,255,255,0.08)", blur: morph < 0.5, light: morph < 0.5 ? 1 : 0.6 }),
        scale: 1 + jiggle,
        opacity: k(f, [flyStart(i), flyStart(i) + 3], [0, 1]),
        fontFamily: FONT,
        color: C.bone,
        overflow: "visible",
      }}
    >
      {/* Plan card face */}
      <div style={{ position: "absolute", inset: 0, padding: "22px 22px", opacity: labelOpacity, overflow: "hidden" }}>
        <div style={{ fontSize: 30, fontWeight: 700, whiteSpace: "nowrap", color: i === 3 ? "#fff" : C.bone }}>{label}</div>
        <div style={{ marginTop: 18, height: 10, borderRadius: 5, background: i === 3 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.12)" }}>
          <div
            style={{
              height: "100%",
              width: `${k(f, [124 + i * 5, 148 + i * 5], [0, 100], EO)}%`,
              borderRadius: 5,
              background: i === 3 ? "#fff" : C.bone,
            }}
          />
        </div>
      </div>

      {/* Real UI once built */}
      <div style={{ position: "absolute", inset: 0, borderRadius: rect.r, overflow: "hidden", opacity: fill }}>
        <BlockUI i={i} />
      </div>
      <div style={{ position: "absolute", inset: -4, borderRadius: rect.r + 4, border: `4px solid ${C.bone}`, opacity: flash }} />

      {/* Check from the test scan */}
      {f >= checkAt ? (
        <div
          style={{
            position: "absolute",
            right: -18,
            top: -18,
            width: 40,
            height: 40,
            borderRadius: 20,
            ...liquid({ tint: TINT.green, blur: false }),
            color: "#fff",
            display: "grid",
            placeItems: "center",
            fontSize: 24,
            fontWeight: 900,
            scale: k(bounce(f, fps, checkAt, 6, 240), [0, 1], [0, 1]),
            opacity: k(f, [404, 410], [1, 0]),
          }}
        >
          ✓
        </div>
      ) : null}
    </div>
  );
};

const BlockUI: React.FC<{ i: number }> = ({ i }) => {
  if (i === 0) {
    return <div style={{ padding: "0 4px", fontSize: 28, fontWeight: 900, lineHeight: "36px" }}>Book a visit</div>;
  }
  if (i === 1) {
    return (
      <div style={{ position: "absolute", inset: 0, padding: 18 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: C.text2 }}>Thu 2 Oct</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 14 }}>
          {["9:00", "10:30", "12:00", "14:00", "15:30", "17:00"].map((t, j) => (
            <div
              key={t}
              style={{
                height: 52,
                borderRadius: 12,
                display: "grid",
                placeItems: "center",
                fontSize: 20,
                fontWeight: 700,
                ...liquid({ tint: j === 4 ? TINT.red : "rgba(255,255,255,0.06)", blur: false, light: 0.7 }),
                color: j === 4 ? "#fff" : C.bone,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (i === 2) {
    return (
      <div style={{ position: "absolute", inset: 0, padding: "20px 22px", display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: 18, ...liquid({ tint: TINT.green, blur: false }), display: "grid", placeItems: "center", color: "#fff", fontSize: 26 }}>
          ●
        </div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Reminder · 9:00</div>
          <div style={{ fontSize: 19, color: C.text2, marginTop: 4 }}>Sent on WhatsApp</div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ position: "absolute", inset: 0, ...liquid({ tint: TINT.red, blur: false }), display: "grid", placeItems: "center", fontSize: 28, fontWeight: 900, color: "#fff" }}>
      Confirm 15:30
    </div>
  );
};

/** Plan: a week timeline draws under the cards, then gets out of the way. */
const Timeline: React.FC = () => {
  const f = useCurrentFrame();
  if (f > 182) return null;
  const out = k(f, [164, 178], [1, 0]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: -600,
          top: 108,
          height: 6,
          borderRadius: 3,
          width: k(f, [100, 130], [0, 1200], EO),
          background: "rgba(255,255,255,0.22)",
          opacity: out,
        }}
      />
      {SLOT_X.map((x, i) => (
        <div
          key={x}
          style={{
            position: "absolute",
            left: x,
            top: 140,
            translate: "-50% 0",
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.12em",
            whiteSpace: "nowrap",
            color: C.text3,
            opacity: k(f, [112 + i * 4, 118 + i * 4], [0, 1]) * out,
          }}
        >
          <div style={{ width: 18, height: 18, borderRadius: 9, ...liquid({ tint: i === 3 ? TINT.red : TINT.bright, blur: false }), margin: "-42px auto 22px" }} />
          WEEK {i + 1}
        </div>
      ))}
    </>
  );
};

/** Design: a cursor drags a selection onto the calendar block. */
const Selection: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (f < 196 || f > 254) return null;
  const hero = PHONE[1];
  const out = k(f, [244, 252], [1, 0]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: hero.x - hero.w / 2 - 12,
          top: hero.y - hero.h / 2 - 12,
          width: hero.w + 24,
          height: hero.h + 24,
          borderRadius: hero.r + 10,
          border: `4px solid ${C.red}`,
          opacity: k(f, [212, 215], [0, 1]) * out,
          scale: k(bounce(f, fps, 212, 7, 220), [0, 1], [1.3, 1]),
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "50%",
            bottom: -46,
            translate: "-50% 0",
            background: C.red,
            color: "#fff",
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 8,
          }}
        >
          320 × 200
        </span>
      </div>
      <svg
        width={44}
        height={52}
        viewBox="0 0 14 18"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          opacity: out,
          translate: `${k(f, [196, 212], [300, 150], EIO)}px ${k(f, [196, 212], [260, -70], EIO)}px`,
        }}
      >
        <path d="M1 1l11 7-5 1-2 5z" fill={C.blue} stroke="#fff" strokeWidth="1" />
      </svg>
    </>
  );
};

/** Test: a flat beam sweeps the phone top to bottom. */
const ScanBeam: React.FC = () => {
  const f = useCurrentFrame();
  if (f < 350 || f > 386) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: -210,
        top: k(f, [352, 382], [-380, 380]),
        width: 420,
        height: 6,
        borderRadius: 3,
        background: C.green,
        opacity: k(f, [350, 353, 380, 386], [0, 1, 1, 0]),
      }}
    />
  );
};

/** Ship: speed lines trailing the phone while it flies. */
const Trail: React.FC<{ stretch: number }> = ({ stretch }) => (
  <>
    {[-120, -40, 40, 120].map((x, i) => (
      <div
        key={x}
        style={{
          position: "absolute",
          left: x - 4,
          top: 420 + (i % 2) * 60,
          width: 8,
          height: 700 * stretch,
          borderRadius: 4,
          background: i % 2 ? "rgba(255,255,255,0.35)" : C.red,
          opacity: stretch,
        }}
      />
    ))}
  </>
);

const Pulse: React.FC<{ start: number }> = ({ start }) => {
  const f = useCurrentFrame();
  const p = f < start ? 0 : ((f - start) % 22) / 22;

  return (
    <span style={{ position: "relative", width: 22, height: 22, flex: "none" }}>
      <span style={{ position: "absolute", inset: 0, borderRadius: 11, background: "#fff" }} />
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 11,
          border: "3px solid #fff",
          scale: 1 + p * 1.8,
          opacity: f < start ? 0 : 1 - p,
        }}
      />
    </span>
  );
};
