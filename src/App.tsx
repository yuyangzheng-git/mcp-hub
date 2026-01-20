import { useState } from "react"
import {
  Server,
  Download,
  Plus,
  Search,
  Map,
  Github,
  Database,
  Folder,
  Server as ServerIcon,
  Star,
  Trash2,
  ShoppingCart,
  Copy,
  Check,
  Terminal,
  FileCode,
  Globe,
  Brain,
  MessageSquare,
  Mail,
  Cpu,
  Box,
  Book,
  Code,
  Image,
  Music,
  AlertCircle,
  Cloud,
  BarChart,
  Share2,
  Package,
  Sparkles,
  Link,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { mcpServers, categories } from "@/data/mcp-data"
import type { MCPServerTemplate } from "@/types/mcp"

const iconMap: Record<string, React.ReactNode> = {
  Map: <Map className="h-5 w-5" />,
  Github: <Github className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Folder: <Folder className="h-5 w-5" />,
  Server: <ServerIcon className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
  MessageSquare: <MessageSquare className="h-5 w-5" />,
  Mail: <Mail className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Box: <Box className="h-5 w-5" />,
  Book: <Book className="h-5 w-5" />,
  Code: <Code className="h-5 w-5" />,
  Image: <Image className="h-5 w-5" />,
  Music: <Music className="h-5 w-5" />,
  AlertCircle: <AlertCircle className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  BarChart: <BarChart className="h-5 w-5" />,
  Share2: <Share2 className="h-5 w-5" />,
  Package: <Package className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
}

interface MCPServer extends MCPServerTemplate {
  author: string
  stars: number
  enabled: boolean
}

const serversWithMeta: MCPServer[] = mcpServers.map((server) => {
  const authorMap: Record<string, string> = {
    "google-maps": "Google",
    "github": "ModelContextProtocol",
    "sqlite": "ModelContextProtocol",
    "filesystem": "ModelContextProtocol",
    "postgres": "ModelContextProtocol",
    "brave-search": "ModelContextProtocol",
    "puppeteer": "ModelContextProtocol",
    "memory": "ModelContextProtocol",
    "everything": "ModelContextProtocol",
    "mysql": "ModelContextProtocol",
    "mongodb": "ModelContextProtocol",
    "redis": "ModelContextProtocol",
    "slack": "ModelContextProtocol",
    "google": "ModelContextProtocol",
    "fetch": "ModelContextProtocol",
    "openapi": "ModelContextProtocol",
    "kubernetes": "ModelContextProtocol",
    "docker": "ModelContextProtocol",
    "notion": "ModelContextProtocol",
    "context7": "Context7",
    "windsurf": "Windsurf",
    "sequential-thinking": "ModelContextProtocol",
    "giphy": "ModelContextProtocol",
    "spotify": "ModelContextProtocol",
    "sentry": "ModelContextProtocol",
    "aws": "ModelContextProtocol",
    "web-search": "ModelContextProtocol",
    "exa": "Exa",
    "neon": "Neon",
    "supabase": "Supabase",
    "snowflake": "ModelContextProtocol",
    "grafana": "Grafana",
    "graphviz": "ModelContextProtocol",
    "shell": "ModelContextProtocol",
    "registry": "ModelContextProtocol",
    "obsidian": "ModelContextProtocol",
    "evernote": "ModelContextProtocol",
    "dify": "LangChain",
  }

  const starsMap: Record<string, number> = {
    "google-maps": 1200,
    "github": 3500,
    "sqlite": 890,
    "filesystem": 2100,
    "postgres": 1500,
    "brave-search": 680,
    "puppeteer": 3200,
    "memory": 450,
    "everything": 520,
    "mysql": 780,
    "mongodb": 920,
    "redis": 650,
    "slack": 1100,
    "google": 1800,
    "fetch": 340,
    "openapi": 280,
    "kubernetes": 450,
    "docker": 1200,
    "notion": 560,
    "context7": 380,
    "windsurf": 420,
    "sequential-thinking": 290,
    "giphy": 180,
    "spotify": 620,
    "sentry": 380,
    "aws": 520,
    "web-search": 260,
    "exa": 340,
    "neon": 480,
    "supabase": 890,
    "snowflake": 220,
    "grafana": 350,
    "graphviz": 180,
    "shell": 400,
    "registry": 150,
    "obsidian": 280,
    "evernote": 160,
    "dify": 420,
  }

  return {
    ...server,
    author: authorMap[server.id] || "Community",
    stars: starsMap[server.id] || 100,
    enabled: false,
  }
})

function generateBashScript(servers: MCPServer[]): string {
  const serversJson = JSON.stringify(
    servers.reduce((acc, s) => {
      acc[s.id] = {
        command: s.command,
        args: s.args,
        env: s.env,
      }
      return acc
    }, {} as Record<string, { command: string; args: string[]; env?: Record<string, string> }>),
    null,
    4
  )

  return `#!/bin/bash
# MCP Hub - Auto Install Script
# Generated: ${new Date().toISOString()}

set -e

CONFIG_DIR="$HOME/.config"
CONFIG_FILE="$CONFIG_DIR/claude_desktop_config.json"
BACKUP_FILE="$CONFIG_DIR/claude_desktop_config.json.backup.$(date +%Y%m%d_%H%M%S)"

echo "🚀 MCP Hub - Installing MCP Servers..."

# Create config directory if it doesn't exist
mkdir -p "$CONFIG_DIR"

# Backup existing config
if [ -f "$CONFIG_FILE" ]; then
    echo "📦 Backing up existing config to $BACKUP_FILE"
    cp "$CONFIG_FILE" "$BACKUP_FILE"
fi

# Generate new config
cat > "$CONFIG_FILE" << 'EOF'
{
  "mcpServers": ${serversJson}
}
EOF

echo "✅ Successfully installed ${servers.length} MCP server(s):"
${servers.map(s => `echo "  - ${s.name}"`).join('\n')}
echo ""
echo "📝 Config location: $CONFIG_FILE"
echo "⚠️  Please restart Claude Desktop to apply changes"
`
}

function generatePowerShellScript(servers: MCPServer[]): string {
  const serversJson = JSON.stringify(
    servers.reduce((acc, s) => {
      acc[s.id] = {
        command: s.command,
        args: s.args,
        env: s.env,
      }
      return acc
    }, {} as Record<string, { command: string; args: string[]; env?: Record<string, string> }>),
    null,
    4
  ).replace(/\n/g, '\n    ')

  return `# MCP Hub - Auto Install Script
# Generated: ${new Date().toISOString()}

$ErrorActionPreference = 'Stop'

Write-Host "🚀 MCP Hub - Installing MCP Servers..." -ForegroundColor Green

$ConfigDir = "$env:APPDATA\\Claude"
$ConfigFile = "$ConfigDir\\claude_desktop_config.json"
$BackupFile = "$ConfigDir\\claude_desktop_config.json.backup.$(Get-Date -Format 'yyyyMMdd_HHmmss')"

# Create config directory if it doesn't exist
if (-not (Test-Path $ConfigDir)) {
    New-Item -ItemType Directory -Path $ConfigDir -Force | Out-Null
}

# Backup existing config
if (Test-Path $ConfigFile) {
    Write-Host "📦 Backing up existing config to $BackupFile" -ForegroundColor Yellow
    Copy-Item $ConfigFile $BackupFile
}

# Generate new config
$ConfigContent = @"
{
  "mcpServers": ${serversJson.replace(/\n/g, '\n    ')}
}
"@

$ConfigContent | Out-File -FilePath $ConfigFile -Encoding UTF8

Write-Host "✅ Successfully installed $($servers.Count) MCP server(s):" -ForegroundColor Green
${servers.map(s => `Write-Host "  - ${s.name}" -ForegroundColor Gray`).join('\n')}
Write-Host ""
Write-Host "📝 Config location: $ConfigFile" -ForegroundColor Cyan
Write-Host "⚠️  Please restart Claude Desktop to apply changes" -ForegroundColor Yellow
`
}

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [enabledServers, setEnabledServers] = useState<Set<string>>(new Set())
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const filteredServers = serversWithMeta.filter((server) => {
    const matchesSearch =
      server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      server.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || server.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const selectedServerDetails = serversWithMeta.filter((s) =>
    enabledServers.has(s.id)
  )

  const toggleServer = (id: string) => {
    setEnabledServers((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const generateConfig = () => {
    const configObject: Record<string, { command: string; args: string[]; env?: Record<string, string> }> = {}
    for (const s of selectedServerDetails) {
      configObject[s.id] = {
        command: s.command,
        args: s.args,
        env: s.env,
      }
    }
    return JSON.stringify({ mcpServers: configObject }, null, 2)
  }

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const downloadScript = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const bashScript = generateBashScript(selectedServerDetails)
  const powershellScript = generatePowerShellScript(selectedServerDetails)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6" />
            <h1 className="text-xl font-bold">MCP Hub</h1>
          </div>
          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <Button
              variant={enabledServers.size > 0 ? "default" : "outline"}
              size="sm"
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Config Cart</span>
              {enabledServers.size > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {enabledServers.size}
                </Badge>
              )}
            </Button>
            <SheetContent className="w-full sm:max-w-lg flex flex-col">
              <SheetHeader>
                <SheetTitle>Configuration Cart</SheetTitle>
                <SheetDescription>
                  {selectedServerDetails.length === 0
                    ? "Add servers to generate your config"
                    : `${selectedServerDetails.length} server(s) selected`}
                </SheetDescription>
              </SheetHeader>

              {selectedServerDetails.length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p>No servers added yet</p>
                    <p className="text-sm">Click the toggle on a server to add it</p>
                  </div>
                </div>
              ) : (
                <ScrollArea className="flex-1 -mx-6 px-6">
                  <div className="space-y-3 py-4">
                    {selectedServerDetails.map((server) => (
                      <div
                        key={server.id}
                        className="flex items-center gap-3 p-3 rounded-lg border bg-card"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                          {server.icon && iconMap[server.icon]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{server.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {server.command} {server.args[0]}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => toggleServer(server.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}

              <div className="space-y-4 pt-4 border-t">
                <Tabs defaultValue="json" className="space-y-3">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="json" className="text-xs">JSON</TabsTrigger>
                    <TabsTrigger value="bash" className="text-xs">Bash</TabsTrigger>
                    <TabsTrigger value="powershell" className="text-xs">PowerShell</TabsTrigger>
                  </TabsList>

                  <TabsContent value="json" className="space-y-2">
                    <div className="relative">
                      <pre className="bg-muted p-3 rounded-lg text-xs max-h-40 overflow-auto">
                        <code>{generateConfig() || "{}"}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-7 w-7 bg-background/80"
                        onClick={() => copyToClipboard(generateConfig(), "json")}
                      >
                        {copied === "json" ? (
                          <Check className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="bash" className="space-y-2">
                    <div className="relative">
                      <pre className="bg-muted p-3 rounded-lg text-xs max-h-40 overflow-auto">
                        <code>{bashScript}</code>
                      </pre>
                      <div className="absolute top-2 right-2 flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 bg-background/80"
                          onClick={() => copyToClipboard(bashScript, "bash")}
                        >
                          {copied === "bash" ? (
                            <Check className="h-3.5 w-3.5 text-green-500" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 bg-background/80"
                          onClick={() => downloadScript(bashScript, "install-mcp.sh")}
                        >
                          <Download className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Run: <code className="bg-muted px-1">chmod +x install-mcp.sh && ./install-mcp.sh</code>
                    </p>
                  </TabsContent>

                  <TabsContent value="powershell" className="space-y-2">
                    <div className="relative">
                      <pre className="bg-muted p-3 rounded-lg text-xs max-h-40 overflow-auto">
                        <code>{powershellScript}</code>
                      </pre>
                      <div className="absolute top-2 right-2 flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 bg-background/80"
                          onClick={() => copyToClipboard(powershellScript, "powershell")}
                        >
                          {copied === "powershell" ? (
                            <Check className="h-3.5 w-3.5 text-green-500" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 bg-background/80"
                          onClick={() => downloadScript(powershellScript, "install-mcp.ps1")}
                        >
                          <Download className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Run: <code className="bg-muted px-1">.\\install-mcp.ps1</code>
                    </p>
                  </TabsContent>
                </Tabs>

                <SheetFooter className="flex-row gap-2 sm:flex-col sm:gap-2">
                  <Button
                    className="w-full"
                    onClick={() => copyToClipboard(generateConfig(), "json")}
                    disabled={selectedServerDetails.length === 0}
                    variant={copied === "json" ? "secondary" : "default"}
                  >
                    {copied === "json" ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy JSON Config
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadScript(generateConfig(), "claude_desktop_config.json")}
                    disabled={selectedServerDetails.length === 0}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download JSON
                  </Button>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="servers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="servers">MCP Servers</TabsTrigger>
            <TabsTrigger value="install">Install Scripts</TabsTrigger>
            <TabsTrigger value="help">How to Use</TabsTrigger>
          </TabsList>

          <TabsContent value="servers" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Available MCP Servers</h2>
                <p className="text-muted-foreground">
                  Browse and configure MCP servers for Claude Desktop
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search servers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {filteredServers.map((server) => (
                <Card
                  key={server.id}
                  className={`group transition-all hover:shadow-lg ${
                    enabledServers.has(server.id)
                      ? "ring-2 ring-primary bg-primary/5"
                      : ""
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {server.icon && iconMap[server.icon]}
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {server.name}
                          </CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">
                            by {server.author}
                          </CardDescription>
                        </div>
                      </div>
                      <Switch
                        checked={enabledServers.has(server.id)}
                        onCheckedChange={() => toggleServer(server.id)}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {server.description}
                    </p>
                    {server.website && (
                      <a
                        href={server.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                      >
                        <Link className="h-3 w-3" />
                        {server.website.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-3">
                    <div className="flex flex-wrap gap-1">
                      {server.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3.5 w-3.5" />
                      <span>{server.stars.toLocaleString()}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredServers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No servers found</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="install" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  One-Click Installation Scripts
                </CardTitle>
                <CardDescription>
                  Generate installation scripts for your platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {selectedServerDetails.length === 0 ? (
                  <div className="text-center py-8">
                    <FileCode className="h-12 w-12 mx-auto mb-3 text-muted-foreground opacity-50" />
                    <p className="text-muted-foreground">No servers selected</p>
                    <p className="text-sm text-muted-foreground">
                      Select servers to generate installation scripts
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card className="bg-muted/50">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <Terminal className="h-5 w-5" />
                            <CardTitle className="text-base">Bash Script</CardTitle>
                          </div>
                          <CardDescription>For macOS / Linux / WSL</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <pre className="bg-background p-3 rounded text-xs max-h-32 overflow-auto">
                            <code>{bashScript.slice(0, 400)}...</code>
                          </pre>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => copyToClipboard(bashScript, "bash")}
                            >
                              {copied === "bash" ? (
                                <>
                                  <Check className="h-4 w-4 mr-1" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4 mr-1" />
                                  Copy Script
                                </>
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => downloadScript(bashScript, "install-mcp.sh")}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/50">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <Terminal className="h-5 w-5" />
                            <CardTitle className="text-base">PowerShell Script</CardTitle>
                          </div>
                          <CardDescription>For Windows</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <pre className="bg-background p-3 rounded text-xs max-h-32 overflow-auto">
                            <code>{powershellScript.slice(0, 400)}...</code>
                          </pre>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => copyToClipboard(powershellScript, "powershell")}
                            >
                              {copied === "powershell" ? (
                                <>
                                  <Check className="h-4 w-4 mr-1" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4 mr-1" />
                                  Copy Script
                                </>
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => downloadScript(powershellScript, "install-mcp.ps1")}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-semibold">What the script does:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Automatically detects your Claude Desktop config location</li>
                        <li>Creates a backup of your existing configuration</li>
                        <li>Generates a new config with your selected MCP servers</li>
                        <li>Saves the config in the correct location</li>
                      </ol>
                    </div>

                    <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4 border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>💡 Tip:</strong> After running the script, restart Claude Desktop
                        to load the new MCP servers.
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Use MCP Hub</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Search className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">1. Browse Servers</p>
                      <p className="text-sm text-muted-foreground">
                        Search and filter MCP servers by category
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Plus className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">2. Add to Cart</p>
                      <p className="text-sm text-muted-foreground">
                        Toggle servers to add to your config
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Download className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">3. Install</p>
                      <p className="text-sm text-muted-foreground">
                        Use scripts or download config
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-semibold">Claude Desktop Setup</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>
                      Enable servers using the toggle switch on each server card
                    </li>
                    <li>
                      Click the <strong>Config Cart</strong> button in the header
                    </li>
                    <li>Copy or download your configuration, or use an install script</li>
                    <li>
                      Save to{" "}
                      <code className="font-mono bg-muted px-1">
                        ~/.config/claude_desktop_config.json
                      </code>{" "}
                      (macOS/Linux) or{" "}
                      <code className="font-mono bg-muted px-1">
                        %APPDATA%\Claude\claude_desktop_config.json
                      </code>{" "}
                      (Windows)
                    </li>
                    <li>Restart Claude Desktop to apply changes</li>
                  </ol>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <strong>Tip:</strong> The install scripts automatically handle config
                    location detection and backup creation for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App
