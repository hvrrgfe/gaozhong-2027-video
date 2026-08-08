import { AbsoluteFill, useCurrentFrame, interpolate, OffthreadVideo, staticFile, Sequence } from "remotion";
import { theme, FPS } from "../theme";

// PART 1 · 开场（网格视频4秒 → 灵魂发问）
const Scene1_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const videoEnd = 4 * FPS; // 120帧（4秒）

  const questions = [
    { text: "是那看不完的云彩", icon: "☁️", start: videoEnd + 9, color: theme.bocchi.peach },
    { text: "还有看不厌的人", icon: "👥", start: videoEnd + 12, color: theme.bocchi.yellow },
    { text: "接着便是学习生活", icon: "📖", start: videoEnd + 15, color: theme.bocchi.orange },
  ];
  const finalText = "它，本就是如此有趣";

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.dark, overflow: "hidden" }}>
      {/* 第一部分：网格视频 */}
      {frame < videoEnd && (
        <OffthreadVideo
          src={staticFile("opening_grid.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      {/* 第二部分：灵魂发问 — 暖色背景 */}
      {frame >= videoEnd && (
        <>
          <div
            style={{
              position: "absolute", width: "100%", height: "100%",
              background: `linear-gradient(135deg, ${theme.mood.dark} 0%, ${theme.mood.bg} 50%, ${theme.warm.tan}33 100%)`,
              opacity: interpolate(frame, [videoEnd, videoEnd + 5], [0, 1], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}
          />
          <div
            style={{
              position: "absolute", width: "100%", height: "100%",
              background: `radial-gradient(ellipse at 50% 40%, ${theme.bocchi.orange}22 0%, transparent 60%)`,
            }}
          />

          {/* 标题逐字 */}
          <div style={{ position: "absolute", top: "35%", width: "100%", textAlign: "center" }}>
            <span style={{
              fontFamily: "'Noto Sans SC', sans-serif", fontSize: 64, fontWeight: 900,
              color: theme.warm.cream,
              textShadow: `0 0 30px ${theme.bocchi.orange}80, 0 4px 8px rgba(0,0,0,0.5)`,
              letterSpacing: 4,
            }}>
              {"高中，到底是什么样的？".slice(0, Math.min(10, Math.floor((frame - videoEnd) * 2)))}
            </span>
          </div>

          {/* 三个问题 */}
          {frame > videoEnd + 9 && questions.map((q, i) => {
            const opacity = interpolate(frame, [q.start * FPS, q.start * FPS + 6], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            const y = interpolate(frame, [q.start * FPS, q.start * FPS + 10], [60, 0], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            return (
              <div key={i} style={{
                position: "absolute", top: `${35 + i * 12}%`, width: "100%",
                textAlign: "center", opacity, transform: `translateY(${y}px)`,
              }}>
                <span style={{ fontSize: 40, marginRight: 12 }}>{q.icon}</span>
                <span style={{
                  fontFamily: "'Noto Sans SC', sans-serif", fontSize: 44, fontWeight: 800,
                  color: q.color, textShadow: `0 0 20px ${q.color}60`,
                }}>{q.text}</span>
              </div>
            );
          })}

          {/* 最终句 */}
          {frame > videoEnd + 19 && (
            <div style={{
              position: "absolute", top: "42%", width: "100%", textAlign: "center",
              opacity: interpolate(frame, [(videoEnd + 19) * FPS, (videoEnd + 21) * FPS], [0, 1], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}>
              <span style={{
                fontFamily: "'Noto Sans SC', sans-serif", fontSize: 56, fontWeight: 900,
                color: theme.bocchi.yellow,
                textShadow: `0 0 40px ${theme.bocchi.yellow}70, 0 4px 8px rgba(0,0,0,0.5)`,
                letterSpacing: 4,
              }}>{finalText}</span>
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};

export { Scene1_Intro };