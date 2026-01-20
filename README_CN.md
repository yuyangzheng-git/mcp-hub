# 🚀 MCP Hub - 史上最全MCP服务器合集

<div align="center">

![MCP Hub](https://img.shields.io/badge/MCP%20Hub-1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE2NThkYyI+PHBhdGggZD0iTTEgMTEuMzdhMTIgMTIgMCAwIDEgMTItMTJhMTIgMTIgMCAwIDEgMTEuMzcgMS41N2wxLjYxIDUuNTNjLjI5LjUzLjY3LjY5IDEuMjMuNjlzLjk0LS4xNiAxLjIzLS42OWwxLjYxLTUuNTNhMTIgMTIgMCAwIDEgMTEuMzctMS41N2ExMiAxMiAwIDAgMSAxMiAxMmExMiAxMiAwIDAgMS0xMiAxMmgtLjAxVjExLjM3em0zLjY1IDEuODNsLTEuNjEgNS41M2gtMy45M2wtMS42MS01LjUzYTkgOSAwIDAgMC05LTkuMzdhOSA5IDAgMCAwIDktOS4zN2E5IDkgMCAwIDAgOSA5LjM3em0tNi4zMyAwaDF2Ni4yNWgtMVYyMy43M2gxVjcuMzN6bTE1LjY1IDBoMTF2Ni4yNWgtMTB2LTYuMjVoMTB6bS03LjMyIDEwaDF2MTEuMzdoLTFWMjMuNzNoLTFWNy4zM3oiLz48L3N2Zz4=)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

**🚀 终极MCP服务器管理器 - 发现、配置和部署100+个MCP服务器**

🎯 **一键生成 claude_desktop_config.json**

🌐 **官网**: **[https://mcp-hub.dev](https://mcp-hub.dev)**

[English](README.md) | [中文](README_CN.md) | [日本語](README_JA.md) | [한국어](README_KO.md) | [Español](README_ES.md) | [Français](README_FR.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [Русский](README_RU.md) | [العربية](README_AR.md) | [Italiano](README_IT.md) | [Nederlands](README_NL.md)

</div>

---

## 📖 关于

MCP Hub 是一个现代化、美观且功能强大的Web应用程序，旨在简化 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) 服务器在 Claude Desktop 上的发现、配置和部署。

使用 MCP Hub，您可以：
- 🔍 浏览和发现流行的 MCP 服务器
- 🛒 一键将服务器添加到"配置购物车"
- 📦 生成可用于生产的 `claude_desktop_config.json` 配置
- 📜 自动生成安装脚本（Bash 和 PowerShell）
- ⚡ 几秒钟内开始使用 — 无需手动配置

---

## ✨ 功能

<div align="center">

| 功能 | 描述 |
|------|------|
| 🔍 **服务器发现** | 通过搜索和分类筛选浏览精选的 MCP 服务器 |
| 🛒 **配置购物车** | 选择服务器并查看实时 JSON 预览 |
| 📄 **JSON 生成** | 一键复制或下载 `claude_desktop_config.json` |
| 📜 **安装脚本** | 自动生成 Bash（macOS/Linux）和 PowerShell（Windows）脚本 |
| 🎨 **美观界面** | 使用 shadcn/ui 和 Tailwind CSS 构建的现代化界面 |
| 📱 **完全响应式** | 在桌面和移动设备上无缝运行 |
| 🔒 **隐私优先** | 所有处理都在本地浏览器中完成 |

</div>

---

## 🚀 快速开始

### 方法一：本地运行

```bash
# 克隆仓库
git clone https://github.com/yuyangzheng-git/mcp-hub.git
cd mcp-hub

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 方法二：使用 npx（无需安装）

```bash
npx mcp-hub
```

### 方法三：Docker

```bash
docker build -t mcp-hub .
docker run -p 5173:5173 mcp-hub
```

打开浏览器并访问 `http://localhost:5173`

---

## 📖 使用指南

### 1. 浏览服务器

使用搜索栏和分类筛选器查找符合您需求的 MCP 服务器。

### 2. 添加到购物车

切换任何服务器卡片上的开关以将其添加到配置中。选中的服务器会高亮显示。

### 3. 生成配置

点击顶部的 **Config Cart** 按钮打开配置面板，您可以：
- 📋 复制 JSON 配置
- ⬇️ 下载 `claude_desktop_config.json`
- 🐚 获取安装脚本（Bash/PowerShell）

### 4. 安装

#### 手动安装

将生成的 JSON 复制到您的 Claude Desktop 配置：

**macOS/Linux：**
```bash
mkdir -p ~/.config
cp claude_desktop_config.json ~/.config/claude_desktop_config.json
```

**Windows：**
```powershell
mkdir $env:APPDATA\Claude
copy claude_desktop_config.json $env:APPDATA\Claude\claude_desktop_config.json
```

#### 自动安装（推荐）

运行生成的安装脚本：

**Bash（macOS/Linux/WSL）：**
```bash
chmod +x install-mcp.sh
./install-mcp.sh
```

**PowerShell（Windows）：**
```powershell
.\install-mcp.ps1
```

> ⚠️ **重要：** 应用配置后重启 Claude Desktop。

---

## 🛠️ 技术栈

<div align="center">

| 技术 | 用途 |
|------|------|
| [React 18](https://reactjs.org/) | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite](https://vitejs.dev/) | 构建工具 |
| [Tailwind CSS](https://tailwindcss.com/) | 样式 |
| [shadcn/ui](https://ui.shadcn.com/) | UI 组件 |
| [Lucide React](https://lucide.dev/) | 图标 |
| [Radix UI](https://www.radix-ui.com/) | 可访问性 |

</div>

---

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

### 如何贡献

1. **Fork** 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 **Pull Request**

### 添加新的 MCP 服务器

要添加新的 MCP 服务器，请编辑 `src/data/mcp-data.ts`：

```typescript
{
  id: "my-server",
  name: "My Server",
  description: "Description of what your server does",
  command: "npx",
  args: ["-y", "@mypackage/server-my-server"],
  category: "database",
  tags: ["tag1", "tag2"],
  icon: "Database",
},
```

---

## 📝 许可证

本项目根据 MIT 许可证授权 — 请参阅 [LICENSE](LICENSE) 文件了解更多详情。

---

## 🙏 致谢

- [Model Context Protocol](https://modelcontextprotocol.io/) — Anthropic
- [shadcn/ui](https://ui.shadcn.com/) — 感谢精美的组件库
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers) — 灵感来源

---

<div align="center">

**由 MCP Hub 团队用 ❤️ 制作**

⭐ 如果对您有帮助，请给本仓库一个星标！

</div>
