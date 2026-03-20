import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import awiEye from '../assets/images/awi-eye.jpg'

export default function EyeSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.0, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '80vh',
        minHeight: '500px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Eye image — full bleed */}
      <motion.div style={{ position: 'absolute', inset: '-10%', scale }}>
        <img
          src={awiEye}
          alt=""
          aria-hidden
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.55) contrast(1.2) saturate(1.1)',
          }}
        />
      </motion.div>

      {/* Dark overlay gradients */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.85) 100%),
          linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.5) 100%)
        `,
      }} />

      {/* Centered text */}
      <motion.div
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', y: textY }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p style={{
          fontFamily: 'Inter',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: '#FFB800',
          marginBottom: '1.2rem',
        }}>
          The Eagle Sees Everything
        </p>
        <h2 style={{
          fontFamily: 'Cinzel',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          textShadow: '0 0 80px rgba(255,184,0,0.3)',
        }}>
          Gib deinem Film<br />eine <span style={{
            background: 'linear-gradient(90deg, #FFB800, #FF6600)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>STORY</span>
        </h2>

        {/* Animated ring around the eye concept */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '1px solid rgba(255,184,0,0.3)',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid rgba(255,184,0,0.15)',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />
      </motion.div>
    </section>
  )
}
