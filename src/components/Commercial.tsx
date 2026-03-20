import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const videos = [
  { id: 'momyVKn8qfY', title: 'Commercial I' },
  { id: 'xNoHLcm-448', title: 'Commercial II' },
  { id: 'opf4wtOwc7M', title: 'Commercial III' },
  { id: 'H-buYue0DNI', title: 'Commercial IV' },
  { id: 'KlEBdA7qvlY', title: 'Commercial V' },
  { id: 'ZMgOiUqibok', title: 'Commercial VI' },
]

export default function Commercial() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section
      id="commercial"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #060606 0%, #000 50%, #060606 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top divider line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,184,0,0.4), transparent)' }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,100,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label">Werbefilme</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
            Der Commercial,<br />
            <span style={{
              background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>der sich abhebt</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Werbefilme auf Kino-Niveau — emotional, unverwechselbar, wirkungsvoll.
            Wir erzählen die Geschichte deiner Marke so, dass sie im Gedächtnis bleibt.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: '#0a0a0a',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onClick={() => setActiveVideo(activeVideo === v.id ? null : v.id)}
              whileHover={{ scale: 1.02 }}
            >
              {activeVideo === v.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                    alt={v.title}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.65) contrast(1.05)',
                      transition: 'filter 0.3s ease',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`
                    }}
                  />

                  {/* Overlay gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                  }} />

                  {/* Play button */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '0.75rem',
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: '52px', height: '52px', borderRadius: '50%',
                        background: 'rgba(255,184,0,0.92)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem', paddingLeft: '4px',
                        boxShadow: '0 0 30px rgba(255,184,0,0.3)',
                      }}
                    >
                      ▶
                    </motion.div>
                  </div>

                  {/* Bottom label */}
                  <div style={{
                    position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                    <span style={{
                      padding: '0.2rem 0.5rem',
                      background: 'rgba(255,184,0,0.15)',
                      border: '1px solid rgba(255,184,0,0.3)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'Inter',
                      color: '#FFB800',
                      fontWeight: 600,
                    }}>
                      Eagle Pictures
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Bereit für einen Commercial, der deine Marke unvergesslich macht?
          </p>
          <a href="#contact" className="btn-primary">Commercial anfragen →</a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #commercial .container > div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #commercial .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
