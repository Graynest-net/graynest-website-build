import "./brand";
import { Composition, Folder } from "remotion";
import { HowWeWork } from "./HowWeWork";
import { Outro } from "./Outro";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HowWeWork"
        component={HowWeWork}
        durationInFrames={630}
        fps={30}
        width={1920}
        height={1080}
      />
      <Folder name="Elements">
        <Composition
          id="Outro"
          component={Outro}
          durationInFrames={50}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ line: "Software that works." }}
        />
      </Folder>
    </>
  );
};
