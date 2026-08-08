import { AbsoluteFill } from "remotion";
import { theme } from "../theme";
import { Typewriter, Particles } from "./Typewriter";

// PART 3 · 这个群（10秒=300帧）
const Scene3_Group: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <Particles />
      <Typewriter text="于是，这个群诞生了——" fontSize={44} color={theme.mood.lonely} startFrame={0} charSpeed={4} hold={15} fadeOut={10} y={30} />
      <Typewriter text="高中2027" fontSize={64} color={theme.bocchi.yellow} startFrame={80} charSpeed={4} hold={25} fadeOut={10} y={45} />
      <Typewriter text="1067936907" fontSize={40} color={theme.mood.lonely} startFrame={170} charSpeed={4} hold={20} fadeOut={10} y={55} />
      <Typewriter text="学习的乐趣，就该共享！" fontSize={36} color={theme.bocchi.yellow} startFrame={230} charSpeed={4} hold={30} fadeOut={10} y={70} />
    </AbsoluteFill>
  );
};

export { Scene3_Group };