import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticCursor() {
  // No custom cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [clicked, setClicked] = useState(false)
  const [hoveringLink, setHoveringLink] = useState(false)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 35 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35 })

  const trailX = useSpring(cursorX, { stiffness: 120, damping: 20, mass: 1 })
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 20, mass: 1 })

  const rafRef = useRef<number>(0)

  useEffect(() => {
    function move(e: MouseEvent) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      })

      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select') !== null
      setHoveringLink(isInteractive)
    }

    function down() { setClicked(true) }
    function up() { setClicked(false) }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Trail dot */}
      <motion.div
        animate={{ scale: hoveringLink ? 1.8 : clicked ? 0.7 : 1 }}
        transition={{ duration: 0.15 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `1px solid ${hoveringLink ? 'rgba(255,184,0,0.6)' : 'rgba(255,255,255,0.2)'}`,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: hoveringLink ? '#FFB800' : '#fff',
          pointerEvents: 'none',
          zIndex: 10000,
          scale: clicked ? 0.5 : 1,
          transition: 'background 0.2s, scale 0.1s',
        }}
      />

      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  )
}
