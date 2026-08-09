import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { FPS, theme } from "./theme";
import { SceneTeachers } from "./compositions/SceneTeachers";
import { Scene1_Intro } from "./compositions/Scene1_Intro";
import { Scene3_Group } from "./compositions/Scene3_Group";
import { Scene4_Activities } from "./compositions/Scene4_Activities";
import { Scene6_Ending } from "./compositions/Scene6_Ending";

export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg }}>
      <Audio src={staticFile("music_warm_acoustic.mp3")} volume={0.8} />

      <Sequence from={0 * FPS} durationInFrames={28 * FPS}>
        <SceneTeachers />
      </Sequence>
      <Sequence from={28 * FPS} durationInFrames={10 * FPS}>
        <Scene1_Intro />
      </Sequence>
      <Sequence from={38 * FPS} durationInFrames={8 * FPS}>
        <Scene3_Group />
      </Sequence>
      <Sequence from={46 * FPS} durationInFrames={10 * FPS}>
        <Scene4_Activities />
      </Sequence>
      <Sequence from={56 * FPS} durationInFrames={9 * FPS}>
        <Scene6_Ending />
      </Sequence>
    </AbsoluteFill>
  );
};