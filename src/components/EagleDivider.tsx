import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface EagleDividerProps {
  image: string
  position?: string
  height?: string
  label?: string
  title?: string
  flip?: boolean
}

export default function EagleDivider({ image, position = 'center', height = '60vh', label, title, flip = false }: EagleDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    position === 'left' ? ['8%', '-4%'] : position === 'right' ? ['-8%', '4%'] : ['0%', '0%']
  )
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.0, 1.05])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        height,
        minHeight: '340px',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <motion.div style={{ position: 'absolute', inset: '-8%', x, scale }}>
        <img
          src={image}
          alt=""
          aria-hidden
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: position,
            filter: `brightness(0.45) contrast(1.2) saturate(1.35) ${flip ? 'scaleX(-1)' : ''}`,
            transform: flip ? 'scaleX(-1)' : 'none',
          }}
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.9) 100%)',
      }} />
      {/* Rainbow feather edge glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(255,100,0,0.04) 0%, transparent 70%)',
        mixBlendMode: 'screen',
      }} />

      {/* Text overlay */}
      {(label || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          {label && (
            <p style={{ fontFamily: 'Inter', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '1rem' }}>
              {label}
            </p>
          )}
          {title && (
            <h2 style={{
              fontFamily: 'Cinzel',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              textShadow: '0 0 60px rgba(0,0,0,0.8)',
            }}>
              {title}
            </h2>
          )}
        </motion.div>
      )}
    </div>
  )
}
