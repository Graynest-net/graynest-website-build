"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react"
import { ThinkingOrb, type OrbState } from "thinking-orbs"
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
  onEnd: () => void
}

/**
 * Active ElevenLabs session UI for Talk (voice) and Chat (text) modes.
 */
function AgentSession({ agentId, mode, onEnd }: AgentSessionProps) {
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
      onEnd()
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

  // The landing choice already picked the mode, so connect on mount.
  const started = useRef(false)
  useEffect(() => {
    if (started.current) {
      return
    }
    started.current = true
    void start()
  }, [start])

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
  const { setCallState, setLevelSource } = useAgent()
  const isVoiceCall = mode === "talk" && isConnected

  // Share the live call with the launcher so it can become the speaking orb.
  useEffect(() => {
    if (!isVoiceCall) {
      setCallState("idle")
      setLevelSource(null)
      return
    }

    setCallState(conversation.isSpeaking ? "speaking" : "listening")
    setLevelSource(conversation.isSpeaking ? conversation.getOutputVolume : conversation.getInputVolume)
  }, [conversation.getInputVolume, conversation.getOutputVolume, conversation.isSpeaking, isVoiceCall, setCallState, setLevelSource])

  useEffect(() => {
    return () => {
      setCallState("idle")
      setLevelSource(null)
    }
  }, [setCallState, setLevelSource])
  const statusLabel = isStarting
    ? "Connecting…"
    : isConnected
      ? conversation.isSpeaking
        ? "Speaking"
        : mode === "talk"
          ? "Listening"
          : "Online"
      : "Ready"
  const orbState: OrbState = isStarting
    ? "connecting"
    : !isConnected
      ? "breathing"
      : conversation.isSpeaking
        ? "composing"
        : mode === "talk"
          ? "listening"
          : "breathing"

  return (
    <div className="agent-session">
      <div className="agent-session-status">
        <ThinkingOrb state={orbState} size={64} theme="auto" />
        <span className="micro">{statusLabel}</span>
      </div>

      <div ref={listRef} className="agent-transcript" aria-live="polite">
        {transcript.length === 0 ? (
          <p className="agent-transcript-empty" aria-label={mode === "talk" ? "Speak naturally" : "Type your question"}>
            <Icon name={mode === "talk" ? "phone" : "message"} size={28} />
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
          <button className="btn-primary" type="submit" aria-label="Send" disabled={!isConnected || draft.trim().length === 0}>
            <Icon name="send" size={18} />
          </button>
        </form>
      ) : (
        <p className="agent-talk-hint" aria-label="Mic is live. Interrupt anytime.">
          <Icon name="phone" size={18} />
        </p>
      )}

      <div className="agent-session-actions">
        <button type="button" className="btn-glass" onClick={stop} data-event="agent_end" aria-label="End session" title="End session" disabled={!isConnected}>
          <Icon name="phone-off" size={20} />
        </button>
      </div>
    </div>
  )
}

/**
 * Drawer shell with Talk / Chat modes and contact fallbacks.
 */
export function AgentDrawer() {
  const { isOpen, mode, setMode, closeAgent } = useAgent()
  const [started, setStarted] = useState(false)
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
            <h2 id={titleId} className="agent-drawer-title">
              Ask <span className="accent-word">GrayNest</span>
            </h2>
          </div>
          <button type="button" className="agent-drawer-close" onClick={closeAgent} aria-label="Close">
            ✕
          </button>
        </div>

        {agentId.length === 0 ? (
          <div className="agent-missing">
            <p className="body">
              Set <code>NEXT_PUBLIC_ELEVENLABS_AGENT_ID</code> to connect the live GrayNest agent.
            </p>
          </div>
        ) : started ? (
          <ConversationProvider key={`${mode}-${agentId}`}>
            <AgentSession agentId={agentId} mode={mode} onEnd={() => setStarted(false)} />
          </ConversationProvider>
        ) : (
          <div className="agent-landing">
            <ThinkingOrb state="breathing" size={64} theme="auto" />
            <div className="agent-landing-actions">
              {(["talk", "chat"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`agent-tile ${m === "talk" ? "btn-primary" : "btn-glass"}`}
                  data-event={m === "talk" ? "agent_call" : "agent_open"}
                  onClick={() => {
                    setMode(m)
                    setStarted(true)
                  }}
                >
                  <Icon name={m === "talk" ? "phone" : "message"} size={20} />
                  <span>{m === "talk" ? "Talk" : "Type"}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="agent-drawer-contacts">
          <div className="agent-contact-row">
            {phoneHref !== "tel:" ? (
              <a className="btn-glass" href={phoneHref} data-event="agent_call" aria-label={phoneLabel} title={phoneLabel}>
                <Icon name="phone" size={20} />
              </a>
            ) : null}
            <a className="btn-glass" href={whatsappHref} data-event="whatsapp_click" aria-label="WhatsApp" title="WhatsApp">
              <Icon name="whatsapp" size={20} />
            </a>
            <a className="btn-glass" href="mailto:hello@graynest.co" aria-label="Email" title="Email">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}
