import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EIO, k } from "../motion";

/**
 * One continuous camera over a shared world. World (0,0) is the chat; the product
 * sits at (900, 0) and launches to (900, -1400). Each row is a keyframe.
 */
const KEYS = {
  f: [0, 60, 85, 125, 165, 200, 250, 330, 350, 405, 415, 450, 470, 490, 530, 565, 600],
  cx: [0, 0, 0, 900, 900, 900, 560, 600, 900, 900, 900, 900, 900, 900, 900, 900, 900],
  cy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, -1340, -1460, -1460, -1400, -1400, -1400],
  s: [1.45, 1.15, 1.1, 0.98, 1.0, 1.05, 1.0, 1.0, 1.1, 1.1, 1.1, 0.95, 0.92, 0.92, 0.34, 0.3, 0.55],
  r: [-3, 0, 0, 0, 0, 0, -1.5, -1, 0, 0, 0, 2, 0, 0, 0, 0, 0],
};

export const Camera: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const f = useCurrentFrame();
  const cx = k(f, KEYS.f, KEYS.cx, EIO);
  const cy = k(f, KEYS.f, KEYS.cy, EIO);
  const s = k(f, KEYS.f, KEYS.s, EIO);
  const r = k(f, KEYS.f, KEYS.r, EIO);

  return (
    <AbsoluteFill style={{ overflow: "hidden", opacity: k(f, [574, 590], [1, 0]) }}>
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 540,
          width: 0,
          height: 0,
          transform: `scale(${s}) rotate(${r}deg) translate(${-cx}px, ${-cy}px)`,
        }}
      >
        {/* World-space dot grid, so camera moves read as travel */}
        <div
          style={{
            position: "absolute",
            left: -6000,
            top: -6000,
            width: 12000,
            height: 12000,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 3px, transparent 3px)",
            backgroundSize: "64px 64px",
          }}
        />
        <Aura />
        {children}
      </div>
    </AbsoluteFill>
  );
};

// Soft colour light along the camera path: ember mostly, a cool blue for contrast.
const LIGHTS: Array<{ x: number; y: number; r: number; c: string }> = [
  { x: -320, y: -260, r: 700, c: "234,46,0,0.34" },
  { x: 420, y: 330, r: 560, c: "64,96,255,0.3" },
  { x: 980, y: -280, r: 720, c: "234,46,0,0.28" },
  { x: 1650, y: 360, r: 680, c: "64,96,255,0.36" },
  { x: 260, y: -900, r: 760, c: "64,96,255,0.3" },
  { x: 1320, y: -960, r: 600, c: "255,130,60,0.22" },
  { x: 900, y: -1500, r: 1150, c: "234,46,0,0.26" },
  { x: -900, y: -1900, r: 1100, c: "64,96,255,0.32" },
  { x: 2600, y: -1150, r: 1100, c: "120,90,255,0.24" },
];

const Aura: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <>
      {LIGHTS.map((l, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: l.x - l.r + Math.sin(f / 40 + i) * 60,
            top: l.y - l.r + Math.cos(f / 50 + i * 2) * 50,
            width: l.r * 2,
            height: l.r * 2,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${l.c}) 0%, rgba(${l.c.replace(/[\d.]+$/, "0")}) 70%)`,
          }}
        />
      ))}
    </>
  );
};

/** Places children centred on a world coordinate. */
export const At: React.FC<{ x: number; y: number; style?: React.CSSProperties; children?: React.ReactNode }> = ({
  x,
  y,
  style,
  children,
}) => <div style={{ position: "absolute", left: x, top: y, width: 0, height: 0, ...style }}>{children}</div>;
