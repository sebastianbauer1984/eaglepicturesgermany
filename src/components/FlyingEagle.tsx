import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

function EagleSVG() {
  return (
    <svg
      viewBox="0 0 320 110"
      width="280"
      height="96"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 4px 24px rgba(255,184,0,0.18))' }}
    >
      {/* Body */}
      <ellipse cx="160" cy="56" rx="32" ry="11" fill="rgba(255,255,255,0.92)" />

      {/* Head */}
      <ellipse cx="186" cy="46" rx="13" ry="11" fill="rgba(255,255,255,0.92)" />

      {/* Beak */}
      <path d="M197,48 Q208,53 197,57 Z" fill="rgba(255,184,0,0.9)" />

      {/* Eye */}
      <circle cx="190" cy="45" r="2.5" fill="#111" />
      <circle cx="191" cy="44" r="0.8" fill="rgba(255,255,255,0.6)" />

      {/* === LEFT WING === */}
      <motion.g
        style={{ transformOrigin: '152px 58px' }}
        animate={{ rotate: [-12, 14, -12] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
      >
        {/* Upper wing coverts */}
        <path
          d="M152,58 Q118,42 80,34 Q50,28 16,38 Q50,44 90,50 Q122,55 148,60 Z"
          fill="rgba(255,255,255,0.92)"
        />
        {/* Primary feathers */}
        <path
          d="M148,60 Q118,56 90,50 Q50,44 16,38 Q44,54 84,62 Q116,68 150,64 Z"
          fill="rgba(230,220,200,0.75)"
        />
        {/* Wing tip feathers */}
        <path d="M16,38 L4,36 L14,44 Z" fill="rgba(255,255,255,0.7)" />
        <path d="M22,35 L10,30 L20,40 Z" fill="rgba(255,255,255,0.65)" />
        <path d="M30,32 L18,27 L27,38 Z" fill="rgba(255,255,255,0.6)" />
      </motion.g>

      {/* === RIGHT WING === */}
      <motion.g
        style={{ transformOrigin: '168px 58px' }}
        animate={{ rotate: [12, -14, 12] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
      >
        {/* Upper wing coverts */}
        <path
          d="M168,58 Q202,42 240,34 Q270,28 304,38 Q270,44 230,50 Q198,55 172,60 Z"
          fill="rgba(255,255,255,0.92)"
        />
        {/* Primary feathers */}
        <path
          d="M172,60 Q202,56 230,50 Q270,44 304,38 Q276,54 236,62 Q204,68 170,64 Z"
          fill="rgba(230,220,200,0.75)"
        />
        {/* Wing tip feathers */}
        <path d="M304,38 L316,36 L306,44 Z" fill="rgba(255,255,255,0.7)" />
        <path d="M298,35 L310,30 L300,40 Z" fill="rgba(255,255,255,0.65)" />
        <path d="M290,32 L302,27 L293,38 Z" fill="rgba(255,255,255,0.6)" />
      </motion.g>

      {/* Tail feathers */}
      <path
        d="M142,66 Q136,90 128,104 Q145,90 160,96 Q175,90 192,104 Q184,90 178,66 Z"
        fill="rgba(255,255,255,0.85)"
      />
      <path d="M150,66 Q148,88 144,100 Q155,88 160,92 Z" fill="rgba(220,210,195,0.5)" />
      <path d="M170,66 Q172,88 176,100 Q165,88 160,92 Z" fill="rgba(220,210,195,0.5)" />
    </svg>
  )
}

export default function FlyingEagle() {
  const controls = useAnimation()
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true

    const scheduleNext = async () => {
      if (!mounted.current) return

      // Random delay: 18–40 seconds between appearances
      const delay = 18000 + Math.random() * 22000
      await new Promise(r => setTimeout(r, delay))
      if (!mounted.current) return

      const vw = window.innerWidth
      const vh = window.innerHeight

      // Random vertical position: upper third of screen
      const startY = vh * (0.08 + Math.random() * 0.18)
      const midY   = startY + (Math.random() * 60 - 30)
      const endY   = startY + (Math.random() * 40 - 20)

      await controls.start({
        x: [vw + 300, vw * 0.5, -320],
        y: [startY, midY, endY],
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 9 + Math.random() * 4,
          ease: 'linear',
          x: { ease: 'linear' },
          y: { times: [0, 0.5, 1], ease: 'easeInOut' },
          opacity: { times: [0, 0.08, 0.88, 1], ease: 'easeInOut' },
        },
      })

      if (mounted.current) scheduleNext()
    }

    scheduleNext()
    return () => { mounted.current = false }
  }, [controls])

  return (
    <motion.div
      animate={controls}
      initial={{ x: typeof window !== 'undefined' ? window.innerWidth + 300 : 2000, y: 120, opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 55,
        pointerEvents: 'none',
      }}
    >
      <EagleSVG />
    </motion.div>
  )
}
