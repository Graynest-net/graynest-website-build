"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type AgentMode = "talk" | "chat"

interface AgentContextValue {
  isOpen: boolean
  mode: AgentMode
  hasOpened: boolean
  openAgent: (mode?: AgentMode) => void
  closeAgent: () => void
  setMode: (mode: AgentMode) => void
}

const AgentContext = createContext<AgentContextValue | null>(null)

interface AgentProviderProps {
  children: ReactNode
}

/**
 * Sitewide open/close state for the Ask GrayNest agent drawer.
 */
export function AgentProvider({ children }: AgentProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AgentMode>("talk")
  const [hasOpened, setHasOpened] = useState(false)

  const openAgent = useCallback((nextMode: AgentMode = "talk") => {
    setMode(nextMode)
    setHasOpened(true)
    setIsOpen(true)
  }, [])

  const closeAgent = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo<AgentContextValue>(
    () => ({
      isOpen,
      mode,
      hasOpened,
      openAgent,
      closeAgent,
      setMode,
    }),
    [closeAgent, hasOpened, isOpen, mode, openAgent]
  )

  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>
}

/**
 * Access the sitewide agent drawer controls.
 */
export function useAgent(): AgentContextValue {
  const context = useContext(AgentContext)

  if (!context) {
    throw new Error("useAgent must be used within AgentProvider.")
  }

  return context
}
