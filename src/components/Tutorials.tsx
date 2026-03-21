import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import TiltCard from './TiltCard'

type CardType = 'youtube' | 'vimeo-showcase' | 'instagram'

interface VideoCard {
  type: CardType
  id: string
  title: string
  url?: string
}

const cards: VideoCard[] = [
  { type: 'youtube', id: '6qaTTc3t-lc', title: 'Tutorial I' },
  { type: 'youtube', id: 'MThkKVZV97w', title: 'Tutorial II' },
  { type: 'youtube', id: '_G7BfytIf0A', title: 'Tutorial III' },
  { type: 'youtube', id: 'swOQ51clATE', title: 'Tutorial Hochbeete' },
  { type: 'youtube', id: 'BcOAszTAuPw', title: 'Tomatendach' },
  { type: 'youtube', id: '9soE7Tg5b4s', title: 'Präsentation Marina Frapa Rogoznica' },
  { type: 'vimeo-showcase', id: '12164911', title: 'Kampagnenspots · Showcase', url: 'https://vimeo.com/showcase/12164911' },
  { type: 'instagram', id: 'DQ9TYA-iJbB', title: 'Instagram', url: 'https://www.instagram.com/p/DQ9TYA-iJbB/' },
  { type: 'instagram', id: 'DU3HGUNCL6U', title: 'Instagram', url: 'https://www.instagram.com/p/DU3HGUNCL6U/' },
]

export default function Tutorials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section
      id="tutorials"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,184,0,0.3), transparent)' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label">Content & Kampagnen</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
            Tutorials &{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FFB800, #FF6600)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Kampagnenspots</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Von praxisnahen Tutorials bis hin zu kraftvollen Kampagnenspots —
            Content, der informiert, begeistert und konvertiert.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
            <TiltCard
              style={{
                position: 'relative',
                aspectRatio: card.type === 'instagram' ? '4/5' : '16/9',
                background: '#0a0a0a',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
              }}
            >
              {/* YouTube */}
              {card.type === 'youtube' && (
                <div style={{ position: 'absolute', inset: 0 }} onClick={() => setActiveVideo(activeVideo === card.id ? null : card.id)}>
                  {activeVideo === card.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${card.id}?autoplay=1&rel=0&modestbranding=1`}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${card.id}/maxresdefault.jpg`}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
                        onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${card.id}/hqdefault.jpg` }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          style={{
                            width: '52px', height: '52px', borderRadius: '50%',
                            background: 'rgba(255,184,0,0.92)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem', paddingLeft: '4px',
                            boxShadow: '0 0 30px rgba(255,184,0,0.3)',
                          }}
                        >▶</motion.div>
                      </div>
                      <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem' }}>
                        <span style={{ padding: '0.2rem 0.5rem', background: 'rgba(255,184,0,0.15)', border: '1px solid rgba(255,184,0,0.3)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter', color: '#FFB800', fontWeight: 600 }}>
                          {card.title}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Vimeo Showcase */}
              {card.type === 'vimeo-showcase' && (
                <a href={card.url} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', gap: '1rem', background: 'linear-gradient(135deg, #0a0a0a, #111)' }}>
                  <div style={{ fontSize: '3rem', opacity: 0.6 }}>🎬</div>
                  <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
                    <p style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', color: '#FFB800', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Kampagnenspots</p>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Alle Spots auf Vimeo ansehen →</p>
                  </div>
                  <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,184,0,0.15)', pointerEvents: 'none' }} />
                </a>
              )}

              {/* Instagram */}
              {card.type === 'instagram' && (
                <iframe
                  src={`https://www.instagram.com/p/${card.id}/embed/`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  scrolling="no"
                  allowTransparency
                />
              )}
            </TiltCard>
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
            Wir produzieren Content, der deine Zielgruppe wirklich erreicht
          </p>
          <a href="#contact" className="btn-primary">Projekt anfragen →</a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #tutorials .container > div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #tutorials .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
