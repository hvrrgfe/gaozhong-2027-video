import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { theme, FPS } from "../theme";
import { useTypewriter, useFadeInOut, useSpringBounce, useElectricGlow } from "../utils";

const Scene1_Lonely: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = (f: number, start: number, dur = 20) =>
    interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.dark, overflow: "hidden" }}>
      {/* 背景粒子星光 */}
      <Stars frame={frame} />

      {/* 第一阶段：大标题「一个人」 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: fadeIn(frame, 0, 30),
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif",
            fontSize: 120,
            fontWeight: 900,
            color: theme.mood.lonely,
            letterSpacing: 20,
            textShadow: "0 0 40px rgba(44,62,80,0.5)",
          }}
        >
          一个人
        </span>
      </div>

      {/* 第二阶段：裂开效果 */}
      {frame > 30 * FPS && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: fadeIn(frame, 30 * FPS, 15),
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif",
              fontSize: 80,
              fontWeight: 900,
              color: "#FFFFFF",
              textShadow: "0 0 60px rgba(255,255,255,0.3)",
              opacity: interpolate(frame, [30 * FPS, 30 * FPS + 30], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            一个人……
          </span>
        </div>
      )}

      {/* 第三阶段：破碎的文字——孤独的日常 */}
      <LonelyLines frame={frame} />

      {/* 第四阶段：转折！ */}
      {frame > 40 * FPS && (
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            width: "100%",
            textAlign: "center",
            opacity: interpolate(frame, [40 * FPS, 40 * FPS + 25], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 36,
              color: theme.bocchi.orange,
              fontWeight: 700,
              textShadow: "0 0 30px rgba(255,107,53,0.6)",
            }}
          >
            但我……不想再一个人了！
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};

const Stars: React.FC<{ frame: number }> = ({ frame }) => {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    x: (i * 137 + 50) % 100,
    y: (i * 251 + 30) % 100,
    size: (i % 3) + 1,
    delay: (i * 7) % 100,
  }));
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {stars.map((s, i) => {
        const twinkle = Math.sin(frame * 0.03 + s.delay) * 0.5 + 0.5;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size * 2,
              height: s.size * 2,
              borderRadius: "50%",
              backgroundColor: `rgba(255,255,255,${twinkle * 0.5})`,
              boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,${twinkle * 0.3})`,
            }}
          />
        );
      })}
    </div>
  );
};

const LonelyLines: React.FC<{ frame: number }> = ({ frame }) => {
  const lines = [
    { text: "刷着手机，却不知道找谁聊天", y: 55, delay: 34 },
    { text: "列表里几百人，懂我的没几个", y: 62, delay: 37 },
    { text: "中考结束了，朋友各奔东西", y: 69, delay: 40 },
  ];
  return (
    <>
      {lines.map((line, i) => {
        const visible = frame > line.delay * FPS;
        const opacity = visible
          ? interpolate(frame, [line.delay * FPS, line.delay * FPS + 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          : 0;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${line.y}%`,
              width: "100%",
              textAlign: "center",
              opacity,
              transform: `translateY(${visible ? 0 : 20}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            <span
              style={{
                fontFamily: "'PingFang SC', sans-serif",
                fontSize: 22,
                color: "#8899AA",
                letterSpacing: 2,
              }}
            >
              {line.text}
            </span>
          </div>
        );
      })}
    </>
  );
};

export { Scene1_Lonely };