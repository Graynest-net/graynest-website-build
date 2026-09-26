import { MediaSlot } from "@/components/MediaSlot"

export interface SceneCardProps {
  mediaId: string
  alt: string
  eyebrow: string
  title: string
  body: string
  aspect?: string
  className?: string
}

/**
 * Photographic use-case card with a frosted caption floating over the lower-left of the scene.
 */
export function SceneCard({ mediaId, alt, eyebrow, title, body, aspect = "3:2", className = "" }: SceneCardProps) {
  return (
    <article className={`scene-card ${className}`.trim()}>
      <MediaSlot id={mediaId} type="image" aspect={aspect} register="world" alt={alt} className="scene-card-media" />
      <div className="scene-card-caption">
        <p className="micro">{eyebrow}</p>
        <h3 className="scene-card-title">{title}</h3>
        <p className="scene-card-body">{body}</p>
      </div>
    </article>
  )
}
