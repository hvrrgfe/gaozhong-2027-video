import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { FPS } from "./theme";
import { Scene1_Intro } from "./compositions/Scene1_Intro";
import { Scene2_AboutMe } from "./compositions/Scene2_AboutMe";
import { Scene3_Group } from "./compositions/Scene3_Group";
import { Scene4_Activities } from "./compositions/Scene4_Activities";
import { Scene5_Rankings } from "./compositions/Scene5_Rankings";
import { Scene6_Ending } from "./compositions/Scene6_Ending";

// 总时长65秒 @ 30fps = 1950帧
const TOTAL = 65 * FPS;

export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#2D1F14" }}>
      {/* 背景音乐（高潮部分） */}
      <Audio src={staticFile("music_climax.mp3")} />

      <Sequence from={0 * FPS} durationInFrames={16 * FPS}>
        <Scene1_Intro />
      </Sequence>
      <Sequence from={16 * FPS} durationInFrames={8 * FPS}>
        <Scene2_AboutMe />
      </Sequence>
      <Sequence from={24 * FPS} durationInFrames={8 * FPS}>
        <Scene3_Group />
      </Sequence>
      <Sequence from={32 * FPS} durationInFrames={18 * FPS}>
        <Scene4_Activities />
      </Sequence>
      <Sequence from={50 * FPS} durationInFrames={8 * FPS}>
        <Scene5_Rankings />
      </Sequence>
      <Sequence from={58 * FPS} durationInFrames={7 * FPS}>
        <Scene6_Ending />
      </Sequence>
    </AbsoluteFill>
  );
};