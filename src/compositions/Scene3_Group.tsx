import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 3 · 这个群（8秒）
const Scene3_Group: React.FC = () => {
  const frame = useCurrentFrame();

  const features = [
    { icon: "📚", text: "学习交流", color: theme.railgun.blue },
    { icon: "🎮", text: "二次元同好", color: theme.bocchi.orange },
    { icon: "🌐", text: "全国各地", color: theme.tech.purple },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
      }} />

      <div style={{ position: "absolute", top: "8%", width: "100%", textAlign: "center",
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <span style={{ fontFamily: "Noto Sans SC", fontSize: 36, fontWeight: 900, color: "#FFFFFF", letterSpacing: 4 }}>
          于是，这个群诞生了——
        </span>
      </div>

      <div style={{ position: "absolute", top: "22%", width: "100%", textAlign: "center" }}>
        <span style={{
          fontFamily: "Noto Sans SC", fontSize: 60, fontWeight: 900,
          background: `linear-gradient(135deg, ${theme.bocchi.orange}, ${theme.bocchi.yellow}, ${theme.railgun.electric})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 6,
        }}>高中2027</span>
        <div style={{ fontFamily: "monospace", fontSize: 22, color: theme.bocchi.peach, marginTop: 6 }}>
          1067936907
        </div>
      </div>

      <div style={{ position: "absolute", top: "48%", left: "10%", width: "80%", display: "flex", gap: 10 }}>
        {features.map((f, i) => {
          const opacity = interpolate(frame, [i * 15 + 20, i * 15 + 30], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });
          return (
            <div key={i} style={{
              flex: 1, opacity, backgroundColor: theme.mood.card, borderRadius: 12, padding: "10px 8px",
              border: `1px solid ${f.color}40`, textAlign: "center",
            }}>
              <div style={{ fontSize: 24 }}>{f.icon}</div>
              <div style={{ fontFamily: "Noto Sans SC", fontSize: 14, fontWeight: 700, color: "#FFFFFF", marginTop: 4 }}>{f.text}</div>
            </div>
          );
        })}
      </div>

      <div style={{ position: "absolute", bottom: "15%", width: "100%", textAlign: "center",
        opacity: interpolate(frame, [100, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <span style={{ fontFamily: "Noto Sans SC", fontSize: 28, fontWeight: 900, color: theme.bocchi.yellow,
          textShadow: `0 0 30px ${theme.bocchi.yellow}50` }}>
          学习的乐趣，就该共享！
        </span>
      </div>
    </AbsoluteFill>
  );
};

export { Scene3_Group };