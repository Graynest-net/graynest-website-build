import type React from "react";
import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// GrayNest's own type, copied from the website's public/fonts.
for (const [file, weight, style] of [
  ["Satoshi-Regular.woff2", "400", "normal"],
  ["Satoshi-Medium.woff2", "500", "normal"],
  ["Satoshi-Bold.woff2", "700", "normal"],
  ["Satoshi-Black.woff2", "900", "normal"],
  ["Satoshi-LightItalic.woff2", "300", "italic"],
] as const) {
  loadFont({ family: "Satoshi", url: staticFile(file), weight, style });
}

export const FONT = "Satoshi, sans-serif";
export const MONO = "'SF Mono', Menlo, monospace";

/** Dark palette; surfaces are liquid glass over drifting colour light. */
export const C = {
  bg: "#141417",
  s1: "#1e1e23", // raised surface
  s2: "#28282e", // surface on surface
  s3: "#34343b", // wireframe blocks, dividers
  bone: "#f5f3ef",
  text2: "#a9a7a3",
  text3: "#6c6b69",
  red: "#ea2e00",
  redDeep: "#5a1a0c", // flat tint of red for fills
  green: "#3fae6e",
  greenDeep: "#173a27",
  amber: "#e8b84a",
  blue: "#3b6cf6",
};

export const TINT = {
  clear: "rgba(255,255,255,0.05)",
  bright: "rgba(255,255,255,0.16)",
  red: "rgba(234,46,0,0.62)",
  green: "rgba(63,174,110,0.62)",
};

type GlassOpts = { tint?: string; blur?: boolean; light?: number };

/**
 * Liquid glass: a tinted, heavily blurred and saturated lens with a bright specular top
 * edge, softer side rims, a diagonal sheen and an inner glow. `blur: false` skips the
 * backdrop filter for elements that appear in large numbers.
 */
export const liquid = ({ tint = TINT.clear, blur = true, light = 1 }: GlassOpts = {}): React.CSSProperties => ({
  background: `linear-gradient(160deg, rgba(255,255,255,${0.22 * light}) 0%, rgba(255,255,255,${0.06 * light}) 34%, rgba(255,255,255,0) 58%, rgba(255,255,255,${0.08 * light}) 100%), ${tint}`,
  boxShadow: [
    `inset 0 2px 1px -1px rgba(255,255,255,${0.8 * light})`,
    `inset 0 -2px 2px -1px rgba(255,255,255,${0.28 * light})`,
    `inset 2px 0 3px -2px rgba(255,255,255,${0.35 * light})`,
    `inset -2px 0 3px -2px rgba(255,255,255,${0.35 * light})`,
    `inset 0 0 0 1px rgba(255,255,255,${0.16 * light})`,
    `inset 0 0 36px rgba(255,255,255,${0.07 * light})`,
    "0 30px 60px -26px rgba(0,0,0,0.7)",
  ].join(", "),
  ...(blur
    ? {
        backdropFilter: "blur(24px) saturate(200%) brightness(1.1)",
        WebkitBackdropFilter: "blur(24px) saturate(200%) brightness(1.1)",
      }
    : {}),
});
