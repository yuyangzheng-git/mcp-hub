export interface MCPServer {
  id: string
  name: string
  description: string
  command: string
  args: string[]
  env?: Record<string, string>
  icon?: string
  category: MCPCategory
  tags: string[]
  website?: string
  isEnabled: boolean
}

export type MCPCategory =
  | "database"
  | "filesystem"
  | "api"
  | "development"
  | "ai"
  | "communication"
  | "utilities"
  | "other"

export interface ClaudeDesktopConfig {
  mcpServers: Record<string, MCPServerConfig>
}

export interface MCPServerConfig {
  command: string
  args: string[]
  env?: Record<string, string>
}

export interface MCPServerTemplate {
  id: string
  name: string
  description: string
  category: MCPCategory
  command: string
  args: string[]
  env?: Record<string, string>
  tags: string[]
  icon?: string
  website?: string
}
