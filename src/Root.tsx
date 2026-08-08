import { Composition } from "remotion";
import { loadFont } from "@remotion/google-fonts/NotoSansSC";
import { Main } from "./Main";
import { FPS } from "./theme";

loadFont("normal", { weights: ["400", "700", "900"] });

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={65 * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};