import { AbsoluteFill, Img, useCurrentFrame, interpolate, spring } from "remotion";
import { theme, FPS } from "../theme";
import { useElectricGlow } from "../utils";

const Scene6_Ending: React.FC = () => {
  const frame = useCurrentFrame();
  // 总时长 60秒 = 1800帧

  const qrOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const qrScale = spring({ frame: frame - 30, fps: FPS, config: { damping: 12, mass: 0.8, stiffness: 100 } });

  const groupIdOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 超炮风格结尾宣言
  const endingOpacity = interpolate(frame, [200, 230], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const glow = useElectricGlow(frame - 200);

  const endTextOpacity = interpolate(frame, [400, 450], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      {/* 背景电网效果 */}
      <ElectricGrid frame={frame} />

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 二维码 */}
        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: 24,
            overflow: "hidden",
            border: "3px solid rgba(255,255,255,0.2)",
            boxShadow: "0 0 60px rgba(255,107,53,0.4)",
            opacity: qrOpacity,
            transform: `scale(${qrScale})`,
          }}
        >
          <Img
            src="/qrcode.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* 群号 */}
        <div
          style={{
            marginTop: 24,
            opacity: groupIdOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 32,
              fontWeight: 700,
              color: theme.bocchi.orange,
              letterSpacing: 6,
              textShadow: `0 0 30px ${theme.bocchi.orange}50`,
            }}
          >
            1067936907
          </span>
        </div>

        {/* 副标题 */}
        <div
          style={{
            marginTop: 12,
            opacity: subtitleOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 18,
              color: "#8899AA",
            }}
          >
            扫一扫，加入「高中2027」
          </span>
        </div>

        {/* 超炮风格结尾宣言 */}
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            width: "100%",
            textAlign: "center",
            opacity: endingOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 38,
              fontWeight: 900,
              color: theme.railgun.electric,
              textShadow: `0 0 40px ${theme.railgun.electric}${Math.floor(60 * glow).toString(16).padStart(2, '0')}`,
              letterSpacing: 4,
            }}
          >
            以我之名，召集同伴！
          </span>
          <br />
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 20,
              color: "#B0C4DE",
              marginTop: 12,
              display: "inline-block",
              opacity: interpolate(frame, [260, 280], [0, 1], {
                extrapolateLeft: "clamp", extrapolateRight: "clamp",
              }),
            }}
          >
            — 一个人的力量有限，但一群人的故事无限 —
          </span>
        </div>

        {/* 最终结尾 */}
        <div
          style={{
            position: "absolute",
            bottom: "6%",
            width: "100%",
            textAlign: "center",
            opacity: endTextOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 24,
              color: "#FFFFFF",
              letterSpacing: 3,
            }}
          >
            我是 <span style={{ color: theme.bocchi.orange, fontWeight: 700 }}>我是一个人呐qwedc</span>
            ，期待在群里见到你！
          </span>
          <br />
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 16,
              color: "#667788",
              marginTop: 6,
              display: "inline-block",
            }}
          >
            QwQ 投个硬币再走呗~
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ElectricGrid: React.FC<{ frame: number }> = ({ frame }) => {
  const glow = useElectricGlow(frame);
  const lines = [
    { x1: "10%", y1: "0%", x2: "30%", y2: "100%", delay: 0 },
    { x1: "50%", y1: "0%", x2: "70%", y2: "100%", delay: 10 },
    { x1: "80%", y1: "0%", x2: "95%", y2: "100%", delay: 20 },
    { x1: "0%", y1: "30%", x2: "100%", y2: "50%", delay: 5 },
    { x1: "0%", y1: "70%", x2: "100%", y2: "80%", delay: 15 },
  ];
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
      {lines.map((line, i) => {
        const alpha = ((Math.sin(frame * 0.05 + line.delay) * 0.5 + 0.5) * 0.3 * glow).toFixed(3);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: line.x1,
              top: line.y1,
              width: line.x2,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${theme.railgun.electric}${alpha.replace('.', '')}, transparent)`,
              opacity: parseFloat(alpha),
              transform: `rotate(${line.delay * 3}deg)`,
            }}
          />
        );
      })}
      {/* 粒子 */}
      {Array.from({ length: 15 }, (_, i) => {
        const x = (i * 67 + frame * 0.2) % 100;
        const y = (i * 89 + frame * 0.1) % 100;
        const size = (i % 3) + 1;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: theme.railgun.electric,
              opacity: ((Math.sin(frame * 0.03 + i) * 0.5 + 0.5) * 0.6 * glow).toFixed(3),
              boxShadow: `0 0 ${size * 4}px ${theme.railgun.electric}`,
            }}
          />
        );
      })}
    </div>
  );
};

export { Scene6_Ending };