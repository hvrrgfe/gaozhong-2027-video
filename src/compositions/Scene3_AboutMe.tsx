import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";
import { useTypewriter } from "../utils";

const Scene3_AboutMe: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 各卡片入场
  const card1 = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const card2 = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const card3 = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const card4 = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          top: "6%",
          opacity: titleOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 44,
            fontWeight: 900,
            color: theme.tech.purple,
            textShadow: `0 0 40px ${theme.tech.purple}60`,
          }}
        >
          我是谁？
        </span>
      </div>

      {/* 卡片布局 2x2 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "90%",
          height: "70%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
        }}
      >
        <Card
          opacity={card1}
          bg={`linear-gradient(135deg, ${theme.tech.deepPurple}, ${theme.tech.purple})`}
          icon="💻"
          title="技术宅"
          desc={["会写代码", "会玩AI", "本地大模型/Agent", "GitHub 贡献者"]}
        />
        <Card
          opacity={card2}
          bg={`linear-gradient(135deg, ${theme.bocchi.orange}, ${theme.bocchi.coral})`}
          icon="🎸"
          title="二次元"
          desc={["孤独摇滚", "超电磁炮", "虹夏推", "御坂推"]}
        />
        <Card
          opacity={card3}
          bg={`linear-gradient(135deg, #1E88E5, ${theme.railgun.blue})`}
          icon="🎓"
          title="准高一"
          desc={["翔安一中", "即将入学", "对未来期待"]}
        />
        <Card
          opacity={card4}
          bg={`linear-gradient(135deg, #43A047, #66BB6A)`}
          icon="🤝"
          title="想交朋友"
          desc={["分享快乐", "一起学习", "一起追番"]}
        />
      </div>

      {/* 底部自嘲 */}
      <div
        style={{
          position: "absolute",
          bottom: "6%",
          width: "100%",
          textAlign: "center",
          opacity: interpolate(frame, [110, 130], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          }),
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 22,
            color: "#8899AA",
          }}
        >
          B站粉丝只有38个，但我还在努力！ QwQ
        </span>
      </div>
    </AbsoluteFill>
  );
};

const Card: React.FC<{
  opacity: number;
  bg: string;
  icon: string;
  title: string;
  desc: string[];
}> = ({ opacity, bg, icon, title, desc }) => {
  return (
    <div
      style={{
        backgroundColor: "#1A1A3E",
        borderRadius: 20,
        padding: 20,
        opacity,
        transform: `scale(${0.8 + opacity * 0.2})`,
        border: "2px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 10 }}>{icon}</div>
      <div
        style={{
          fontFamily: "'PingFang SC', sans-serif",
          fontSize: 24,
          fontWeight: 800,
          color: "#FFFFFF",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {desc.map((d, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 16,
              color: "#C0C0D0",
            }}
          >
            · {d}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Scene3_AboutMe };