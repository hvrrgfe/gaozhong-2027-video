import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 1 · 灵魂发问（0-30秒）
const Scene1_Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // 文案（用户可自行修改）
  const questions = [
    { text: "是那看不完的云彩", icon: "☁️", start: 13, color: theme.bocchi.peach },
    { text: "还有看不厌的人", icon: "👥", start: 16, color: theme.bocchi.yellow },
    { text: "接着便是学习生活", icon: "📖", start: 19, color: theme.bocchi.orange },
  ];
  const finalText = "它，本就是如此有趣";

  // 背景渐显
  const bgOpacity = interpolate(frame, [1, 3], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 标题逐字（0-10秒）
  const titleText = "高中，到底是什么样的？";
  const titleChars = Math.min(10, Math.floor(frame * 2));
  const showTitle = frame < 12;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.dark, overflow: "hidden" }}>
      {/* 暖色渐变背景 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: bgOpacity,
          background: `linear-gradient(135deg, ${theme.mood.dark} 0%, ${theme.mood.bg} 50%, ${theme.warm.tan}33 100%)`,
        }}
      />

      {/* 暖色光晕 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at 50% 40%, ${theme.bocchi.orange}22 0%, transparent 60%)`,
        }}
      />

      {/* 标题逐字浮现 */}
      {showTitle && (
        <div
          style={{
            position: "absolute",
            top: "35%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: 64,
              fontWeight: 900,
              color: theme.warm.cream,
              textShadow: `0 0 30px ${theme.bocchi.orange}80, 0 4px 8px rgba(0,0,0,0.5)`,
              letterSpacing: 4,
            }}
          >
            {titleText.slice(0, titleChars)}
          </span>
        </div>
      )}

      {/* 三个问题 */}
      {!showTitle && (
        <>
          {/* 标题缩小上移 */}
          <div
            style={{
              position: "absolute",
              top: "12%",
              width: "100%",
              textAlign: "center",
              opacity: interpolate(frame, [12, 14], [1, 0.4], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}
          >
            <span
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: 30,
                fontWeight: 700,
                color: theme.warm.cream,
                opacity: 0.5,
              }}
            >
              高中，到底是什么样的？
            </span>
          </div>

          {questions.map((q, i) => {
            const opacity = interpolate(frame, [q.start * FPS, q.start * FPS + 6], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            const y = interpolate(frame, [q.start * FPS, q.start * FPS + 10], [60, 0], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: `${35 + i * 12}%`,
                  width: "100%",
                  textAlign: "center",
                  opacity,
                  transform: `translateY(${y}px)`,
                }}
              >
                <span style={{ fontSize: 40, marginRight: 12 }}>{q.icon}</span>
                <span
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: 44,
                    fontWeight: 800,
                    color: q.color,
                    textShadow: `0 0 20px ${q.color}60`,
                  }}
                >
                  {q.text}
                </span>
              </div>
            );
          })}
        </>
      )}

      {/* 最终句 */}
      {frame > 23 * FPS && (
        <div
          style={{
            position: "absolute",
            top: "42%",
            width: "100%",
            textAlign: "center",
            opacity: interpolate(frame, [23 * FPS, 25 * FPS], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            }),
          }}
        >
          <span
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: 56,
              fontWeight: 900,
              color: theme.bocchi.yellow,
              textShadow: `0 0 40px ${theme.bocchi.yellow}70, 0 4px 8px rgba(0,0,0,0.5)`,
              letterSpacing: 4,
            }}
          >
            {finalText}
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};

export { Scene1_Intro };