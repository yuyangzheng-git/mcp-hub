# 🚀 MCP Hub - 세계에서 가장 완전한 MCP 서버 컬렉션

<div align="center">

![MCP Hub](https://img.shields.io/badge/MCP%20Hub-1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE2NThkYyI+PHBhdGggZD0iTTEgMTEuMzdhMTIgMTIgMCAwIDEgMTItMTJhMTIgMTIgMCAwIDEgMTEuMzcgMS41N2wxLjYxIDUuNTNjLjI5LjUzLjY3LjY5IDEuMjMuNjlzLjk0LS4xNiAxLjIzLS42OWwxLjYxLTUuNTNhMTIgMTIgMCAwIDEgMTEuMzctMS41N2ExMiAxMiAwIDAgMSAxMiAxMmExMiAxMiAwIDAgMS0xMiAxMmgtLjAxVjExLjM3em0zLjY1IDEuODNsLTEuNjEgNS41M2gtMy45M2wtMS42MS01LjUzYTkgOSAwIDAgMC05LTkuMzdhOSA5IDAgMCAwIDktOS4zN2E5IDkgMCAwIDAgOSA5LjM3em0tNi4zMyAwaDF2Ni4yNWgtMVYyMy43M2gxVjcuMzN6bTE1LjY1IDBoMTF2Ni4yNWgtMTB2LTYuMjVoMTB6bS03LjMyIDEwaDF2MTEuMzdoLTFWMjMuNzNoLTFWNy4zM3oiLz48L3N2Zz4=)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

**🚀 Ultimate MCP 서버 관리자 - 100개 이상의 MCP 서버 발견·구성·배포**

🎯 **클릭 한 번으로 claude_desktop_config.json 생성**

🌐 **웹사이트**: **[https://wild-hall-5c56.qazplm20031208zj.workers.dev](https://wild-hall-5c56.qazplm20031208zj.workers.dev)**

[English](README.md) | [中文](README_CN.md) | [日本語](README_JA.md) | [한국어](README_KO.md) | [Español](README_ES.md) | [Français](README_FR.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [Русский](README_RU.md) | [العربية](README_AR.md) | [Italiano](README_IT.md) | [Nederlands](README_NL.md)

</div>

---

## 📖 소개

MCP Hub은 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) 서버의 발견, 구성 및 배포를 간소화하도록 설계된 현대적이고 아름답고 강력한 웹 애플리케이션입니다.

MCP Hub으로 할 수 있는 것:
- 🔍 인기 MCP 서버 탐색 및 발견
- 🛒 원클릭으로 서버를 "구성 카트"에 추가
- 📦 즉시 사용 가능한 `claude_desktop_config.json` 구성 생성
- 📜 설치 스크립트 자동 생성 (Bash & PowerShell)
- ⚡ 몇 초만에 시작 - 수동 구성 불필요

---

## ✨ 기능

| 기능 | 설명 |
|------|------|
| 🔍 **서버 발견** | 검색 및 카테고리 필터로 MCP 서버 발견 |
| 🛒 **구성 카트** | 서버 선택 및 실시간 JSON 미리보기 |
| 📄 **JSON 생성** | `claude_desktop_config.json` 원클릭 복사/다운로드 |
| 📜 **설치 스크립트** | Bash(macOS/Linux) 및 PowerShell(Windows) 스크립트 자동 생성 |
| 🎨 **아름다운 UI** | shadcn/ui 및 Tailwind CSS로 제작된 현대적 인터페이스 |
| 📱 **완전 반응형** | 데스크톱 및 모바일에서 완벽하게 동작 |
| 🔒 **프라이버시 우선** | 모든 처리는 로컬 브라우저에서 수행 |

---

## 🚀 빠른 시작

### 방법1: 로컬에서 실행

```bash
# 리포지토리 클론
git clone https://github.com/yuyangzheng-git/mcp-hub.git
cd mcp-hub

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build
```

### 방법2: Docker

```bash
docker build -t mcp-hub .
docker run -p 5173:5173 mcp-hub
```

브라우저에서 `http://localhost:5173` 열기

---

## 📖 사용법

### 1. 서버 탐색

검색 바 및 카테고리 필터를 사용하여 필요한 MCP 서버를 찾습니다.

### 2. 카트에 추가

서버 카드의 스위치를 토글하여 구성에 추가합니다.

### 3. 구성 생성

헤더의 **Config Cart** 버튼을 클릭하여 패널 열기:
- 📋 JSON 구성 복사
- ⬇️ `claude_desktop_config.json` 다운로드
- 🐚 설치 스크립트(Bash/PowerShell) 얻기

### 4. 설치

#### 수동 설치

생성된 JSON을 Claude Desktop 구성에 복사:

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

#### 자동 설치 (권장)

생성된 설치 스크립트 실행:

**Bash (macOS/Linux/WSL):**
```bash
chmod +x install-mcp.sh
./install-mcp.sh
```

**PowerShell (Windows):**
```powershell
.\install-mcp.ps1
```

> ⚠️ **중요:** 구성을 적용한 후 Claude Desktop을 다시 시작하세요.

---

## 🛠️ 기술 스택

| 기술 | 용도 |
|------|------|
| [React 18](https://reactjs.org/) | UI 프레임워크 |
| [TypeScript](https://www.typescriptlang.org/) | 타입 안전성 |
| [Vite](https://vitejs.dev/) | 빌드 도구 |
| [Tailwind CSS](https://tailwindcss.com/) | 스타일링 |
| [shadcn/ui](https://ui.shadcn.com/) | UI 컴포넌트 |
| [Lucide React](https://lucide.dev/) | 아이콘 |
| [Radix UI](https://www.radix-ui.com/) | 접근성 |

---

## 🤝 기여

기여를 환영합니다! Pull Request를 자유롭게 제출해 주세요.

### 기여하는 방법

1. 리포지토리 **Fork**
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경 사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. **Pull Request** 열기

### 새 MCP 서버 추가

새 MCP 서버를 추가하려면 `src/data/mcp-data.ts` 편집:

```typescript
{
  id: "my-server",
  name: "My Server",
  description: "Description of what your server does",
  command: "npx",
  args: ["-y", "@mypackage/server-my-server"],
  category: "database", // database, filesystem, api, development, ai, communication, utilities, other
  tags: ["tag1", "tag2"],
  icon: "Database", // Lucide 아이콘 이름
},
```

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 라이선스되었습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 🙏 감사 인사

- Anthropic의 [Model Context Protocol](https://modelcontextprotocol.io/)
- 아름다운 컴포넌트 라이브러리의 [shadcn/ui](https://ui.shadcn.com/)
- 영감을 준 [MCP Server Registry](https://github.com/modelcontextprotocol/servers)

---

<div align="center">

**❤️ by the MCP Hub Team**

유용했다면 스타를 눌러주세요!

</div>
