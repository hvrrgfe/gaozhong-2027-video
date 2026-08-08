import { AbsoluteFill } from "remotion";
import { theme } from "../theme";
import { Typewriter, Particles } from "./Typewriter";

// PART 5 · 排行榜（10秒=300帧）
const Scene5_Rankings: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <Particles />
      <Typewriter text="🏆 积分排行榜" fontSize={44} color={theme.bocchi.yellow} startFrame={0} charSpeed={4} hold={15} fadeOut={8} y={20} />
      <Typewriter text="🥇 卷王本王  128分" fontSize={36} color={theme.bocchi.yellow} startFrame={60} charSpeed={4} hold={12} fadeOut={8} y={38} />
      <Typewriter text="🥈 清北种子  96分" fontSize={32} color="#C0C0C0" startFrame={110} charSpeed={4} hold={12} fadeOut={8} y={50} />
      <Typewriter text="🥉 错题杀手  85分" fontSize={32} color="#CD7F32" startFrame={160} charSpeed={4} hold={12} fadeOut={8} y={62} />
      <Typewriter text="𝗡𝗲𝘅𝘁 → 下一个上榜的就是你" fontSize={28} color={theme.mood.lonely} startFrame={220} charSpeed={4} hold={40} fadeOut={10} y={80} />
    </AbsoluteFill>
  );
};

export { Scene5_Rankings };