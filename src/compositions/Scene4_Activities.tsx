import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 4 · 活动快闪（18秒）
const Scene4_Activities: React.FC = () => {
  const frame = useCurrentFrame();

  const sections = [
    {
      title: "⚡ 每周竞技场", color: theme.bocchi.orange,
      items: ["🏆 谁是卷王", "🩺 错题ICU", "📚 云端自习室"],
      start: 5,
    },
    {
      title: "💬 每月深度破冰", color: theme.tech.purple,
      items: ["🌳 树洞吐槽", "📔 共享笔记库", "🚩 逆袭flag押金"],
      start: 65,
    },
    {
      title: "📅 特别活动", color: "#E91E63",
      items: ["🐟 锦鲤祈福墙", "🔥 7天连续内卷"],
      start: 125,
    },
    {
      title: "🏆 积分奖励", color: "#FFD700",
      items: ["🏅 群头衔定制", "📊 腾讯文档公示"],
      start: 185,
    },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
      }} />

      {sections.map((sec, si) => {
        const secOpacity = interpolate(frame, [sec.start, sec.start + 8], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
        });
        return (
          <div key={si} style={{
            position: "absolute", top: "8%", width: "100%", textAlign: "center",
            opacity: secOpacity,
          }}>
            <span style={{ fontFamily: "Noto Sans SC", fontSize: 18, fontWeight: 700, color: sec.color, letterSpacing: 2 }}>
              {sec.title}
            </span>
            <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
              {sec.items.map((item, ii) => (
                <span key={ii} style={{
                  fontFamily: "Noto Sans SC", fontSize: 24, fontWeight: 700,
                  color: "#3E2723", backgroundColor: theme.mood.card,
                  padding: "8px 16px", borderRadius: 10, border: `1px solid ${sec.color}40`,
                }}>{item}</span>
              ))}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

export { Scene4_Activities };