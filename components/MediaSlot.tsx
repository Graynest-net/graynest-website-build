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

  const gradient =
    register === "system"
      ? "radial-gradient(60% 50% at 50% 40%, #232326 0%, #16161a 70%, #111114 100%)"
      : "radial-gradient(55% 48% at 55% 42%, #2a2624 0%, #1b1b1f 48%, #16161a 78%, #111114 100%)"

  return (
    <div
      className={`media-slot relative overflow-hidden rounded-2xl ${className}`.trim()}
      style={{
        aspectRatio: `${aspectRatio} / 1`,
        background: gradient,
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
