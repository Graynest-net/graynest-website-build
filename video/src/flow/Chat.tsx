import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { C, FONT, liquid, TINT } from "../brand";
import { bounceIn, k } from "../motion";
import { Typewriter } from "../Typewriter";
import { At } from "./Camera";

/** Talk: the client asks, GrayNest answers with the MVP. Breaks apart into plan cards at ~86. */
export const Chat: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (f > 100) return null;
  const leave = { opacity: k(f, [84, 96], [1, 0]), scale: k(f, [84, 96], [1, 0.92]) };
  const bubble: React.CSSProperties = {
    padding: "26px 36px",
    borderRadius: 34,
    fontFamily: FONT,
    fontSize: 40,
    lineHeight: 1.3,
    whiteSpace: "nowrap",
  };

  return (
    <At x={0} y={0} style={leave}>
      <div
        style={{
          position: "absolute",
          left: -470,
          top: -150,
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          transformOrigin: "0% 100%",
          ...bounceIn(f, fps, 4),
        }}
      >
        <Avatar label="C" bg="rgba(169,167,163,0.45)" />
        <div style={{ ...bubble, ...liquid(), color: C.bone, borderBottomLeftRadius: 8 }}>
          <Typewriter text="We need patients to book on WhatsApp." start={8} speed={1.6} caret={false} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: -500,
          top: 10,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-end",
          gap: 18,
          transformOrigin: "100% 100%",
          ...bounceIn(f, fps, 32),
        }}
      >
        <Avatar label="G" bg={TINT.red} />
        <div style={{ ...bubble, ...liquid({ tint: TINT.red }), color: "#fff", borderBottomRightRadius: 8 }}>
          <Typewriter text="Booking + reminders. Live in 4 weeks." start={36} speed={1.8} caret={false} />
        </div>
      </div>
    </At>
  );
};

const Avatar: React.FC<{ label: string; bg: string }> = ({ label, bg }) => (
  <span
    style={{
      flex: "none",
      width: 70,
      height: 70,
      borderRadius: 35,
      ...liquid({ tint: bg }),
      display: "grid",
      placeItems: "center",
      fontFamily: FONT,
      fontSize: 30,
      fontWeight: 900,
      color: "#fff",
    }}
  >
    {label}
  </span>
);
