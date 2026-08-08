import { AbsoluteFill } from "remotion";
import { theme } from "../theme";
import { Typewriter, Particles } from "./Typewriter";

// PART 4 · 活动展示（14秒=420帧）
const Scene4_Activities: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <Particles />
      <Typewriter text="⚡ 每周竞技场" fontSize={40} color="#FF7043" startFrame={0} charSpeed={4} hold={15} fadeOut={8} y={25} />
      <Typewriter text="🏆 限时刷题赛 · 🩺 错题投稿 · 📚 云端自习室" fontSize={28} color={theme.mood.lonely} startFrame={80} charSpeed={3} hold={20} fadeOut={8} y={40} />
      <Typewriter text="📅 每月特别活动" fontSize={40} color="#E91E63" startFrame={160} charSpeed={4} hold={15} fadeOut={8} y={58} />
      <Typewriter text="🚩 flag押金 · 📔 笔记共创 · 🐟 锦鲤祈福" fontSize={28} color={theme.mood.lonely} startFrame={240} charSpeed={3} hold={20} fadeOut={8} y={73} />
      <Typewriter text="🏆 积分：群头衔 · 人工核对 @我" fontSize={30} color={theme.bocchi.yellow} startFrame={330} charSpeed={3} hold={40} fadeOut={10} y={88} />
    </AbsoluteFill>
  );
};

export { Scene4_Activities };