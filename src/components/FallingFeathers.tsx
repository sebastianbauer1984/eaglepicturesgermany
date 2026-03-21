import { motion } from 'framer-motion'
import { useMemo } from 'react'

const FEATHER_PALETTES = [
  { base: '#5C2800', mid: '#CC2200', tip: '#FF1144' },
  { base: '#6B3A00', mid: '#FF4400', tip: '#FF6600' },
  { base: '#5A4000', mid: '#CC8800', tip: '#FFD700' },
  { base: '#1A4A1A', mid: '#22AA44', tip: '#44FF88' },
  { base: '#0A2A6A', mid: '#1166DD', tip: '#44AAFF' },
  { base: '#3A1060', mid: '#8833CC', tip: '#CC66FF' },
  { base: '#5A0030', mid: '#CC1166', tip: '#FF44AA' },
  { base: '#4A2200', mid: '#8B4513', tip: '#FFB800' },
]

function BigFeather({
  palette, x, width, height, duration, delay, rotation, swayX,
}: {
  palette: typeof FEATHER_PALETTES[0]
  x: number
  width: number
  height: number
  duration: number
  delay: number
  rotation: number
  swayX: number
}) {
  const id = useMemo(() => `feather-${Math.random().toString(36).slice(2)}`, [])
  const halfW = width / 2
  const shaft = height * 0.92
  const barbCount = 28

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: -height - 40,
        left: `${x}%`,
        width,
        height,
        originX: '50%',
        originY: '15%',
        zIndex: 0,
      }}
      animate={{
        y: ['0px', `calc(100vh + ${height + 60}px)`],
        x: [0, swayX, -swayX * 0.6, swayX * 0.3, 0],
        rotate: [rotation, rotation + 18, rotation - 12, rotation + 8, rotation],
        opacity: [0, 0.85, 0.9, 0.85, 0],
      }}
      transition={{
        y: { duration, ease: 'linear', repeat: Infinity, delay },
        x: { duration: duration * 0.9, ease: 'easeInOut', repeat: Infinity, delay },
        rotate: { duration: duration * 1.1, ease: 'easeInOut', repeat: Infinity, delay },
        opacity: {
          duration,
          times: [0, 0.06, 0.5, 0.94, 1],
          repeat: Infinity,
          delay,
        },
      }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Main feather gradient - base to tip */}
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={palette.tip} stopOpacity={0.9} />
            <stop offset="35%" stopColor={palette.mid} stopOpacity={0.85} />
            <stop offset="75%" stopColor={palette.base} stopOpacity={0.8} />
            <stop offset="100%" stopColor={palette.base} stopOpacity={0.3} />
          </linearGradient>
          {/* Glow filter */}
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          {/* Shimmer gradient */}
          <linearGradient id={`${id}-shimmer`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity={0} />
            <stop offset="50%" stopColor="white" stopOpacity={0.12} />
            <stop offset="100%" stopColor="white" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Feather shadow/glow backdrop */}
        <ellipse
          cx={halfW} cy={height * 0.45} rx={halfW * 0.85} ry={height * 0.38}
          fill={palette.mid} fillOpacity={0.08} filter={`url(#${id}-glow)`}
        />

        {/* Main feather body - left vane */}
        <path
          d={`M${halfW},${height * 0.05}
              Q${halfW * 0.15},${height * 0.2} ${halfW * 0.05},${height * 0.55}
              Q${halfW * 0.1},${height * 0.75} ${halfW * 0.4},${height * 0.88}
              Q${halfW * 0.7},${height * 0.78} ${halfW},${shaft}
              L${halfW},${height * 0.05}Z`}
          fill={`url(#${id}-body)`}
        />

        {/* Main feather body - right vane */}
        <path
          d={`M${halfW},${height * 0.05}
              Q${halfW * 1.85},${height * 0.2} ${halfW * 1.95},${height * 0.55}
              Q${halfW * 1.9},${height * 0.75} ${halfW * 1.6},${height * 0.88}
              Q${halfW * 1.3},${height * 0.78} ${halfW},${shaft}
              L${halfW},${height * 0.05}Z`}
          fill={`url(#${id}-body)`}
        />

        {/* Individual barbs - left side */}
        {Array.from({ length: barbCount }, (_, i) => {
          const t = i / barbCount
          const y = height * 0.06 + t * height * 0.82
          const spreadFactor = Math.sin(t * Math.PI * 0.9) * (t < 0.5 ? t * 2 : 1)
          const bLen = halfW * 0.82 * spreadFactor
          const curve = bLen * 0.15
          return (
            <path
              key={`lb${i}`}
              d={`M${halfW},${y} Q${halfW - bLen * 0.5},${y + curve} ${halfW - bLen},${y + curve * 1.5}`}
              stroke={t < 0.4 ? palette.tip : t < 0.7 ? palette.mid : palette.base}
              strokeWidth={t < 0.3 ? 1.2 : 0.8}
              strokeOpacity={0.55 + t * 0.2}
              fill="none"
            />
          )
        })}

        {/* Individual barbs - right side */}
        {Array.from({ length: barbCount }, (_, i) => {
          const t = i / barbCount
          const y = height * 0.06 + t * height * 0.82
          const spreadFactor = Math.sin(t * Math.PI * 0.9) * (t < 0.5 ? t * 2 : 1)
          const bLen = halfW * 0.82 * spreadFactor
          const curve = bLen * 0.15
          return (
            <path
              key={`rb${i}`}
              d={`M${halfW},${y} Q${halfW + bLen * 0.5},${y + curve} ${halfW + bLen},${y + curve * 1.5}`}
              stroke={t < 0.4 ? palette.tip : t < 0.7 ? palette.mid : palette.base}
              strokeWidth={t < 0.3 ? 1.2 : 0.8}
              strokeOpacity={0.55 + t * 0.2}
              fill="none"
            />
          )
        })}

        {/* Shaft */}
        <path
          d={`M${halfW},4 Q${halfW + 0.5},${height * 0.4} ${halfW},${shaft}`}
          stroke={palette.base}
          strokeWidth={1.8}
          strokeOpacity={0.7}
          fill="none"
          strokeLinecap="round"
        />

        {/* Quill tip */}
        <line x1={halfW} y1={shaft} x2={halfW} y2={height} stroke={palette.base} strokeWidth={1} strokeOpacity={0.4} />

        {/* Shimmer overlay */}
        <path
          d={`M${halfW},${height * 0.05}
              Q${halfW * 1.85},${height * 0.2} ${halfW * 1.95},${height * 0.55}
              Q${halfW * 1.9},${height * 0.75} ${halfW * 1.6},${height * 0.88}
              Q${halfW * 1.3},${height * 0.78} ${halfW},${shaft}
              Q${halfW * 0.7},${height * 0.78} ${halfW * 0.4},${height * 0.88}
              Q${halfW * 0.1},${height * 0.75} ${halfW * 0.05},${height * 0.55}
              Q${halfW * 0.15},${height * 0.2} ${halfW},${height * 0.05}Z`}
          fill={`url(#${id}-shimmer)`}
        />

        {/* Tip glow */}
        <circle cx={halfW} cy={height * 0.06} r={width * 0.2} fill={palette.tip} fillOpacity={0.3} filter={`url(#${id}-glow)`} />
      </svg>
    </motion.div>
  )
}

interface FallingFeathersProps {
  count?: number
  zIndex?: number
  opacity?: number
  minSize?: number
  maxSize?: number
}

export default function FallingFeathers({ count = 12, zIndex = 0, opacity = 1, minSize = 55, maxSize = 110 }: FallingFeathersProps) {
  // Disable on mobile – too expensive for low-end devices
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  const effectiveCount = isMobile ? 0 : count

  const feathers = useMemo(() =>
    Array.from({ length: effectiveCount }, (_, i) => {
      const width = minSize + (i % 5) * ((maxSize - minSize) / 4)
      return {
        id: i,
        palette: FEATHER_PALETTES[i % FEATHER_PALETTES.length],
        x: (i * 100 / count) + Math.sin(i * 1.8) * 5,
        width,
        height: width * 3.4,
        duration: 12 + (i % 6) * 2.5,
        delay: -(i * 2.1),
        rotation: -30 + (i % 9) * 7,
        swayX: 25 + (i % 4) * 18,
      }
    }),
  [effectiveCount, minSize, maxSize])

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex,
      opacity,
    }}>
      {feathers.map(f => <BigFeather key={f.id} {...f} />)}
    </div>
  )
}
