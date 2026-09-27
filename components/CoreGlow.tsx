export interface CoreGlowProps {
  size?: number
  className?: string
  pulse?: boolean
}

export function CoreGlow({ size = 20, className = '', pulse = true }: CoreGlowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={`core-glow ${pulse ? 'core-glow-pulse' : ''} ${className}`.trim()}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" fill="#ea2e00" opacity="0.25" className="core-glow-halo" />
      <circle cx="10" cy="10" r="6" fill="#ea2e00" />
    </svg>
  )
}
