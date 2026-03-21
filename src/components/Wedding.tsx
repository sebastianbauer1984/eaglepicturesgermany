import { motion, useInView } from 'framer-motion'
import TiltCard from './TiltCard'
import { useRef, useState } from 'react'

import w01 from '../assets/images/wedding/w01.jpg'
import w02 from '../assets/images/wedding/w02.jpg'
import w03 from '../assets/images/wedding/w03.jpg'
import w04 from '../assets/images/wedding/w04.jpg'
import w05 from '../assets/images/wedding/w05.jpg'
import w06 from '../assets/images/wedding/w06.jpg'
import w07 from '../assets/images/wedding/w07.jpg'
import w08 from '../assets/images/wedding/w08.jpg'
import w09 from '../assets/images/wedding/w09.jpg'
import w10 from '../assets/images/wedding/w10.jpg'
import w11 from '../assets/images/wedding/w11.jpg'
import w12 from '../assets/images/wedding/w12.jpg'
import w13 from '../assets/images/wedding/w13.jpg'
import w14 from '../assets/images/wedding/w14.jpg'
import w15 from '../assets/images/wedding/w15.jpg'
import w16 from '../assets/images/wedding/w16.jpg'
import w17 from '../assets/images/wedding/w17.jpg'
import w18 from '../assets/images/wedding/w18.jpg'

const photos = [w01,w02,w03,w04,w05,w06,w07,w08,w09,w10,w11,w12,w13,w14,w15,w16,w17,w18]

const videos = [
  { id: '779673967', title: 'Hochzeitsfilm I' },
  { id: '104961618', title: 'Hochzeitsfilm II' },
  { id: '137709344', title: 'Hochzeitsfilm III' },
]

export default function Wedding() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section
      id="wedding"
      ref={ref}
      style={{ padding: '8rem 0', background: '#040404', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle top gradient */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,184,0,0.4), transparent)' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label">Hochzeitsfilme</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
            <span style={{
                background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Exklusive</span> Hochzeitsfilme
          </h2>
          <p style={{ fontFamily: 'Cinzel', fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#FFB800', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>
            für den schönsten Tag deines Lebens
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Jede Hochzeit ist einzigartig — wir halten eure Geschichte in Kino-Qualität fest.
            Musik, Emotion, unvergessliche Momente. Ein Film, der euch ein Leben lang begleitet.
          </p>
        </motion.div>

        {/* Featured YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <div
            style={{ position: 'relative', aspectRatio: '16/9', background: '#0a0a0a', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,184,0,0.2)', boxShadow: '0 0 60px rgba(255,184,0,0.08)' }}
            onClick={() => setActiveVideo(activeVideo === 'qIbdeh-ajyE' ? null : 'qIbdeh-ajyE')}
          >
            {activeVideo === 'qIbdeh-ajyE' ? (
              <iframe
                src="https://www.youtube.com/embed/qIbdeh-ajyE?autoplay=1&rel=0&modestbranding=1"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src="https://img.youtube.com/vi/qIbdeh-ajyE/maxresdefault.jpg"
                  alt="Hochzeitsfilm Showreel – EAGLE PICTURES®"
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/qIbdeh-ajyE/hqdefault.jpg' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(255,184,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', paddingLeft: '6px', boxShadow: '0 0 50px rgba(255,184,0,0.4)' }}
                  >▶</motion.div>
                  <p style={{ fontFamily: 'Cinzel', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Hochzeitsfilm Showreel</p>
                </div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.3rem 0.8rem', background: 'rgba(255,184,0,0.15)', border: '1px solid rgba(255,184,0,0.4)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter', color: '#FFB800', fontWeight: 700 }}>
                  Featured
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {videos.map((v) => (
            <div
              key={v.id}
              style={{ position: 'relative', aspectRatio: '16/9', background: '#0a0a0a', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)' }}
              onClick={() => setActiveVideo(activeVideo === v.id ? null : v.id)}
            >
              {activeVideo === v.id ? (
                <iframe
                  src={`https://player.vimeo.com/video/${v.id}?autoplay=1&color=FFB800&title=0&byline=0&portrait=0`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={`https://vumbnail.com/${v.id}.jpg`}
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.35)',
                  }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      background: 'rgba(255,184,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem', paddingLeft: '4px',
                    }}>▶</div>
                    <p style={{ fontFamily: 'Cinzel', fontSize: '0.75rem', color: '#fff', marginTop: '0.75rem', letterSpacing: '0.1em' }}>{v.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </motion.div>

        {/* Showcase link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <a
            href="https://vimeo.com/showcase/9055495"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
          >
            ▶ Alle Hochzeitsfilme auf Vimeo ansehen
          </a>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            columns: '4 200px',
            columnGap: '0.75rem',
          }}
        >
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.5 }}
              style={{ marginBottom: '0.75rem', breakInside: 'avoid' }}
            >
              <TiltCard
                intensity={7}
                onClick={() => setLightbox(src)}
                style={{ overflow: 'hidden', cursor: 'pointer' }}
              >
                <img
                  src={src}
                  alt={`Hochzeitsfilm Galeriebild ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    display: 'block',
                    filter: 'brightness(0.9) contrast(1.05)',
                    transition: 'filter 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1) contrast(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.9) contrast(1.05)')}
                />
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Euer perfekter Hochzeitsfilm — maßgeschneidert für euren besonderen Tag
          </p>
          <a href="#contact" className="btn-primary">Hochzeitsfilm anfragen →</a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <img src={lightbox} alt="Hochzeitsfilm Vollbild" decoding="async" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} />
          <button
            onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' }}
          >✕</button>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #wedding .container > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
