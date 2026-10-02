import { AbsoluteFill, useVideoConfig } from "remotion";
import { Background } from "./Background";
import { Outro } from "./Outro";
import { Camera } from "./flow/Camera";
import { Chat } from "./flow/Chat";
import { Code } from "./flow/Code";
import { LearnFeedback, LearnField } from "./flow/Learn";
import { Product } from "./flow/Product";
import { Ring } from "./flow/Ship";
import { Word } from "./flow/Word";

/**
 * 21s at 30fps, one continuous shot: a chat breaks into plan cards, the cards become
 * a phone, code builds it, a scan tests it, it launches, and the camera pulls back on its users.
 */
export const HowWeWork: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Background />
      <Camera>
        <LearnField />
        <Ring />
        <Chat />
        <Code />
        <Product />
        <LearnFeedback />
      </Camera>

      <Word text="Talk." sub="Agree the MVP together." at={8} out={80} left={120} top={700} />
      <Word text="Plan." sub="Week by week." at={104} out={160} left={120} top={110} />
      <Word text="Design." sub="Before any code." at={182} out={244} left={110} top={420} size={150} />
      <Word text="Build." sub="In weeks, not months." at={262} out={334} left={120} top={80} size={160} />
      <Word text="Test." sub="Every single change." at={352} out={402} left={120} top={420} />
      <Word text="Ship." sub="Straight to production." at={416} out={476} right={120} top={600} />
      <Word text="Learn." sub="Feedback in days." at={500} out={568} left={120} top={80} />

      <Outro name="Outro" from={580} durationInFrames={50} premountFor={fps} line="Software that works." />
    </AbsoluteFill>
  );
};
