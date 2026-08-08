import { AbsoluteFill, useCurrentFrame, interpolate, OffthreadVideo, staticFile } from "remotion";
import { theme, FPS } from "../theme";

// PART 1 · 开场（16秒：网格视频4秒 + 灵魂发问）
const Scene1_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const videoEnd = 4 * FPS; // 120帧

  const questions = [
    { text: "是那看不完的云彩", icon: "☁️", start: 9, color: theme.bocchi.peach },
    { text: "还有看不厌的人", icon: "👥", start: 10.5, color: theme.bocchi.yellow },
    { text: "接着便是学习生活", icon: "📖", start: 12, color: theme.bocchi.orange },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.dark, overflow: "hidden" }}>
      {/* 网格视频 */}
      {frame < videoEnd && (
        <OffthreadVideo
          src={staticFile("opening_grid.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      {/* 灵魂发问 — 暖色背景 */}
      {frame >= videoEnd && (
        <>
          <div style={{
            position: "absolute", width: "100%", height: "100%",
            background: `linear-gradient(135deg, ${theme.mood.dark} 0%, ${theme.mood.bg} 50%, ${theme.warm.tan}33 100%)`,
            opacity: interpolate(frame, [videoEnd, videoEnd + 3], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            }),
          }} />
          <div style={{
            position: "absolute", width: "100%", height: "100%",
            background: `radial-gradient(ellipse at 50% 40%, ${theme.bocchi.orange}22 0%, transparent 60%)`,
          }} />

          {/* 标题 */}
          <div style={{ position: "absolute", top: "30%", width: "100%", textAlign: "center" }}>
            <span style={{
              fontFamily: "'Noto Sans SC', sans-serif", fontSize: 52, fontWeight: 900,
              color: theme.warm.cream,
              textShadow: `0 0 30px ${theme.bocchi.orange}80, 0 4px 8px rgba(0,0,0,0.5)`,
              letterSpacing: 4,
            }}>
              {"高中，到底是什么样的？".slice(0, Math.min(10, Math.floor((frame - videoEnd) * 3)))}
            </span>
          </div>

          {/* 三个回答 */}
          {questions.map((q, i) => {
            const opacity = interpolate(frame, [q.start * FPS, q.start * FPS + 4], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            return (
              <div key={i} style={{
                position: "absolute", top: `${42 + i * 10}%`, width: "100%",
                textAlign: "center", opacity,
              }}>
                <span style={{ fontSize: 30, marginRight: 10 }}>{q.icon}</span>
                <span style={{
                  fontFamily: "'Noto Sans SC', sans-serif", fontSize: 34, fontWeight: 800,
                  color: q.color, textShadow: `0 0 20px ${q.color}60`,
                }}>{q.text}</span>
              </div>
            );
          })}

          {/* 最终句 */}
          {frame > 13.5 * FPS && (
            <div style={{
              position: "absolute", top: "78%", width: "100%", textAlign: "center",
              opacity: interpolate(frame, [13.5 * FPS, 14.5 * FPS], [0, 1], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}>
              <span style={{
                fontFamily: "'Noto Sans SC', sans-serif", fontSize: 40, fontWeight: 900,
                color: theme.bocchi.yellow,
                textShadow: `0 0 40px ${theme.bocchi.yellow}70, 0 4px 8px rgba(0,0,0,0.5)`,
              }}>它，本就是如此有趣 ✨</span>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};

export { Scene1_Intro };