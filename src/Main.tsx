import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { FPS, theme } from "./theme";
import { Scene1_Intro } from "./compositions/Scene1_Intro";
import { Scene3_Group } from "./compositions/Scene3_Group";
import { Scene4_Activities } from "./compositions/Scene4_Activities";
import { Scene5_Rankings } from "./compositions/Scene5_Rankings";
import { Scene6_Ending } from "./compositions/Scene6_Ending";

// 总时长65秒
export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg }}>
      <Audio src={staticFile("music_warm_acoustic.mp3")} volume={0.8} />

      <Sequence from={0 * FPS} durationInFrames={16 * FPS}>
        <Scene1_Intro />
      </Sequence>
      <Sequence from={16 * FPS} durationInFrames={10 * FPS}>
        <Scene3_Group />
      </Sequence>
      <Sequence from={26 * FPS} durationInFrames={14 * FPS}>
        <Scene4_Activities />
      </Sequence>
      <Sequence from={40 * FPS} durationInFrames={10 * FPS}>
        <Scene5_Rankings />
      </Sequence>
      <Sequence from={50 * FPS} durationInFrames={15 * FPS}>
        <Scene6_Ending />
      </Sequence>
    </AbsoluteFill>
  );
};