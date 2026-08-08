// 主题配色 —— 暖色调（棕色/橘色/暖黄/奶油）
export const theme = {
  // 暖色主色调
  warm: {
    brown: "#8D6E63",
    darkBrown: "#4E342E",
    cream: "#FFF8E1",
    tan: "#D7CCC8",
  },
  // 孤独摇滚/Bocchi 暖色系
  bocchi: {
    orange: "#FF8A65",
    yellow: "#FFD54F",
    peach: "#FFCCBC",
    coral: "#FFAB91",
  },
  // 超炮/Railgun 电光蓝系（保留少量冷色点缀）
  railgun: {
    blue: "#5C6BC0",
    lightBlue: "#90CAF9",
    white: "#FFFFFF",
    electric: "#4DD0E1",
  },
  // 科技紫
  tech: {
    purple: "#AB47BC",
    deepPurple: "#7B1FA2",
  },
  // 情绪色（暖底）
  mood: {
    lonely: "#5D4037",  // 孤独-深棕
    warm: "#FFE0B2",    // 治愈-暖黄
    dark: "#1A0F0A",    // 开场-深暖棕
    bg: "#2D1F14",      // 背景-暖棕
    card: "#3E2723",    // 卡片-深咖啡
  },
};

export const FONT = {
  family: "'Noto Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif",
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