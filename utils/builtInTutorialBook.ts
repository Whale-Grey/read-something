import { Book, Chapter, ReaderContentBlock } from '../types';
import { saveImageBlob } from './imageStorage';
import {
  IMG_P1_0, IMG_P1_1,
  IMG_P2_0, IMG_P2_1, IMG_P2_2,
  IMG_P3_0, IMG_P3_1,
  IMG_P4_0, IMG_P4_1,
  IMG_P5_0, IMG_P5_1,
  IMG_P6_0, IMG_P6_1, IMG_P6_2, IMG_P6_3,
  IMG_P8_0, IMG_P8_1,
} from './builtInTutorialImages';

export const BUILT_IN_TUTORIAL_BOOK_ID = '__built_in_tutorial__';
/** Bump this number whenever tutorial content is changed so existing users get the update. */
export const BUILT_IN_TUTORIAL_VERSION = 6.0;

const TUTORIAL_UNREAD_KEY = '__built_in_tutorial_unread__';
export const isTutorialUnread = (): boolean => {
  try { return localStorage.getItem(TUTORIAL_UNREAD_KEY) === '1'; } catch { return false; }
};
export const markTutorialUnread = (): void => {
  try { localStorage.setItem(TUTORIAL_UNREAD_KEY, '1'); } catch { /* no-op */ }
};
export const clearTutorialUnread = (): void => {
  try { localStorage.removeItem(TUTORIAL_UNREAD_KEY); } catch { /* no-op */ }
};

const TUTORIAL_DELETED_KEY = '__built_in_tutorial_deleted__';
export const isTutorialDeleted = (): boolean => {
  try { return localStorage.getItem(TUTORIAL_DELETED_KEY) === '1'; } catch { return false; }
};
export const markTutorialDeleted = (): void => {
  try { localStorage.setItem(TUTORIAL_DELETED_KEY, '1'); } catch { /* no-op */ }
};
export const clearTutorialDeleted = (): void => {
  try { localStorage.removeItem(TUTORIAL_DELETED_KEY); } catch { /* no-op */ }
};

export const isBuiltInBook = (bookId: string) => bookId === BUILT_IN_TUTORIAL_BOOK_ID;

const text = (t: string): ReaderContentBlock => ({ type: 'text', text: t });
const img = (imageRef: string, alt: string, w?: number, h?: number): ReaderContentBlock => ({
  type: 'image', imageRef, alt, width: w, height: h,
});

/* ------------------------------------------------------------------ */
/*  简介                                                                */
/* ------------------------------------------------------------------ */
const CH0_CONTENT = `读点书 · 使用说明

读点书是一个和 AI 角色一起阅读的工具。导入书籍，配置 AI 接口，让你选定的角色陪你共读、互动、发表感想。

所有数据均存储在浏览器本地。建议定期在设置的「存储管理」中导出存档备份，换设备或清除浏览器数据前务必先备份。`;

const CH0_BLOCKS: ReaderContentBlock[] = [
  text('读点书 · 使用说明'),
  text(`读点书是一个和 AI 角色一起阅读的工具。导入书籍，配置 AI 接口，让你选定的角色陪你共读、互动、发表感想。

所有数据均存储在浏览器本地。建议定期在设置的「存储管理」中导出存档备份，换设备或清除浏览器数据前务必先备份。`),
];

/* ------------------------------------------------------------------ */
/*  快速上手                                                            */
/* ------------------------------------------------------------------ */
const CH1_CONTENT = `快速上手

第一步：配置接口
点击底部导航栏「设置」→「API 配置」，填入接口地址、API 密钥和模型名称。支持 OpenAI、DeepSeek、Gemini、Claude 及任意兼容 OpenAI 格式的自定义接口。点「拉取模型」绿灯即成功，可在下拉框选模型或手动输入。填完后点「应用设置」，或点「内容生成预设配置」右侧加号保存为预设。

第二步：创建角色和用户
在设置中分别创建用户（user）和角色（char）。头像支持本地上传或链接。角色可绑定世界书分类，世界书条目可拖动排序，可设置插入在角色定义前或后。{{char}} {{user}} 在发送时自动替换为对应真名。

第三步：导入书籍
回到书架，右上角选择当前 char 和 user，点击「+」导入书籍。支持 TXT、EPUB、PDF、DOCX、MOBI，也可粘贴网络链接或手动输入文字。EPUB 会自动解析书名作者。

第四步：开始阅读
点击书籍进入阅读界面。点击右上角对话图标打开聊天，按回车发送消息，点纸飞机图标召唤 char 回复，点重置重新生成。拖动聊天区域顶部横杠可调整聊天区高度。`;

