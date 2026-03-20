import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import hoplovePoster from '../assets/images/hoplove-poster.jpg'
import kornatiPoster from '../assets/images/kornati-poster.jpg'

const projects = [
  {
    title: 'hoplove',
    subtitle: 'Eine Reise durch das Hopfenjahr am Bodensee',
    category: 'Dokumentarfilm · Award Winner',
    description: 'Ein Kinofilm über den Hopfenanbau am Bodensee, begleitet von Musik, die die landwirtschaftliche Tätigkeit durch das Jahr dokumentiert. Tettnanger Hopfen — weltweit exportiert für Premium-Bier.',
    tags: ['Dokumentation', 'Award Winner', 'RED Camera', 'Musikkomposition'],
    image: hoplovePoster,
    color: '#FFB800',
    link: 'https://hoplove.de',
  },
  {
    title: 'Kornati Islands',
    subtitle: 'The Tears of God — A Sebastian Bauer Film',
    category: 'Dokumentarfilm · RED Movie Award',
    description: 'Eine epische Dokumentation über die Kornaten — Kroatiens unberührtes Inselparadies. Gewinner des RED Movie Awards "Best Drone" für außergewöhnliche Luftbildkinematographie.',
    tags: ['Dokumentation', 'RED Movie Award', 'Best Drone', 'Aerial Cinematography'],
    image: kornatiPoster,
    color: '#CC3300',
    link: 'https://redmovieawards.com/itv_sebastian_bauer',
  },
]

export default function Portfolio() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="portfolio" style={{ padding: '8rem 0', background: '#060606' }}>
      <div className="feather-divider" style={{ marginBottom: '6rem' }} />

      <div className="container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Portfolio</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Ausgewählte Projekte
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300 }}>
            Jeder Film ist ein Unikat — konzipiert, produziert und vollendet mit Leidenschaft und Kino-Expertise.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} reverse={i % 2 === 1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Interesse an deinem eigenen Projekt?
          </p>
          <a href="#contact" className="btn-primary">Lass uns reden →</a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  reverse,
}: {
  project: typeof projects[0]
  index: number
  reverse: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        direction: reverse ? 'rtl' : 'ltr',
      }}
    >
      {/* Project poster image */}
      <motion.div
        style={{ position: 'relative', overflow: 'hidden', minHeight: '420px', background: '#0a0a0a', direction: 'ltr' }}
        whileHover="hover"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.7 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            filter: 'brightness(0.88) contrast(1.05) saturate(1.05)',
          }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: reverse
            ? 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)'
            : 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)',
        }} />
        <div style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          direction: 'ltr',
        }}>
          <span style={{
            padding: '0.3rem 0.75rem',
            background: project.color,
            color: '#000',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'Inter',
            fontWeight: 700,
          }}>
            {project.category}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div style={{
        padding: '3.5rem',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        direction: 'ltr',
      }}>
        <h3 style={{
          fontFamily: 'Cinzel',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: project.color,
        }}>
          {project.title}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.5rem', fontFamily: 'Inter' }}>
          {project.subtitle}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '2rem', fontFamily: 'Inter', fontWeight: 300 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '0.25rem 0.75rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.1em',
              fontFamily: 'Inter',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {project.link !== '#contact' ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ alignSelf: 'flex-start' }}
          >
            Mehr erfahren →
          </a>
        ) : (
          <a href="#contact" className="btn-outline" style={{ alignSelf: 'flex-start' }}>
            Ähnliches Projekt →
          </a>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #portfolio .container > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  )
}
