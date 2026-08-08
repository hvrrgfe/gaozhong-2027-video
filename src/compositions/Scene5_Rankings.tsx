import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 5 · 排行榜（8秒）
const Scene5_Rankings: React.FC = () => {
  const frame = useCurrentFrame();
  const ranks = [
    { rank: 5, name: "明日之星", score: "60", color: theme.tech.purple, start: 5 },
    { rank: 4, name: "学习永动机", score: "72", color: "#4169E1", start: 20 },
    { rank: 3, name: "错题杀手", score: "85", color: "#CD7F32", start: 35 },
    { rank: 2, name: "清北种子", score: "96", color: "#C0C0C0", start: 50 },
    { rank: 1, name: "卷王本王", score: "128", color: "#FFD700", start: 65, highlight: true },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "5%", width: "100%", textAlign: "center" }}>
        <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 32, fontWeight: 900, color: "#FFD700", textShadow: `0 0 40px #FFD70050` }}>
          🏆 积分排行榜
        </span>
      </div>
      <div style={{ position: "absolute", top: "18%", left: "15%", width: "70%", display: "flex", flexDirection: "column", gap: 6 }}>
        {ranks.map((r) => {
          const opacity = interpolate(frame, [r.start, r.start + 8], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });
          return (
            <div key={r.rank} style={{
              opacity, display: "flex", alignItems: "center", gap: 12, padding: "8px 14px",
              backgroundColor: r.highlight ? "rgba(255,215,0,0.1)" : theme.mood.card,
              borderRadius: 10, border: `2px solid ${r.highlight ? r.color : r.color}40`,
            }}>
              <span style={{ fontSize: 20 }}>{["🥇","🥈","🥉","#4","#5"][r.rank-1]}</span>
              <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 18, fontWeight: 700, color: "#FFFFFF", flex: 1 }}>{r.name}</span>
              <span style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 900, color: r.highlight ? r.color : "#FFD700" }}>{r.score}<span style={{ fontSize: 12, color: "#667788" }}>分</span></span>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", bottom: "8%", width: "100%", textAlign: "center",
        opacity: interpolate(frame, [170, 180], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 18, color: "#B0C4DE" }}>
          ↓ 下一个上榜的，就是你 ↓
        </span>
      </div>
    </AbsoluteFill>
  );
};

export { Scene5_Rankings };