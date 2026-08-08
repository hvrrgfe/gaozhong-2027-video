import { AbsoluteFill, Img, useCurrentFrame, interpolate, spring, staticFile } from "remotion";
import { theme, FPS } from "../theme";
import { useElectricGlow } from "../utils";

// PART 6 · 结尾（7秒）
const Scene6_Ending: React.FC = () => {
  const frame = useCurrentFrame();

  const qrScale = spring({ frame: frame - 5, fps: FPS, config: { damping: 12, mass: 0.8, stiffness: 100 } });
  const glow = useElectricGlow(frame);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.mood.bg, overflow: "hidden" }}>
      <ElectricGrid frame={frame} />

      <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* 二维码 */}
        <div style={{
          width: 160, height: 160, borderRadius: 16, overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.2)", boxShadow: "0 0 40px rgba(255,107,53,0.4)",
          opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `scale(${qrScale})`,
        }}>
          <Img src={staticFile("qrcode.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* 群号 */}
        <div style={{ marginTop: 12, opacity: interpolate(frame, [15, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          <span style={{ fontFamily: "monospace", fontSize: 24, fontWeight: 700, color: theme.bocchi.orange, letterSpacing: 4, textShadow: `0 0 20px ${theme.bocchi.orange}50` }}>
            1067936907
          </span>
        </div>

        {/* 宣言 */}
        <div style={{ position: "absolute", bottom: "16%", width: "100%", textAlign: "center", opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          <span style={{ fontFamily: "Noto Sans SC", fontSize: 32, fontWeight: 900, color: theme.railgun.electric, textShadow: `0 0 30px ${theme.railgun.electric}60`, letterSpacing: 3 }}>
            以我之名，召集同伴！
          </span>
          <div style={{ marginTop: 6, fontFamily: "Noto Sans SC", fontSize: 16, color: "#B0C4DE" }}>
            一个人力量有限，一群人的故事无限
          </div>
          <div style={{ marginTop: 4, fontFamily: "Noto Sans SC", fontSize: 14, color: "#8899AA" }}>
            直至2029高考结束 · 长期靠谱！
          </div>
        </div>

        {/* 署名 */}
        <div style={{ position: "absolute", bottom: "4%", width: "100%", textAlign: "center", opacity: interpolate(frame, [120, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          <span style={{ fontFamily: "Noto Sans SC", fontSize: 16, color: "#FFFFFF" }}>
            我是一个人呐qwedc · 期待在群里见到你
          </span>
          <span style={{ fontFamily: "Noto Sans SC", fontSize: 12, color: "#667788", display: "block", marginTop: 2 }}>
            QwQ 投个硬币再走呗~
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ElectricGrid: React.FC<{ frame: number }> = ({ frame }) => {
  const glow = useElectricGlow(frame);
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
      {Array.from({ length: 5 }, (_, i) => {
        const alpha = ((Math.sin(frame * 0.05 + i * 10) * 0.5 + 0.5) * 0.3 * glow).toFixed(3);
        return (
          <div key={i} style={{
            position: "absolute", left: `${10 + i * 20}%`, top: "0%", width: 2, height: "100%",
            background: `linear-gradient(transparent, ${theme.railgun.electric}${alpha.replace('.', '')}, transparent)`,
            opacity: parseFloat(alpha),
          }} />
        );
      })}
    </div>
  );
};

export { Scene6_Ending };