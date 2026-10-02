import { AbsoluteFill } from "remotion";
import { C } from "./brand";

/** Flat charcoal stage. The dot grid lives in the world so it moves with the camera. */
export const Background: React.FC = () => <AbsoluteFill style={{ background: C.bg }} />;
