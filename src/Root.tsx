import { Composition } from "remotion";
import { Main } from "./Main";
import { FPS } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={360 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};