# 🚀 MCP Hub - 世界で最も完全なMCPサーバーズコレクション

<div align="center">

![MCP Hub](https://img.shields.io/badge/MCP%20Hub-1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE2NThkYyI+PHBhdGggZD0iTTEgMTEuMzdhMTIgMTIgMCAwIDEgMTItMTJhMTIgMTIgMCAwIDEgMTEuMzcgMS41N2wxLjYxIDUuNTNjLjI5LjUzLjY3LjY5IDEuMjMuNjlzLjk0LS4xNiAxLjIzLS42OWwxLjYxLTUuNTNhMTIgMTIgMCAwIDEgMTEuMzctMS41N2ExMiAxMiAwIDAgMSAxMiAxMmExMiAxMiAwIDAgMS0xMiAxMmgtLjAxVjExLjM3em0zLjY1IDEuODNsLTEuNjEgNS41M2gtMy45M2wtMS42MS01LjUzYTkgOSAwIDAgMC05LTkuMzdhOSA5IDAgMCAwIDktOS4zN2E5IDkgMCAwIDAgOSA5LjM3em0tNi4zMyAwaDF2Ni4yNWgtMVYyMy43M2gxVjcuMzN6bTE1LjY1IDBoMTF2Ni4yNWgtMTB2LTYuMjVoMTB6bS03LjMyIDEwaDF2MTEuMzdoLTFWMjMuNzNoLTFWNy4zM3oiLz48L3N2Zz4=)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

**🚀 究極のMCPサーバーマネージャー - 100以上のMCPサーバーを発見・構成・デプロイ**

🎯 **ワンクリックで claude_desktop_config.json を生成**

🌐 **ウェブサイト**: **[https://wild-hall-5c56.qazplm20031208zj.workers.dev](https://wild-hall-5c56.qazplm20031208zj.workers.dev)**

[English](README.md) | [中文](README_CN.md) | [日本語](README_JA.md) | [한국어](README_KO.md) | [Español](README_ES.md) | [Français](README_FR.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [Русский](README_RU.md) | [العربية](README_AR.md) | [Italiano](README_IT.md) | [Nederlands](README_NL.md)

</div>

---

## 📖 概要

MCP Hubは、[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) サーバーの発見、構成、展開を簡素化するために設計された、美しくモダンで強力なWebアプリケーションです。

MCP Hubでできること：
- 🔍 人気のMCPサーバーの閲覧と発見
- 🛒 ワンクリックでサーバーを「設定カート」に追加
- 📦 運用可能な `claude_desktop_config.json` 構成を生成
- 📜 インストールスクリプトを自動生成（Bash & PowerShell）
- ⚡ 数秒で開始 - 手動設定は不要

---

## ✨ 機能

| 機能 | 説明 |
|------|------|
| 🔍 **サーバー発見** | 検索とカテゴリフィルターでMCPサーバーを発見 |
| 🛒 **設定カート** | サーバーを選択してリアルタイムJSONプレビューを確認 |
| 📄 **JSON生成** | `claude_desktop_config.json` をワンクリックでコピー/ダウンロード |
| 📜 **インストールスクリプト** | Bash（macOS/Linux）およびPowerShell（Windows）用スクリプトを自動生成 |
| 🎨 **美しいUI** | shadcn/uiとTailwind CSSを使用したモダンなインターフェース |
| 📱 **完全なレスポンシブ** | デスクトップとモバイルでシームレスに動作 |
| 🔒 **プライバシー優先** | すべての処理はローカルでブラウザ内で完結 |

---

## 🚀 クイックスタート

### 方法1：ローカルで実行

```bash
# リポジトリをクローン
git clone https://github.com/yuyangzheng-git/mcp-hub.git
cd mcp-hub

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番ビルド
npm run build
```

### 方法2：Docker

```bash
docker build -t mcp-hub .
docker run -p 5173:5173 mcp-hub
```

ブラウザで `http://localhost:5173` を開きます

---

## 📖 使い方

### 1. サーバーを閲覧

検索バーとカテゴリフィルターを使用して、必要なMCPサーバーを見つけます。

### 2. カートに追加

サーバーカードのスイッチを切り替えて、構成に追加します。

### 3. 構成を生成

ヘッダーの **Config Cart** ボタンをクリックして、パネルを開きます：

- 📋 JSON構成をコピー
- ⬇️ `claude_desktop_config.json` をダウンロード
- 🐚 インストールスクリプト（Bash/PowerShell）を取得

### 4. インストール

#### 手動インストール

生成されたJSONをClaude Desktop構成にコピー：

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

#### 自動インストール（推奨）

生成されたインストールスクリプトを実行：

**Bash (macOS/Linux/WSL):**
```bash
chmod +x install-mcp.sh
./install-mcp.sh
```

**PowerShell (Windows):**
```powershell
.\install-mcp.ps1
```

> ⚠️ **重要:** 構成を適用した後、Claude Desktopを再起動してください。

---

## 🛠️ 技術スタック

| 技術 | 用途 |
|------|------|
| [React 18](https://reactjs.org/) | UIフレームワーク |
| [TypeScript](https://www.typescriptlang.org/) | 型安全性 |
| [Vite](https://vitejs.dev/) | ビルドツール |
| [Tailwind CSS](https://tailwindcss.com/) | スタイリング |
| [shadcn/ui](https://ui.shadcn.com/) | UIコンポーネント |
| [Lucide React](https://lucide.dev/) | アイコン |
| [Radix UI](https://www.radix-ui.com/) | アクセシビリティ |

---

## 🤝 コントリビューション

コントリビューションを歓迎します！Pull Requestを自由に提交してください。

### コントリビュートする方法

1. リポジトリを **Fork**
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. **Pull Request** を開く

### 新しいMCPサーバーの追加

新しいMCPサーバーを追加するには、`src/data/mcp-data.ts` を編集：

```typescript
{
  id: "my-server",
  name: "My Server",
  description: "Description of what your server does",
  command: "npx",
  args: ["-y", "@mypackage/server-my-server"],
  category: "database", // database, filesystem, api, development, ai, communication, utilities, other
  tags: ["tag1", "tag2"],
  icon: "Database", // Lucideアイコン名
},
```

---

## 📝 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細については、[LICENSE](LICENSE) ファイルを参照してください。

---

## 🙏 謝辞

- Anthropicによる [Model Context Protocol](https://modelcontextprotocol.io/)
- 美しいコンポーネントライブラリの [shadcn/ui](https://ui.shadcn.com/)
- インスピレーションを与えてくれた [MCP Server Registry](https://github.com/modelcontextprotocol/servers)

---

<div align="center">

**❤️ by the MCP Hub Team**

⭐ 役に立ったらスターをつけてください！

</div>