const CH1_BLOCKS: ReaderContentBlock[] = [
  text('快速上手'),
  img(IMG_P1_0, '常驻底栏', 361, 90),
  text('底部四个图标：书架、阅读统计、共读集、设置。'),
  text('第一步：配置接口'),
  img(IMG_P1_1, 'API 配置', 385, 690),
  text(`点击「设置」→「API 配置」，填入接口地址、密钥和模型名称。支持 OpenAI、DeepSeek、Gemini、Claude 及兼容接口。点「拉取模型」绿灯成功后选择模型，或手动输入。点「应用设置」或保存为预设。`),
  text('第二步：创建角色和用户'),
  img(IMG_P2_0, '用户人设', 387, 572),
  img(IMG_P2_1, '管理角色', 386, 613),
  img(IMG_P2_2, '世界书分类', 385, 363),
  text('角色可绑定世界书分类。'),
  img(IMG_P3_0, '世界书条目', 381, 664),
  text(`条目可设置插入在角色定义前或后，按住排序图标可拖动排序。{{char}} {{user}} 在发送时自动替换为真名。`),
  text('第三步：导入书籍'),
  img(IMG_P3_1, '书架', 387, 812),
  text(`右上角选择 char 和 user，点「+」导入书籍。支持 TXT、EPUB、PDF、DOCX、MOBI，也可粘贴链接或手动输入。`),
  text('第四步：开始阅读'),
  img(IMG_P4_0, '阅读界面', 386, 800),
  text(`点击书籍进入阅读界面。点右上角对话图标打开聊天，回车发消息，纸飞机召唤 char，重置重新生成。拖动横杠调整聊天区高度。`),
];

/* ------------------------------------------------------------------ */
/*  功能速览                                                            */
/* ------------------------------------------------------------------ */
const CH2_CONTENT = `功能速览

【书架】
支持按书名/作者搜索，按标签筛选，多维度排序。网格/列表视图可切换。
编辑书籍可修改标题、作者、封面、标签，以及章节识别正则（可让 AI 生成）。
RAG 智能检索：在编辑界面开启后，系统为该书建立向量索引，对话时 char 可检索全书相关段落，适合长篇书籍。

【阅读界面】
顶栏右侧菜单从左到右：目录、书签、高亮、排版、更多设置。
目录：列出所有章节，点击跳转，高亮 tab 可查看全书高亮段落。
书签：在当前位置创建书签，点击跳回，支持显示所在章节。
高亮标注：单击荧光笔进入标记模式，选中文字高亮，char 能感知。双击切换颜色（六色+自定义）。
排版：调整对齐、字体、字号、行距、文字/背景色。

【更多设置 - 外观】
气泡字号缩放、聊天背景图、消息时间戳。
CSS 样式自定义：内置预设，也可自定义。可用类名如下：
.rm-panel / .rm-header / .rm-avatar / .rm-char-name / .rm-messages
.rm-bubble / .rm-bubble-ai / .rm-bubble-user
.rm-time-tag / .rm-msg-time
.rm-input-area / .rm-input-wrap / .rm-input
.rm-send-btn / .rm-retry-btn / .rm-typing / .rm-typing-name / .rm-typing-text
深色模式用 .dark-mode 前缀。

【更多设置 - 功能】
阅读原文字数：char 读到的上文范围，默认 800 字符。
上文整屏为准：开启后原文截至整屏底部。
记忆消息条数：默认 100 条。
回复条数范围：默认 3-8 条。
聊天/书籍自动总结：达到设定条数/字数后自动生成摘要，可配置副 API 节省 token。
收藏消息：长按消息可收藏，在会话面板中查看。
导出会话：在更多设置-会话中导出当前对话记录为 txt。

【设置 - 主动互动】
主动高亮：char 在喜欢的片段自动添加下划线，重新生成时撤回。
主动发送消息：char 在阅读过程中主动发言，可设置概率和间隔。

【成就印章】
char 在深度对话中会颁发成就印章，记录在首页「印章」中。

【阅读统计】
连续阅读天数、累计时长、读完书目、阅读目标、每周柱状图、月度日历热力图。

【共读集】
笔记本：绑定书籍，写读书笔记（支持富文本），可自定义封面和纸张 CSS。
角色评论：点击「召唤」让最多 3 个 char 点评笔记，支持楼中楼回复。
摘录：查看所有书籍的高亮段落，可筛选、跳转、复制、删除。
内容问答：根据书籍内容生成测验（建议开启 RAG），答完显示得分和 char 锐评。

【存储与备份】
设置-存储管理中可查看各类数据占用，导出/导入存档文件备份迁移全量数据。`;

