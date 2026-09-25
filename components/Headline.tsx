export interface HeadlineProps {
  line1: string
  line2: string
  accent: string
  className?: string
}

export function Headline({ line1, line2, accent, className = '' }: HeadlineProps) {
  // Find and wrap the accent word in line2
  const parts = line2.split(new RegExp(`(${accent})`, 'i'))
  
  return (
    <div className={`space-y-2 ${className}`}>
      <h1 className="display-line">{line1}</h1>
      <h1 className="display-line">
        {parts.map((part, i) => 
          part.toLowerCase() === accent.toLowerCase() ? 
            <span key={i} className="accent-word">{part}</span> : 
            <span key={i}>{part}</span>
        )}
      </h1>
    </div>
  )
}
