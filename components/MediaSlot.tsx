"use client"

export interface MediaSlotProps {
  id: string
  type: "image" | "video" | "audio"
  aspect?: string
  alt?: string
  register?: "world" | "system"
  className?: string
}

/**
 * Branded media placeholder resolved by slot id. Real assets drop in later without layout changes.
 */
export function MediaSlot({
  id,
  type = "image",
  aspect = "16:9",
  alt = `Media: ${id}`,
  register = "world",
  className = "",
}: MediaSlotProps) {
  const [width, height] = aspect.split(":").map(Number)
  const aspectRatio = width / height

  if (!Number.isFinite(aspectRatio) || aspectRatio <= 0) {
    throw new Error(`MediaSlot received invalid aspect ratio: ${aspect}`)
  }

  return (
    <div
      className={[
        "media-slot relative overflow-hidden rounded-2xl",
        register === "system" ? "media-slot-system" : "media-slot-world",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        aspectRatio: `${aspectRatio} / 1`,
      }}
      role="img"
      aria-label={alt}
    >
      <div className="media-slot-lattice" aria-hidden="true" />
      <div className="media-slot-glow" aria-hidden="true" />

      <div className="absolute top-4 right-4 z-10">
        <span className="glass-pill">
          {type} · {aspect}
        </span>
      </div>

      {process.env.NODE_ENV === "development" ? (
        <div className="absolute bottom-4 left-4 z-10 max-w-[70%]">
          <p className="micro truncate text-[10px] opacity-70">{id}</p>
        </div>
      ) : null}
    </div>
  )
}
