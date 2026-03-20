import { motion } from 'framer-motion'

interface PunkEagleProps {
  size?: number
  animated?: boolean
  glitch?: boolean
  style?: React.CSSProperties
}

export default function PunkEagle({ size = 500, animated = true, glitch = true, style }: PunkEagleProps) {
  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      {/* Glitch layers */}
      {glitch && (
        <>
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            animate={{
              x: [0, -4, 3, -2, 0],
              opacity: [0, 0.5, 0, 0.3, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.02, 0.04, 0.06, 0.08], repeatDelay: 4 }}
          >
            <EagleSVG size={size} colorOverride="#FF4400" />
          </motion.div>
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            animate={{
              x: [0, 3, -2, 4, 0],
              opacity: [0, 0.4, 0, 0.25, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.02, 0.04, 0.06, 0.08], repeatDelay: 4, delay: 0.03 }}
          >
            <EagleSVG size={size} colorOverride="#1166DD" />
          </motion.div>
        </>
      )}

      {/* Main eagle */}
      <motion.div
        style={{ position: 'relative' }}
        animate={animated ? {
          y: [0, -12, 0],
          rotate: [-1, 1, -1],
        } : undefined}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <EagleSVG size={size} />
      </motion.div>

      {/* Scanlines overlay */}
      {glitch && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
          pointerEvents: 'none',
        }} />
      )}
    </div>
  )
}

