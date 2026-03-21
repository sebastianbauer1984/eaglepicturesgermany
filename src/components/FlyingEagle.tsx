import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import eagleImg from '../assets/images/eagle-schema.png'

type FlightState = 'hidden' | 'flying'

export default function FlyingEagle() {
  const [state, setState] = useState<FlightState>('hidden')
  const [pos, setPos] = useState({ x: 2000, y: 120 })
  const [flightKey, setFlightKey] = useState(0)
  const mounted = useRef(true)

  const launchEagle = () => {
    if (!mounted.current) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const startY = vh * (0.04 + Math.random() * 0.22)
    setPos({ x: vw + 560, y: startY })
    setState('flying')
    setFlightKey(k => k + 1)
  }

  useEffect(() => {
    mounted.current = true
    const t = setTimeout(launchEagle, 8000 + Math.random() * 8000)
    return () => {
      mounted.current = false
      clearTimeout(t)
    }
  }, [])

  const handleComplete = () => {
    setState('hidden')
    setTimeout(launchEagle, 20000 + Math.random() * 20000)
  }

  if (state === 'hidden') return null

  const endX = -560

  return (
    <motion.div
      key={flightKey}
      initial={{ x: pos.x, y: pos.y, opacity: 0 }}
      animate={{
        x: endX,
        // gentle soaring wave
        y: [pos.y, pos.y - 18, pos.y + 12, pos.y - 8, pos.y + 6, pos.y],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 30,
        ease: 'linear',
        x: { duration: 30, ease: 'linear' },
        y: { duration: 30, ease: 'easeInOut', times: [0, 0.2, 0.45, 0.65, 0.85, 1] },
        opacity: { times: [0, 0.04, 0.5, 0.93, 1], ease: 'easeInOut', duration: 30 },
      }}
      onAnimationComplete={handleComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 55,
        pointerEvents: 'none',
      }}
    >
      <img
        src={eagleImg}
        alt=""
        style={{
          width: '480px',
          height: 'auto',
          filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5)) drop-shadow(0 2px 8px rgba(255,184,0,0.12))',
          display: 'block',
        }}
      />
    </motion.div>
  )
}
