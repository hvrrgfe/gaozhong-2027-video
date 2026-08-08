import { AbsoluteFill, Sequence } from "remotion";
import { FPS } from "./theme";
import { Scene1_Lonely } from "./compositions/Scene1_Lonely";
import { Scene2_Anime } from "./compositions/Scene2_Anime";
import { Scene3_AboutMe } from "./compositions/Scene3_AboutMe";
import { Scene4_Group } from "./compositions/Scene4_Group";
import { Scene5_Welcome } from "./compositions/Scene5_Welcome";
import { Scene6_Ending } from "./compositions/Scene6_Ending";

export const Main: React.FC = () => {
  const totalDuration = 360 * FPS; // 6分钟

  return (
    <AbsoluteFill style={{ backgroundColor: "#0F1026" }}>
      <Sequence from={0} durationInFrames={50 * FPS}>
        <Scene1_Lonely />
      </Sequence>
      <Sequence from={50 * FPS} durationInFrames={60 * FPS}>
        <Scene2_Anime />
      </Sequence>
      <Sequence from={110 * FPS} durationInFrames={60 * FPS}>
        <Scene3_AboutMe />
      </Sequence>
      <Sequence from={170 * FPS} durationInFrames={70 * FPS}>
        <Scene4_Group />
      </Sequence>
      <Sequence from={240 * FPS} durationInFrames={60 * FPS}>
        <Scene5_Welcome />
      </Sequence>
      <Sequence from={300 * FPS} durationInFrames={60 * FPS}>
        <Scene6_Ending />
      </Sequence>
    </AbsoluteFill>
  );
};