function EagleSVG({ size, colorOverride }: { size: number; colorOverride?: string }) {
  const primary = colorOverride || '#E8E8E0'
  const gold = colorOverride || '#FFB800'
  const accent = colorOverride || '#FF6600'
  const blue = colorOverride || '#1863DC'
  const red = colorOverride ? colorOverride : '#CC2200'
  const purple = colorOverride || '#8833CC'
  const green = colorOverride || '#22AA44'

  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: colorOverride
          ? `drop-shadow(0 0 8px ${colorOverride})`
          : `drop-shadow(0 0 20px rgba(255,184,0,0.25)) drop-shadow(0 0 60px rgba(255,184,0,0.08))`,
      }}
    >
      {/* Outer glow ring */}
      {!colorOverride && (
        <motion.circle
          cx="250" cy="250" r="220"
          fill="none"
          stroke="rgba(255,184,0,0.06)"
          strokeWidth="1"
          animate={{ r: [220, 228, 220] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* === WINGS === */}
      {/* Left wing - main shape */}
      <path
        d="M250,240 L60,180 L30,200 L80,230 L20,240 L75,260 L40,285 L100,275 L70,310 L130,290 L115,325 L170,295 L175,330 L215,300 L220,260 Z"
        fill={primary}
        fillOpacity={colorOverride ? 0.6 : 0.88}
      />

      {/* Left wing feather layers with colors */}
      <path d="M250,245 L90,185 L60,210 L120,235 Z" fill={red} fillOpacity={0.7} />
      <path d="M250,250 L75,200 L40,228 L95,248 Z" fill={accent} fillOpacity={0.65} />
      <path d="M245,258 L55,225 L30,255 L80,265 Z" fill={gold} fillOpacity={0.6} />
      <path d="M235,270 L60,255 L38,283 L95,280 Z" fill={green} fillOpacity={0.55} />
      <path d="M225,282 L75,272 L50,300 L108,292 Z" fill={blue} fillOpacity={0.55} />
      <path d="M218,294 L95,285 L72,310 L130,302 Z" fill={purple} fillOpacity={0.5} />

      {/* Right wing - main shape */}
      <path
        d="M250,240 L440,180 L470,200 L420,230 L480,240 L425,260 L460,285 L400,275 L430,310 L370,290 L385,325 L330,295 L325,330 L285,300 L280,260 Z"
        fill={primary}
        fillOpacity={colorOverride ? 0.6 : 0.88}
      />

      {/* Right wing feather layers */}
      <path d="M250,245 L410,185 L440,210 L380,235 Z" fill={red} fillOpacity={0.7} />
      <path d="M250,250 L425,200 L460,228 L405,248 Z" fill={accent} fillOpacity={0.65} />
      <path d="M255,258 L445,225 L470,255 L420,265 Z" fill={gold} fillOpacity={0.6} />
      <path d="M265,270 L440,255 L462,283 L405,280 Z" fill={green} fillOpacity={0.55} />
      <path d="M275,282 L425,272 L450,300 L392,292 Z" fill={blue} fillOpacity={0.55} />
      <path d="M282,294 L405,285 L428,310 L370,302 Z" fill={purple} fillOpacity={0.5} />

      {/* === BODY === */}
      <ellipse cx="250" cy="290" rx="55" ry="75" fill={primary} fillOpacity={colorOverride ? 0.7 : 0.92} />
      {/* Body detail lines - punk/angular */}
      <line x1="230" y1="260" x2="250" y2="350" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <line x1="270" y1="260" x2="250" y2="350" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <path d="M225,280 L275,280" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
      <path d="M220,295 L280,295" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
      <path d="M222,310 L278,310" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />

      {/* === HEAD === */}
      {/* Neck */}
      <path d="M225,230 Q250,215 275,230 L270,265 Q250,260 230,265 Z" fill={primary} fillOpacity={colorOverride ? 0.8 : 1} />

      {/* Head - angular/punk shape */}
      <path
        d="M210,195 L222,160 L240,148 L260,148 L278,160 L290,195 L285,220 Q250,235 215,220 Z"
        fill={primary}
        fillOpacity={colorOverride ? 0.8 : 1}
      />

      {/* Punk crest / mohawk lines */}
      {!colorOverride && (
        <>
          <path d="M245,148 L238,125 L255,115 L272,125 L265,148" fill={gold} fillOpacity={0.9} />
          <line x1="255" y1="115" x2="248" y2="95" stroke={gold} strokeWidth="2" strokeOpacity={0.8} />
          <line x1="255" y1="115" x2="262" y2="90" stroke={accent} strokeWidth="1.5" strokeOpacity={0.7} />
          <line x1="255" y1="115" x2="255" y2="85" stroke={red} strokeWidth="2" strokeOpacity={0.9} />
        </>
      )}

      {/* Beak - sharp angular */}
      <path d="M210,195 L175,205 L170,215 L210,210 Z" fill={gold} fillOpacity={colorOverride ? 0.8 : 1} />
      <path d="M210,210 L172,218 L175,225 L210,220 Z" fill={colorOverride || '#CC8800'} fillOpacity={colorOverride ? 0.8 : 1} />
      {/* Beak highlight */}
      <line x1="210" y1="210" x2="172" y2="218" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

      {/* === EYES === */}
      {/* Eye socket */}
      <ellipse cx="232" cy="188" rx="14" ry="13" fill={colorOverride || '#0a0a0a'} />
      {/* Iris */}
      <motion.circle
        cx="232" cy="188" r="9"
        fill={colorOverride || '#FFB800'}
        animate={!colorOverride ? { r: [9, 9.5, 9] } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Pupil */}
      <ellipse cx="232" cy="188" rx="5" ry="6" fill={colorOverride || '#000'} />
      {/* Eye reflection - punk style */}
      {!colorOverride && (
        <>
          <rect x="228" y="184" width="3" height="5" fill="white" fillOpacity={0.6} rx="1" />
          <rect x="233" y="186" width="1.5" height="2" fill="white" fillOpacity={0.3} rx="0.5" />
        </>
      )}
      {/* Eye ring - neon */}
      <circle cx="232" cy="188" r="13" fill="none" stroke={colorOverride || accent} strokeWidth="1.2" strokeOpacity={0.6} />

      {/* === TALONS / FEET === */}
      <path d="M230,358 L220,380 L215,395 L225,392 L228,378 L235,395 L240,395 L238,378 L245,393 L250,392 L248,375 Z"
        fill={colorOverride || '#CC8800'} fillOpacity={colorOverride ? 0.7 : 0.9} />
      <path d="M270,358 L280,380 L285,395 L275,392 L272,378 L265,395 L260,395 L262,378 L255,393 L250,392 L252,375 Z"
        fill={colorOverride || '#CC8800'} fillOpacity={colorOverride ? 0.7 : 0.9} />

      {/* === PUNK DETAILS === */}
      {/* Angular chest stripe */}
      {!colorOverride && (
        <>
          <path d="M240,265 L260,265 L268,310 L232,310 Z" fill="rgba(255,255,255,0.06)" />
          {/* Neon outline accent */}
          <path
            d="M210,195 L175,205 L170,215 L210,210"
            fill="none"
            stroke={gold}
            strokeWidth="0.5"
            strokeOpacity={0.4}
          />
          {/* Energy lines from eyes */}
          <motion.line
            x1="218" y1="188" x2="190" y2="182"
            stroke={accent}
            strokeWidth="0.8"
            strokeOpacity={0.5}
            animate={{ strokeOpacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </>
      )}

      {/* Wing edge neon glow lines */}
      {!colorOverride && (
        <>
          <path d="M250,240 L60,180" fill="none" stroke={red} strokeWidth="0.6" strokeOpacity={0.5} />
          <path d="M250,240 L440,180" fill="none" stroke={red} strokeWidth="0.6" strokeOpacity={0.5} />
          <path d="M250,260 L20,242" fill="none" stroke={blue} strokeWidth="0.5" strokeOpacity={0.35} />
          <path d="M250,260 L480,242" fill="none" stroke={blue} strokeWidth="0.5" strokeOpacity={0.35} />
        </>
      )}
    </svg>
  )
}
