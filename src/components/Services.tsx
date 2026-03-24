import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const GradientDef = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFB800" />
      <stop offset="50%" stopColor="#FF6600" />
      <stop offset="100%" stopColor="#CC2200" />
    </linearGradient>
  </defs>
)

const iconSize = { width: 44, height: 44 }
const sw = 1.6 // strokeWidth

const IconClapperboard = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconSize}>
    <GradientDef id="g1" />
    <rect x="5" y="16" width="34" height="23" rx="2.5" stroke="url(#g1)" strokeWidth={sw} />
    <rect x="5" y="9" width="34" height="8" rx="1.5" stroke="url(#g1)" strokeWidth={sw} />
    <line x1="13" y1="9" x2="9"  y2="17" stroke="url(#g1)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="21" y1="9" x2="17" y2="17" stroke="url(#g1)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="29" y1="9" x2="25" y2="17" stroke="url(#g1)" strokeWidth={sw} strokeLinecap="round" />
    <circle cx="22" cy="27.5" r="5.5" stroke="url(#g1)" strokeWidth={sw} />
    <circle cx="22" cy="27.5" r="2" fill="url(#g1)" />
  </svg>
)

const IconBroadcast = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconSize}>
    <GradientDef id="g2" />
    <rect x="4" y="8" width="36" height="24" rx="3" stroke="url(#g2)" strokeWidth={sw} />
    <line x1="15" y1="32" x2="12" y2="40" stroke="url(#g2)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="29" y1="32" x2="32" y2="40" stroke="url(#g2)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="11" y1="40" x2="33" y2="40" stroke="url(#g2)" strokeWidth={sw} strokeLinecap="round" />
    <polygon points="17,14 17,26 30,20" fill="url(#g2)" />
  </svg>
)

const IconRing = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconSize}>
    <GradientDef id="g3" />
    {/* Wedding band — front ellipse */}
    <ellipse cx="22" cy="28" rx="13" ry="6" stroke="url(#g3)" strokeWidth={sw} />
    {/* Top opening of the band */}
    <path d="M9 28 C9 22 35 22 35 28" stroke="url(#g3)" strokeWidth={sw} strokeLinecap="round" />
    {/* Inner band highlight */}
    <ellipse cx="22" cy="28" rx="9" ry="3.5" stroke="url(#g3)" strokeWidth={sw} opacity="0.4" />
    {/* Diamond on top */}
    <path d="M18 16 L20 12 L24 12 L26 16 L22 21 Z" stroke="url(#g3)" strokeWidth={sw} strokeLinejoin="round" />
    <line x1="18" y1="16" x2="26" y2="16" stroke="url(#g3)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="20" y1="12" x2="22" y2="21" stroke="url(#g3)" strokeWidth={sw} strokeLinecap="round" opacity="0.5" />
    <line x1="24" y1="12" x2="22" y2="21" stroke="url(#g3)" strokeWidth={sw} strokeLinecap="round" opacity="0.5" />
  </svg>
)

const IconDancer = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconSize}>
    <GradientDef id="g4" />
    {/* Head */}
    <circle cx="26" cy="7" r="3.5" stroke="url(#g4)" strokeWidth={sw} />
    {/* Body */}
    <path d="M26 10.5 C24 14 20 16 18 20" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
    {/* Right arm raised */}
    <path d="M24 14 C26 11 30 9 33 7" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
    {/* Left arm out */}
    <path d="M22 17 C18 15 14 16 11 19" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
    {/* Skirt / dress flare */}
    <path d="M18 20 C16 24 12 28 11 34" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
    <path d="M18 20 C20 25 22 29 26 34" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
    <path d="M18 20 C17 25 16 30 18 34" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" opacity="0.5" />
    {/* Legs */}
    <path d="M11 34 C10 37 11 40 12 42" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
    <path d="M26 34 C28 37 30 39 32 40" stroke="url(#g4)" strokeWidth={sw} strokeLinecap="round" />
  </svg>
)

const IconAI = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconSize}>
    <GradientDef id="g5" />
    <rect x="10" y="10" width="24" height="20" rx="4" stroke="url(#g5)" strokeWidth={sw} />
    <circle cx="16" cy="20" r="2.5" stroke="url(#g5)" strokeWidth={sw} />
    <circle cx="28" cy="20" r="2.5" stroke="url(#g5)" strokeWidth={sw} />
    <line x1="18.5" y1="20" x2="25.5" y2="20" stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="16" y1="10" x2="16" y2="6"  stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="22" y1="10" x2="22" y2="6"  stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="28" y1="10" x2="28" y2="6"  stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="10" y1="17" x2="6"  y2="17" stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="10" y1="23" x2="6"  y2="23" stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="34" y1="17" x2="38" y2="17" stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <line x1="34" y1="23" x2="38" y2="23" stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" />
    <path d="M16 30 L16 36 L22 33 L28 36 L28 30" stroke="url(#g5)" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconCamera = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...iconSize}>
    <GradientDef id="g6" />
    <rect x="3" y="13" width="28" height="20" rx="3" stroke="url(#g6)" strokeWidth={sw} />
    <path d="M31 19 L41 14 L41 30 L31 25" stroke="url(#g6)" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="23" r="6" stroke="url(#g6)" strokeWidth={sw} />
    <circle cx="16" cy="23" r="2.5" fill="url(#g6)" />
    <circle cx="8"  cy="17" r="1.5" fill="url(#g6)" opacity="0.7" />
  </svg>
)

