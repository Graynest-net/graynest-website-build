export interface CoreGlowProps {
  size?: number
  className?: string
}

export function CoreGlow({ size = 20, className = '' }: CoreGlowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" fill="#ea2e00" />
    </svg>
  )
}
