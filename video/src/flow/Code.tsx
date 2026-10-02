import type React from "react";
import { useCurrentFrame } from "remotion";
import { C, FONT, liquid, MONO } from "../brand";
import { EI, EIO, EO, k } from "../motion";
import { Typewriter } from "../Typewriter";
import { At } from "./Camera";
import { FILL_AT, PRODUCT_X } from "./Product";

const LINES: Array<[string, string]> = [
  ["export async function book(slot) {", "#ff9c80"],
  ["  const visit = await db.book(slot);", C.bone],
  ["  await whatsapp.confirm(visit);", "#8fd3ac"],
  ["  remind(visit, '1 day before');", "#8fd3ac"],
  ["}", "#ff9c80"],
];
const START = 266;
const SPEED = 2.6;
const lineStart = (i: number) => START + LINES.slice(0, i).reduce((n, [t]) => n + t.length / SPEED, 0);
const lineEnd = (i: number) => lineStart(i) + LINES[i][0].length / SPEED;

// Phone block centres in world space, for the sparks to fly into.
const TARGETS: Array<[number, number]> = [
  [PRODUCT_X - 50, -290],
  [PRODUCT_X, -145],
  [PRODUCT_X, 40],
  [PRODUCT_X, 290],
];

/** Build: code types into a flat editor; each finished line throws a spark into the phone. */
export const Code: React.FC = () => {
  const f = useCurrentFrame();
  if (f < 248 || f > 352) return null;
  const enter = k(f, [250, 268], [0, 1], EO);
  const exit = k(f, [334, 348], [0, 1], EI);

  return (
    <>
      {/* Swish streak leading the editor in */}
      <div
        style={{
          position: "absolute",
          left: k(f, [248, 262], [-900, 40], EO),
          top: -10,
          width: 520,
          height: 8,
          borderRadius: 4,
          background: C.red,
          opacity: k(f, [248, 252, 260, 266], [0, 1, 1, 0]),
        }}
      />
      <At x={330 - 700 * (1 - enter) - 700 * exit} y={0} style={{ opacity: enter * (1 - exit) }}>
        <div
          style={{
            position: "absolute",
            left: -300,
            top: -210,
            width: 600,
            height: 420,
            borderRadius: 30,
            ...liquid(),
            transform: `perspective(1600px) rotateY(${k(enter, [0, 1], [38, 14])}deg)`,
            overflow: "hidden",
          }}
        >
          <div style={{ height: 58, display: "flex", alignItems: "center", gap: 10, padding: "0 24px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
            {[C.red, C.amber, C.green].map((c) => (
              <span key={c} style={{ width: 14, height: 14, borderRadius: 7, background: c }} />
            ))}
            <span style={{ marginLeft: 12, fontFamily: FONT, fontSize: 22, fontWeight: 700, color: C.text2 }}>booking.ts</span>
          </div>
          <div style={{ padding: "26px 24px", fontFamily: MONO, fontSize: 23, lineHeight: 2 }}>
            {LINES.map(([text, color], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  whiteSpace: "pre",
                  margin: "0 -24px",
                  padding: "0 24px",
                  background: f >= lineStart(i) && f < lineEnd(i) + 2 ? "rgba(234,46,0,0.28)" : "transparent",
                }}
              >
                <span style={{ color: C.text3, width: 18, textAlign: "right" }}>{i + 1}</span>
                <Typewriter text={text} start={lineStart(i)} speed={SPEED} caret={i === LINES.length - 1} caretColor={C.red} style={{ color }} />
              </div>
            ))}
          </div>
        </div>
      </At>

      {/* Sparks: one per block, launched as its line finishes */}
      {TARGETS.map(([tx, ty], i) => {
        const from = lineEnd(i);
        const to = FILL_AT[i];
        if (f < from || f > to + 1) return null;
        const t = k(f, [from, to], [0, 1], EIO);
        const sx = 610;
        const sy = -112 + i * 46;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: sx + (tx - sx) * t - 14,
              top: sy + (ty - sy) * t - 14 - Math.sin(Math.PI * t) * 120,
              width: 28,
              height: 28,
              borderRadius: 14,
              background: "#fff",
              boxShadow: `0 0 0 6px rgba(234,46,0,0.6), 0 0 30px 8px rgba(255,120,60,0.8)`,
            }}
          />
        );
      })}
    </>
  );
};
