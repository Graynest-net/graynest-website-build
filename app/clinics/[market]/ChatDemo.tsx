"use client"

import { useEffect, useRef, useState } from "react"
import type { ChatFrom } from "@/content/clinics-onepager"
import styles from "./page.module.css"

type Message = { from: ChatFrom; text: string }

/**
 * The product demonstration: a WhatsApp thread that plays itself out — patient
 * asks, agent books, confirms, reminds. It starts when scrolled into view and
 * types each agent reply. Under reduced motion the whole thread is shown at once.
 */
export function ChatDemo({
  thread,
  name,
  online,
  typing,
  replay,
}: {
  thread: Message[]
  name: string
  online: string
  typing: string
  replay: string
}) {
  const [shown, setShown] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [done, setDone] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  function clearTimers() {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  function play() {
    clearTimers()
    setShown(0)
    setIsTyping(false)
    setDone(false)

    let delay = 450
    thread.forEach((msg, i) => {
      // Agent replies get a typing indicator before they land; patient lines drop in.
      if (msg.from === "agent") {
        timers.current.push(
          setTimeout(() => setIsTyping(true), delay),
        )
        delay += 900
        timers.current.push(
          setTimeout(() => {
            setIsTyping(false)
            setShown(i + 1)
            if (i === thread.length - 1) setDone(true)
          }, delay),
        )
        delay += 700
      } else {
        timers.current.push(
          setTimeout(() => {
            setShown(i + 1)
            if (i === thread.length - 1) setDone(true)
          }, delay),
        )
        delay += 650
      }
    })
  }

  useEffect(() => {
    const node = rootRef.current
    if (!node) return

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) {
      setShown(thread.length)
      setDone(true)
      return
    }

    let started = false
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true
            play()
          }
        }
      },
      { threshold: 0.4 },
    )
    io.observe(node)
    return () => {
      io.disconnect()
      clearTimers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.chatShell} ref={rootRef}>
      <div className={styles.chatCard}>
        <div className={styles.chatBar}>
          <span className={styles.chatAvatar} aria-hidden="true" />
          <span className={styles.chatMeta}>
            <span className={styles.chatName}>{name}</span>
            <span className={styles.chatStatus}>{isTyping ? typing : online}</span>
          </span>
        </div>

        <div className={styles.chatThread}>
          {thread.slice(0, shown).map((msg, i) => (
            <p
              key={i}
              className={msg.from === "agent" ? styles.bubbleOut : styles.bubbleIn}
              data-from={msg.from}
            >
              {msg.text}
            </p>
          ))}
          {isTyping && (
            <span className={styles.typing} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          )}
        </div>
      </div>

      {done && (
        <button type="button" className={styles.chatReplay} onClick={play}>
          {replay}
        </button>
      )}
    </div>
  )
}
