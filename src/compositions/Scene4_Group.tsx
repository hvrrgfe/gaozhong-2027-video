import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { theme, FPS } from "../theme";
import { useTypewriter, useElectricGlow } from "../utils";

const Scene4_Group: React.FC = () => {
  const frame = useCurrentFrame();
  // 总时长 70秒 = 2100帧

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 群名打字机
  const groupName = useTypewriter("高中2027", 20, 4);
  const groupNameOpacity = interpolate(frame, [20, 25], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 群号
  const groupIdOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 3个特点
  const feature1 = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const feature2 = interpolate(frame, [200, 220], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const feature3 = interpolate(frame, [280, 300], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 热血集结
  const rallyOpacity = interpolate(frame, [400, 430], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      {/* 背景动态光效 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
        }}
      />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 40,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: 4,
          }}
        >
          于是，这个群诞生了——
        </span>
      </div>

      {/* 群名大展示 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          width: "100%",
          textAlign: "center",
          opacity: groupNameOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 72,
            fontWeight: 900,
            background: `linear-gradient(135deg, ${theme.bocchi.orange}, ${theme.bocchi.yellow}, ${theme.railgun.electric})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
            letterSpacing: 8,
          }}
        >
          {groupName}
        </span>
      </div>

      {/* 群号 */}
      <div
        style={{
          position: "absolute",
          top: "32%",
          width: "100%",
          textAlign: "center",
          opacity: groupIdOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 28,
            color: theme.bocchi.peach,
            letterSpacing: 4,
          }}
        >
          群号：1067936907
        </span>
      </div>

      {/* 三个特点卡片 */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "8%",
          width: "84%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <FeatureItem
          icon="📚"
          text="学习交流 —— 高中知识分享、学习方法、作业互助"
          opacity={feature1}
          color={theme.railgun.blue}
        />
        <FeatureItem
          icon="🎮"
          text="二次元同好 —— 番剧、音乐、游戏、一起追"
          opacity={feature2}
          color={theme.bocchi.orange}
        />
        <FeatureItem
          icon="🌐"
          text="全国各地 —— 不分地域，只要你是高中生/准高中生"
          opacity={feature3}
          color={theme.tech.purple}
        />
      </div>

      {/* 热血集结号 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          width: "100%",
          textAlign: "center",
          opacity: rallyOpacity,
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "16px 40px",
            border: `2px solid ${theme.bocchi.orange}`,
            borderRadius: 50,
            backgroundColor: `${theme.bocchi.orange}15`,
          }}
        >
          <span
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontSize: 30,
              fontWeight: 800,
              color: theme.bocchi.orange,
              textShadow: `0 0 30px ${theme.bocchi.orange}50`,
            }}
          >
            加入我们，一起创造属于我们的高中回忆！
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const FeatureItem: React.FC<{
  icon: string;
  text: string;
  opacity: number;
  color: string;
}> = ({ icon, text, opacity, color }) => {
  return (
    <div
      style={{
        opacity,
        transform: `translateX(${(1 - opacity) * 40}px)`,
        display: "flex",
        alignItems: "center",
        gap: 14,
        backgroundColor: "#1A1A3E",
        padding: "14px 20px",
        borderRadius: 16,
        border: `1px solid ${color}40`,
      }}
    >
      <span style={{ fontSize: 28 }}>{icon}</span>
      <span
        style={{
          fontFamily: "'PingFang SC', sans-serif",
          fontSize: 18,
          color: "#D0D0E0",
          lineHeight: 1.4,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export { Scene4_Group };