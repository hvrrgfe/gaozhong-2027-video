import { interpolate, spring, useCurrentFrame } from "remotion";
import { FPS } from "./theme";

// 打字机效果 —— 逐字显示
export function useTypewriter(text: string, startFrame: number, charsPerSec = 8) {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const charsToShow = Math.floor(elapsed * (charsPerSec / FPS));
  return text.slice(0, Math.min(charsToShow, text.length));
}

// 淡入淡出
export function useFadeInOut(
  frame: number,
  startFrame: number,
  fadeInDuration = 15,
  fadeOutDuration = 15,
  totalDuration = 60
) {
  const fadeIn = interpolate(frame, [startFrame, startFrame + fadeInDuration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [startFrame + totalDuration - fadeOutDuration, startFrame + totalDuration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return Math.min(fadeIn, fadeOut);
}

// 弹簧弹跳
export function useSpringBounce(frame: number, startFrame: number, config = { damping: 15, mass: 1, stiffness: 100 }) {
  return spring({
    frame: frame - startFrame,
    fps: FPS,
    config,
  });
}

// 缩放动画
export function useScaleIn(frame: number, startFrame: number, delay = 0) {
  return interpolate(
    frame,
    [startFrame + delay, startFrame + delay + 20],
    [0.4, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: (t) => 1 - Math.pow(1 - t, 3) }
  );
}

// 滑动入场
export function useSlideIn(
  frame: number,
  startFrame: number,
  direction: "left" | "right" | "up" | "down" = "up",
  distance = 100
) {
  const progress = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  if (direction === "up") return distance * (1 - progress);
  if (direction === "down") return -distance * (1 - progress);
  if (direction === "left") return distance * (1 - progress);
  return -distance * (1 - progress);
}

// 闪烁效果
export function useBlink(frame: number, startFrame: number, speed = 0.5) {
  return Math.sin((frame - startFrame) * speed * 0.2) > 0 ? 1 : 0;
}

// 电击效果（超炮风格）
export function useElectricGlow(frame: number) {
  const intensity = 0.7 + 0.3 * Math.sin(frame * 0.15);
  return intensity;
}