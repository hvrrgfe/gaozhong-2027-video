// 主题配色 —— 孤独摇滚橙黄 + 超炮电光蓝 + 科技紫
export const theme = {
  // 孤独摇滚/Bocchi 暖色系
  bocchi: {
    orange: "#FF6B35",
    yellow: "#FFD700",
    peach: "#FFE0B2",
    coral: "#FF8A65",
  },
  // 超炮/Railgun 电光蓝系
  railgun: {
    blue: "#4169E1",
    lightBlue: "#7EC8E3",
    white: "#FFFFFF",
    electric: "#00E5FF",
  },
  // 科技紫
  tech: {
    purple: "#9B59B6",
    deepPurple: "#6C3483",
  },
  // 情绪色
  mood: {
    lonely: "#2C3E50", // 孤独-深蓝灰
    warm: "#FFD180",   // 治愈-暖黄
    dark: "#1B1B2F",   // 开场黑
    bg: "#0F1026",     // 背景深色
  },
};

// 字体可用 "NotoSansSC" 等
export const FONT = {
  family: "system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
};

// 场景时间轴（秒）
export const TIMING = {
  scene1: [0, 50],       // 孤独开幕
  scene2: [50, 110],     // 二次元避风港
  scene3: [110, 170],    // 我是谁
  scene4: [170, 240],    // 这个群是什么
  scene5: [240, 300],    // 我们等你
  scene6: [300, 360],    // 加群+结尾
};

// FPS
export const FPS = 30;