const CH2_BLOCKS: ReaderContentBlock[] = [
  text('功能速览'),
  text(`【书架】
支持按书名/作者搜索，按标签筛选，多维度排序。网格/列表视图可切换。
编辑书籍可修改标题、作者、封面、标签，以及章节识别正则（可让 AI 生成）。`),
  img(IMG_P4_1, '搜索筛选', 387, 102),
  img(IMG_P5_0, 'RAG 说明', 385, 487),
  text('RAG 智能检索：编辑界面开启后为该书建立向量索引，对话时 char 可检索全书相关段落，适合长篇书籍。'),
  text('【阅读界面】'),
  img(IMG_P5_1, '顶栏菜单', 275, 62),
  text(`顶栏右侧菜单从左到右：目录、书签、高亮、排版、更多设置。`),
  img(IMG_P6_0, '目录书签', 360, 119),
  img(IMG_P6_1, '高亮颜色', 357, 259),
  img(IMG_P6_2, '排版', 354, 281),
  img(IMG_P6_3, '更多设置标签', 376, 58),
  text(`目录：列出所有章节，点击跳转，高亮 tab 可查看全书高亮段落。
书签：在当前位置创建书签，点击跳回。
高亮标注：单击荧光笔进入标记模式，双击切换颜色（六色+自定义），char 能感知高亮内容。
排版：调整对齐、字体、字号、行距、文字/背景色。`),
  text(`【更多设置 - 外观】
气泡字号缩放、聊天背景图、消息时间戳。
CSS 样式自定义，可用类名：
.rm-panel / .rm-header / .rm-avatar / .rm-char-name / .rm-messages
.rm-bubble / .rm-bubble-ai / .rm-bubble-user
.rm-time-tag / .rm-msg-time / .rm-input-area / .rm-input-wrap / .rm-input
.rm-send-btn / .rm-retry-btn / .rm-typing / .rm-typing-name / .rm-typing-text
深色模式用 .dark-mode 前缀。

【更多设置 - 功能】
阅读原文字数（默认 800）、上文整屏为准、记忆消息条数（默认 100）、回复条数范围（默认 3-8）。
聊天/书籍自动总结：达到条数/字数自动生成摘要，可配副 API。
收藏消息：长按消息收藏，在会话面板查看。
导出会话：导出当前对话为 txt。

【设置 - 主动互动】
主动高亮：char 自动在喜欢片段添加下划线，重新生成时撤回。
主动发送消息：char 主动发言，可设概率和间隔。`),
  text(`【成就印章】
char 在深度对话中颁发成就印章，记录在首页「印章」中。`),
  text('【阅读统计】'),
  img(IMG_P8_0, '阅读统计', 379, 643),
  text('连续阅读天数、累计时长、读完书目、阅读目标、每周柱状图、月度日历热力图。'),
  text('【共读集】'),
  img(IMG_P8_1, '共读集', 380, 108),
  text(`笔记本：绑定书籍，写读书笔记（富文本），可自定义封面和纸张 CSS。
笔记纸张 CSS 可用类名：
.sh-paper / .sh-paper-inner / .studyhub-note-editor
h1 h2 h3 p strong em ul ol li .sh-note-placeholder
深色模式用 .dark-mode 前缀。
角色评论：召唤最多 3 个 char 点评笔记，支持楼中楼回复。
摘录：查看全部书籍高亮段落，可筛选、跳转、复制、删除。
内容问答：根据书籍内容生成测验（建议开启 RAG），答完显示得分和 char 锐评。`),
];

/* ------------------------------------------------------------------ */
/*  组装章节                                                            */
/* ------------------------------------------------------------------ */
const TUTORIAL_CHAPTERS: Chapter[] = [
  { title: '简介', content: CH0_CONTENT, blocks: CH0_BLOCKS },
  { title: '快速上手', content: CH1_CONTENT, blocks: CH1_BLOCKS },
  { title: '功能速览', content: CH2_CONTENT, blocks: CH2_BLOCKS },
];

/** 将所有章节内容拼接为 fullText（以换行分隔） */
const computeFullText = (chapters: Chapter[]): string =>
  chapters.map((ch) => ch.content).join('\n\n');

const dataUrlToBlob = async (dataUrl: string): Promise<Blob> => {
  const response = await fetch(dataUrl);
  return response.blob();
};

/**
 * 将教程章节中 data-URL 图片迁移为 idb:// Blob 引用，
 * 与其他书籍的图片存储方式保持一致。
 * 返回迁移后的新 chapters 数组（不修改原数组）。
 */
export const migrateTutorialImages = async (chapters: Chapter[]): Promise<Chapter[]> => {
  const migrated: Chapter[] = [];
  for (const chapter of chapters) {
    if (!chapter.blocks || chapter.blocks.length === 0) {
      migrated.push(chapter);
      continue;
    }
    const newBlocks: ReaderContentBlock[] = [];
    for (const block of chapter.blocks) {
      if (block.type !== 'image') {
        newBlocks.push(block);
        continue;
      }
      const src = block.imageRef;
      if (!src || src.startsWith('idb://') || !src.startsWith('data:')) {
        newBlocks.push(block);
        continue;
      }
      try {
        const blob = await dataUrlToBlob(src);
        const ref = await saveImageBlob(blob);
        newBlocks.push({ ...block, imageRef: ref });
      } catch {
        newBlocks.push(block);
      }
    }
    migrated.push({ ...chapter, blocks: newBlocks });
  }
  return migrated;
};

export function createBuiltInTutorialBook(): Book {
  const fullText = computeFullText(TUTORIAL_CHAPTERS);
  return {
    id: BUILT_IN_TUTORIAL_BOOK_ID,
    title: '教程',
    author: 'WhaleGrey',
    coverUrl: '',
    progress: 0,
    lastRead: '',
    tags: ['内置'],
    fullText,
    chapters: TUTORIAL_CHAPTERS,
    fullTextLength: fullText.length,
    chapterCount: TUTORIAL_CHAPTERS.length,
  };
}
