import { Easing, interpolate, spring } from "remotion";

/** Ease out: fast start, soft landing. */
export const EO = Easing.bezier(0.16, 1, 0.3, 1);
/** Ease in-out, for camera moves and morphs. */
export const EIO = Easing.bezier(0.65, 0, 0.35, 1);
/** Ease in: slow start, accelerating, for launches. */
export const EI = Easing.bezier(0.6, 0, 0.9, 0.4);

/** Clamped interpolate, the workhorse for every keyframe in the video. */
export const k = (f: number, input: number[], output: number[], easing?: (t: number) => number) =>
  interpolate(f, input, output, { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing });

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/** A spring from 0 to 1 starting at `at`; low damping overshoots for a bounce. */
export const bounce = (frame: number, fps: number, at = 0, damping = 11, stiffness = 140) =>
  spring({ frame: frame - at, fps, config: { damping, stiffness, mass: 0.9 } });

/** Scales in from small with a springy overshoot. */
export const bounceIn = (frame: number, fps: number, at: number, from = 0.4, damping = 9) => ({
  opacity: k(frame, [at, at + 3], [0, 1]),
  scale: interpolate(bounce(frame, fps, at, damping, 170), [0, 1], [from, 1]),
});
