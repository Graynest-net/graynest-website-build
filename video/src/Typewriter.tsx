import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";

type Props = {
  readonly text: string;
  /** Frame (local) at which typing starts. */
  readonly start: number;
  /** Characters typed per frame. */
  readonly speed?: number;
  readonly caret?: boolean;
  readonly caretColor?: string;
  readonly style?: React.CSSProperties;
};

/** Reveals text character by character, with a blinking caret while typing. */
export const Typewriter: React.FC<Props> = ({
  text,
  start,
  speed = 1.4,
  caret = true,
  caretColor = "currentColor",
  style,
}) => {
  const frame = useCurrentFrame();
  const end = start + text.length / speed;
  const count = Math.floor(
    interpolate(frame, [start, end], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  const typing = frame >= start && frame < end + 10;
  const caretOn = typing && Math.floor(frame / 6) % 2 === 0;

  return (
    <span style={style}>
      {text.slice(0, count)}
      {caret ? (
        <span
          style={{
            display: "inline-block",
            width: "0.08em",
            height: "0.9em",
            marginLeft: "0.06em",
            verticalAlign: "-0.08em",
            background: caretColor,
            opacity: caretOn ? 1 : 0,
          }}
        />
      ) : null}
    </span>
  );
};
