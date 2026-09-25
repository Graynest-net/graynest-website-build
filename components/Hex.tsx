export interface HexProps {
  size?: number
  flat?: boolean
  className?: string
}

export function Hex({ size = 40, flat = false, className = '' }: HexProps) {
  const points = flat
    ? `${size * 0.5},0 ${size * 0.9},${size * 0.25} ${size * 0.9},${size * 0.75} ${size * 0.5},${size} 0.1,${size * 0.75} 0.1,${size * 0.25}`
    : `${size * 0.5},0 ${size},${size * 0.25} ${size},${size * 0.75} ${size * 0.5},${size} 0,${size * 0.75} 0,${size * 0.25}`

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <polygon
        points={points}
        fill="none"
        stroke="rgba(250, 250, 250, 0.14)"
        strokeWidth="1"
      />
    </svg>
  )
}

export interface HexGridProps {
  opacity?: number
  glowX?: number
  glowY?: number
}

export function HexGrid({ opacity = 0.05, glowX = 0.5, glowY = 0.4 }: HexGridProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="hexGlow" cx={glowX} cy={glowY}>
          <stop offset="0%" stopColor="rgba(234, 46, 0, 0.2)" />
          <stop offset="100%" stopColor="rgba(234, 46, 0, 0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#hexGlow)" />
      <g opacity={opacity}>
        {Array.from({ length: 20 }).map((_, i) =>
          Array.from({ length: 15 }).map((_, j) => (
            <polygon
              key={`${i}-${j}`}
              points={`${i * 80 + (j % 2) * 40},${j * 55} ${i * 80 + (j % 2) * 40 + 40},${j * 55 + 20} ${i * 80 + (j % 2) * 40 + 40},${j * 55 + 60} ${i * 80 + (j % 2) * 40},${j * 55 + 80} ${i * 80 + (j % 2) * 40 - 40},${j * 55 + 60} ${i * 80 + (j % 2) * 40 - 40},${j * 55 + 20}`}
              fill="none"
              stroke="rgba(250, 250, 250, 0.1)"
              strokeWidth="0.5"
            />
          ))
        )}
      </g>
    </svg>
  )
}
