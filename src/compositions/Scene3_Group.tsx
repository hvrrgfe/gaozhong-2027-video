import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";
import { useTypewriter } from "../utils";

// PART 3 · 这个群（70-110秒，40秒）
const Scene3_Group: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const groupName = useTypewriter("高中2027", 20, 4);
  const groupNameOpacity = interpolate(frame, [20, 25], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const groupIdOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const feature1 = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const feature2 = interpolate(frame, [200, 220], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const feature3 = interpolate(frame, [280, 300], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const sloganOpacity = interpolate(frame, [400, 430], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
        }}
      />

      {/* 标题 */}
      <div style={{ position: "absolute", top: "8%", width: "100%", textAlign: "center", opacity: titleOpacity }}>
        <span style={{
          fontFamily: "'Noto Sans SC', sans-serif", fontSize: 40, fontWeight: 900,
          color: "#FFFFFF", letterSpacing: 4,
        }}>于是，这个群诞生了——</span>
      </div>

      {/* 群名 */}
      <div style={{ position: "absolute", top: "20%", width: "100%", textAlign: "center", opacity: groupNameOpacity }}>
        <span style={{
          fontFamily: "'Noto Sans SC', sans-serif", fontSize: 72, fontWeight: 900,
          background: `linear-gradient(135deg, ${theme.bocchi.orange}, ${theme.bocchi.yellow}, ${theme.railgun.electric})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: 8,
        }}>{groupName}</span>
      </div>

      {/* 群号 */}
      <div style={{ position: "absolute", top: "32%", width: "100%", textAlign: "center", opacity: groupIdOpacity }}>
        <span style={{ fontFamily: "monospace", fontSize: 28, color: theme.bocchi.peach, letterSpacing: 4 }}>
          群号：1067936907
        </span>
      </div>

      {/* 三个特点 */}
      <div style={{ position: "absolute", top: "42%", left: "8%", width: "84%", display: "flex", flexDirection: "column", gap: 16 }}>
        <FeatureItem icon="📚" text="学习交流 —— 高中知识分享、学习方法、作业互助" opacity={feature1} color={theme.railgun.blue} />
        <FeatureItem icon="🎮" text="二次元同好 —— 番剧、音乐、游戏、一起追" opacity={feature2} color={theme.bocchi.orange} />
        <FeatureItem icon="🌐" text="全国各地 —— 不分地域，只要你是高中生/准高中生" opacity={feature3} color={theme.tech.purple} />
      </div>

      {/* 标语 */}
      <div style={{ position: "absolute", bottom: "12%", width: "100%", textAlign: "center", opacity: sloganOpacity }}>
        <span style={{
          fontFamily: "'Noto Sans SC', sans-serif", fontSize: 34, fontWeight: 900,
          color: theme.bocchi.yellow, textShadow: `0 0 30px ${theme.bocchi.yellow}50`,
        }}>学习的乐趣，就该共享！</span>
      </div>
    </AbsoluteFill>
  );
};

const FeatureItem: React.FC<{ icon: string; text: string; opacity: number; color: string }> = ({ icon, text, opacity, color }) => {
  return (
    <div style={{
      opacity,
      transform: `translateX(${(1 - opacity) * 40}px)`,
      display: "flex", alignItems: "center", gap: 14,
      backgroundColor: theme.mood.card, padding: "14px 20px", borderRadius: 16,
      border: `1px solid ${color}40`,
    }}>
      <span style={{ fontSize: 28 }}>{icon}</span>
      <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 18, color: "#D0D0E0", lineHeight: 1.4 }}>{text}</span>
    </div>
  );
};

export { Scene3_Group };