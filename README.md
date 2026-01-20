# 🚀 MCP Hub - World's Most Complete MCP Server Collection

<div align="center">

![MCP Hub](https://img.shields.io/badge/MCP%20Hub-1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE2NThkYyI+PHBhdGggZD0iTTEgMTEuMzdhMTIgMTIgMCAwIDEgMTItMTJhMTIgMTIgMCAwIDEgMTEuMzcgMS41N2wxLjYxIDUuNTNjLjI5LjUzLjY3LjY5IDEuMjMuNjlzLjk0LS4xNiAxLjIzLS42OWwxLjYxLTUuNTNhMTIgMTIgMCAwIDEgMTEuMzctMS41N2ExMiAxMiAwIDAgMSAxMiAxMmExMiAxMiAwIDAgMS0xMiAxMmgtLjAxVjExLjM3em0zLjY1IDEuODNsLTEuNjEgNS41M2gtMy45M2wtMS42MS01LjUzYTkgOSAwIDAgMC05LTkuMzdhOSA5IDAgMCAwIDktOS4zN2E5IDkgMCAwIDAgOSA5LjM3em0tNi4zMyAwaDF2Ni4yNWgtMVYyMy43M2gxVjcuMzN6bTE1LjY1IDBoMTF2Ni4yNWgtMTB2LTYuMjVoMTB6bS03LjMyIDEwaDF2MTEuMzdoLTFWMjMuNzNoLTFWNy4zM3oiLz48L3N2Zz4=)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

**🚀 The Ultimate MCP Server Manager - Discover, Configure & Deploy 100+ MCP Servers**

🎯 **Instantly Generate claude_desktop_config.json**

🌐 **Website**: **[https://wild-hall-5c56.qazplm20031208zj.workers.dev](https://wild-hall-5c56.qazplm20031208zj.workers.dev)**

[English](README.md) | [中文](README_CN.md) | [日本語](README_JA.md) | [한국어](README_KO.md) | [Español](README_ES.md) | [Français](README_FR.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [Русский](README_RU.md) | [العربية](README_AR.md) | [Italiano](README_IT.md) | [Nederlands](README_NL.md)

</div>

---

## 📖 About

MCP Hub is a modern, beautiful, and powerful web application designed to simplify the discovery, configuration, and deployment of [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers for Claude Desktop.

With MCP Hub, you can:
- 🔍 Browse and discover popular MCP servers
- 🛒 Add servers to your "Config Cart" with one click
- 📦 Generate production-ready `claude_desktop_config.json` configurations
- 📜 Auto-generate installation scripts (Bash & PowerShell)
- ⚡ Get started in seconds — no manual configuration needed

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🔍 **Server Discovery** | Browse curated MCP servers with search and category filtering |
| 🛒 **Config Cart** | Select servers and see real-time JSON preview |
| 📄 **JSON Generation** | One-click copy or download `claude_desktop_config.json` |
| 📜 **Install Scripts** | Auto-generate Bash (macOS/Linux) and PowerShell (Windows) scripts |
| 🎨 **Beautiful UI** | Modern interface built with shadcn/ui and Tailwind CSS |
| 📱 **Fully Responsive** | Works seamlessly on desktop and mobile devices |
| 🔒 **Privacy First** | All processing happens locally in your browser |

</div>

---

## 🚀 Quick Start

### Option 1: Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/mcp-hub.git
cd mcp-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Option 2: Use npx (No Installation)

```bash
npx mcp-hub
```

> **Note:** This project is designed to be built and run locally. The npx command will be available once published to npm.

### Option 3: Docker

```bash
docker build -t mcp-hub .
docker run -p 5173:5173 mcp-hub
```

Open your browser and navigate to `http://localhost:5173`

---

## 📖 Usage Guide

### 1. Browse Servers

Use the search bar and category filters to find MCP servers that match your needs.

### 2. Add to Cart

Toggle the switch on any server card to add it to your configuration. Selected servers are highlighted.

### 3. Generate Config

Click the **Config Cart** button in the header to open the configuration panel. You can:

- 📋 Copy the JSON configuration
- ⬇️ Download `claude_desktop_config.json`
- 🐚 Get installation scripts (Bash/PowerShell)

### 4. Install

#### Manual Installation

Copy the generated JSON to your Claude Desktop config:

**macOS/Linux:**
```bash
mkdir -p ~/.config
cp claude_desktop_config.json ~/.config/claude_desktop_config.json
```

**Windows:**
```powershell
mkdir $env:APPDATA\Claude
copy claude_desktop_config.json $env:APPDATA\Claude\claude_desktop_config.json
```

#### Auto Installation (Recommended)

Run the generated install script:

**Bash (macOS/Linux/WSL):**
```bash
chmod +x install-mcp.sh
./install-mcp.sh
```

**PowerShell (Windows):**
```powershell
.\install-mcp.ps1
```

> ⚠️ **Important:** Restart Claude Desktop after applying the configuration.

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| [React 18](https://reactjs.org/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI Components |
| [Lucide React](https://lucide.dev/) | Icons |
| [Radix UI](https://www.radix-ui.com/) | Accessibility |

</div>

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Adding New MCP Servers

To add a new MCP server, edit `src/data/mcp-data.ts`:

```typescript
{
  id: "my-server",
  name: "My Server",
  description: "Description of what your server does",
  command: "npx",
  args: ["-y", "@mypackage/server-my-server"],
  category: "database", // database, filesystem, api, development, ai, communication, utilities, other
  tags: ["tag1", "tag2"],
  icon: "Database", // Any Lucide icon name
},
```

---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Model Context Protocol](https://modelcontextprotocol.io/) by Anthropic
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers) for inspiration

---

<div align="center">

**Made with ❤️ by the MCP Hub Team**

⭐ Star this repo if you find it useful!

</div>
