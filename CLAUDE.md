# xalgo.ai 项目开发指南与代码库记忆 (CLAUDE.md)

## 项目简介
本项目是 **xalgo.ai** 的官方落地页（Landing Page），致力于宣传其基于极简计算的智能穿戴硬件（智能戒指 xRing、智能眼镜 xVision、智能画框 xFrame 等）及其底层的核心自研大模型（微模型推理框架、端云多模态协同系统）。它不仅仅是一个展示页，还承载着呼吁全球极客和开发者加入 xalgo.ai 开源生态系统的连接作用。

## 项目技术栈 (Tech Stack)
考虑到首屏加载时间及轻量化理念，本项目没有使用重量级的前端框架，保持了原生极简开发方式：
- **HTML + JS**：原生 HTML5 (`index.html`) 和 Vanilla JavaScript (`i18n.js`)。
- **CSS 框架**：Tailwind CSS (通过 CDN 引入，集成在 head `<script>` 中直接注入自定义配置)。
- **字体与样式**：引用 Google Fonts (Manrope) 以保证出色的视觉排版排面；UI 采用了深色模式、玻璃拟态交互、微妙发光效果等高质感设计方案。
- **国际化引擎**：自定义实现的 `i18n.js` 轻量级多语言切换方案（支持中/英/日）。

## 核心目录结构 (Directory Structure)
```
xalgo.ai/
├── .github/          # GitHub 相关流/工作流配置
├── .codebuddy/       # IDE 或助手相关的配置（本项目结构解析物）
├── index.html        # 主网页文件，包含页面骨架、Tailwind 配置文件以及所有定制化 CSS 样式和行内 SVG 设计
├── i18n.js           # 国际化及文本管理器，包含翻译字典库和部分动态 JS 交互（例如打字机文字动效）
├── logo.png          # 项目官方 Logo 图片资源
└── .gitignore        # Git 忽略配置
```

## 架构逻辑与扩展指南

### 1. 样式与设计维护
- **优先使用 Tailwind**：尽量使用 Tailwind 的原子类修改样式。
- **自定义样式修改**：对于 Tailwind 等无法简单实现的高级设计（如 `.glass-card`, `.ambient-glow`, 渐变玻璃拟态效果），它们已经集中存放在 `index.html` 的 `<style>` 标签中。新增复杂动效和背景时，请遵循该模块集中管理的思路。
- **主题配色**：Tailwind 扩展主题设定了 `primary`, `secondary`, `accent` 等定制颜色组合，确保了整体的黑底金字/金属哑光质感。

### 2. 国际化 (i18n) 添加流程
页面内所有可视文本 **不得直接硬编码在 HTML 中** （或只保留作为初始展位符）。
- **步骤 1**：在 HTML 元素中赋予属性 `data-i18n="your.new.key"`。
- **步骤 2**：打开 `i18n.js`，在 `translations['en']`, `translations['zh']`, `translations['ja']` 这三个字典中同步新增该键名及对应文案。
- **特殊交互**：如带有打字机效果的类名 `.typewriter-text` 会被 JS 特殊拦截，执行逐渐显现的动画。

### 3. SVG 素材和图案管理
为保证无多余的体积开销并且支持无限缩放，页面内的所有图标、动态指示线、乃至品牌首屏 LOGO，均采用行内 `<svg>` 进行绘制渲染。如有新需求，请保持一致的线条与内敛风格。

### 4. 运行与本地测试
这个项目为纯静态应用，没有任何第三方包依赖，也无需 `npm install`。
你可以使用任意本地服务器套件直接测试与预览：
- VS Code：使用 `Live Server` 插件。
- Python：在项目根目录运行 `python -m http.server` 然后打开 `http://localhost:8000`。
- Node：`npx serve .`

## 针对开发者的辅助规则 (Rules for AI Assistant / Developers)
- **极简干预**：只在需要的地方做微小重构，切忌因扩展需求引入过大或不需要的外部依赖如 Webpack, React 除非有明确迁移需要。
- **CRLF/LF 适应**：由于团队经常在 Windows 与 Linux 环境中切换，务必保证脚本与文本的换行符和 Git 配置不会引发冲突，推荐文件行尾序列统一处理为 `LF`。
- **强制中文输出**：任何由机器生成的解释、聊天与注释，都必须使用流利并符合开发者习惯的**中文**。
