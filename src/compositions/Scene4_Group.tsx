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

  // 3个特点（先淡入，后淡出让位给活动区）
  const feature1 = interpolate(frame, [120, 140, 440, 460], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const feature2 = interpolate(frame, [200, 220, 440, 460], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const feature3 = interpolate(frame, [280, 300, 440, 460], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 活动展示
  const activitiesTitle = interpolate(frame, [500, 530], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  // 活动组展示（4组，先淡入后淡出让位排行榜）
  const act1 = interpolate(frame, [530, 560, 1010, 1030], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const act2 = interpolate(frame, [650, 680, 1010, 1030], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const act3 = interpolate(frame, [770, 800, 1010, 1030], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const act4 = interpolate(frame, [890, 920, 1010, 1030], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 排行榜
  const lbTitle = interpolate(frame, [1050, 1080], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb1 = interpolate(frame, [1100, 1130], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb2 = interpolate(frame, [1140, 1170], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb3 = interpolate(frame, [1180, 1210], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb4 = interpolate(frame, [1220, 1250], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const lb5 = interpolate(frame, [1260, 1290], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 活动标语
  const sloganOpacity = interpolate(frame, [1350, 1380], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // 热血集结
  const rallyOpacity = interpolate(frame, [1500, 1530], [0, 1], {
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

      {/* 活动展示标题 */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          width: "100%",
          textAlign: "center",
          opacity: activitiesTitle,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 32,
            fontWeight: 800,
            color: theme.bocchi.yellow,
            textShadow: `0 0 30px ${theme.bocchi.yellow}50`,
          }}
        >
          群里有什么活动？
        </span>
      </div>

      {/* 活动分类标签 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "6%",
          width: "88%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* 每周竞技场 */}
        <div style={{ opacity: act1, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 14, fontWeight: 700, color: theme.bocchi.orange,
            letterSpacing: 2, marginLeft: 4
          }}>⚡ 每周竞技场（周末晚）</span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🏆" title="谁是卷王" desc="限时刷题赛·20分钟5道压轴题" color={theme.bocchi.orange} />
            <MiniCard icon="🩺" title="错题ICU" desc="问卷星收集难题·投票选群题" color={theme.railgun.electric} />
            <MiniCard icon="📚" title="云端自习室" desc="周六晚语音通话·闭麦一起学" color="#8BC34A" />
          </div>
        </div>

        {/* 每月深度破冰 */}
        <div style={{ opacity: act2, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 14, fontWeight: 700, color: theme.tech.purple,
            letterSpacing: 2, marginLeft: 4
          }}>💬 每月深度破冰</span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🌳" title="树洞吐槽" desc="公开聊天·月考考崩了怎么办" color={theme.tech.purple} />
            <MiniCard icon="📔" title="共享笔记库" desc="腾讯文档·认领章节·共创入库" color={theme.bocchi.yellow} />
            <MiniCard icon="🚩" title="逆袭flag押金" desc="月初立flag押5分·达成还返+10" color="#FF6F00" />
          </div>
        </div>

        {/* 积分奖励 */}
        <div style={{ opacity: act3, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 14, fontWeight: 700, color: "#FFD700",
            letterSpacing: 2, marginLeft: 4
          }}>🏆 积分榜奖励（每月前5名）</span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🏅" title="群头衔定制" desc="清北种子·卷王本王·自定义" color="#FFD700" />
            <MiniCard icon="📊" title="积分排行榜" desc="腾讯文档·每月公示·榜单透明" color="#43A047" />
          </div>
          <span style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 11, color: "#FFD700", opacity: 0.7,
            marginTop: 2, textAlign: "center"
          }}>🎁 实物奖励筹备中，敬请期待</span>
        </div>

        {/* 特别活动 */}
        <div style={{ opacity: act4, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 14, fontWeight: 700, color: "#E91E63",
            letterSpacing: 2, marginLeft: 4
          }}>📅 特别活动（大考/寒暑假）</span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🐟" title="锦鲤祈福墙" desc="大考前许愿·考后还愿·达成+10分" color="#E91E63" />
            <MiniCard icon="🔥" title="7天连续内卷" desc="寒暑假打卡学习时长·完成+30分" color="#FF5722" />
          </div>
        </div>
      </div>

      {/* 积分排行榜 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          width: "100%",
          textAlign: "center",
          opacity: lbTitle,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 38,
            fontWeight: 900,
            color: "#FFD700",
            textShadow: `0 0 40px #FFD70050`,
            letterSpacing: 4,
          }}
        >
          🏆 积分排行榜
        </span>
        <div style={{ marginTop: 6, fontSize: 18, color: "#8899AA" }}>
          每月公示 · 榜单透明 · 卷起来！
        </div>
      </div>

      {/* 榜单卡片 */}
      <div
        style={{
          position: "absolute",
          top: "32%",
          left: "18%",
          width: "64%",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <RankRow rank={1} name="「卷王本王」" score="128" opacity={lb1} highlight color="#FFD700" />
        <RankRow rank={2} name="「清北种子」" score="96" opacity={lb2} color="#C0C0C0" />
        <RankRow rank={3} name="「错题杀手」" score="85" opacity={lb3} color="#CD7F32" />
        <RankRow rank={4} name="「学习永动机」" score="72" opacity={lb4} color="#4169E1" />
        <RankRow rank={5} name="「明日之星」" score="60" opacity={lb5} color="#9B59B6" />
        <div style={{ textAlign: "center", marginTop: 6, opacity: sloganOpacity, fontSize: 16, color: "#B0C4DE" }}>
          ↓ 下一个上榜的，就是你 ↓
        </div>
      </div>

      {/* 活动标语 */}
      <div
        style={{
          position: "absolute",
          top: "91%",
          width: "100%",
          textAlign: "center",
          opacity: sloganOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 20,
            color: "#B0C4DE",
            fontStyle: "italic",
          }}
        >
          "学习的乐趣，就该共享！"
        </span>
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

const MiniCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  color: string;
}> = ({ icon, title, desc, color }) => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#1A1A3E",
        borderRadius: 12,
        border: `2px solid ${color}40`,
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 26 }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontSize: 11,
            color: "#8899AA",
            lineHeight: 1.3,
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  );
};

const RankRow: React.FC<{
  rank: number;
  name: string;
  score: string;
  opacity: number;
  color: string;
  highlight?: boolean;
}> = ({ rank, name, score, opacity, color, highlight }) => {
  return (
    <div
      style={{
        opacity,
        transform: `translateX(${(1 - opacity) * 30}px)`,
        display: "flex",
        alignItems: "center",
        gap: 16,
        backgroundColor: highlight ? "rgba(255,215,0,0.1)" : "#1A1A3E",
        borderRadius: 14,
        padding: "10px 18px",
        border: `2px solid ${highlight ? color : color}40`,
        boxShadow: highlight ? `0 0 20px ${color}30` : "none",
      }}
    >
      <span
        style={{
          fontFamily: "'PingFang SC', sans-serif",
          fontSize: 22,
          fontWeight: 900,
          color: highlight ? color : "#FFFFFF",
          width: 36,
          textAlign: "center",
        }}
      >
        {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`}
      </span>
      <span
        style={{
          fontFamily: "'PingFang SC', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: "#FFFFFF",
          flex: 1,
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 24,
          fontWeight: 900,
          color: highlight ? color : "#FFD700",
        }}
      >
        {score}
      </span>
      <span style={{ fontSize: 14, color: "#667788", marginLeft: 4 }}>分</span>
    </div>
  );
};

export { Scene4_Group };