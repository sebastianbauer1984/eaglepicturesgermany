import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import TiltCard from './TiltCard'

type Platform = 'youtube' | 'vimeo'

interface VideoCard {
  platform: Platform
  id: string
  hash?: string
  title: string
  thumbnail?: string
}

const cards: VideoCard[] = [
  { platform: 'youtube', id: 'oi15fho-sFw',  title: 'Event I',
    thumbnail: 'https://img.youtube.com/vi/oi15fho-sFw/hqdefault.jpg' },
  { platform: 'vimeo',   id: '788413711',    title: 'Event II',
    thumbnail: 'https://i.vimeocdn.com/video/1585525231-4676d801697a4a990985f5b4aeee426b680a177507c865790ee6801dd3bf665b-d_640x360?region=us' },
  { platform: 'youtube', id: 'GzgXfrm7NVI',  title: 'Event III',
    thumbnail: 'https://img.youtube.com/vi/GzgXfrm7NVI/hqdefault.jpg' },
  { platform: 'vimeo',   id: '1164437469',   title: 'Event IV',
    thumbnail: 'https://i.vimeocdn.com/video/2121073919-cba00ab62a298ee05ab93b696582d49b3d695fc24b54acae43fff9adba5652ab-d_640x360?region=us' },
  { platform: 'vimeo',   id: '1093508279',   hash: 'efb81eddc5', title: 'Charly Gitanos · Flamenco',
    thumbnail: 'https://i.vimeocdn.com/video/2136223717-12db5de4c60ab46b2653a44414c309df92e78c030930a664fac1577f183a5f3f-d_640x360?region=us' },
  { platform: 'youtube', id: 'njW7KFvhIjc',  title: 'Event VI',
    thumbnail: 'https://img.youtube.com/vi/njW7KFvhIjc/hqdefault.jpg' },
]

export default function Events() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  function getEmbedUrl(card: VideoCard) {
    if (card.platform === 'youtube') {
      return `https://www.youtube.com/embed/${card.id}?autoplay=1&rel=0&modestbranding=1`
    }
    const hash = card.hash ? `?h=${card.hash}&autoplay=1&color=FFB800&title=0&byline=0&portrait=0` : '?autoplay=1&color=FFB800&title=0&byline=0&portrait=0'
    return `https://player.vimeo.com/video/${card.id}${hash}`
  }

  function getThumbnail(card: VideoCard) {
    return card.thumbnail || ''
  }

  return (
    <section
      id="events"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #060606 0%, #000 50%, #060606 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,184,0,0.3), transparent)' }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(24,99,220,0.05) 0%, transparent 70%)',
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
          <p className="section-label">Live & Entertainment</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
            Events &{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FFB800, #FF6600, #CC2200)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Entertainment</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Konzerte, Galas, Sportevents, Kulturveranstaltungen — wir halten die Energie
            des Moments in cineastischer Qualität fest.
          </p>
        </motion.div>

        {/* Video Grid */}
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
              onClick={() => setActiveVideo(activeVideo === card.id ? null : card.id)}
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: '#0a0a0a',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
              }}
            >
              {activeVideo === card.id ? (
                <iframe
                  src={getEmbedUrl(card)}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {getThumbnail(card) ? (
                    <img
                      src={getThumbnail(card)}
                      alt={card.title}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.6) contrast(1.05)',
                      }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  ) : (
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #111 0%, #0a0a0a 100%)' }} />
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />

                  {/* Play button */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      style={{
                        width: '52px', height: '52px', borderRadius: '50%',
                        background: 'rgba(255,184,0,0.92)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem', paddingLeft: '4px',
                        boxShadow: '0 0 30px rgba(255,184,0,0.3)',
                      }}
                    >▶</motion.div>
                  </div>

                  {/* Platform badge + label */}
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span style={{
                      padding: '0.2rem 0.5rem',
                      background: card.platform === 'vimeo' ? 'rgba(26,183,234,0.15)' : 'rgba(255,0,0,0.15)',
                      border: `1px solid ${card.platform === 'vimeo' ? 'rgba(26,183,234,0.3)' : 'rgba(255,0,0,0.3)'}`,
                      fontSize: '0.58rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'Inter',
                      color: card.platform === 'vimeo' ? '#1ab7ea' : '#ff4444',
                      fontWeight: 600,
                    }}>
                      {card.platform === 'vimeo' ? 'Vimeo' : 'YouTube'}
                    </span>
                    <span style={{ padding: '0.2rem 0.5rem', background: 'rgba(255,184,0,0.12)', border: '1px solid rgba(255,184,0,0.25)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter', color: '#FFB800', fontWeight: 600 }}>
                      Eagle Pictures
                    </span>
                  </div>
                </>
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
            Dein Event verdient mehr als ein Handyvideo
          </p>
          <a href="#contact" className="btn-primary">Event anfragen →</a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #events .container > div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #events .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
