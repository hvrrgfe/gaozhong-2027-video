import { AbsoluteFill, Sequence } from "remotion";
import { FPS } from "./theme";
import { Scene1_Intro } from "./compositions/Scene1_Intro";
import { Scene2_AboutMe } from "./compositions/Scene2_AboutMe";
import { Scene3_Group } from "./compositions/Scene3_Group";
import { Scene4_Activities } from "./compositions/Scene4_Activities";
import { Scene5_Rankings } from "./compositions/Scene5_Rankings";
import { Scene6_Ending } from "./compositions/Scene6_Ending";

export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#2D1F14" }}>
      <Sequence from={0 * FPS} durationInFrames={30 * FPS}>
        <Scene1_Intro />
      </Sequence>
      <Sequence from={30 * FPS} durationInFrames={40 * FPS}>
        <Scene2_AboutMe />
      </Sequence>
      <Sequence from={70 * FPS} durationInFrames={40 * FPS}>
        <Scene3_Group />
      </Sequence>
      <Sequence from={110 * FPS} durationInFrames={100 * FPS}>
        <Scene4_Activities />
      </Sequence>
      <Sequence from={210 * FPS} durationInFrames={40 * FPS}>
        <Scene5_Rankings />
      </Sequence>
      <Sequence from={250 * FPS} durationInFrames={110 * FPS}>
        <Scene6_Ending />
      </Sequence>
    </AbsoluteFill>
  );
};