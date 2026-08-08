import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { theme, FPS } from "../theme";
import { useFadeInOut, useTypewriter, useElectricGlow } from "../utils";

const Scene2_Anime: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      {/* 背景渐变 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${theme.mood.bg} 0%, #1A1A3E 50%, ${theme.mood.bg} 100%)`,
        }}
      />

      {/* 虹夏部分 */}
      {frame < 30 * FPS && (
        <NijikaSection frame={frame} />
      )}

      {/* 过渡 */}
      {frame >= 25 * FPS && frame < 35 * FPS && (
        <TransitionSection frame={frame} />
      )}

      {/* 御坂部分 */}
      {frame >= 30 * FPS && (
        <MisakaSection frame={frame} />
      )}

      {/* 底部总结 */}
      {frame >= 50 * FPS && (
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            width: "100%",
            textAlign: "center",
            opacity: interpolate(frame, [50 * FPS, 50 * FPS + 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 32,
              fontWeight: 700,
              color: "#FFFFFF",
              textShadow: "0 0 30px rgba(255,255,255,0.3)",
            }}
          >
            二次元，从来不是逃避现实的地方
          </span>
          <br />
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 28,
              color: theme.bocchi.orange,
              fontWeight: 700,
              marginTop: 12,
              display: "inline-block",
              textShadow: "0 0 20px rgba(255,107,53,0.5)",
            }}
          >
            而是让我们找到同类的起点
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};

const NijikaSection: React.FC<{ frame: number }> = ({ frame }) => {
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {/* 虹夏象征色块 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: theme.bocchi.orange,
          opacity: titleOpacity * 0.3,
          boxShadow: `0 0 80px ${theme.bocchi.orange}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "22%",
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 48,
            fontWeight: 900,
            color: theme.bocchi.orange,
            textShadow: `0 0 40px ${theme.bocchi.orange}60`,
          }}
        >
           虹夏
        </span>
        <span style={{ fontSize: 28, color: "#FFFFFF", marginLeft: 16 }}>
          说：
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          width: "100%",
          textAlign: "center",
          opacity: subtitleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 26,
            color: theme.bocchi.peach,
            lineHeight: 2,
            letterSpacing: 2,
          }}
        >
          <p style={{ margin: 8 }}>「我想组乐队！」</p>
          <p style={{ margin: 8, opacity: interpolate(frame, [30, 50], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          })}}>
            「因为和大家一起演奏，是最开心的事」
          </p>
          <p style={{ margin: 8, opacity: interpolate(frame, [40, 60], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          })}}>
            「一个人做不到的事，两个人就能……」
          </p>
        </div>
      </div>
    </div>
  );
};

const TransitionSection: React.FC<{ frame: number }> = ({ frame }) => {
  const progress = interpolate(frame, [25 * 30, 35 * 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: 4,
        top: "50%",
        background: `linear-gradient(90deg, ${theme.bocchi.orange} ${progress * 100}%, ${theme.railgun.blue} ${progress * 100}%)`,
        opacity: 0.6,
      }}
    />
  );
};

const MisakaSection: React.FC<{ frame: number }> = ({ frame }) => {
  const glow = useElectricGlow(frame - 30 * FPS);
  const titleOpacity = interpolate(frame, [30 * FPS, 30 * FPS + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textOpacity = interpolate(frame, [35 * FPS, 35 * FPS + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {/* 电光效果 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: theme.railgun.electric,
          opacity: titleOpacity * 0.2 * glow,
          boxShadow: `0 0 100px ${theme.railgun.electric}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "22%",
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 48,
            fontWeight: 900,
            color: theme.railgun.electric,
            textShadow: `0 0 40px ${theme.railgun.electric}60`,
          }}
        >
           御坂美琴
        </span>
        <span style={{ fontSize: 28, color: "#FFFFFF", marginLeft: 16 }}>
          说：
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          width: "100%",
          textAlign: "center",
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 26,
            color: "#B0C4DE",
            lineHeight: 2,
            letterSpacing: 2,
          }}
        >
          <p style={{ margin: 8 }}>
            「即使是一方通行，也有想要守护的人」
          </p>
          <p
            style={{
              margin: 8,
              opacity: interpolate(frame, [40 * FPS, 42 * FPS], [0, 1], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}
          >
            「在这座城市里，你从来都不是一个人」
          </p>
          <p
            style={{
              margin: 8,
              opacity: interpolate(frame, [45 * FPS, 47 * FPS], [0, 1], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}
          >
            「因为真正的能力，是与他人相连的力量」
          </p>
        </div>
      </div>
    </div>
  );
};

export { Scene2_Anime };