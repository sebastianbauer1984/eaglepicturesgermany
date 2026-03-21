import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const newSeries = [
  { id: 'Yvc2M2wgX5o', title: 'Tettnanger Hopfenhoheit 2024 · Teil I' },
  { id: 'IBlAFw-HTZM', title: 'Tettnanger Hopfenhoheit 2024 · Teil II' },
  { id: 'ikOQqZibwz8', title: 'Tettnanger Hopfenhoheit 2024 · Teil III' },
]

const previousYears = [
  { id: 'rwrjR6bOaFA', title: 'Virtueller Hopfenwandertag 2020' },
  { id: 'BR3W1r6mLzw', title: 'Tettnanger Hopfenhoheit · Vorjahre' },
  { id: 'njW7KFvhIjc', title: 'Regionale Produktion · Bodensee' },
]

function YouTubeCard({ id, title, active, onActivate }: { id: string; title: string; active: boolean; onActivate: () => void }) {
  return (
    <div
      onClick={onActivate}
      style={{
        position: 'relative',
        aspectRatio: '16/9',
        background: '#0a0a0a',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {active ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
            alt={title}
            loading="lazy"
            decoding="async"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
            onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/hqdefault.jpg` }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'rgba(255,184,0,0.92)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', paddingLeft: '4px',
                boxShadow: '0 0 30px rgba(255,184,0,0.35)',
              }}
            >▶</motion.div>
          </div>
          <p style={{
            position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem',
            fontFamily: 'Inter', fontSize: '0.65rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', fontWeight: 500,
          }}>{title}</p>
        </>
      )}
    </div>
  )
}

export default function HopRegion() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const toggle = (id: string) => setActiveVideo(prev => prev === id ? null : id)

  return (
    <section
      id="hopregion"
      ref={ref}
      style={{ padding: '8rem 0', background: '#040404', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,184,0,0.4), transparent)' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label">Regionale Produktionen · Bodensee</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Am Bodensee rund um das{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>grüne Gold</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '580px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Der Tettnanger Hopfen — weltweit begehrt, regional verwurzelt. Eine Dokumentationsreihe
            über die Hopfenhoheiten und das Leben rund um das grüne Gold am Bodensee.
          </p>
        </motion.div>

        {/* Neue Reihe: 3 Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p style={{
            fontFamily: 'Cinzel', fontSize: '0.75rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#FFB800', marginBottom: '1.25rem',
          }}>
            Dokumentationsreihe · Neue Hopfenhoheiten
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {newSeries.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <YouTubeCard id={v.id} title={v.title} active={activeVideo === v.id} onActivate={() => toggle(v.id)} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vorjahre: 2 Videos zentriert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p style={{
            fontFamily: 'Cinzel', fontSize: '0.75rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'rgba(255,184,0,0.5)', marginBottom: '1.25rem',
          }}>
            Aus vergangenen Jahren
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {previousYears.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <YouTubeCard id={v.id} title={v.title} active={activeVideo === v.id} onActivate={() => toggle(v.id)} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Regionale Geschichten verdienen cineastische Qualität
          </p>
          <a href="#contact" className="btn-primary">Regionalprojekt anfragen →</a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hopregion .container > div > div[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          #hopregion .container > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
