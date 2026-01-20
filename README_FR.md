# 🚀 MCP Hub - La Collection de Serveurs MCP la Plus Complète au Monde

<div align="center">

![MCP Hub](https://img.shields.io/badge/MCP%20Hub-1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE2NThkYyI+PHBhdGggZD0iTTEgMTEuMzdhMTIgMTIgMCAwIDEgMTItMTJhMTIgMTIgMCAwIDEgMTEuMzcgMS41N2wxLjYxIDUuNTNjLjI5LjUzLjY3LjY5IDEuMjMuNjlzLjk0LS4xNiAxLjIzLS42OWwxLjYxLTUuNTNhMTIgMTIgMCAwIDEgMTEuMzctMS41N2ExMiAxMiAwIDAgMSAxMiAxMmExMiAxMiAwIDAgMS0xMiAxMmgtLjAxVjExLjM3em0zLjY1IDEuODNsLTEuNjEgNS41M2gtMy45M2wtMS42MS01LjUzYTkgOSAwIDAgMC05LTkuMzdhOSA5IDAgMCAwIDktOS4zN2E5IDkgMCAwIDAgOSA5LjM3em0tNi4zMyAwaDF2Ni4yNWgtMVYyMy43M2gxVjcuMzN6bTE1LjY1IDBoMTF2Ni4yNWgtMTB2LTYuMjVoMTB6bS03LjMyIDEwaDF2MTEuMzdoLTFWMjMuNzNoLTFWNy4zM3oiLz48L3N2Zz4=)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

**🚀 Le Gestionnaire Ultime de Serveurs MCP - Découvrez, Configurez et Déployez 100+ Serveurs MCP**

🎯 **Générez claude_desktop_config.json en un clic**

🌐 **Site Web**: **[https://wild-hall-5c56.qazplm20031208zj.workers.dev](https://wild-hall-5c56.qazplm20031208zj.workers.dev)**

[English](README.md) | [中文](README_CN.md) | [日本語](README_JA.md) | [한국어](README_KO.md) | [Español](README_ES.md) | [Français](README_FR.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [Русский](README_RU.md) | [العربية](README_AR.md) | [Italiano](README_IT.md) | [Nederlands](README_NL.md)

</div>

---

## 📖 À propos

MCP Hub est une application web moderne, belle et puissante conçue pour simplifier la découverte, la configuration et le déploiement des serveurs [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) pour Claude Desktop.

Avec MCP Hub, vous pouvez :
- 🔍 Parcourir et découvrir les serveurs MCP populaires
- 🛒 Ajouter des serveurs à votre "Panier de Configuration" en un clic
- 📦 Générer des configurations `claude_desktop_config.json` prêtes pour la production
- 📜 Générer automatiquement des scripts d'installation (Bash & PowerShell)
- ⚡ Commencez en secondes — aucune configuration manuelle nécessaire

---

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| 🔍 **Découverte de Serveurs** | Parcourez les serveurs MCP avec recherche et filtres par catégorie |
| 🛒 **Panier de Configuration** | Sélectionnez les serveurs et prévisualisez le JSON en temps réel |
| 📄 **Génération JSON** | Copiez ou téléchargez `claude_desktop_config.json` en un clic |
| 📜 **Scripts d'Installation** | Générez des scripts pour Bash (macOS/Linux) et PowerShell (Windows) |
| 🎨 **Interface Magnifique** | Interface moderne construite avec shadcn/ui et Tailwind CSS |
| 📱 **Entièrement Responsive** | Fonctionne parfaitement sur bureau et mobile |
| 🔒 **Confidentialité Première** | Tout le traitement se fait localement dans votre navigateur |

---

## 🚀 Démarrage Rapide

### Méthode 1 : Exécuter Localement

```bash
# Cloner le dépôt
git clone https://github.com/yuyangzheng-git/mcp-hub.git
cd mcp-hub

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

### Méthode 2 : Docker

```bash
docker build -t mcp-hub .
docker run -p 5173:5173 mcp-hub
```

Ouvrez votre navigateur à `http://localhost:5173`

---

## 📖 Guide d'Utilisation

### 1. Parcourir les Serveurs

Utilisez la barre de recherche et les filtres par catégorie pour trouver les serveurs MCP.

### 2. Ajouter au Panier

Activez l'interrupteur sur n'importe quelle carte de serveur pour l'ajouter à votre configuration.

### 3. Générer la Configuration

Cliquez sur le bouton **Config Cart** dans l'en-tête pour ouvrir le panneau :
- 📋 Copier la configuration JSON
- ⬇️ Téléchargement `claude_desktop_config.json`
- 🐚 Obtenir les scripts d'installation (Bash/PowerShell)

### 4. Installer

#### Installation Manuelle

Copiez le JSON généré dans la configuration de Claude Desktop :

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

#### Installation Automatique (Recommandée)

Exécutez le script d'installation généré :

**Bash (macOS/Linux/WSL):**
```bash
chmod +x install-mcp.sh
./install-mcp.sh
```

**PowerShell (Windows):**
```powershell
.\install-mcp.ps1
```

> ⚠️ **Important :** Redémarrez Claude Desktop après avoir appliqué la configuration.

---

## 🛠️ Stack Technique

| Technologie | Utilisation |
|-------------|-------------|
| [React 18](https://reactjs.org/) | Framework UI |
| [TypeScript](https://www.typescriptlang.org/) | Sécurité des types |
| [Vite](https://vitejs.dev/) | Outil de build |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | Composants UI |
| [Lucide React](https://lucide.dev/) | Icônes |
| [Radix UI](https://www.radix-ui.com/) | Accessibilité |

---

## 🤝 Contributions

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une Pull Request.

### Comment Contribuer

1. **Fork** le dépôt
2. Créez une branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une **Pull Request**

### Ajouter de Nouveaux Serveurs MCP

Pour ajouter un nouveau serveur MCP, éditez `src/data/mcp-data.ts` :

```typescript
{
  id: "my-server",
  name: "My Server",
  description: "Description of what your server does",
  command: "npx",
  args: ["-y", "@mypackage/server-my-server"],
  category: "database", // database, filesystem, api, development, ai, communication, utilities, other
  tags: ["tag1", "tag2"],
  icon: "Database", // Nom de l'icône Lucide
},
```

---

## 📝 Licence

Ce projet est sous licence MIT — consultez le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- [Model Context Protocol](https://modelcontextprotocol.io/) par Anthropic
- [shadcn/ui](https://ui.shadcn.com/) pour la belle bibliothèque de composants
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers) pour l'inspiration

---

<div align="center">

**Fait avec ❤️ par l'Équipe MCP Hub**

⭐ Donnez une étoile si vous trouvez cela utile !

</div>
