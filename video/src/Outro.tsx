import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import { C, FONT, liquid } from "./brand";
import { Typewriter } from "./Typewriter";

type OutroProps = {
  readonly line: string;
  readonly style?: React.CSSProperties;
};

/** Closing card: the GrayNest lockup on liquid glass with the line typed under it. */
const OutroInner: React.FC<OutroProps> = ({ line, style }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", ...style }}>
      {/* Light behind the card so the glass has something to bend */}
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          background:
            "radial-gradient(circle at 42% 46%, rgba(64,96,255,0.42), rgba(64,96,255,0) 34%), radial-gradient(circle at 66% 70%, rgba(234,46,0,0.4), rgba(234,46,0,0) 26%)",
        }}
      />
      <div
        style={{
          ...liquid(),
          borderRadius: 48,
          padding: "70px 110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 34,
          fontFamily: FONT,
          opacity: interpolate(frame, [0, 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          scale: interpolate(frame, [0, 12], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <Img src={staticFile("graynest-lockup-on-dark.svg")} style={{ width: 520 }} />
        <div style={{ fontSize: 56, fontWeight: 300, fontStyle: "italic", color: C.red, letterSpacing: "-0.02em" }}>
          <Typewriter text={line} start={10} speed={1.2} caretColor={C.red} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const outroSchema = {
  line: { type: "text-content", default: "Software that works.", description: "Closing line" },
} as const satisfies InteractivitySchema;

export const Outro = Interactive.withSchema({
  Component: OutroInner,
  componentName: "<Outro>",
  schema: outroSchema,
  wrapInSequence: true,
});
