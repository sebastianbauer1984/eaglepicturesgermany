import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const episodes = [
  {
    id: 1,
    title: 'Episode 1',
    youtubeId: 'KVwg4ZbvfxI',
  },
]

export default function TalesOfASkipper() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="tales-of-a-skipper" style={{ padding: '8rem 0', background: '#04080f' }}>
      <div className="container">
        {/* Banner */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <img
            src="/tales-of-a-skipper-banner.jpg"
            alt="Tales of a Skipper"
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '4px',
            }}
          />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-label">YouTube Series</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Alle{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00aaff 0%, #0066cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Folgen
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300 }}>
            Neue Folgen erscheinen regelmäßig auf YouTube. Abonniere den Kanal, um keine Episode zu verpassen.
          </p>
        </motion.div>

        {/* Episodes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem',
        }}>
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.id} episode={ep} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tales-of-a-skipper .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function EpisodeCard({ episode, index }: { episode: typeof episodes[0]; index: number }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const thumbnail = `https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        background: '#0a0f1a',
      }}
    >
      {/* Video / Thumbnail */}
      <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000', cursor: 'pointer' }}
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <>
            <img
              src={thumbnail}
              alt={episode.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85)' }}
            />
            {/* Play Button */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255,0,0,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 24px rgba(255,0,0,0.4)',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '1.25rem 1.5rem' }}>
        <span style={{
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#00aaff',
          fontFamily: 'Inter',
          fontWeight: 600,
        }}>
          Tales of a Skipper
        </span>
        <h3 style={{
          fontFamily: 'Cinzel',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#fff',
          marginTop: '0.35rem',
        }}>
          {episode.title}
        </h3>
        <a
          href={`https://youtu.be/${episode.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '0.75rem',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'Inter',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          Auf YouTube ansehen →
        </a>
      </div>
    </motion.div>
  )
}
