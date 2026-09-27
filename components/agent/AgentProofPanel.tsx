"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ConversationProvider, useConversation } from "@elevenlabs/react"
import { MediaSlot } from "@/components/MediaSlot"
import { useAgent } from "@/components/agent/AgentContext"
import { Icon } from "@/components/Icon"
import {
  getAgentWhatsAppHref,
  getElevenLabsAgentId,
} from "@/lib/agent-config"

const BAR_COUNT = 40

interface TranscriptEntry {
  id: string
  role: "user" | "agent"
  text: string
}

/**
 * Resting bar heights: a still waveform silhouette. Deterministic, so an idle
 * panel reads as a dormant instrument rather than as audio nobody is producing.
 */
function restLevel(index: number): number {
  const curve = Math.sin((index / (BAR_COUNT - 1)) * Math.PI)
  const variation = 0.5 + 0.5 * Math.sin(index * 2.399)
  return 0.1 + curve * (0.1 + variation * 0.16)
}

/**
 * Live voice panel for the agents hero: real status, real levels, real transcript.
 * Every visible signal comes from the session, so nothing here can claim to be
 * live while it is idle.
 */
function AgentProofSession({ agentId }: { agentId: string }) {
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isStarting, setIsStarting] = useState(false)
  const barsRef = useRef<Array<HTMLSpanElement | null>>([])
  const speakingRef = useRef(false)
  const entryCount = useRef(0)
  const { openAgent } = useAgent()

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
      setTranscript((previous) =>
        [
          ...previous,
          {
            id: `${entryCount.current}-${payload.event_id ?? "msg"}`,
            role: payload.role === "user" ? ("user" as const) : ("agent" as const),
            text,
          },
        ].slice(-3)
      )
    },
  })

  const isConnected = conversation.status === "connected"

  useEffect(() => {
    speakingRef.current = conversation.isSpeaking
  }, [conversation.isSpeaking])

  /**
   * Writes a level to one bar. Kept out of React state: this runs per frame.
   */
  const setBar = useCallback((index: number, level: number) => {
    barsRef.current[index]?.style.setProperty("--level", level.toFixed(3))
  }, [])

  /**
   * Drives the bars from the session's own frequency data while connected, and
   * parks them on the resting arc the moment it ends.
   */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!isConnected || prefersReducedMotion) {
      for (let index = 0; index < BAR_COUNT; index += 1) {
        setBar(index, restLevel(index))
      }
      return
    }

    const levels = new Float32Array(BAR_COUNT)
    let frame = 0

    const tick = () => {
      const speaking = speakingRef.current
      const data = speaking
        ? conversation.getOutputByteFrequencyData()
        : conversation.getInputByteFrequencyData()

      // No analyser on this transport: fall back to the single volume reading,
      // shaped across the bars so the panel still tracks the real signal.
      const volume = speaking ? conversation.getOutputVolume() : conversation.getInputVolume()
      const usable = Math.floor(data.length * 0.62)

      for (let index = 0; index < BAR_COUNT; index += 1) {
        let target: number

        if (usable > 0) {
          const start = Math.floor((index / BAR_COUNT) * usable)
          const end = Math.max(start + 1, Math.floor(((index + 1) / BAR_COUNT) * usable))
          let sum = 0

          for (let bin = start; bin < end; bin += 1) {
            sum += data[bin]
          }

          target = sum / (end - start) / 255
        } else {
          target = volume * restLevel(index) * 14
        }

        levels[index] += (Math.min(1, target) - levels[index]) * 0.35
        setBar(index, Math.max(restLevel(index), levels[index]))
      }

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [conversation, isConnected, setBar])

  /**
   * Opens the microphone, then starts the voice session against the public agent.
   */
  const start = useCallback(async () => {
    setError(null)
    setIsStarting(true)

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      conversation.startSession({ agentId, connectionType: "webrtc" })
    } catch (startError) {
      setError(
        startError instanceof Error
          ? startError.message
          : "Could not start the GrayNest agent."
      )
      setIsStarting(false)
    }
  }, [agentId, conversation])

  const statusLabel = (() => {
    if (conversation.status === "error") {
      return "Connection failed"
    }

    if (isStarting || conversation.status === "connecting") {
      return "Connecting"
    }

    if (isConnected) {
      return conversation.isSpeaking ? "Agent speaking" : "Listening"
    }

    return "Ready"
  })()

  return (
    <>
      <p className={`agent-proof-status ${isConnected ? "is-live" : ""}`.trim()}>
        <span className="agent-proof-dot" aria-hidden="true" />
        <span className="micro">{statusLabel}</span>
      </p>

      <div className={`agent-proof-wave ${isConnected ? "is-live" : ""}`.trim()} aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, index) => (
          <span
            key={index}
            ref={(node) => {
              barsRef.current[index] = node
            }}
            className="agent-proof-bar"
            style={{ ["--level" as string]: restLevel(index).toFixed(3) }}
          />
        ))}
      </div>

      <div className="agent-proof-transcript" aria-live="polite">
        {transcript.length === 0 ? (
          <p className="agent-proof-empty">
            Start the call and both sides of the conversation appear here as it happens.
          </p>
        ) : (
          transcript.map((entry) => (
            <p key={entry.id} className={`agent-proof-line agent-proof-line-${entry.role}`}>
              <span className="agent-proof-speaker">
                {entry.role === "user" ? "You" : "Agent"}
              </span>
              {entry.text}
            </p>
          ))
        )}
      </div>

      {error ? <p className="agent-proof-error">{error}</p> : null}

      <div className="agent-proof-actions">
        {isConnected ? (
          <button type="button" className="btn-glass" onClick={() => conversation.endSession()} data-event="agent_end">
            <Icon name="phone-off" /> End call
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              void start()
            }}
            disabled={isStarting}
            data-event="agent_call"
          >
            <Icon name="phone" /> {isStarting ? "Connecting…" : "Start the call"}
          </button>
        )}
        <button type="button" className="agent-proof-alt" onClick={() => openAgent("chat")}>
          Rather type?
        </button>
      </div>

      <p className="agent-proof-note">
        Uses your microphone. Audio is processed by our voice provider to run the
        conversation. GrayNest does not store recordings.
      </p>
    </>
  )
}

