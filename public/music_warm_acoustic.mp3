import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 1 · 灵魂发问（14秒）
const Scene1_Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const questions = [
    { text: "是那看不完的云彩", icon: "☁️", start: 8, color: theme.bocchi.peach },
    { text: "还有看不厌的人", icon: "👥", start: 9.5, color: theme.bocchi.yellow },
    { text: "接着便是学习生活", icon: "📖", start: 11, color: theme.bocchi.orange },
  ];

  // 标题逐个字弹出
  const title = "高中，到底是什么样的？";
  const titleChars = Math.min(title.length, Math.floor(frame * 3));
  // 放大缩小动画
  const pulse = Math.sin(frame * 0.08) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.dark, overflow: "hidden" }}>
      {/* 暖色渐变背景 */}
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `linear-gradient(135deg, ${theme.mood.dark} 0%, ${theme.mood.bg} 45%, ${theme.warm.darkBrown} 100%)`,
      }} />

      {/* 暖色光晕 */}
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `radial-gradient(ellipse at 50% 40%, ${theme.bocchi.orange}25 0%, transparent 60%)`,
      }} />

      {/* 漂浮粒子 */}
      {Array.from({ length: 12 }, (_, i) => {
        const x = (i * 83 + frame * 0.3) % 100;
        const y = (i * 47 + frame * 0.1) % 100;
        return (
          <div key={i} style={{
            position: "absolute", left: `${x}%`, top: `${y}%`,
            width: 4, height: 4, borderRadius: "50%",
            backgroundColor: theme.bocchi.yellow,
            opacity: ((Math.sin(frame * 0.02 + i) * 0.5 + 0.5) * 0.4),
            boxShadow: `0 0 8px ${theme.bocchi.yellow}`,
          }} />
        );
      })}

      {/* 标题 */}
      <div style={{ position: "absolute", top: "30%", width: "100%", textAlign: "center" }}>
        <span style={{
          fontFamily: "Noto Sans SC", fontSize: 56, fontWeight: 900,
          color: theme.bocchi.yellow,
          display: "inline-block", transform: `scale(${pulse})`,
          textShadow: `0 0 40px ${theme.bocchi.yellow}70, 0 4px 10px rgba(0,0,0,0.3)`,
          letterSpacing: 4,
        }}>{title.slice(0, titleChars)}</span>
      </div>

      {/* 三个回答 */}
      {questions.map((q, i) => {
        const opacity = interpolate(frame, [q.start * FPS, q.start * FPS + 4], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
        });
        const scale = interpolate(frame, [q.start * FPS, q.start * FPS + 6], [0.6, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
        });
        return (
          <div key={i} style={{
            position: "absolute", top: `${44 + i * 10}%`, width: "100%",
            textAlign: "center", opacity, transform: `scale(${scale})`,
          }}>
            <span style={{ fontSize: 34, marginRight: 10 }}>{q.icon}</span>
            <span style={{
              fontFamily: "Noto Sans SC", fontSize: 34, fontWeight: 800,
              color: q.color, textShadow: `0 0 20px ${q.color}60`,
            }}>{q.text}</span>
          </div>
        );
      })}

      {/* 最终句 */}
      {frame > 12.5 * FPS && (
        <div style={{
          position: "absolute", top: "80%", width: "100%", textAlign: "center",
          opacity: interpolate(frame, [12.5 * FPS, 13.5 * FPS], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          }),
        }}>
          <span style={{
            fontFamily: "Noto Sans SC", fontSize: 40, fontWeight: 900,
            color: theme.bocchi.yellow, display: "inline-block", transform: `scale(${pulse})`,
            textShadow: `0 0 40px ${theme.bocchi.yellow}70, 0 4px 8px rgba(0,0,0,0.3)`,
          }}>
            它，本就是如此有趣 ✨
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};

export { Scene1_Intro };