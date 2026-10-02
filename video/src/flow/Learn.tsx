import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { C, FONT, liquid, TINT } from "../brand";
import { bounceIn, EIO, k } from "../motion";
import { PRODUCT_X } from "./Product";

const CX = PRODUCT_X;
const CY = -1400;

// A field of users around the live phone; centre cells stay clear for the product.
const USERS: Array<{ x: number; y: number; d: number }> = [];
for (let gx = -8; gx <= 8; gx++) {
  for (let gy = -3; gy <= 3; gy++) {
    if (Math.abs(gx) <= 1 && Math.abs(gy) <= 1) continue;
    const jx = ((gx * 37 + gy * 91) % 7) * 18;
    const jy = ((gx * 53 - gy * 29) % 5) * 22;
    const x = gx * 380 + jx;
    const y = gy * 420 + jy;
    USERS.push({ x, y, d: Math.hypot(x, y) });
  }
}

/** Learn (behind the product): users ripple in and a growth line draws through them. */
export const LearnField: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (f < 488) return null;
  // An illustrative upward shape, no figures, so it never reads as a real result.
  const path = "M -2400 1150 C -1500 1000, -900 650, -300 380 S 900 -350, 2400 -1150";

  return (
    <div style={{ position: "absolute", left: CX, top: CY }}>
      <svg style={{ position: "absolute", left: -2600, top: -1400, overflow: "visible" }} width={5200} height={2800} viewBox="-2600 -1400 5200 2800">
        <path
          d={path}
          fill="none"
          stroke={C.red}
          strokeWidth={22}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={k(f, [512, 548], [1, 0], EIO)}
        />
      </svg>
      {USERS.map((u, i) => {
        const at = 492 + u.d / 110;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: u.x - 70,
              top: u.y - 140,
              width: 140,
              height: 280,
              borderRadius: 30,
              ...liquid({ blur: false, tint: "rgba(255,255,255,0.07)" }),
              ...bounceIn(f, fps, at, 0.2, 9),
            }}
          >
            <div style={{ margin: "40px auto 0", width: 90, height: 14, borderRadius: 7, background: "rgba(255,255,255,0.22)" }} />
            <div style={{ margin: "18px auto 0", width: 90, height: 70, borderRadius: 12, background: "rgba(255,255,255,0.1)" }} />
            <div
              style={{
                position: "absolute",
                left: 20,
                right: 20,
                bottom: 28,
                height: 30,
                borderRadius: 15,
                background: i % 5 === 0 ? C.red : "rgba(255,255,255,0.18)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

const QUOTES = [
  { x: -1250, y: 1050, text: "“Booked in 20 seconds.”", at: 528, hot: false },
  { x: 1180, y: -470, text: "“Can reminders come in Arabic?”", at: 536, hot: true },
  { x: 1350, y: 1150, text: "“Love the reminders.”", at: 544, hot: false },
];

/** Learn (in front): feedback pops from users; one becomes the next phase. */
export const LearnFeedback: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (f < 524) return null;

  return (
    <div style={{ position: "absolute", left: CX, top: CY }}>
      {QUOTES.map((q) => (
        <div
          key={q.text}
          style={{
            position: "absolute",
            left: q.x,
            top: q.y,
            translate: "-50% -100%",
            transformOrigin: "50% 100%",
            ...bounceIn(f, fps, q.at, 0.3, 8),
            padding: "44px 70px",
            borderRadius: 70,
            borderBottomLeftRadius: 14,
            ...liquid({ tint: q.hot && f >= 552 ? TINT.red : TINT.bright, light: 1.4 }),
            color: "#fff",
            fontFamily: FONT,
            fontSize: 110,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {q.text}
          {q.hot ? (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "100%",
                marginTop: 40,
                translate: "-50% 0",
                transformOrigin: "50% 0%",
                ...bounceIn(f, fps, 556, 0.3, 8),
                padding: "30px 60px",
                borderRadius: 60,
                ...liquid({ tint: TINT.bright, light: 1.4 }),
                color: "#fff",
                fontSize: 96,
                fontWeight: 900,
              }}
            >
              → PHASE TWO
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
