import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, FPS } from "../theme";

// PART 4 · 活动展示（110-210秒，100秒）
const Scene4_Activities: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const act1 = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const act2 = interpolate(frame, [150, 170], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const act3 = interpolate(frame, [270, 290], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const act4 = interpolate(frame, [390, 410], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <div style={{
        position: "absolute", width: "100%", height: "100%",
        background: `radial-gradient(ellipse at 50% 50%, ${theme.bocchi.orange}15 0%, transparent 60%)`,
      }} />

      <div style={{ position: "absolute", top: "6%", width: "100%", textAlign: "center", opacity: titleOpacity }}>
        <span style={{
          fontFamily: "'Noto Sans SC', sans-serif", fontSize: 38, fontWeight: 900,
          color: theme.bocchi.yellow, textShadow: `0 0 30px ${theme.bocchi.yellow}50`,
          letterSpacing: 4,
        }}>群里有什么活动？</span>
      </div>

      <div style={{ position: "absolute", top: "16%", left: "6%", width: "88%", height: "78%", display: "flex", flexDirection: "column", gap: 10 }}>

        {/* 每周竞技场 */}
        <div style={{ opacity: act1, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 14, fontWeight: 700, color: theme.bocchi.orange, letterSpacing: 2, marginLeft: 4 }}>
            ⚡ 每周竞技场（周末晚）
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🏆" title="谁是卷王" desc="限时刷题赛·20分钟5道压轴题" color={theme.bocchi.orange} />
            <MiniCard icon="🩺" title="错题ICU" desc="问卷星收集难题·投票选群题" color={theme.railgun.electric} />
            <MiniCard icon="📚" title="云端自习室" desc="周六晚语音通话·闭麦一起学" color="#8BC34A" />
          </div>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 11, color: "#8899AA", marginTop: 2 }}>
            积分：参赛+3 · 获奖+5 · 入选题+2 · 自习1h+5
          </span>
        </div>

        {/* 每月深度破冰 */}
        <div style={{ opacity: act2, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 14, fontWeight: 700, color: theme.tech.purple, letterSpacing: 2, marginLeft: 4 }}>
            💬 每月深度破冰
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🌳" title="树洞吐槽" desc="公开聊天·月考考崩了怎么办" color={theme.tech.purple} />
            <MiniCard icon="📔" title="共享笔记库" desc="腾讯文档·认领章节·共创入库" color={theme.bocchi.yellow} />
            <MiniCard icon="🚩" title="逆袭flag押金" desc="月初立flag押5分·达成还返+10" color="#FF6F00" />
          </div>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 11, color: "#8899AA", marginTop: 2 }}>
            积分：参与+3 · 提交笔记+5 · 逆袭达成+10
          </span>
        </div>

        {/* 特别活动 */}
        <div style={{ opacity: act3, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 14, fontWeight: 700, color: "#E91E63", letterSpacing: 2, marginLeft: 4 }}>
            📅 特别活动（大考/寒暑假）
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🐟" title="锦鲤祈福墙" desc="大考前许愿·考后还愿·达成+10分" color="#E91E63" />
            <MiniCard icon="🔥" title="7天连续内卷" desc="寒暑假打卡学习时长·完成+30分" color="#FF5722" />
          </div>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 11, color: "#8899AA", marginTop: 2 }}>
            谁要分，谁@我发截图
          </span>
        </div>

        {/* 积分奖励 */}
        <div style={{ opacity: act4, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 14, fontWeight: 700, color: "#FFD700", letterSpacing: 2, marginLeft: 4 }}>
            🏆 积分榜奖励（每月前5名）
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <MiniCard icon="🏅" title="群头衔定制" desc="清北种子·卷王本王·自定义" color="#FFD700" />
            <MiniCard icon="📊" title="积分明细" desc="腾讯文档实时核对·每月公示" color="#43A047" />
          </div>
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 11, color: "#FFD700", opacity: 0.7, textAlign: "center" }}>
            🎁 实物奖励筹备中，敬请期待
          </span>
        </div>

      </div>
    </AbsoluteFill>
  );
};

const MiniCard: React.FC<{ icon: string; title: string; desc: string; color: string }> = ({ icon, title, desc, color }) => {
  return (
    <div style={{
      flex: 1, backgroundColor: theme.mood.card, borderRadius: 12,
      border: `2px solid ${color}40`, padding: "10px 12px",
      display: "flex", alignItems: "center", gap: 10,
    }}>
      <span style={{ fontSize: 26 }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>{title}</span>
        <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: 11, color: "#8899AA", lineHeight: 1.3 }}>{desc}</span>
      </div>
    </div>
  );
};

export { Scene4_Activities };