import { AbsoluteFill } from "remotion";
import { theme } from "../theme";
import { Typewriter, Particles } from "./Typewriter";

// PART 6 · 结尾（15秒=450帧）
const Scene6_Ending: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <Particles />
      <Typewriter text="以我之名，召集同伴！" fontSize={54} color={theme.bocchi.yellow} startFrame={0} charSpeed={4} hold={25} fadeOut={10} y={30} />
      <Typewriter text="群号：1067936907" fontSize={44} color={theme.mood.lonely} startFrame={120} charSpeed={4} hold={25} fadeOut={10} y={48} />
      <Typewriter text="直至2029高考结束 · 长期靠谱！" fontSize={32} color={theme.mood.lonely} startFrame={220} charSpeed={4} hold={20} fadeOut={10} y={63} />
      <Typewriter text="我是一个人呐qwedc" fontSize={40} color={theme.bocchi.yellow} startFrame={300} charSpeed={4} hold={40} fadeOut={15} y={78} />
      <Typewriter text="QwQ 投个硬币再走呗~" fontSize={24} color={theme.mood.lonely} startFrame={380} charSpeed={3} hold={40} fadeOut={10} y={90} />
    </AbsoluteFill>
  );
};

export { Scene6_Ending };