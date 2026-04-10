# 读点书

一个和 AI 角色一起阅读的 PWA 应用。

## 功能

- **导入书籍** — 支持 TXT、EPUB、PDF、DOCX、MOBI，也可粘贴网络链接或手动输入
- **配置 AI 接口** — 支持 OpenAI、DeepSeek、Gemini、Claude 及兼容 OpenAI 格式的自定义接口，可保存多套预设
- **角色 & 用户系统** — 创建 char/user 人设，配置世界书，角色在阅读时与你互动
- **主动互动** — 可开启主动发言（角色自动评论）和主动高亮（角色标记喜欢的片段）
- **高亮标注** — 六色荧光笔，角色能感知你标记的内容；支持高亮浏览 tab
- **成就印章** — 角色在深度对话中颁发印章，记录在首页
- **RAG 智能检索** — 为书籍建立向量索引，角色可检索全书相关段落
- **共读集** — 读书笔记（富文本）、角色点评、内容问答测验、摘录管理
- **阅读统计** — 连续天数、累计时长、阅读目标、每周柱状图、月度热力图
- **气泡 CSS 自定义** — 内置预设，也可完全自定义聊天界面外观
- **存档备份** — 导出/导入全量数据，数据全部存储在浏览器本地

## 使用

访问 [https://whale-grey.github.io/read-something/](https://whale-grey.github.io/read-something/) 即可使用，可安装为 PWA。

应用内置了使用教程（书架中的「教程」一书），包含快速上手步骤和功能说明。

## 开发

```bash
npm install
npm run dev
```

## 技术栈

React 19 · TypeScript · Vite · Tailwind CSS · IndexedDB · PWA
