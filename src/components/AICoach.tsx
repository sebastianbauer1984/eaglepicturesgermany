import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FallingFeathers from './FallingFeathers'
import awiBack from '../assets/images/awi-back.jpg'

const tools = [
  'LTX Studio', 'Freepik', 'AI Storyboarding', 'AI Scripting',
  'Midjourney', 'Higgsfield', 'Suno AI', 'AI Webdesign',
]

export default function AICoach() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="ai-coach"
      ref={ref}
      style={{
        position: 'relative',
        padding: '8rem 0',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #000 0%, #060610 50%, #000 100%)',
      }}
    >
      {/* Falling feathers - subtle */}
      <FallingFeathers count={8} zIndex={0} opacity={0.3} />

      {/* Eagle from behind — background */}
      <div style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '52%', pointerEvents: 'none', zIndex: 1 }}>
        <img src={awiBack} alt="" aria-hidden style={{ width: '100%', display: 'block', filter: 'brightness(0.22) contrast(1.1) saturate(1.2)', mixBlendMode: 'luminosity' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 50%, transparent 30%, rgba(6,6,16,0.9) 80%)' }} />
      </div>

      {/* Blue glow */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(17,99,220,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}>
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Exklusives Angebot</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              <span style={{
                background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>AI</span> Film Coaching<br />
              <span style={{ color: '#1863DC' }}>mit Sebastian Bauer</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1rem', fontFamily: 'Inter', fontWeight: 300 }}>
              Sebastian Bauer ist einer der führenden Coaches für Filmproduktion mit KI-Tools in Deutschland.
              Er verbindet jahrelange Kino-Erfahrung mit modernsten AI-Technologien und zeigt dir,
              wie du professionelle Film-Inhalte mit KI-Unterstützung erstellst.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '2.5rem', fontSize: '1rem', fontFamily: 'Inter', fontWeight: 300 }}>
              Von der Ideenentwicklung bis zum fertigen Film — lerne die Tools, Workflows
              und kreativen Strategien, die heute professionelle Filmproduktion revolutionieren.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {['1:1 Coaching', 'Workshops', 'Online-Kurse'].map(type => (
                <span
                  key={type}
                  style={{
                    padding: '0.4rem 1rem',
                    border: '1px solid rgba(24,99,220,0.4)',
                    color: '#1863DC',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: 'Inter',
                    fontWeight: 600,
                  }}
                >
                  {type}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Coaching anfragen</a>
          </motion.div>

          {/* Right: Tools grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '1.5rem',
              fontFamily: 'Inter',
            }}>
              AI Tools die du beherrschen wirst
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}>
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.75)',
                    fontFamily: 'Inter',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: '#1863DC', fontSize: '0.7rem' }}>▸</span>
                  {tool}
                </motion.div>
              ))}
            </div>

            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', fontStyle: 'italic', marginTop: '0.75rem' }}>
              … und vieles mehr
            </p>

            {/* Glow card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(24,99,220,0.12), rgba(24,99,220,0.04))',
                border: '1px solid rgba(24,99,220,0.25)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>🏆</span>
              <div>
                <p style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', marginBottom: '0.4rem' }}>Preisgekrönte Expertise</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', fontWeight: 300 }}>
                  Award-Winner für "hoplove – eine Reise durch das Hopfenjahr am Bodensee"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #ai-coach .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
