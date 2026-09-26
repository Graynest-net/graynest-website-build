import { MEDIA_ASSETS } from "@/content/media-assets"

export interface MediaSlotProps {
  id: string
  type: "image" | "video" | "audio"
  aspect?: string
  alt?: string
  register?: "world" | "system"
  className?: string
  priority?: boolean
}

/**
 * Media resolved by slot id: the delivered asset when one exists, otherwise a branded placeholder.
 */
export function MediaSlot({
  id,
  type = "image",
  aspect = "16:9",
  alt = `Media: ${id}`,
  register = "world",
  className = "",
  priority = false,
}: MediaSlotProps) {
  const [width, height] = aspect.split(":").map(Number)
  const aspectRatio = width / height

  if (!Number.isFinite(aspectRatio) || aspectRatio <= 0) {
    throw new Error(`MediaSlot received invalid aspect ratio: ${aspect}`)
  }

  const asset = MEDIA_ASSETS[id]
  const frameClassName = [
    "media-slot relative overflow-hidden rounded-2xl",
    register === "system" ? "media-slot-system" : "media-slot-world",
    asset ? "has-asset" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (asset) {
    return (
      <div className={frameClassName} style={{ aspectRatio: `${aspectRatio} / 1` }}>
        <img
          src={asset.src}
          alt={alt}
          width={asset.width}
          height={asset.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="media-slot-img"
          style={asset.position ? { objectPosition: asset.position } : undefined}
        />
      </div>
    )
  }

  return (
    <div
      className={frameClassName}
      style={{ aspectRatio: `${aspectRatio} / 1` }}
      role="img"
      aria-label={alt}
    >
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
