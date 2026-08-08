import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 2 · 我是谁（8秒：4卡片快闪）
const Scene2_AboutMe: React.FC = () => {
  const frame = useCurrentFrame();

  const cards = [
    { icon: "💻", title: "技术宅", desc: "会写代码·会玩AI·GitHub", color: theme.tech.purple },
    { icon: "🎸", title: "二次元", desc: "孤独摇滚·超炮·虹夏推", color: theme.bocchi.orange },
    { icon: "🎓", title: "准高一", desc: "翔安一中·对未来期待", color: theme.railgun.blue },
    { icon: "🤝", title: "想交朋友", desc: "一起学习·一起追番·一起变强", color: "#43A047" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
      }} />

      <div style={{ position: "absolute", top: "6%", width: "100%", textAlign: "center" }}>
        <span style={{
          fontFamily: "'Noto Sans SC', sans-serif", fontSize: 36, fontWeight: 900,
          color: theme.tech.purple, textShadow: `0 0 40px ${theme.tech.purple}60`,
        }}>我是谁？</span>
      </div>

      <div style={{
        position: "absolute", top: "18%", left: "5%", width: "90%", height: "74%",
        display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12,
      }}>
        {cards.map((card, i) => {
          const opacity = interpolate(frame, [i * 15 + 5, i * 15 + 15], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });
          return (
            <div key={i} style={{
              opacity, transform: `scale(${0.7 + opacity * 0.3})`,
              backgroundColor: theme.mood.card, borderRadius: 16, padding: 16,
              border: `2px solid ${card.color}40`, textAlign: "center",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <div style={{ fontSize: 36, marginBottom: 6 }}>{card.icon}</div>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginBottom: 4 }}>{card.title}</div>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 13, color: "#B0B0C0" }}>{card.desc}</div>
            </div>
          );
        })}
      </div>

      {/* 自嘲 */}
      <div style={{
        position: "absolute", bottom: "4%", width: "100%", textAlign: "center",
        opacity: interpolate(frame, [120, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 16, color: "#8899AA" }}>
          B站粉丝38个，但我还在努力！QwQ
        </span>
      </div>
    </AbsoluteFill>
  );
};

export { Scene2_AboutMe };