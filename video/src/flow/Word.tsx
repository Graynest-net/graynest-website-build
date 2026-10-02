import type React from "react";
import { useCurrentFrame } from "remotion";
import { C, FONT } from "../brand";
import { EI, EO, k } from "../motion";
import { Typewriter } from "../Typewriter";

type Props = {
  readonly text: string;
  readonly sub: string;
  /** Frame the letters start rising in. */
  readonly at: number;
  /** Frame the letters start leaving. */
  readonly out: number;
  readonly left?: number;
  readonly right?: number;
  readonly top: number;
  readonly size?: number;
};

/**
 * Kinetic title in screen space: letters rise out of a mask one by one, drift while
 * held, and leave upward in the same stagger. A short line types in beneath.
 */
export const Word: React.FC<Props> = ({ text, sub, at, out, left, right, top, size = 180 }) => {
  const f = useCurrentFrame();
  if (f < at - 1 || f > out + text.length * 2 + 14) return null;
  const align = right !== undefined ? "right" : "left";

  return (
    <div
      style={{
        position: "absolute",
        left,
        right,
        top,
        textAlign: align,
        fontFamily: FONT,
        color: C.bone,
        translate: `${k(f, [at, out + 20], [0, align === "left" ? 40 : -40])}px 0px`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: align === "left" ? "flex-start" : "flex-end",
          overflow: "hidden",
          fontSize: size,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.035em",
          textTransform: "uppercase",
          paddingBottom: "0.04em",
        }}
      >
        {text.split("").map((ch, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              color: ch === "." ? C.red : C.bone,
              translate: `0px ${
                k(f, [at + i * 2, at + i * 2 + 12], [110, 0], EO) + k(f, [out + i * 2, out + i * 2 + 10], [0, -110], EI)
              }%`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: size * 0.3,
          fontWeight: 300,
          fontStyle: "italic",
          letterSpacing: "-0.01em",
          color: C.red,
          opacity: k(f, [out, out + 8], [1, 0]),
        }}
      >
        <Typewriter text={sub} start={at + text.length * 2 + 8} speed={1.6} caretColor={C.red} />
      </div>
    </div>
  );
};
