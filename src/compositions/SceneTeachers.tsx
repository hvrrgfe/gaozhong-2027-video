import { AbsoluteFill, useCurrentFrame, interpolate, OffthreadVideo, staticFile } from "remotion";
import { theme, FPS } from "../theme";

// B站老师混剪（28秒）
const teachers = [
  { name: "一数", subject: "数学", start: 0, color: "#FF7043" },
  { name: "一化儿", subject: "化学", start: 5, color: "#AB47BC" },
  { name: "FREE高考英语", subject: "英语", start: 10, color: "#5C6BC0" },
  { name: "黄夫人", subject: "物理", start: 15, color: "#26C6DA" },
  { name: "一生儿", subject: "生物", start: 20, color: "#43A047" },
  { name: "学过石油的语文老师", subject: "语文", start: 24, color: "#FF8A65" },
];

const SceneTeachers: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      {/* 老师混剪视频 */}
      <OffthreadVideo
        src={staticFile("teachers_montage.mp4")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
      />

      {/* 底部半透明遮罩 */}
      <div style={{
        position: "absolute", bottom: 0, width: "100%", height: "30%",
        background: "linear-gradient(transparent, rgba(20,15,10,0.85))",
      }} />

      {/* 老师名牌 */}
      {teachers.map((t) => {
        const opacity = interpolate(frame, [t.start * FPS + 5, t.start * FPS + 15], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
        });
        return (
          <div key={t.subject} style={{
            position: "absolute", bottom: "12%", width: "100%", textAlign: "center", opacity,
          }}>
            <div style={{
              display: "inline-block", padding: "10px 30px", borderRadius: 30,
              backgroundColor: "rgba(0,0,0,0.6)", border: `2px solid ${t.color}`,
              boxShadow: `0 0 30px ${t.color}60`,
            }}>
              <span style={{ fontFamily: "Noto Sans SC", fontSize: 40, fontWeight: 900, color: t.color, marginRight: 12 }}>
                {t.name}
              </span>
              <span style={{ fontFamily: "Noto Sans SC", fontSize: 28, fontWeight: 700, color: "#FFFFFF" }}>
                {t.subject}
              </span>
            </div>
          </div>
        );
      })}

      {/* 顶部进度提示 */}
      <div style={{
        position: "absolute", top: "5%", width: "100%", textAlign: "center",
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <span style={{ fontFamily: "Noto Sans SC", fontSize: 18, color: "#FFFFFF", backgroundColor: "rgba(0,0,0,0.5)", padding: "6px 20px", borderRadius: 20 }}>
          B站免费网课老师，都在这里 👇
        </span>
      </div>
    </AbsoluteFill>
  );
};

export { SceneTeachers };