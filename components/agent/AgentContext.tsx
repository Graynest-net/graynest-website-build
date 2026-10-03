"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

export type AgentMode = "talk" | "chat"
export type AgentCallState = "idle" | "listening" | "speaking"

interface AgentContextValue {
  isOpen: boolean
  mode: AgentMode
  hasOpened: boolean
  /** True when the opener already chose a mode, so the drawer skips its landing. */
  autoStart: boolean
  openAgent: (mode?: AgentMode, autoStart?: boolean) => void
  closeAgent: () => void
  setMode: (mode: AgentMode) => void
  callState: AgentCallState
  setCallState: (state: AgentCallState) => void
  /** Registers the live audio level source (0–1) for the speaking orb. */
  setLevelSource: (source: (() => number) | null) => void
  readLevel: () => number
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
  const [autoStart, setAutoStart] = useState(false)
  const [callState, setCallState] = useState<AgentCallState>("idle")
  const levelSource = useRef<(() => number) | null>(null)

  const setLevelSource = useCallback((source: (() => number) | null) => {
    levelSource.current = source
  }, [])

  const readLevel = useCallback(() => {
    try {
      return levelSource.current?.() ?? 0
    } catch {
      return 0
    }
  }, [])

  const openAgent = useCallback((nextMode: AgentMode = "talk", start = false) => {
    setMode(nextMode)
    setAutoStart(start)
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
      autoStart,
      openAgent,
      closeAgent,
      setMode,
      callState,
      setCallState,
      setLevelSource,
      readLevel,
    }),
    [autoStart, callState, closeAgent, hasOpened, isOpen, mode, openAgent, readLevel, setLevelSource]
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