/**
 * Honest resting panel for environments where no public agent is configured.
 */
function AgentProofUnavailable() {
  return (
    <>
      <p className="agent-proof-status">
        <span className="agent-proof-dot" aria-hidden="true" />
        <span className="micro">Not connected</span>
      </p>

      <div className="agent-proof-wave" aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, index) => (
          <span
            key={index}
            className="agent-proof-bar"
            style={{ ["--level" as string]: restLevel(index).toFixed(3) }}
          />
        ))}
      </div>

      <div className="agent-proof-transcript">
        <p className="agent-proof-empty">
          The live agent is not running in this environment. Reach us directly and a
          person answers.
        </p>
      </div>

      <div className="agent-proof-actions">
        <a className="btn-primary" href={getAgentWhatsAppHref()} data-event="whatsapp_click">
          <Icon name="message" /> WhatsApp us
        </a>
        <a className="agent-proof-alt" href="mailto:hello@graynest.co">
          Email instead
        </a>
      </div>
    </>
  )
}

/**
 * The agents hero's right-hand panel: the agent itself, working, rather than a
 * picture of one.
 */
export function AgentProofPanel() {
  const agentId = getElevenLabsAgentId()

  return (
    <section className="agent-proof" aria-label="Talk to the GrayNest agent">
      <header className="agent-proof-head">
        <MediaSlot
          id="agents.meet.persona"
          type="image"
          aspect="1:1"
          register="system"
          alt="The GrayNest agent persona, its chest core glowing"
          className="agent-proof-avatar"
          priority
        />
        <div>
          <p className="agent-proof-name">The GrayNest agent</p>
          <p className="agent-proof-tongue">Palestinian Arabic · English</p>
        </div>
      </header>

      {agentId.length === 0 ? (
        <AgentProofUnavailable />
      ) : (
        <ConversationProvider key={agentId}>
          <AgentProofSession agentId={agentId} />
        </ConversationProvider>
      )}
    </section>
  )
}
