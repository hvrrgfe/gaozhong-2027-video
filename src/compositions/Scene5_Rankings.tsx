import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 5 · 积分排行榜（210-250秒，40秒）
const Scene5_Rankings: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb1 = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb2 = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb3 = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb4 = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb5 = interpolate(frame, [150, 170], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const footerOpacity = interpolate(frame, [180, 200], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
      }} />

      <div style={{ position: "absolute", top: "8%", width: "100%", textAlign: "center", opacity: titleOpacity }}>
        <span style={{
          fontFamily: "'Noto Sans SC', sans-serif", fontSize: 44, fontWeight: 900,
          color: "#FFD700", textShadow: `0 0 40px #FFD70050`, letterSpacing: 4,
        }}>🏆 积分排行榜</span>
        <div style={{ marginTop: 6, fontSize: 18, color: "#8899AA" }}>
          每月公示 · 榜单透明 · 卷起来！
        </div>
      </div>

      <div style={{ position: "absolute", top: "28%", left: "18%", width: "64%", display: "flex", flexDirection: "column", gap: 10 }}>
        <RankRow rank={1} name="「卷王本王」" score="128" opacity={lb1} highlight color="#FFD700" />
        <RankRow rank={2} name="「清北种子」" score="96" opacity={lb2} color="#C0C0C0" />
        <RankRow rank={3} name="「错题杀手」" score="85" opacity={lb3} color="#CD7F32" />
        <RankRow rank={4} name="「学习永动机」" score="72" opacity={lb4} color="#4169E1" />
        <RankRow rank={5} name="「明日之星」" score="60" opacity={lb5} color="#9B59B6" />
        <div style={{ textAlign: "center", marginTop: 10, opacity: footerOpacity, fontSize: 20, color: "#B0C4DE" }}>
          ↓ 下一个上榜的，就是你 ↓
        </div>
      </div>
    </AbsoluteFill>
  );
};

const RankRow: React.FC<{
  rank: number; name: string; score: string;
  opacity: number; color: string; highlight?: boolean;
}> = ({ rank, name, score, opacity, color, highlight }) => {
  return (
    <div style={{
      opacity, transform: `translateX(${(1 - opacity) * 30}px)`,
      display: "flex", alignItems: "center", gap: 16,
      backgroundColor: highlight ? "rgba(255,215,0,0.1)" : theme.mood.card,
      borderRadius: 14, padding: "10px 18px",
      border: `2px solid ${highlight ? color : color}40`,
      boxShadow: highlight ? `0 0 20px ${color}30` : "none",
    }}>
      <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 22, fontWeight: 900, color: highlight ? color : "#FFFFFF", width: 36, textAlign: "center" }}>
        {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`}
      </span>
      <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 20, fontWeight: 700, color: "#FFFFFF", flex: 1 }}>{name}</span>
      <span style={{ fontFamily: "monospace", fontSize: 24, fontWeight: 900, color: highlight ? color : "#FFD700" }}>{score}</span>
      <span style={{ fontSize: 14, color: "#667788", marginLeft: 4 }}>分</span>
    </div>
  );
};

export { Scene5_Rankings };