import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import FallingFeathers from './FallingFeathers'

import laurelGlobalShorts from '../assets/images/laurels/laurel-globalshorts.png'
import laurelTopShorts from '../assets/images/laurels/laurel-topshorts.png'
import laurelLaca from '../assets/images/laurels/laurel-laca.png'
import laurelNyca from '../assets/images/laurels/laurel-nyca.png'
import laurelRed from '../assets/images/laurels/laurel-red.png'
import laurelCine from '../assets/images/laurels/laurel-cine.png'
import laurelIce from '../assets/images/laurels/laurel-ice.png'
import laurelMilan from '../assets/images/laurels/laurel-milan.png'
import laurelRome2 from '../assets/images/laurels/laurel-rome2.png'
import laurelSwedish from '../assets/images/laurels/laurel-swedish.png'

import sebastianPortrait from '../assets/images/sebastian-portrait.jpg'
import sebastianCamera from '../assets/images/sebastian-camera.jpg'
import makingOf from '../assets/images/making-of.jpg'
import kornatiAerial from '../assets/images/kornati-aerial.jpg'
import award from '../assets/images/award.jpg'

const slides = [
  {
    img: sebastianPortrait,
    label: 'Director & Filmmaker',
    caption: 'Sebastian Bauer',
    objectPos: 'center 35%',
    filter: 'brightness(0.82) contrast(1.1) saturate(0.9)',
  },
  {
    img: sebastianCamera,
    label: 'On Set',
    caption: 'Behind the Lens',
    objectPos: 'center center',
    filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
  },
  {
    img: makingOf,
    label: 'Making Of · hoplove',
    caption: 'Cinema in Action',
    objectPos: 'center center',
    filter: 'brightness(0.65) contrast(1.1) saturate(1.05)',
  },
  {
    img: kornatiAerial,
    label: 'Kornati Islands · Drone',
    caption: 'Award Winning Cinematography',
    objectPos: 'center 40%',
    filter: 'brightness(0.7) contrast(1.1) saturate(1.15)',
  },
  {
    img: award,
    label: 'RED Movie Awards',
    caption: 'Best Drone · Sebastian Bauer',
    objectPos: 'center center',
    filter: 'brightness(0.72) contrast(1.1) saturate(0.95)',
  },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.65], [0, 1])

  // Mouse tracking for 3D title
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-10, 10]), { stiffness: 100, damping: 30 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  function goTo(idx: number) {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const slide = slides[current]

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* ── Carousel image ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60, scale: 1.04 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '62%',
            zIndex: 1,
          }}
        >
          <img
            src={slide.img}
            alt={slide.caption}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: slide.objectPos,
              display: 'block',
              filter: slide.filter,
            }}
          />
          {/* Gradient to blend into black on left */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.35) 100%),
              linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 75%, rgba(0,0,0,0.8) 100%)
            `,
          }} />

          {/* Slide caption badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '5rem',
              right: '2rem',
              textAlign: 'right',
            }}
          >
            <p style={{ fontFamily: 'Inter', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '0.3rem', fontWeight: 600 }}>
              {slide.label}
            </p>
            <p style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em' }}>
              {slide.caption}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Falling feathers */}
      <FallingFeathers count={12} zIndex={2} opacity={0.65} minSize={40} maxSize={88} />

      {/* Scroll overlay */}
      <motion.div style={{ position: 'absolute', inset: 0, background: '#000', opacity: overlayOpacity, zIndex: 3, pointerEvents: 'none' }} />

      {/* ── Text content ── */}
      <motion.div
        className="hero-text"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '620px',
          padding: '0 2rem 0 max(2rem, 7vw)',
          y: textY,
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.8rem' }}
        >
          <div style={{ width: '36px', height: '1px', background: '#FFB800' }} />
          <span style={{ fontFamily: 'Inter', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#FFB800' }}>
            German Film Production
          </span>
        </motion.div>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 600,
            marginBottom: '0.5rem',
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {(['WE', 'VISUALIZE', 'YOU'] as const).map((word, i) => (
              <div key={word} style={{ overflow: 'hidden', marginBottom: '0.15rem' }}>
                <motion.h1
                  initial={{ y: 90 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.85 + i * 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 'clamp(1.8rem, 7vw, 4rem)',
                    fontWeight: 900,
                    lineHeight: 0.93,
                    letterSpacing: '-0.025em',
                    transformStyle: 'preserve-3d',
                    ...(word === 'VISUALIZE' ? {
                      background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 40%, #CC2200 70%, #8833CC 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(2px 4px 12px rgba(255,100,0,0.35))',
                    } : {
                      textShadow: '2px 4px 20px rgba(0,0,0,0.5)',
                    }),
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.55)', maxWidth: '430px', margin: '2rem 0 2.5rem', fontWeight: 300, lineHeight: 1.9, fontFamily: 'Inter' }}
        >
          Kino-Niveau trifft Innovation. RED Camera, Musikkomposition, professionelles Sounddesign.
          <span style={{ color: '#FFB800' }}> Jedes Projekt ein Unikat.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#contact" className="btn-primary">Projekt starten</a>
          <a href="#services" className="btn-outline">Leistungen entdecken</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}
        >
          {[{ v: 'RED', l: 'Cinema Camera' }, { v: '4K+', l: 'Ultra HD' }, { v: '2×', l: 'Award Winner' }, { v: 'AI', l: 'Film Coach' }].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 700, color: '#FFB800', lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: '0.3rem', fontFamily: 'Inter' }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Carousel dots ── */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        right: '2rem',
        display: 'flex',
        gap: '0.6rem',
        zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === current ? '#FFB800' : 'rgba(255,255,255,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        key={current}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5, ease: 'linear' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #FFB800, #FF6600)',
          transformOrigin: 'left',
          zIndex: 10,
        }}
      />

      {/* ── Laurel Strip ── */}
      <div className="laurel-strip" style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: 0,
        right: 0,
        zIndex: 6,
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,184,0,0.15)',
        borderBottom: '1px solid rgba(255,184,0,0.15)',
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(8px)',
        padding: '1.2rem 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', animation: 'laurelScroll 36s linear infinite', width: 'max-content' }}>
          {[laurelGlobalShorts, laurelTopShorts, laurelLaca, laurelNyca, laurelRed, laurelCine, laurelIce, laurelMilan, laurelRome2, laurelSwedish,
            laurelGlobalShorts, laurelTopShorts, laurelLaca, laurelNyca, laurelRed, laurelCine, laurelIce, laurelMilan, laurelRome2, laurelSwedish].map((src, i) => (
            <div key={i} style={{ width: '160px', height: '120px', flexShrink: 0, margin: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={src}
                alt="Festival Award Laurel"
                loading="lazy"
                decoding="async"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none', zIndex: 5 }} />

      <style>{`
        @media (max-width: 900px) {
          #hero {
            align-items: flex-start !important;
          }
          #hero .hero-text {
            padding-top: 100px !important;
          }
          #hero .laurel-strip {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
