"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react"
import { CoreGlow } from "@/components/CoreGlow"
import { Icon } from "@/components/Icon"
import {
  getAgentPhoneHref,
  getAgentPhoneLabel,
  getAgentWhatsAppHref,
  getElevenLabsAgentId,
} from "@/lib/agent-config"
import { useAgent, type AgentMode } from "@/components/agent/AgentContext"

interface TranscriptEntry {
  id: string
  role: "user" | "agent"
  text: string
}

interface AgentSessionProps {
  agentId: string
  mode: AgentMode
}

/**
 * Active ElevenLabs session UI for Talk (voice) and Chat (text) modes.
 */
function AgentSession({ agentId, mode }: AgentSessionProps) {
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([])
  const [draft, setDraft] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isStarting, setIsStarting] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)
  const entryCount = useRef(0)

  const conversation = useConversation({
    onConnect: () => {
      setError(null)
      setIsStarting(false)
    },
    onDisconnect: () => {
      setIsStarting(false)
    },
    onError: (message) => {
      setError(message)
      setIsStarting(false)
    },
    onMessage: (payload) => {
      const text = payload.message.trim()

      if (text.length === 0) {
        return
      }

      entryCount.current += 1
      const role = payload.role === "user" ? "user" : "agent"

      setTranscript((previous) => [
        ...previous,
        {
          id: `${entryCount.current}-${payload.event_id ?? "msg"}`,
          role,
          text,
        },
      ])
    },
  })

  useEffect(() => {
    const node = listRef.current

    if (!node) {
      return
    }

    node.scrollTop = node.scrollHeight
  }, [transcript])

  /**
   * Starts a voice or text-only session against the configured public agent.
   */
  const start = useCallback(async () => {
    setError(null)
    setIsStarting(true)

    try {
      if (mode === "talk") {
        await navigator.mediaDevices.getUserMedia({ audio: true })
        conversation.startSession({
          agentId,
          connectionType: "webrtc",
        })
        return
      }

      conversation.startSession({
        agentId,
        connectionType: "websocket",
        overrides: {
          conversation: {
            textOnly: true,
          },
        },
      })
    } catch (startError) {
      const message =
        startError instanceof Error
          ? startError.message
          : "Could not start the GrayNest agent."
      setError(message)
      setIsStarting(false)
    }
  }, [agentId, conversation, mode])

  /**
   * Ends the live session without closing the drawer.
   */
  const stop = useCallback(() => {
    conversation.endSession()
  }, [conversation])

  /**
   * Sends the chat draft to the agent and mirrors it into the transcript.
   */
  const sendChat = useCallback(() => {
    const text = draft.trim()

    if (text.length === 0 || conversation.status !== "connected") {
      return
    }

    entryCount.current += 1
    setTranscript((previous) => [
      ...previous,
      {
        id: `${entryCount.current}-local`,
        role: "user",
        text,
      },
    ])
    conversation.sendUserMessage(text)
    setDraft("")
  }, [conversation, draft])

  const isConnected = conversation.status === "connected"
  const statusLabel = isStarting
    ? "Connecting…"
    : isConnected
      ? conversation.isSpeaking
        ? "Speaking"
        : mode === "talk"
          ? "Listening"
          : "Online"
      : "Ready"

  return (
    <div className="agent-session">
      <div className="agent-session-status">
        <CoreGlow size={10} />
        <span className="micro">{statusLabel}</span>
      </div>

      <div ref={listRef} className="agent-transcript" aria-live="polite">
        {transcript.length === 0 ? (
          <p className="agent-transcript-empty">
            {mode === "talk"
              ? "Start a call and speak naturally. The agent answers in Palestinian Arabic or English."
              : "Start a chat, then type your question. Same agent, text mode."}
          </p>
        ) : (
          transcript.map((entry) => (
            <div
              key={entry.id}
              className={`agent-bubble agent-bubble-${entry.role}`}
            >
              {entry.text}
            </div>
          ))
        )}
      </div>

      {error ? <p className="agent-error">{error}</p> : null}

      {mode === "chat" ? (
        <form
          className="agent-chat-form"
          onSubmit={(event) => {
            event.preventDefault()
            sendChat()
          }}
        >
          <input
            className="contact-input agent-chat-input"
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value)
              if (isConnected) {
                conversation.sendUserActivity()
              }
            }}
            placeholder={isConnected ? "Message GrayNest…" : "Start chat to type"}
            disabled={!isConnected}
            aria-label="Message GrayNest"
          />
          <button className="btn-primary" type="submit" disabled={!isConnected || draft.trim().length === 0}>
            <Icon name="send" /> Send
          </button>
        </form>
      ) : (
        <p className="agent-talk-hint body">
          {isConnected
            ? "Mic is live. Interrupt anytime and the agent will listen again."
            : "Uses your browser microphone. Audio is processed by our voice provider to run the conversation. GrayNest does not store recordings."}
        </p>
      )}

      <div className="agent-session-actions">
        {isConnected ? (
          <button type="button" className="btn-glass" onClick={stop} data-event="agent_end">
            <Icon name="x" /> End session
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              void start()
            }}
            disabled={isStarting}
            data-event={mode === "talk" ? "agent_call" : "agent_open"}
          >
            {mode === "talk" ? <Icon name="phone" /> : <Icon name="message" />} {isStarting ? "Connecting…" : mode === "talk" ? "Start talking" : "Start chat"}
          </button>
        )}
      </div>
    </div>
  )
}

