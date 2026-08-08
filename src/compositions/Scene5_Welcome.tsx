import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";
import { useTypewriter } from "../utils";

const Scene5_Welcome: React.FC = () => {
  const frame = useCurrentFrame();
  // 总时长 60秒 = 1800帧

  // 温暖台词逐条出现
  const lines = [
    { text: "如果你也觉得：「一个人好累」", start: 20 },
    { text: "如果你也想：「有人懂我」", start: 80 },
    { text: "如果你也喜欢：「深夜看番、写代码、聊音乐」", start: 140 },
    { text: "如果你也担心：「到了高中，会不会还是一个人」", start: 200 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#1A1A3E", overflow: "hidden" }}>
      {/* 温暖光晕背景 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at 50% 40%, ${theme.bocchi.orange}20 0%, transparent 60%)`,
        }}
      />

      {/* 逐条台词 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        {lines.map((line, i) => {
          const opacity = interpolate(frame, [line.start, line.start + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const visible = frame > line.start;
          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${(1 - opacity) * 20}px)`,
              }}
            >
              <span
                style={{
                  fontFamily: "'PingFang SC', sans-serif",
                  fontSize: 30,
                  fontWeight: 700,
                  color: theme.bocchi.peach,
                  textShadow: "0 0 20px rgba(255,224,178,0.3)",
                }}
              >
                {line.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* 核心信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          width: "100%",
          textAlign: "center",
          opacity: interpolate(frame, [400, 430], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "20px 44px",
            border: `2px solid ${theme.bocchi.yellow}`,
            borderRadius: 20,
            background: `${theme.bocchi.yellow}10`,
            boxShadow: `0 0 40px ${theme.bocchi.yellow}30`,
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 34,
              fontWeight: 900,
              color: theme.bocchi.yellow,
              textShadow: `0 0 30px ${theme.bocchi.yellow}50`,
            }}
          >
            那么，欢迎回家
          </span>
          <br />
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 22,
              color: "#FFFFFF",
              marginTop: 10,
              display: "inline-block",
            }}
          >
            这里不是结束的开始，而是故事的序章
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { Scene5_Welcome };