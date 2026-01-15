# TypeORM Fluent Migrator 多语言文档网站

基于 VitePress 构建的 TypeORM Fluent Migrator 多语言文档网站。

## ✨ 特性

- 🌏 **多语言支持** - 支持中文和英文双语
- 🎨 **现代化设计** - 美观的 UI 设计，优秀的用户体验
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **快速加载** - 基于 VitePress，构建速度快
- 🔍 **搜索支持** - 内置搜索功能
- 🚀 **自动部署** - 通过 GitHub Actions 自动部署到 GitHub Pages

## 📦 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型支持

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动开发服务器：

```bash
pnpm docs:dev
```

访问：
- 中文：http://localhost:5173/zh/
- English：http://localhost:5173/en/

### 构建

构建生产版本：

```bash
pnpm docs:build
```

构建产物位于 `docs/.vitepress/dist`

### 预览

预览构建后的网站：

```bash
pnpm docs:preview
```

## 📁 目录结构

```
docs/
├─ .vitepress/
│  ├─ config.mts           # VitePress 配置文件
│  └─ theme/
│      ├─ index.ts          # 主题入口
│      └─ styles/
│          └─ custom.css    # 自定义样式
├─ public/
│  ├─ favicon.ico           # 网站图标
│  └─ icons/                # 图标资源
├─ zh/                      # 中文文档
│  ├─ index.md              # 首页
│  ├─ guide/                # 指南
│  │  ├─ getting-started.md
│  │  └─ comparison.md
│  ├─ api/                  # API 参考
│  │  ├─ column-types.md
│  │  └─ constraints.md
│  └─ examples/             # 示例
│     ├─ create-table.md
│     ├─ alter-table.md
│     └─ indexes.md
└─ en/                      # 英文文档
   ├─ index.md
   ├─ guide/
   ├─ api/
   └─ examples/
```

## 🌐 语言入口

- 🇨🇳 **中文**：`/zh/`
- 🇺🇸 **English**：`/en/`

## 📝 文档内容

### 指南 (Guide)

- [快速开始](/zh/guide/getting-started) - 安装和基本用法
- [对比](/zh/guide/comparison) - 与原生 TypeORM 的对比

### API 参考

- [列类型](/zh/api/column-types) - 所有支持的列类型
- [列约束](/zh/api/constraints) - 主键、外键、唯一约束等

### 示例

- [创建表](/zh/examples/create-table) - 各种创建表的示例
- [修改表](/zh/examples/alter-table) - 添加、删除、修改列的示例
- [索引](/zh/examples/indexes) - 创建和删除索引的示例

## 🚢 部署

### GitHub Pages

项目已配置 GitHub Actions，推送到 `main` 分支会自动部署到 GitHub Pages。

部署流程：
1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建
3. 部署到 GitHub Pages

### 手动部署

```bash
# 构建
pnpm docs:build

# 部署到 GitHub Pages
# 将 docs/.vitepress/dist 目录的内容推送到 gh-pages 分支
```

## 🛠️ 开发指南

### 添加新文档

1. 在对应的语言目录下创建 Markdown 文件
2. 在 `config.mts` 中添加导航或侧边栏配置
3. 保持中英文文档结构一致

### 修改样式

编辑 `docs/.vitepress/theme/styles/custom.css` 文件。

### 修改配置

编辑 `docs/.vitepress/config.mts` 文件。

## 📄 许可证

ISC

## 🔗 相关链接

- [TypeORM Fluent Migrator GitHub](https://github.com/qianfeiqianlan/typeorm-fluent-migrator)
- [VitePress 文档](https://vitepress.dev/)
- [TypeORM 文档](https://typeorm.io/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过 GitHub Issues 联系我们。
