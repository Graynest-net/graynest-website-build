import type React from "react";
import { useCurrentFrame } from "remotion";
import { liquid, TINT } from "../brand";
import { EO, k } from "../motion";
import { PRODUCT_X } from "./Product";

/** Ship: a red glass ring the phone flies through on its way to production. It pops as it's crossed. */
export const Ring: React.FC = () => {
  const f = useCurrentFrame();
  if (f < 402 || f > 452) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: PRODUCT_X - 380,
        top: -900 - 100,
        width: 760,
        height: 200,
        borderRadius: "50%",
        ...liquid({ tint: TINT.red }),
        WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 26px), #000 calc(100% - 25px))",
        mask: "radial-gradient(farthest-side, transparent calc(100% - 26px), #000 calc(100% - 25px))",
        scale: k(f, [402, 416], [0, 1], EO) * k(f, [436, 450], [1, 1.6], EO),
        opacity: k(f, [436, 450], [1, 0]),
      }}
    />
  );
};
