import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  intensity?: number
  onClick?: () => void
}

export default function TiltCard({ children, style, className, intensity = 12, onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -intensity
    const rotateY = ((x - cx) / cx) * intensity
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100
    setTransform({ rotateX, rotateY, glareX, glareY })
  }

  function handleMouseLeave() {
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: hovered ? 1.03 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        perspective: 800,
        position: 'relative',
        willChange: 'transform',
      }}
    >
      {children}

      {/* Glare overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.08) 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
    </motion.div>
  )
}
