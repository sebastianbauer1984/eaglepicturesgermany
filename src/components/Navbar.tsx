import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import eagleRiseLogo from '../assets/images/eagle-rise-logo.png'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Leistungen', href: '#services' },
  { label: 'AI Coach', href: '#ai-coach' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Über mich', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,184,0,0.15)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={eagleRiseLogo} alt="Eagle Pictures Logo" className="nav-logo" style={{ height: '130px', width: 'auto' }} />
      </a>

      {/* Desktop Nav */}
      <ul style={{
        display: 'flex',
        gap: '2.5rem',
        listStyle: 'none',
        alignItems: 'center',
      }} className="desktop-nav">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFB800')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.7rem' }}>
            Jetzt anfragen
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '1.5rem',
        }}
        className="hamburger"
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.98)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  color: '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '1rem',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .nav-logo { height: 75px !important; }
        }
      `}</style>
    </motion.nav>
  )
}
