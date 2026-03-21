import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import awardParis from '../assets/images/awards/award-paris.jpg'
import awardLondon from '../assets/images/awards/award-london.jpg'

import award03 from '../assets/images/awards/award-03.jpg'
import awardBestDrone from '../assets/images/awards/award-best-drone.jpg'
import awardImg5630 from '../assets/images/awards/award-img5630.jpg'
import awardImg0222 from '../assets/images/awards/award-img0222.jpg'
import awardHoplove from '../assets/images/awards/award-hoplove.jpg'
import awardImg1397 from '../assets/images/awards/award-img1397.jpg'
import awardCertificate from '../assets/images/awards/award-certificate.jpg'
import awardImg4203 from '../assets/images/awards/award-img4203.jpg'

const awards = [
  { src: awardBestDrone,   caption: 'Internationale Auszeichnung' },
  { src: awardParis,       caption: 'Internationales Zertifikat' },
  { src: awardLondon,      caption: 'Internationales Zertifikat' },
  { src: awardCertificate, caption: 'Internationales Zertifikat' },
  { src: awardImg5630,     caption: 'Internationales Zertifikat' },
  { src: awardImg4203,     caption: 'Internationales Zertifikat' },
  { src: award03,          caption: 'Internationale Auszeichnung' },
  { src: awardHoplove,     caption: 'Internationale Auszeichnung' },
  { src: awardImg0222,     caption: 'Internationale Auszeichnung' },
  { src: awardImg1397,     caption: 'Internationale Auszeichnung' },
]

export default function Awards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section
      id="awards"
      ref={ref}
      style={{ padding: '8rem 0', background: '#000', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,184,0,0.4), transparent)' }} />

      {/* Subtle gold radial glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,184,0,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label">Auszeichnungen</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
            Zertifikate &{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Festivalpreise</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Über 30 internationale Auszeichnungen — von Paris bis New York, von London bis Rom.
            Qualität, die weltweit anerkannt wird.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[
              { v: '30+', l: 'Festivalpreise' },
              { v: '150+', l: 'Festivals weltweit' },
              { v: '3', l: 'Kontinente' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cinzel', fontSize: '2rem', fontWeight: 700, color: '#FFB800', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '0.4rem', fontFamily: 'Inter' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div style={{ columns: '4 220px', columnGap: '0.75rem' }}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightbox(i)}
              style={{
                marginBottom: '0.75rem',
                breakInside: 'avoid',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'zoom-in',
                border: '1px solid rgba(255,184,0,0.12)',
              }}
            >
              <img
                src={award.src}
                alt={award.caption}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  display: 'block',
                  filter: 'brightness(0.92) contrast(1.05)',
                  transition: 'filter 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.05) contrast(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.92) contrast(1.05)')}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
                pointerEvents: 'none',
              }} />
              <p style={{
                position: 'absolute',
                bottom: '0.6rem',
                left: '0.75rem',
                right: '0.75rem',
                fontFamily: 'Inter',
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,184,0,0.9)',
                fontWeight: 600,
              }}>{award.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={awards[lightbox].src}
            alt={awards[lightbox].caption}
            decoding="async"
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', boxShadow: '0 0 80px rgba(0,0,0,0.8)' }}
          />
          <p style={{
            position: 'absolute', bottom: '2rem',
            fontFamily: 'Inter', fontSize: '0.7rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#FFB800',
          }}>{awards[lightbox].caption}</p>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'none', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontSize: '1.2rem', width: '40px', height: '40px',
              borderRadius: '50%', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </motion.div>
      )}
    </section>
  )
}
