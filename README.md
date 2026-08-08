# 高中2027 QQ群宣传视频 —— 《寻找虹夏的鼓点》

一个用 **Remotion**（React 视频渲染框架）制作的 B 站宣传视频。

## 视频结构（6分钟）

| 段落 | 时间 | 风格 | 内容 |
|------|------|------|------|
| ① 孤独开幕 | 0:00-0:50 | 热血 | 「一个人」→「不想再一个人了」 |
| ② 二次元避风港 | 0:50-1:50 | 治愈 | 虹夏的乐队梦 → 御坂的电击羁绊 |
| ③ 我是谁 | 1:50-2:50 | 搞笑 | 自嘲、展示技能 |
| ④ 这个群是什么 | 2:50-4:00 | 热血 | 高中2027群介绍 |
| ⑤ 我们等你 | 4:00-5:00 | 治愈 | 温暖欢迎 |
| ⑥ 加群+结尾 | 5:00-6:00 | 超炮收尾 | QR码 + 群号 + 宣言 |

## 本地开发

```bash
npm install
npm run dev        # 打开 Remotion Studio 预览
npm run render     # 渲染最终视频
```

## GitHub Actions 自动渲染

1. 推送到 GitHub：
```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

2. 在 GitHub 仓库页面 **Actions** 标签，点击「Render Video」工作流 → **Run workflow**，等待渲染完成（约 20-60 分钟）。

3. 渲染完成后，在 **Actions → 最新一次运行 → Artifacts** 下载 `gaozhong-2027-video` 压缩包，里面有成品 `video.mp4`。

## 自定义

- 改文案：编辑 `src/compositions/` 下各场景文件
- 改配色：编辑 `src/theme.ts`
- 换二维码：替换 `public/qrcode.jpg`
- 加音乐：把音频文件放到 `public/`，并在 `Main.tsx` 中用 `<Audio>` 组件引入

## 版权说明

- 视频为原创文本+视觉动画，未使用任何版权番剧片段
- 番剧角色名仅作文化引用，无商业用途