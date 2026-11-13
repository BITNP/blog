# BITNP 博客

<div align="center">

![Stargazers]
[![License]](LICENSE)

</div>

欢迎来到 BITNP 博客项目！这是一个使用 [Astro](https://astro.build/) 构建的静态博客，旨在为社区成员提供分享技术文章和见解的平台。

---

## 如何贡献内容

### 参与博客写作的步骤

1. **Fork 仓库**
   
   点击页面右上角的 "Fork" 按钮，在你的 GitHub 账户下创建一个仓库副本。

2. **克隆仓库**
   
   ```bash
   git clone https://github.com/[YOUR_USERNAME]/bitnp-blog.git
   cd bitnp-blog
   ```

3. **安装依赖**
   
   ```bash
   pnpm install
   ```

4. **启动开发服务器**
   
   ```bash
   pnpm run dev
   ```
   
   访问 `http://localhost:1234` 开始预览。

### 可用命令

| 命令                | 描述                                    |
| ------------------ | -------------------------------------- |
| `pnpm run start`    | 启动开发服务器的别名                      |
| `pnpm run build`    | 类型检查并构建项目                       |
| `pnpm run preview`  | 预览构建后的项目                        |
| `pnpm run astro`    | 运行 Astro CLI 命令                     |

## 添加个人信息

### 创建作者档案

在开始写作前，需要先添加你的个人信息：

1. 在 `src/content/authors/` 目录下创建一个以你的用户名命名的 Markdown 文件（如 `zhang-san.md`）

2. 使用以下模板填写个人信息：

```yml
---
name: '张三'
pronouns: 'he/him' # 可选
avatar: 'https://github.com/zhangsan.png' # 或使用 Gravatar
bio: '计算机科学专业学生，热爱开源技术。'  # 可选
website: 'https://zhangsan.dev' # 可选
github: 'https://github.com/zhangsan' # 可选
mail: 'zhangsan@example.com' # 可选
---
```

## 撰写博客文章

### 创建博客文章

在 `src/content/blog/` 目录下创建新的 MDX 文件。推荐按年份组织文章，使用以下结构：

```
src/content/blog/
└── 2025/
    └── my-awesome-post/
        ├── index.mdx
        └── assets/
            └── image.png
```

文章 frontmatter 结构：

```yml
---
title: '你的文章标题'
description: '文章的简短描述！'
date: 2024-01-01
tags: ['技术', '教程']
image: './assets/image.png' # 可选，标题图
authors: ['zhang-san']  # 使用你在 authors 目录下创建的文件名
draft: false
---
```

### 博客文章字段说明

| 字段          | 类型 (Zod)      | 要求                                                                                                                                                                | 必填 |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| `title`       | `string`        | 应该 ≤60 个字符                                                                                                                                                      | 是   |
| `description` | `string`        | 应该 ≤155 个字符                                                                                                                                                     | 是   |
| `date`        | `coerce.date()` | 必须是 `YYYY-MM-DD` 格式                                                                                                                                             | 是   |
| `order`       | `number`        | 同一日期下子文章的排序，默认为 `0`                                                                                                                                    | 否   |
| `image`       | `image()`       | 应该是 1200px × 630px                                                                                                                                               | 否   |
| `tags`        | `string[]`      | 推荐使用 kebab-case 格式                                                                                                                                            | 否   |
| `authors`     | `string[]`      | 如果作者有档案，使用其在 `src/content/authors/` 中的文件名 ID（例如文件名为 `zhang-san.md`，则在数组中使用 `zhang-san`）                                            | 否   |
| `draft`       | `boolean`       | 默认为 `false`                                                                                                                                                      | 否   |

### 作者档案字段说明

| 字段       | 类型 (Zod)                                 | 要求                                                                                                                                                               | 必填 |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| `name`     | `string`                                   | 无                                                                                                                                                                 | 是   |
| `pronouns` | `string`                                   | 无                                                                                                                                                                 | 否   |
| `avatar`   | `string.url()` or `string.startsWith('/')` | 应该是有效的 URL 或以 `/` 开头的路径。推荐使用 [Gravatar](https://en.gravatar.com/site/implement/images/) 并添加 `?size=256` 参数。                             | 是   |
| `bio`      | `string`                                   | 无                                                                                                                                                                 | 否   |
| `mail`     | `string.email()`                           | 必须是有效的邮箱地址                                                                                                                                               | 否   |
| `website`  | `string.url()`                             | 必须是有效的 URL                                                                                                                                                   | 否   |
| `twitter`  | `string.url()`                             | 必须是有效的 URL                                                                                                                                                   | 否   |
| `github`   | `string.url()`                             | 必须是有效的 URL                                                                                                                                                   | 否   |
| `linkedin` | `string.url()`                             | 必须是有效的 URL                                                                                                                                                   | 否   |
| `discord`  | `string.url()`                             | 必须是有效的 URL                                                                                                                                                   | 否   |

> [!TIP]
> 你可以添加任意数量的社交媒体链接，只要相应地调整 schema！确保在 `src/components/SocialIcons.astro` 组件中也支持新字段。

## 提交 Pull Request

完成文章撰写后，按以下步骤提交：

1. **提交更改**
   
   ```bash
   git add .
   git commit -m "添加新文章: 你的文章标题"
   ```

2. **推送到你的 Fork**
   
   ```bash
   git push origin main
   ```

3. **创建 Pull Request**
   
   - 前往你的 GitHub 仓库页面
   - 点击 "Compare & pull request" 按钮
   - 填写 PR 标题和描述，说明你添加的内容
   - 点击 "Create pull request"

### PR 检查清单

提交 PR 前，请确保：

- [ ] 已添加个人作者档案（如果是首次贡献）
- [ ] 文章 frontmatter 格式正确
- [ ] 文章内容使用简体中文
- [ ] 图片资源已正确放置在对应目录
- [ ] 本地预览正常显示

### 项目信息

如果需要添加项目展示，在 `src/content/projects/` 目录下创建 Markdown 文件：

```yml
---
name: '项目 A'
description: '这是一个示例项目描述！请替换为你自己项目的描述。'
tags: ['框架 A', '库 B', '工具 C', '资源 D']
image: '/static/1200x630.png'
link: 'https://example.com'
startDate: '2024-01-01'
endDate: '2024-01-01'
---
```

#### 项目字段说明

| 字段         | 类型 (Zod)      | 要求                           | 必填 |
| ------------ | --------------- | ------------------------------ | ---- |
| `name`       | `string`        | 无                             | 是   |
| `description`| `string`        | 无                             | 是   |
| `tags`       | `string[]`      | 无                             | 是   |
| `image`      | `image()`       | 应该是 1200px × 630px          | 是   |
| `link`       | `string.url()`  | 必须是有效的 URL               | 是   |
| `startDate`  | `coerce.date()` | 必须是 `YYYY-MM-DD` 格式       | 否   |
| `endDate`    | `coerce.date()` | 必须是 `YYYY-MM-DD` 格式       | 否   |

## 写作指南

### 内容建议

- 使用简体中文撰写
- 主题应与技术、学术、开源等相关
- 文章结构清晰，逻辑合理
- 提供实用的代码示例和解决方案
- 鼓励原创内容和个人见解

### Markdown 功能

博客支持以下 Markdown 扩展功能：

- **MDX 组件**：可以在文章中使用 React 组件
- **数学公式**：通过 KaTeX 渲染 LaTeX 数学公式
- **代码高亮**：支持多种编程语言的语法高亮
- **Callout 组件**：用于提示、警告等特殊内容块

示例：

```markdown
> [!NOTE]
> 这是一个提示框

$$
E = mc^2
$$

```javascript
console.log('Hello, BITNP!');
```

## 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

Built with &hearts; by [enscribe](https://enscribe.dev)!

由 [BITNP](https://bitnp.net) 维护 ❤️

[Stargazers]: https://img.shields.io/github/stars/BITNP/blog?color=fafafa&logo=github&logoColor=fff&style=for-the-badge
[License]: https://img.shields.io/github/license/BITNP/blog?color=0a0a0a&logo=github&logoColor=fff&style=for-the-badge