/**
 * Drawer shell with Talk / Chat modes and contact fallbacks.
 */
export function AgentDrawer() {
  const { isOpen, mode, setMode, closeAgent } = useAgent()
  const titleId = useId()
  const agentId = getElevenLabsAgentId()
  const phoneHref = getAgentPhoneHref()
  const phoneLabel = getAgentPhoneLabel()
  const whatsappHref = getAgentWhatsAppHref()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    /**
     * Closes the drawer when Escape is pressed.
     */
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAgent()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [closeAgent, isOpen])

  return (
    <div
      className={`agent-drawer-root ${isOpen ? "is-open" : ""}`.trim()}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="agent-drawer-backdrop"
        aria-label="Close agent"
        onClick={closeAgent}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        className="agent-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="agent-drawer-header">
          <div>
            <p className="micro flex items-center gap-2">
              <CoreGlow size={10} /> LIVE AGENT
            </p>
            <h2 id={titleId} className="agent-drawer-title">
              Ask <span className="accent-word">GrayNest</span>
            </h2>
          </div>
          <button type="button" className="agent-drawer-close" onClick={closeAgent} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="agent-mode-tabs" role="tablist" aria-label="Agent mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "talk"}
            className={`agent-mode-tab ${mode === "talk" ? "is-active" : ""}`.trim()}
            onClick={() => setMode("talk")}
          >
            Talk
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "chat"}
            className={`agent-mode-tab ${mode === "chat" ? "is-active" : ""}`.trim()}
            onClick={() => setMode("chat")}
          >
            Chat
          </button>
        </div>

        {agentId.length === 0 ? (
          <div className="agent-missing">
            <p className="body">
              Set <code>NEXT_PUBLIC_ELEVENLABS_AGENT_ID</code> to connect the live GrayNest agent.
            </p>
          </div>
        ) : (
          <ConversationProvider key={`${mode}-${agentId}`}>
            <AgentSession agentId={agentId} mode={mode} />
          </ConversationProvider>
        )}

        <div className="agent-drawer-contacts">
          <p className="micro mb-3">Or reach us directly</p>
          <div className="agent-contact-row">
            {phoneHref !== "tel:" ? (
              <a className="btn-glass" href={phoneHref} data-event="agent_call">
                <Icon name="phone" /> {phoneLabel}
              </a>
            ) : null}
            <a className="btn-glass" href={whatsappHref} data-event="whatsapp_click">
              <Icon name="message" /> WhatsApp
            </a>
            <a className="btn-glass" href="mailto:hello@graynest.co">
              <Icon name="mail" /> Email
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}