const services = [
  {
    icon: <IconClapperboard />,
    title: 'Commercial Filmproduktion',
    subtitle: 'Für Betriebe & Gemeinden',
    description: 'Imagefilme, die bewegen und konvertieren. Wir erzählen die Geschichte deines Unternehmens auf Kino-Niveau — mit RED Camera, professionellem Sounddesign und Musikkomposition.',
    color: '#FFB800',
    featherColor: 'rgba(255,184,0,0.15)',
  },
  {
    icon: <IconBroadcast />,
    title: 'Werbefilm & Produktvideo',
    subtitle: 'Social Media · Cinema · TV',
    description: 'Kurze, prägnante Werbespots für Social Media, Kino und TV. Maximale Wirkung, klare Botschaft, perfekte Umsetzung. Jedes Frame erzählt deine Marke.',
    color: '#FF6600',
    featherColor: 'rgba(255,102,0,0.15)',
  },
  {
    icon: <IconRing />,
    title: 'Hochzeitsfilm Deluxe',
    subtitle: 'Der schönste Tag deines Lebens',
    description: 'Kein Moment kann wiederholt werden. Wir fangen jeden Blick, jede Emotion, jeden Augenblick in einem cineastischen Film ein, der ein Leben lang bewegt.',
    color: '#CC1166',
    featherColor: 'rgba(204,17,102,0.15)',
  },
  {
    icon: <IconDancer />,
    title: 'Modeschau & Entertainment',
    subtitle: 'Fashion · Events · Shows',
    description: 'Modeschauen und Events auf höchstem visuellen Niveau. Dynamischer Schnitt, atmosphärische Musik, unvergleichliche Energie — das Ergebnis begeistert.',
    color: '#8833CC',
    featherColor: 'rgba(136,51,204,0.15)',
  },
  {
    icon: <IconAI />,
    title: 'AI-Film Produktion',
    subtitle: 'Künstliche Intelligenz trifft Kino',
    description: 'Die Zukunft der Filmproduktion. Hochwertige AI-generierte Szenen, Charaktere und Welten — kombiniert mit professionellem Sounddesign und Storytelling auf Kinoniveau.',
    color: '#1163DC',
    featherColor: 'rgba(17,99,220,0.15)',
  },
  {
    icon: <IconCamera />,
    title: 'Event Highlight Video',
    subtitle: 'Konferenzen · Festivals · Sport',
    description: 'Events verdienen die beste Erinnerung. Kompakte Highlight-Videos, die die Energie und Atmosphäre einfangen und die Vorfreude aufs nächste Event wecken.',
    color: '#22AA44',
    featherColor: 'rgba(34,170,68,0.15)',
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: `2px solid ${service.color}`,
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 60px ${service.featherColor}`,
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '120px',
        height: '120px',
        background: `radial-gradient(circle at top right, ${service.featherColor}, transparent)`,
        pointerEvents: 'none',
      }} />

      <div style={{ marginBottom: '1.25rem' }}>{service.icon}</div>

      <p style={{
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: service.color,
        marginBottom: '0.5rem',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
      }}>
        {service.subtitle}
      </p>

      <h3 style={{
        fontSize: '1.2rem',
        fontWeight: 700,
        marginBottom: '1rem',
        lineHeight: 1.3,
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: '0.9rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.8,
      }}>
        {service.description}
      </p>

      <a
        href="#contact"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: service.color,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          borderBottom: `1px solid ${service.color}`,
          paddingBottom: '2px',
          transition: 'opacity 0.3s ease',
        }}
      >
        Jetzt anfragen →
      </a>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="services" style={{ padding: '8rem 0', background: '#000', position: 'relative' }}>
      <div className="feather-divider" />

      <div className="container" style={{ paddingTop: '6rem' }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Leistungen</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Jedes Projekt ein <span style={{
                background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Unikat</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', fontFamily: 'Inter', fontWeight: 300 }}>
            Von der ersten Idee bis zum fertigen Film — auf Kino-Niveau.
            RED Camera, Musikkomposition, professionelles Sounddesign.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <a href="#contact" className="btn-primary">Kostenloses Erstgespräch →</a>
        </motion.div>
      </div>
    </section>
  )
}
