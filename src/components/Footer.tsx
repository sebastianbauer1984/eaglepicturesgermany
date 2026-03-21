import { motion } from 'framer-motion'
import eagleRiseLogo from '../assets/images/eagle-rise-logo.png'

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="feather-divider" />

      <div className="container" style={{ padding: '4rem 2rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
        }}>
          {/* Brand */}
          <div>
            <img src={eagleRiseLogo} alt="Eagle Pictures" style={{ height: '50px', marginBottom: '1.5rem' }} />
            <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '320px' }}>
              EAGLE PICTURES® — German Film Production by Sebastian Bauer.
              Cineastische Filmproduktion auf Kino-Niveau. Jedes Projekt einzigartig.
            </p>
            <p style={{ color: '#FFB800', fontFamily: 'Cinzel', fontSize: '0.85rem', marginTop: '1rem', letterSpacing: '0.1em' }}>
              WE VISUALIZE YOU
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.5rem', fontFamily: 'Inter' }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                ['Leistungen', '#services'],
                ['AI Coach', '#ai-coach'],
                ['Portfolio', '#portfolio'],
                ['Über mich', '#about'],
                ['Kontakt', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Inter',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFB800')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.5rem', fontFamily: 'Inter' }}>
              Kontakt
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+491737142657" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', fontSize: '0.85rem' }}>
                +49 173 714 2657
              </a>
              <a href="mailto:sebastianbauer@eaglepictures.de" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', fontSize: '0.85rem', wordBreak: 'break-all' }}>
                sebastianbauer@eaglepictures.de
              </a>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', fontSize: '0.85rem' }}>
                Am Hölzele 15<br />88069 Tettnang
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter', fontSize: '0.75rem' }}>
            COPYRIGHT 2024 © EAGLE PICTURES® by Sebastian Bauer — All rights reserved
          </p>
          <a href="#impressum" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter', fontSize: '0.75rem', transition: 'color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FFB800')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
            Impressum
          </a>
        </div>
      </div>

      {/* Impressum section */}
      <motion.div
        id="impressum"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '3rem 0',
          background: '#000',
        }}
      >
        <div className="container">
          <h3 style={{ fontFamily: 'Cinzel', fontSize: '1rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
            Impressum
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'Inter',
            fontSize: '0.8rem',
            lineHeight: 1.8,
          }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', fontWeight: 500 }}>Angaben gemäß § 5 TMG</p>
              <p>Sebastian Bauer</p>
              <p>EAGLE PICTURES®</p>
              <p>Am Hölzele 15</p>
              <p>88069 Tettnang</p>
              <p>Deutschland</p>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', fontWeight: 500 }}>Kontakt</p>
              <p>Telefon: +49 173 714 2657</p>
              <p>E-Mail: sebastianbauer@eaglepictures.de</p>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Umsatzsteuer-ID</p>
              <p>UID Nr. DE248799683</p>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', fontWeight: 500 }}>Haftungsausschluss</p>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
                externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
