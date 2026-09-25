interface HexGridProps {
  opacity?: number
  className?: string
}

/**
 * Soft sculptural hex lattice used as a System-register background texture.
 */
export function HexGrid({ opacity = 0.04, className = "" }: HexGridProps) {
  if (opacity < 0 || opacity > 1) {
    throw new Error("HexGrid opacity must be between 0 and 1.")
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="gn-hex-lattice" x="0" y="0" width="72" height="62" patternUnits="userSpaceOnUse">
            <polygon
              points="36,2 68,20 68,52 36,70 4,52 4,20"
              fill="none"
              stroke="rgba(250,250,250,0.55)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gn-hex-lattice)" />
      </svg>
    </div>
  )
}
