export interface HeadlineProps {
  line1: string
  line2: string
  accent: string
  className?: string
}

/**
 * House-style two-line headline. Finds the accent substring in line 2 and wraps it.
 */
export function Headline({ line1, line2, accent, className = "" }: HeadlineProps) {
  if (!line1.trim() || !line2.trim() || !accent.trim()) {
    throw new Error("Headline requires non-empty line1, line2, and accent values.")
  }

  const accentIndex = line2.toLowerCase().indexOf(accent.toLowerCase())

  return (
    <h1 className={`headline-block ${className}`.trim()}>
      <span className="display-line">{line1}</span>
      <span className="display-line">
        {accentIndex < 0 ? (
          line2
        ) : (
          <>
            {line2.slice(0, accentIndex)}
            <span className="accent-word">
              {line2.slice(accentIndex, accentIndex + accent.length)}
            </span>
            {line2.slice(accentIndex + accent.length)}
          </>
        )}
      </span>
    </h1>
  )
}
