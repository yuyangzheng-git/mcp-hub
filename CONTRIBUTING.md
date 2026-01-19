# Contributing to MCP Hub

Thank you for your interest in contributing to MCP Hub! This document provides guidelines and instructions for contributing.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Ways to Contribute](#-ways-to-contribute)
- [Development Setup](#-development-setup)
- [Submitting Changes](#-submitting-changes)
- [Adding MCP Servers](#-adding-mcp-servers)
- [Style Guidelines](#-style-guidelines)
- [Community](#-community)

---

## 📜 Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainers@mcphub.dev](mailto:maintainers@mcphub.dev).

---

## 🎯 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- **Git** installed and configured
- A GitHub account

### First Steps

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mcp-hub.git
   cd mcp-hub
   ```
3. Set up the upstream remote:
   ```bash
   git remote add upstream https://github.com/original-owner/mcp-hub.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

---

## 🤝 Ways to Contribute

There are many ways to contribute to MCP Hub:

| Type | Description |
|------|-------------|
| 🐛 **Bug Reports** | Found a bug? Let us know! |
| 💡 **Feature Requests** | Have an idea? Share it! |
| 📝 **Documentation** | Improve docs, add examples |
| 🎨 **UI/UX** | Design improvements |
| 🧪 **Testing** | Write or improve tests |
| 🔧 **Code** | Fix bugs, add features |
| 🌐 **Localization** | Add translations |
| 📦 **MCP Servers** | Add new server entries |

---

## 💻 Development Setup

### Development Workflow

1. **Sync your fork:**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Make your changes**

5. **Run type checking:**
   ```bash
   npm run typecheck
   ```

6. **Run linting:**
   ```bash
   npm run lint
   ```

7. **Build the project:**
   ```bash
   npm run build
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler
npm run format       # Format code with Prettier
```

---

## 📤 Submitting Changes

### Pull Request Process

1. **Ensure clean commits:**
   ```bash
   git status
   git add .
   git commit -m "feat: add new feature"
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Open a Pull Request:**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch and fill in the template

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented complex code
- [ ] I have updated documentation
- [ ] My changes generate no warnings
- [ ] I have added tests
- [ ] New and existing tests pass
```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Code style changes |
| `refactor:` | Code refactoring |
| `perf:` | Performance improvements |
| `test:` | Adding tests |
| `chore:` | Maintenance tasks |

Example:
```
feat(ui): add dark mode toggle
fix(server): resolve connection timeout
docs(readme): update installation instructions
```

---

## 📦 Adding MCP Servers

To add a new MCP server to the registry, edit `src/data/mcp-data.ts`:

```typescript
{
  id: "unique-server-id",
  name: "Server Name",
  description: "Brief description of what the server does",
  command: "npx",           // or "uvx", "python", etc.
  args: ["-y", "@package/server-name"],
  env: {                    // optional environment variables
    API_KEY: "your-key"
  },
  category: "database",     // see categories below
  tags: ["tag1", "tag2"],
  icon: "Database",         // Lucide icon name
},
```

### Available Categories

| Category | Description |
|----------|-------------|
| `database` | Database connectors (SQL, NoSQL) |
| `filesystem` | File system access |
| `api` | External API integrations |
| `development` | Dev tools, git, debugging |
| `ai` | AI/ML model integrations |
| `communication` | Email, chat, messaging |
| `utilities` | Helper tools and utilities |
| `other` | Miscellaneous |

### Server Quality Standards

Before adding a server, ensure it:

- [ ] Is actively maintained
- [ ] Has clear documentation
- [ ] Is widely used (>100 stars recommended)
- [ ] Follows MCP protocol specifications
- [ ] Doesn't duplicate existing functionality

---

## 🎨 Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Prefer interfaces over types for objects
- Use `const` over `let`
- Enable `strict` mode

### React

- Use functional components with hooks
- Follow the [React Hooks Rules](https://reactjs.org/docs/hooks-rules.html)
- Use meaningful component names (PascalCase)
- Keep components small and focused

### CSS / Tailwind

- Use Tailwind utility classes
- Follow the [Tailwind CSS ordering](https://github.com/tailwindlabs/tailwindcss-forms)
- Use `cn()` utility for conditional classes
- Avoid custom CSS when possible

### Git

- Keep commits atomic and focused
- Write descriptive commit messages
- Squash related commits before PR
- Rebase on main before submitting

---

## 💬 Community

### Get Help

- 📧 Email: [maintainers@mcphub.dev](mailto:maintainers@mcphub.dev)
- 💬 Discord: [Join our server](https://discord.gg/mcphub)

### Join the Community

- ⭐ Star the project
- 🐦 Follow us on Twitter
- 📢 Spread the word
- 💖 Sponsor the project

---

## 📜 License

By contributing to MCP Hub, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

<div align="center">

**Thank you for contributing! 🚀**

Made with ❤️ by the community

</div>
