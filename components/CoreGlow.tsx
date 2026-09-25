'use client'

export interface CoreGlowProps {
  size?: number
  pulse?: boolean
  className?: string
}

export function CoreGlow({ size = 20, pulse = true, className = '' }: CoreGlowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={`${pulse ? 'animate-pulse' : ''} ${className}`}
      style={{
        animationDuration: pulse ? '2.4s' : undefined,
        animationTimingFunction: 'ease-in-out',
      }}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="10" cy="10" r="6" fill="#ea2e00" filter="url(#glow)" />
    </svg>
  )
}
