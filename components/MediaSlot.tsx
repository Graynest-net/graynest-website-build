'use client'

export interface MediaSlotProps {
  id: string
  type: 'image' | 'video' | 'audio'
  aspect?: string
  alt?: string
  register?: 'world' | 'system'
  className?: string
}

export function MediaSlot({ 
  id, 
  type = 'image', 
  aspect = '16:9',
  alt = `Media: ${id}`,
  register = 'world',
  className = ''
}: MediaSlotProps) {
  const [width, height] = aspect.split(':').map(Number)
  const aspectRatio = width / height
  
  const gradient = register === 'system'
    ? 'radial-gradient(60% 50% at 50% 40%, #232326 0%, #16161a 70%, #111114 100%)'
    : 'radial-gradient(60% 50% at 50% 40%, #232326 0%, #16161a 70%, #111114 100%)'

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-[#232326] to-[#16161a] ${className}`}
      style={{
        aspectRatio: `${aspectRatio} / 1`,
      }}
    >
      {/* Placeholder background */}
      <div
        className="absolute inset-0"
        style={{
          background: gradient,
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><g opacity="0.05"><polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="rgba(250,250,250,0.1)" stroke-width="1"/></g></svg>')`,
          backgroundRepeat: 'repeat',
        }}
      >
        {/* Slow red glow drift */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(234, 46, 0, 0.1) 0%, transparent 70%)',
            animation: 'drift 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Development info overlay */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-10">
          <div className="text-center">
            <p className="text-white/80 text-sm mb-2 font-medium uppercase tracking-wider">
              {type} · {aspect}
            </p>
            <p className="text-white/60 text-xs max-w-xs">{alt}</p>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={() => {
                const prompt = `[Prompt for ${id}]`
                navigator.clipboard.writeText(prompt)
              }}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded transition"
            >
              Copy prompt
            </button>
          </div>
        </div>
      )}

      {/* Status badge */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 z-5">
        <span className="text-xs font-medium text-white/70 uppercase tracking-wide">{type}</span>
      </div>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(10%, 5%); opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
