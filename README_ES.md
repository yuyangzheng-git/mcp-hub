# 🚀 MCP Hub - La Colección de Servidores MCP Más Completa del Mundo

<div align="center">

![MCP Hub](https://img.shields.io/badge/MCP%20Hub-1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE2NThkYyI+PHBhdGggZD0iTTEgMTEuMzdhMTIgMTIgMCAwIDEgMTItMTJhMTIgMTIgMCAwIDEgMTEuMzcgMS41N2wxLjYxIDUuNTNjLjI5LjUzLjY3LjY5IDEuMjMuNjlzLjk0LS4xNiAxLjIzLS42OWwxLjYxLTUuNTNhMTIgMTIgMCAwIDEgMTEuMzctMS41N2ExMiAxMiAwIDAgMSAxMiAxMmExMiAxMiAwIDAgMS0xMiAxMmgtLjAxVjExLjM3em0zLjY1IDEuODNsLTEuNjEgNS41M2gtMy45M2wtMS42MS01LjUzYTkgOSAwIDAgMC05LTkuMzdhOSA5IDAgMCAwIDktOS4zN2E5IDkgMCAwIDAgOSA5LjM3em0tNi4zMyAwaDF2Ni4yNWgtMVYyMy43M2gxVjcuMzN6bTE1LjY1IDBoMTF2Ni4yNWgtMTB2LTYuMjVoMTB6bS03LjMyIDEwaDF2MTEuMzdoLTFWMjMuNzNoLTFWNy4zM3oiLz48L3N2Zz4=)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

**🚀 El Gestor Definitivo de Servidores MCP - Descubre, Configura y Despliega 100+ Servidores MCP**

🎯 **Genera claude_desktop_config.json con un clic**

🌐 **Sitio Web**: **[https://wild-hall-5c56.qazplm20031208zj.workers.dev](https://wild-hall-5c56.qazplm20031208zj.workers.dev)**

[English](README.md) | [中文](README_CN.md) | [日本語](README_JA.md) | [한국어](README_KO.md) | [Español](README_ES.md) | [Français](README_FR.md) | [Português](README_PT.md) | [Deutsch](README_DE.md) | [Русский](README_RU.md) | [العربية](README_AR.md) | [Italiano](README_IT.md) | [Nederlands](README_NL.md)

</div>

---

## 📖 Acerca de

MCP Hub es una aplicación web moderna, hermosa y potente diseñada para simplificar el descubrimiento, configuración y despliegue de servidores [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) para Claude Desktop.

Con MCP Hub puedes:
- 🔍 Explorar y descubrir servidores MCP populares
- 🛒 Añadir servidores a tu "Carrito de Configuración" con un clic
- 📦 Generar configuraciones `claude_desktop_config.json` listas para producción
- 📜 Generar scripts de instalación automáticamente (Bash & PowerShell)
- ⚡ Empieza en segundos — sin necesidad de configuración manual

---

## ✨ Características

| Característica | Descripción |
|----------------|-------------|
| 🔍 **Descubrimiento de Servidores** | Explora servidores MCP con búsqueda y filtros por categoría |
| 🛒 **Carrito de Configuración** | Selecciona servidores y ve la vista previa JSON en tiempo real |
| 📄 **Generación de JSON** | Copia o descarga `claude_desktop_config.json` con un clic |
| 📜 **Scripts de Instalación** | Genera scripts para Bash (macOS/Linux) y PowerShell (Windows) |
| 🎨 **Interfaz Bonita** | Interfaz moderna construida con shadcn/ui y Tailwind CSS |
| 📱 **Totalmente Responsivo** | Funciona perfectamente en escritorio y móvil |
| 🔒 **Privacidad Primero** | Todo el procesamiento se realiza localmente en tu navegador |

---

## 🚀 Inicio Rápido

### Método 1: Ejecutar Localmente

```bash
# Clonar el repositorio
git clone https://github.com/yuyangzheng-git/mcp-hub.git
cd mcp-hub

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

### Método 2: Docker

```bash
docker build -t mcp-hub .
docker run -p 5173:5173 mcp-hub
```

Abre tu navegador en `http://localhost:5173`

---

## 📖 Guía de Uso

### 1. Explorar Servidores

Usa la barra de búsqueda y filtros de categoría para encontrar servidores MCP.

### 2. Añadir al Carrito

Activa el interruptor en cualquier tarjeta de servidor para añadirlo a tu configuración.

### 3. Generar Configuración

Haz clic en el botón **Config Cart** en el encabezado para abrir el panel:
- 📋 Copiar la configuración JSON
- ⬇️ Descargar `claude_desktop_config.json`
- 🐚 Obtener scripts de instalación (Bash/PowerShell)

### 4. Instalar

#### Instalación Manual

Copia el JSON generado a la configuración de Claude Desktop:

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

#### Instalación Automática (Recomendado)

Ejecuta el script de instalación generado:

**Bash (macOS/Linux/WSL):**
```bash
chmod +x install-mcp.sh
./install-mcp.sh
```

**PowerShell (Windows):**
```powershell
.\install-mcp.ps1
```

> ⚠️ **Importante:** Reinicia Claude Desktop después de aplicar la configuración.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
|------------|-----------|
| [React 18](https://reactjs.org/) | Framework de UI |
| [TypeScript](https://www.typescriptlang.org/) | Seguridad de tipos |
| [Vite](https://vitejs.dev/) | Herramienta de construcción |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de UI |
| [Lucide React](https://lucide.dev/) | Iconos |
| [Radix UI](https://www.radix-ui.com/) | Accesibilidad |

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de enviar un Pull Request.

### Cómo Contribuir

1. **Fork** el repositorio
2. Crea una rama de característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un **Pull Request**

### Añadir Nuevos Servidores MCP

Para añadir un nuevo servidor MCP, edita `src/data/mcp-data.ts`:

```typescript
{
  id: "my-server",
  name: "My Server",
  description: "Description of what your server does",
  command: "npx",
  args: ["-y", "@mypackage/server-my-server"],
  category: "database", // database, filesystem, api, development, ai, communication, utilities, other
  tags: ["tag1", "tag2"],
  icon: "Database", // Nombre del icono de Lucide
},
```

---

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT — consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [Model Context Protocol](https://modelcontextprotocol.io/) de Anthropic
- [shadcn/ui](https://ui.shadcn.com/) por la hermosa biblioteca de componentes
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers) por la inspiración

---

<div align="center">

**Hecho con ❤️ por el Equipo de MCP Hub**

⭐ ¡Dale una estrella si te resulta útil!

</div>
