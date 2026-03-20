import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🎬',
    title: 'Commercial Filmproduktion',
    subtitle: 'Für Betriebe & Gemeinden',
    description: 'Imagefilme, die bewegen und konvertieren. Wir erzählen die Geschichte deines Unternehmens auf Kino-Niveau — mit RED Camera, professionellem Sounddesign und Musikkomposition.',
    color: '#FFB800',
    featherColor: 'rgba(255,184,0,0.15)',
  },
  {
    icon: '📺',
    title: 'Werbefilm & Produktvideo',
    subtitle: 'Social Media · Cinema · TV',
    description: 'Kurze, prägnante Werbespots für Social Media, Kino und TV. Maximale Wirkung, klare Botschaft, perfekte Umsetzung. Jedes Frame erzählt deine Marke.',
    color: '#FF6600',
    featherColor: 'rgba(255,102,0,0.15)',
  },
  {
    icon: '💍',
    title: 'Hochzeitsfilm Deluxe',
    subtitle: 'Der schönste Tag deines Lebens',
    description: 'Kein Moment kann wiederholt werden. Wir fangen jeden Blick, jede Emotion, jeden Augenblick in einem cineastischen Film ein, der ein Leben lang bewegt.',
    color: '#CC1166',
    featherColor: 'rgba(204,17,102,0.15)',
  },
  {
    icon: '🎭',
    title: 'Modeschau & Entertainment',
    subtitle: 'Fashion · Events · Shows',
    description: 'Modeschauen und Events auf höchstem visuellen Niveau. Dynamischer Schnitt, atmosphärische Musik, unvergleichliche Energie — das Ergebnis begeistert.',
    color: '#8833CC',
    featherColor: 'rgba(136,51,204,0.15)',
  },
  {
    icon: '🤖',
    title: 'AI-Film Produktion',
    subtitle: 'Künstliche Intelligenz trifft Kino',
    description: 'Die Zukunft der Filmproduktion. Hochwertige AI-generierte Szenen, Charaktere und Welten — kombiniert mit professionellem Sounddesign und Storytelling auf Kinoniveau.',
    color: '#1163DC',
    featherColor: 'rgba(17,99,220,0.15)',
  },
  {
    icon: '🎥',
    title: 'Event Highlight Video',
    subtitle: 'Konferenzen · Festivals · Sport',
    description: 'Events verdienen die beste Erinnerung. Kompakte Highlight-Videos, die die Energie und Atmosphäre einfangen und die Vorfreude aufs nächste Event wecken.',
    color: '#22AA44',
    featherColor: 'rgba(34,170,68,0.15)',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

      <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{service.icon}</div>

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
            Jedes Projekt ein Unikat
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
