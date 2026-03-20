import { motion } from 'framer-motion'

type EagleView = 'soaring' | 'diving' | 'profile' | 'rising'

interface MajesticEagleProps {
  view?: EagleView
  size?: number
  style?: React.CSSProperties
  glowColor?: string
}

/* ─── Particle sparkles (Arcane style) ─── */
function Sparkles({ count = 18, color = '#FFB800', spread = 220 }: { count?: number; color?: string; spread?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2
        const r = 40 + (i % 4) * (spread / 4)
        const cx = 250 + Math.cos(angle) * r
        const cy = 250 + Math.sin(angle) * r
        const size = 1 + (i % 3) * 1.5
        return (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={size}
            fill={color}
            animate={{
              r: [size, size * 2.5, size * 0.5, size],
              fillOpacity: [0.15, 0.7, 0.1, 0.15],
              cx: [cx, cx + Math.cos(angle + 0.5) * 8, cx],
              cy: [cy, cy + Math.sin(angle + 0.5) * 8, cy],
            }}
            transition={{ duration: 2.5 + (i % 5) * 0.7, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
          />
        )
      })}
    </>
  )
}

/* ─── Soaring view — full wingspan from slightly below ─── */
function SoaringEagle({ id }: { id: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${id}-body-grad`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#C87941" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#4A2200" />
        </radialGradient>
        <radialGradient id={`${id}-wing-grad`} cx="30%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#A0622D" />
          <stop offset="60%" stopColor="#6B3A12" />
          <stop offset="100%" stopColor="#3A1A04" />
        </radialGradient>
        <radialGradient id={`${id}-head-grad`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#F5F0E0" />
          <stop offset="70%" stopColor="#DEDAD0" />
          <stop offset="100%" stopColor="#B8B4A8" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id={`${id}-softglow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-left-tips`} x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#CC2200" />
          <stop offset="25%" stopColor="#8833CC" />
          <stop offset="50%" stopColor="#1166DD" />
          <stop offset="75%" stopColor="#22AA44" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id={`${id}-right-tips`} x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stopColor="#CC2200" />
          <stop offset="25%" stopColor="#8833CC" />
          <stop offset="50%" stopColor="#1166DD" />
          <stop offset="75%" stopColor="#22AA44" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id={`${id}-tail-grad`} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#C8B090" />
          <stop offset="100%" stopColor="#8B7060" />
        </linearGradient>
      </defs>

      {/* ── Atmospheric glow behind eagle ── */}
      <motion.ellipse cx="250" cy="265" rx="210" ry="80" fill="#FFB800" fillOpacity={0.04}
        animate={{ rx: [210, 225, 210], fillOpacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />

      {/* ── LEFT WING ── */}
      {/* Wing base shape */}
      <path d="M250,255 L48,188 L22,208 L72,232 L14,245 L68,262 L30,290 L95,278 L58,318 L128,298 L108,338 L178,308 L182,346 L228,310 L235,268 Z"
        fill={`url(#${id}-wing-grad)`} />

      {/* Wing feather rows — secondary feathers */}
      {[
        { y1: 232, y2: 248, x1: 72, x2: 235, color: '#7A3A10' },
        { y1: 248, y2: 266, x1: 55, x2: 235, color: '#6B3208' },
        { y1: 268, y2: 284, x1: 62, x2: 235, color: '#5C2A06' },
      ].map((row, i) => (
        <path key={`lsec${i}`}
          d={`M${row.x1},${row.y1} Q${(row.x1 + row.x2) / 2},${(row.y1 + row.y2) / 2 - 4} ${row.x2},${row.y2}`}
          fill="none" stroke={row.color} strokeWidth="6" strokeOpacity={0.4} strokeLinecap="round" />
      ))}

      {/* Primary feathers — left wing tip */}
      {[
        { x: 22, y: 208, tx: 10, ty: 236 },
        { x: 14, y: 245, tx: 2, ty: 272 },
        { x: 30, y: 290, tx: 18, ty: 318 },
        { x: 58, y: 318, tx: 48, ty: 346 },
        { x: 108, y: 338, tx: 100, ty: 366 },
        { x: 178, y: 308, tx: 172, ty: 336 },
      ].map((f, i) => (
        <g key={`lpf${i}`}>
          <path d={`M${f.x + 28},${f.y - 8} Q${(f.x + f.tx) / 2 - 6},${(f.y + f.ty) / 2} ${f.tx},${f.ty}`}
            fill="none" stroke={`url(#${id}-left-tips)`} strokeWidth="10" strokeOpacity={0.75} strokeLinecap="round" />
          <path d={`M${f.x + 28},${f.y - 8} Q${(f.x + f.tx) / 2 + 8},${(f.y + f.ty) / 2} ${f.tx + 18},${f.ty - 4}`}
            fill="none" stroke={`url(#${id}-left-tips)`} strokeWidth="7" strokeOpacity={0.5} strokeLinecap="round" />
        </g>
      ))}

      {/* Individual feather detail lines on left wing */}
      {Array.from({ length: 14 }, (_, i) => {
        const t = i / 13
        const startX = 235 - t * 190
        const startY = 268 + t * 12
        const endX = startX - 15 - t * 20
        const endY = startY + 22 + t * 15
        return <line key={`ld${i}`} x1={startX} y1={startY} x2={endX} y2={endY}
          stroke="#8B4513" strokeWidth={1.2} strokeOpacity={0.3} />
      })}

      {/* ── RIGHT WING ── */}
      <path d="M250,255 L452,188 L478,208 L428,232 L486,245 L432,262 L470,290 L405,278 L442,318 L372,298 L392,338 L322,308 L318,346 L272,310 L265,268 Z"
        fill={`url(#${id}-wing-grad)`} />

      {/* Right secondary rows */}
      {[
        { y1: 232, y2: 248, x1: 428, x2: 265, color: '#7A3A10' },
        { y1: 248, y2: 266, x1: 445, x2: 265, color: '#6B3208' },
        { y1: 268, y2: 284, x1: 438, x2: 265, color: '#5C2A06' },
      ].map((row, i) => (
        <path key={`rsec${i}`}
          d={`M${row.x1},${row.y1} Q${(row.x1 + row.x2) / 2},${(row.y1 + row.y2) / 2 - 4} ${row.x2},${row.y2}`}
          fill="none" stroke={row.color} strokeWidth="6" strokeOpacity={0.4} strokeLinecap="round" />
      ))}

      {/* Right primary feathers */}
      {[
        { x: 478, y: 208, tx: 490, ty: 236 },
        { x: 486, y: 245, tx: 498, ty: 272 },
        { x: 470, y: 290, tx: 482, ty: 318 },
        { x: 442, y: 318, tx: 452, ty: 346 },
        { x: 392, y: 338, tx: 400, ty: 366 },
        { x: 322, y: 308, tx: 328, ty: 336 },
      ].map((f, i) => (
        <g key={`rpf${i}`}>
          <path d={`M${f.x - 28},${f.y - 8} Q${(f.x + f.tx) / 2 + 6},${(f.y + f.ty) / 2} ${f.tx},${f.ty}`}
            fill="none" stroke={`url(#${id}-right-tips)`} strokeWidth="10" strokeOpacity={0.75} strokeLinecap="round" />
          <path d={`M${f.x - 28},${f.y - 8} Q${(f.x + f.tx) / 2 - 8},${(f.y + f.ty) / 2} ${f.tx - 18},${f.ty - 4}`}
            fill="none" stroke={`url(#${id}-right-tips)`} strokeWidth="7" strokeOpacity={0.5} strokeLinecap="round" />
        </g>
      ))}

      {/* Right feather detail lines */}
      {Array.from({ length: 14 }, (_, i) => {
        const t = i / 13
        const startX = 265 + t * 190
        const startY = 268 + t * 12
        const endX = startX + 15 + t * 20
        const endY = startY + 22 + t * 15
        return <line key={`rd${i}`} x1={startX} y1={startY} x2={endX} y2={endY}
          stroke="#8B4513" strokeWidth={1.2} strokeOpacity={0.3} />
      })}

      {/* ── BODY ── */}
      <ellipse cx="250" cy="282" rx="42" ry="62" fill={`url(#${id}-body-grad)`} />
      {/* Body detail */}
      <path d="M228,265 Q250,258 272,265 L268,318 Q250,325 232,318 Z" fill="#7A3A10" fillOpacity={0.4} />

      {/* ── TAIL ── */}
      <path d="M225,336 Q250,328 275,336 L268,378 Q252,385 232,378 Z" fill={`url(#${id}-tail-grad)`} />
      {/* Tail feather lines */}
      {Array.from({ length: 7 }, (_, i) => {
        const x = 232 + i * 6
        return <line key={`t${i}`} x1={x} y1={335} x2={x - 2 + i} y2={376} stroke="#8B7060" strokeWidth={0.8} strokeOpacity={0.5} />
      })}

      {/* ── HEAD ── */}
      {/* Neck */}
      <path d="M230,248 Q250,240 270,248 L266,268 Q250,262 234,268 Z" fill="#F0EAD8" />
      {/* Head */}
      <ellipse cx="237" cy="228" rx="24" ry="22" fill={`url(#${id}-head-grad)`} />
      {/* Head feather texture */}
      <path d="M220,222 Q237,214 254,218" fill="none" stroke="#C8C4B4" strokeWidth={1} strokeOpacity={0.5} />
      <path d="M218,228 Q237,220 255,224" fill="none" stroke="#C8C4B4" strokeWidth={0.8} strokeOpacity={0.4} />

      {/* ── BEAK ── */}
      <path d="M215,225 L188,234 L185,242 L215,238 Z" fill="#E8C840" />
      <path d="M215,238 L186,244 L188,250 L215,246 Z" fill="#C8A820" />
      {/* Beak highlight */}
      <path d="M215,228 L190,236" stroke="rgba(255,255,200,0.4)" strokeWidth={1} />

      {/* ── EYE ── */}
      <circle cx="230" cy="224" r="7" fill="#1A0A00" />
      <circle cx="230" cy="224" r="5" fill="#FFB800" />
      <circle cx="230" cy="224" r="3" fill="#0A0500" />
      <circle cx="228" cy="222" r="1.2" fill="white" fillOpacity={0.8} />
      <circle cx="231" cy="225" r="0.7" fill="white" fillOpacity={0.4} />
      {/* Eye ring glow */}
      <motion.circle cx="230" cy="224" r="8" fill="none" stroke="#FFB800" strokeWidth={1.5} strokeOpacity={0.6}
        animate={{ r: [8, 10, 8], strokeOpacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }} />

      {/* ── FEATHER TIP GLOWS (Arcane style) ── */}
      {[
        { cx: 14, cy: 245, color: '#CC2200' },
        { cx: 30, cy: 290, color: '#8833CC' },
        { cx: 58, cy: 318, color: '#1166DD' },
        { cx: 108, cy: 338, color: '#22AA44' },
        { cx: 486, cy: 245, color: '#CC2200' },
        { cx: 470, cy: 290, color: '#FF6600' },
        { cx: 442, cy: 318, color: '#8833CC' },
        { cx: 392, cy: 338, color: '#22AA44' },
      ].map((g, i) => (
        <motion.circle key={`fg${i}`} cx={g.cx} cy={g.cy} r={12}
          fill={g.color} fillOpacity={0.25} filter={`url(#${id}-glow)`}
          animate={{ r: [12, 20, 12], fillOpacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }} />
      ))}

      {/* Sparkles */}
      <Sparkles count={20} color="#FFB800" spread={240} />
    </g>
  )
}

/* ─── Diving view — eagle head-first, wings swept back ─── */
function DivingEagle({ id }: { id: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${id}-body2`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#C87941" />
          <stop offset="100%" stopColor="#3A1A04" />
        </radialGradient>
        <filter id={`${id}-glow2`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-ltips2`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#CC2200" />
          <stop offset="40%" stopColor="#8833CC" />
          <stop offset="70%" stopColor="#1166DD" />
          <stop offset="100%" stopColor="#22AA44" />
        </linearGradient>
        <linearGradient id={`${id}-rtips2`} x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#CC2200" />
          <stop offset="40%" stopColor="#FF6600" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#22AA44" />
        </linearGradient>
      </defs>

      {/* Speed glow lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.line key={`sl${i}`}
          x1={100 + i * 40} y1={380 + i * 10} x2={120 + i * 40} y2={480}
          stroke="#FFB800" strokeWidth={1} strokeOpacity={0.08}
          animate={{ strokeOpacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}

      {/* Left swept-back wing */}
      <path d="M248,175 L72,268 L48,252 L90,288 L32,298 L85,312 L55,340 L118,326 L100,358 L162,336 L158,368 L208,344 L220,290 Z"
        fill="#6B3A12" />
      {/* Left wing tip feathers */}
      {[
        { x1: 72, y1: 268, x2: 48, y2: 252 },
        { x1: 48, y1: 252, x2: 32, y2: 298 },
        { x1: 55, y1: 340, x2: 32, y2: 298 },
        { x1: 100, y1: 358, x2: 55, y2: 340 },
        { x1: 158, y1: 368, x2: 100, y2: 358 },
      ].map((f, i) => (
        <path key={`ldw${i}`}
          d={`M${f.x1},${f.y1} Q${(f.x1 + f.x2) / 2 - 8},${(f.y1 + f.y2) / 2 + 10} ${f.x2},${f.y2}`}
          fill="none" stroke={`url(#${id}-ltips2)`} strokeWidth={12} strokeOpacity={0.8} strokeLinecap="round" />
      ))}

      {/* Right swept-back wing */}
      <path d="M252,175 L428,268 L452,252 L410,288 L468,298 L415,312 L445,340 L382,326 L400,358 L338,336 L342,368 L292,344 L280,290 Z"
        fill="#6B3A12" />
      {[
        { x1: 428, y1: 268, x2: 452, y2: 252 },
        { x1: 452, y1: 252, x2: 468, y2: 298 },
        { x1: 445, y1: 340, x2: 468, y2: 298 },
        { x1: 400, y1: 358, x2: 445, y2: 340 },
        { x1: 342, y1: 368, x2: 400, y2: 358 },
      ].map((f, i) => (
        <path key={`rdw${i}`}
          d={`M${f.x1},${f.y1} Q${(f.x1 + f.x2) / 2 + 8},${(f.y1 + f.y2) / 2 + 10} ${f.x2},${f.y2}`}
          fill="none" stroke={`url(#${id}-rtips2)`} strokeWidth={12} strokeOpacity={0.8} strokeLinecap="round" />
      ))}

      {/* Body */}
      <ellipse cx="250" cy="270" rx="36" ry="88" fill={`url(#${id}-body2)`} />

      {/* Tail feathers */}
      <path d="M228,350 Q250,342 272,350 L265,410 Q250,418 235,410 Z" fill="#C8B090" />
      {Array.from({ length: 5 }, (_, i) => (
        <line key={`dt${i}`} x1={235 + i * 7} y1={350} x2={234 + i * 8} y2={408}
          stroke="#A89878" strokeWidth={1} strokeOpacity={0.5} />
      ))}

      {/* Head - prominent, pointing down */}
      <path d="M232,148 Q250,138 268,148 L274,185 Q250,192 226,185 Z" fill="#F0EAD8" />
      <ellipse cx="250" cy="138" rx="22" ry="20" fill="#F0EAD8" />

      {/* Beak - pointing down */}
      <path d="M250,156 L238,182 L242,188 L250,165 Z" fill="#E8C840" />
      <path d="M250,165 L242,188 L248,192 L250,172 Z" fill="#C8A820" />

      {/* Eyes */}
      <circle cx="240" cy="132" r="6.5" fill="#1A0A00" />
      <circle cx="240" cy="132" r="4.5" fill="#FFB800" />
      <circle cx="240" cy="132" r="2.5" fill="#0A0500" />
      <circle cx="238" cy="130" r="1" fill="white" fillOpacity={0.8} />
      <motion.circle cx="240" cy="132" r="8" fill="none" stroke="#FFB800" strokeWidth={1.5} strokeOpacity={0.5}
        animate={{ r: [8, 11, 8], strokeOpacity: [0.5, 0.15, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }} />

      {/* Tip glows */}
      {[
        { cx: 32, cy: 298, c: '#CC2200' }, { cx: 55, cy: 340, c: '#8833CC' },
        { cx: 100, cy: 358, c: '#1166DD' }, { cx: 468, cy: 298, c: '#FF6600' },
        { cx: 445, cy: 340, c: '#FFD700' }, { cx: 400, cy: 358, c: '#22AA44' },
      ].map((g, i) => (
        <motion.circle key={`dg${i}`} cx={g.cx} cy={g.cy} r={14}
          fill={g.c} fillOpacity={0.3} filter={`url(#${id}-glow2)`}
          animate={{ r: [14, 22, 14], fillOpacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}

      <Sparkles count={16} color="#FF6600" spread={200} />
    </g>
  )
}

/* ─── Profile view — majestic side pose ─── */
function ProfileEagle({ id }: { id: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${id}-pbody`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C87941" />
          <stop offset="100%" stopColor="#3A1A04" />
        </radialGradient>
        <filter id={`${id}-pglow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-pwing`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CC2200" />
          <stop offset="30%" stopColor="#8833CC" />
          <stop offset="60%" stopColor="#1166DD" />
          <stop offset="85%" stopColor="#22AA44" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>

      {/* Wing (folded, seen from side - shows tip colors) */}
      <path d="M275,208 Q380,180 460,230 L468,280 Q400,340 340,380 Q295,395 268,370 L258,330 Q290,290 300,248 Z"
        fill="#6B3A12" />

      {/* Wing feather layers - showing color tips */}
      {[
        'M460,230 L478,260 Q420,295 360,310 L340,295 Q400,268 460,230',
        'M462,265 L474,295 Q412,335 348,352 L340,336 Q402,312 462,265',
        'M458,302 L466,332 Q400,372 338,385 L335,368 Q398,350 458,302',
      ].map((d, i) => (
        <path key={`pw${i}`} d={d} fill={`url(#${id}-pwing)`} fillOpacity={0.65 - i * 0.05} />
      ))}

      {/* Individual feather tips */}
      {Array.from({ length: 8 }, (_, i) => {
        const t = i / 7
        const startX = 455 + Math.sin(t) * 10
        const startY = 235 + t * 155
        const colors = ['#CC2200', '#FF4400', '#FF8800', '#FFD700', '#22AA44', '#1166DD', '#8833CC', '#CC1166']
        return (
          <motion.path key={`pft${i}`}
            d={`M${startX},${startY} Q${startX + 18},${startY + 12} ${startX + 28},${startY + 8}`}
            fill="none" stroke={colors[i]} strokeWidth={8} strokeOpacity={0.8} strokeLinecap="round"
            animate={{ strokeOpacity: [0.8, 0.5, 0.8] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.25 }} />
        )
      })}

      {/* Body */}
      <ellipse cx="255" cy="310" rx="45" ry="72" fill={`url(#${id}-pbody)`} />

      {/* Chest / underside */}
      <path d="M230,265 Q255,252 275,268 L270,362 Q255,375 235,360 Z" fill="#C87941" fillOpacity={0.35} />

      {/* Tail */}
      <path d="M228,375 Q255,365 278,378 L272,428 Q255,436 232,426 Z" fill="#C8B090" />

      {/* Talon visible */}
      <path d="M235,430 L225,455 L220,470 L230,467 L232,452 L240,465 L246,462 L244,448 L252,460 L257,456 Z"
        fill="#C8A820" fillOpacity={0.85} />

      {/* Neck */}
      <path d="M232,235 Q255,225 274,238 L270,265 Q255,258 235,265 Z" fill="#F0EAD8" />

      {/* Head */}
      <ellipse cx="248" cy="215" rx="28" ry="26" fill="#F0EAD8" />

      {/* Head feather texture */}
      {Array.from({ length: 5 }, (_, i) => (
        <path key={`ph${i}`}
          d={`M${228 + i * 5},${206 - i * 2} Q${248},${196} ${268 - i * 3},${206 - i}`}
          fill="none" stroke="#C8C4B4" strokeWidth={0.8} strokeOpacity={0.4} />
      ))}

      {/* Beak - side view, sharp and prominent */}
      <path d="M222,214 L178,220 L174,230 L222,228 Z" fill="#E8C840" />
      <path d="M222,228 L175,232 L178,240 L222,238 Z" fill="#C8A820" />
      <path d="M222,214 L178,220" stroke="rgba(255,255,180,0.5)" strokeWidth={1.2} />

      {/* Eye */}
      <circle cx="234" cy="210" r="8" fill="#1A0A00" />
      <circle cx="234" cy="210" r="5.5" fill="#FFB800" />
      <circle cx="234" cy="210" r="3" fill="#050200" />
      <circle cx="232" cy="208" r="1.5" fill="white" fillOpacity={0.9} />
      <motion.circle cx="234" cy="210" r="9.5" fill="none" stroke="#FFB800" strokeWidth={1.8} strokeOpacity={0.6}
        animate={{ r: [9.5, 13, 9.5], strokeOpacity: [0.6, 0.15, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }} />

      {/* Feather glows */}
      {[
        { cx: 468, cy: 250, c: '#CC2200' }, { cx: 470, cy: 310, c: '#8833CC' },
        { cx: 464, cy: 360, c: '#1166DD' }, { cx: 455, cy: 400, c: '#22AA44' },
      ].map((g, i) => (
        <motion.circle key={`pg${i}`} cx={g.cx} cy={g.cy} r={16}
          fill={g.c} fillOpacity={0.3} filter={`url(#${id}-pglow)`}
          animate={{ r: [16, 26, 16], fillOpacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}

      <Sparkles count={14} color="#8833CC" spread={180} />
    </g>
  )
}

/* ─── Rising view — eagle ascending, wings raised ─── */
function RisingEagle({ id }: { id: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${id}-rbody`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#D08040" />
          <stop offset="100%" stopColor="#3A1A04" />
        </radialGradient>
        <filter id={`${id}-rglow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-rltips`} x1="0.5" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#22AA44" />
          <stop offset="60%" stopColor="#1166DD" />
          <stop offset="85%" stopColor="#8833CC" />
          <stop offset="100%" stopColor="#CC2200" />
        </linearGradient>
        <linearGradient id={`${id}-rrtips`} x1="0.5" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#22AA44" />
          <stop offset="60%" stopColor="#FF6600" />
          <stop offset="85%" stopColor="#CC1166" />
          <stop offset="100%" stopColor="#CC2200" />
        </linearGradient>
      </defs>

      {/* Ascending light burst from below */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return (
          <motion.line key={`rb${i}`}
            x1={250} y1={320}
            x2={250 + Math.cos(angle) * 180} y2={320 + Math.sin(angle) * 80}
            stroke="#FFB800" strokeWidth={0.8} strokeOpacity={0.06}
            animate={{ strokeOpacity: [0.06, 0.18, 0.06] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }} />
        )
      })}

      {/* Left wing RAISED */}
      <path d="M248,258 L85,128 L55,148 L105,168 L45,178 L100,196 L62,222 L122,212 L90,248 L155,232 L148,268 L202,252 L215,268 Z"
        fill="#6B3A12" />

      {/* Left wing upper feathers */}
      {[
        { x1: 85, y1: 128, x2: 55, y2: 148 },
        { x1: 45, y1: 178, x2: 62, y2: 222 },
        { x1: 62, y1: 222, x2: 90, y2: 248 },
        { x1: 90, y1: 248, x2: 148, y2: 268 },
        { x1: 148, y1: 268, x2: 202, y2: 252 },
      ].map((f, i) => (
        <path key={`rlw${i}`}
          d={`M${f.x1},${f.y1} Q${(f.x1 + f.x2) / 2 - 10},${(f.y1 + f.y2) / 2 - 8} ${f.x2},${f.y2}`}
          fill="none" stroke={`url(#${id}-rltips)`} strokeWidth={12} strokeOpacity={0.8} strokeLinecap="round" />
      ))}

      {/* Right wing RAISED */}
      <path d="M252,258 L415,128 L445,148 L395,168 L455,178 L400,196 L438,222 L378,212 L410,248 L345,232 L352,268 L298,252 L285,268 Z"
        fill="#6B3A12" />

      {/* Right wing upper feathers */}
      {[
        { x1: 415, y1: 128, x2: 445, y2: 148 },
        { x1: 455, y1: 178, x2: 438, y2: 222 },
        { x1: 438, y1: 222, x2: 410, y2: 248 },
        { x1: 410, y1: 248, x2: 352, y2: 268 },
        { x1: 352, y1: 268, x2: 298, y2: 252 },
      ].map((f, i) => (
        <path key={`rrw${i}`}
          d={`M${f.x1},${f.y1} Q${(f.x1 + f.x2) / 2 + 10},${(f.y1 + f.y2) / 2 - 8} ${f.x2},${f.y2}`}
          fill="none" stroke={`url(#${id}-rrtips)`} strokeWidth={12} strokeOpacity={0.8} strokeLinecap="round" />
      ))}

      {/* Body */}
      <ellipse cx="250" cy="295" rx="40" ry="65" fill={`url(#${id}-rbody)`} />

      {/* Tail fan */}
      <path d="M222,352 Q250,342 278,352 L272,398 Q250,408 228,398 Z" fill="#C8B090" />
      {Array.from({ length: 7 }, (_, i) => (
        <line key={`rt${i}`} x1={228 + i * 6.5} y1={352} x2={226 + i * 7.5} y2={396}
          stroke="#A89878" strokeWidth={1} strokeOpacity={0.5} />
      ))}

      {/* Talons */}
      <path d="M228,400 L218,424 L213,438 L224,434 L226,420 L234,432 L240,428 L238,415 L246,428 L252,424 Z"
        fill="#C8A820" fillOpacity={0.85} />
      <path d="M272,400 L282,424 L287,438 L276,434 L274,420 L266,432 L260,428 L262,415 L254,428 L252,424 Z"
        fill="#C8A820" fillOpacity={0.85} />

      {/* Neck */}
      <path d="M230,252 Q250,243 270,252 L266,275 Q250,268 234,275 Z" fill="#F0EAD8" />

      {/* Head - looking forward/up */}
      <ellipse cx="250" cy="234" rx="25" ry="23" fill="#F0EAD8" />

      {/* Beak */}
      <path d="M227,234 L195,243 L192,252 L227,248 Z" fill="#E8C840" />
      <path d="M227,248 L193,254 L195,262 L227,257 Z" fill="#C8A820" />

      {/* Eyes */}
      <circle cx="238" cy="229" r="7.5" fill="#1A0A00" />
      <circle cx="238" cy="229" r="5" fill="#FFB800" />
      <circle cx="238" cy="229" r="2.8" fill="#050200" />
      <circle cx="236" cy="227" r="1.3" fill="white" fillOpacity={0.85} />
      <motion.circle cx="238" cy="229" r="9" fill="none" stroke="#FFB800" strokeWidth={1.8} strokeOpacity={0.65}
        animate={{ r: [9, 13, 9], strokeOpacity: [0.65, 0.18, 0.65] }}
        transition={{ duration: 3.5, repeat: Infinity }} />

      {/* Tip glows */}
      {[
        { cx: 55, cy: 148, c: '#CC2200' }, { cx: 45, cy: 178, c: '#8833CC' },
        { cx: 62, cy: 222, c: '#1166DD' }, { cx: 445, cy: 148, c: '#CC2200' },
        { cx: 455, cy: 178, c: '#FF6600' }, { cx: 438, cy: 222, c: '#FFD700' },
      ].map((g, i) => (
        <motion.circle key={`rg${i}`} cx={g.cx} cy={g.cy} r={15}
          fill={g.c} fillOpacity={0.32} filter={`url(#${id}-rglow)`}
          animate={{ r: [15, 26, 15], fillOpacity: [0.32, 0.6, 0.32] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.35 }} />
      ))}

      <Sparkles count={22} color="#FFB800" spread={250} />
    </g>
  )
}

/* ─── Main export ─── */
export default function MajesticEagle({ view = 'soaring', size = 500, style, glowColor = '#FFB800' }: MajesticEagleProps) {
  const id = `eagle-${view}`

  const viewMap = {
    soaring: SoaringEagle,
    diving: DivingEagle,
    profile: ProfileEagle,
    rising: RisingEagle,
  }
  const EagleComponent = viewMap[view]

  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      {/* Outer atmospheric glow */}
      <div style={{
        position: 'absolute',
        inset: '5%',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${glowColor}08 0%, ${glowColor}03 40%, transparent 70%)`,
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      <motion.svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'relative',
          filter: `drop-shadow(0 0 30px ${glowColor}22) drop-shadow(0 0 80px ${glowColor}08)`,
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <EagleComponent id={id} />
      </motion.svg>
    </div>
  )
}
