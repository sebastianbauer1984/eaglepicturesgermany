import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { consentAnwenden, consentSetzen, consentStatus } from '../consent'

/**
 * Einwilligungs-Banner. Erscheint nur, solange keine Entscheidung vorliegt.
 * Beide Schaltflaechen sind gleich gross und gleich betont — kein „Dark Pattern",
 * bei dem Ablehnen versteckt wird.
 */
export default function ConsentBanner() {
  const [sichtbar, setSichtbar] = useState(false)

  useEffect(() => {
    consentAnwenden()
    if (consentStatus() === null) setSichtbar(true)

    // Ueber diesen Weg kann der Banner spaeter erneut geoeffnet werden
    // (Link „Cookie-Einstellungen" im Footer).
    const oeffnen = () => setSichtbar(true)
    window.addEventListener('ep-consent-oeffnen', oeffnen)
    return () => window.removeEventListener('ep-consent-oeffnen', oeffnen)
  }, [])

  function entscheiden(wert: 'granted' | 'denied') {
    consentSetzen(wert)
    setSichtbar(false)
  }

  const knopf: React.CSSProperties = {
    fontFamily: 'Inter',
    fontSize: '0.8rem',
    fontWeight: 500,
    padding: '0.7rem 1.6rem',
    borderRadius: '2px',
    cursor: 'pointer',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
  }

  return (
    <AnimatePresence>
      {sichtbar && (
        <motion.div
          role="dialog"
          aria-label="Einwilligung zur Statistik"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: '1rem',
            right: '1rem',
            bottom: '1rem',
            zIndex: 9999,
            maxWidth: '760px',
            margin: '0 auto',
            background: 'rgba(10,10,10,0.97)',
            border: '1px solid rgba(255,184,0,0.25)',
            borderRadius: '4px',
            padding: '1.5rem',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'Inter',
              fontSize: '0.85rem',
              lineHeight: 1.7,
              marginBottom: '1.2rem',
            }}
          >
            Wir würden gern mit Google Analytics messen, wie diese Seite genutzt wird. Ohne Ihre
            Zustimmung passiert das nicht — die Seite funktioniert vollständig auch ohne. Unsere
            Schriften liegen auf unserem eigenen Server, dafür wird nichts übertragen. Mehr dazu in
            der{' '}
            <a
              href="#datenschutz"
              onClick={() => setSichtbar(false)}
              style={{ color: '#FFB800', textDecoration: 'underline' }}
            >
              Datenschutzerklärung
            </a>
            .
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => entscheiden('denied')}
              style={{
                ...knopf,
                background: 'transparent',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              Nur Notwendiges
            </button>
            <button
              onClick={() => entscheiden('granted')}
              style={{
                ...knopf,
                background: '#FFB800',
                color: '#000',
                border: '1px solid #FFB800',
              }}
            >
              Einverstanden
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
