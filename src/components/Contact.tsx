import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import FallingFeathers from './FallingFeathers'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      firstname: (form.elements.namedItem('firstname') as HTMLInputElement).value,
      lastname: (form.elements.namedItem('lastname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Fehler beim Senden')
      setSubmitted(true)
    } catch {
      setError('Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder schreib uns direkt per E-Mail.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 0', background: '#060606', position: 'relative', overflow: 'hidden' }}>
      <div className="feather-divider" style={{ marginBottom: '6rem' }} />

      <FallingFeathers count={10} zIndex={0} opacity={0.3} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '6rem',
          alignItems: 'start',
        }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Kontakt</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Eine Idee im Sinn?<br />
              <span style={{ color: '#FFB800' }}>Lass uns starten.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '3rem', fontFamily: 'Inter', fontWeight: 300 }}>
              Jedes großartige Projekt beginnt mit einem Gespräch.
              Schreib uns — wir melden uns innerhalb von 24 Stunden.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '📞', label: 'Telefon', value: '+49 173 714 2657', href: 'tel:+491737142657' },
                { icon: '✉️', label: 'E-Mail', value: 'sebastianbauer@eaglepictures.de', href: 'mailto:sebastianbauer@eaglepictures.de' },
                { icon: '📍', label: 'Adresse', value: 'Am Hölzele 15, 88069 Tettnang', href: undefined },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter', marginBottom: '0.2rem' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ color: '#FFB800', fontFamily: 'Inter', fontSize: '0.95rem', transition: 'opacity 0.3s' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', fontSize: '0.95rem' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Facebook', href: 'https://facebook.com' },
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'YouTube', href: 'https://youtube.com' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.4rem 0.9rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: 'Inter',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#FFB800'
                    e.currentTarget.style.color = '#FFB800'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '4rem',
                  textAlign: 'center',
                  background: 'rgba(255,184,0,0.06)',
                  border: '1px solid rgba(255,184,0,0.2)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🦅</div>
                <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.3rem', color: '#FFB800', marginBottom: '0.75rem' }}>
                  Nachricht gesendet!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', fontWeight: 300 }}>
                  Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <FormField label="Vorname" name="firstname" type="text" required />
                  <FormField label="Nachname" name="lastname" type="text" required />
                </div>
                <FormField label="E-Mail" name="email" type="email" required />
                <FormField label="Telefon (optional)" name="phone" type="tel" />
                <div>
                  <label style={labelStyle}>Leistung</label>
                  <select name="service" required style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Bitte wählen...</option>
                    <option>Commercial Filmproduktion</option>
                    <option>Werbefilm & Produktvideo</option>
                    <option>Hochzeitsfilm Deluxe</option>
                    <option>Modeschau & Entertainment</option>
                    <option>AI-Film Produktion</option>
                    <option>Event Highlight Video</option>
                    <option>AI Film Coaching</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Deine Nachricht</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Beschreibe dein Projekt..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  />
                </div>
                {error && (
                  <p style={{ color: '#ff6666', fontFamily: 'Inter', fontSize: '0.85rem', padding: '0.75rem 1rem', background: 'rgba(255,0,0,0.06)', border: '1px solid rgba(255,0,0,0.2)' }}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem', opacity: loading ? 0.6 : 1, cursor: loading ? 'wait' : 'pointer' }}
                >
                  {loading ? 'Wird gesendet…' : 'Nachricht senden →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  fontFamily: 'Inter',
  marginBottom: '0.5rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.9rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  fontFamily: 'Inter',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

function FormField({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        style={inputStyle}
        onFocus={e => (e.currentTarget.style.borderColor = '#FFB800')}
        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
      />
    </div>
  )
}
