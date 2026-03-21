import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import FallingFeathers from './FallingFeathers'

import makingOfSet from '../assets/images/making-of-set.jpg'
import makingOfTheater from '../assets/images/making-of-theater.jpg'
import makingOfSofa from '../assets/images/making-of-sofa.jpg'
import makingOfBoat from '../assets/images/making-of-boat.jpg'
import makingOfSunset from '../assets/images/making-of-violin.jpg'
import makingOfGoats from '../assets/images/making-of-goats.jpg'
import makingOfRestaurant from '../assets/images/making-of-restaurant.jpg'
import makingOfOutdoor from '../assets/images/making-of-outdoor.jpg'
import makingOfFpvDrone from '../assets/images/making-of-fpv-drone.jpg'
import makingOfCameraRig from '../assets/images/making-of-camera-rig.jpg'
import makingOfTheaterViolin from '../assets/images/making-of-theater-violin.jpg'
import makingOfDavinci from '../assets/images/making-of-davinci.jpg'
import makingOfFactory from '../assets/images/making-of-factory.jpg'
import makingOfRedCameraField from '../assets/images/making-of-red-camera-field.jpg'
import makingOfRedCameraLindau from '../assets/images/making-of-red-camera-lindau.jpg'
import makingOfRedCameraSunset from '../assets/images/making-of-red-camera-sunset.jpg'
import makingOfTheaterFilming from '../assets/images/making-of-theater-filming.jpg'
import makingOfInterviewMale from '../assets/images/making-of-interview-male.jpg'
import makingOfInterviewFemale from '../assets/images/making-of-interview-female.jpg'
import makingOfSoundStudio from '../assets/images/making-of-sound-studio.jpg'
import makingOfMixingConsole from '../assets/images/making-of-mixing-console.jpg'
import makingOfViolinRehearsal from '../assets/images/making-of-violin-rehearsal.jpg'
import makingOfViolinStudio from '../assets/images/making-of-violin-studio.jpg'
import makingOfRedAward2026 from '../assets/images/making-of-red-award-2026.jpg'
import makingOfRedMention2025 from '../assets/images/making-of-red-mention-2025.jpg'
import makingOfKornatiSunset from '../assets/images/making-of-kornati-sunset.jpg'
import makingOfKornatiRestaurant from '../assets/images/making-of-kornati-restaurant.jpg'

const photos = [
  { src: makingOfSet, caption: 'On Set · hoplove' },
  { src: makingOfTheater, caption: 'Theaterkulisse · Augsburg' },
  { src: makingOfSofa, caption: 'Making of · Director' },
  { src: makingOfBoat, caption: 'Kornati Islands · Drone' },
  { src: makingOfSunset, caption: 'hoplove · Julia Clara Frisch' },
  { src: makingOfGoats, caption: 'Kornati Islands · Wildlife' },
  { src: makingOfRestaurant, caption: 'Kornati Islands · On Location' },
  { src: makingOfOutdoor, caption: 'Kornati Islands · Outdoor' },
  { src: makingOfFpvDrone, caption: 'FPV Drohne · On Set' },
  { src: makingOfCameraRig, caption: 'Komodo 6K · Ronin Setup' },
  { src: makingOfTheaterViolin, caption: 'Theater · hoplove' },
  { src: makingOfDavinci, caption: 'DaVinci Resolve · Schnitt' },
  { src: makingOfFactory, caption: 'Imagefilm · On Location' },
  { src: makingOfRedCameraField, caption: 'RED Komodo · Bodensee' },
  { src: makingOfRedCameraLindau, caption: 'RED Camera · Lindau' },
  { src: makingOfRedCameraSunset, caption: 'RED Camera · Sonnenuntergang' },
  { src: makingOfTheaterFilming, caption: 'hoplove · Theater Wien' },
  { src: makingOfInterviewMale, caption: 'hoplove · Interview' },
  { src: makingOfInterviewFemale, caption: 'hoplove · Interview' },
  { src: makingOfSoundStudio, caption: 'Sound Design · Studio' },
  { src: makingOfMixingConsole, caption: 'Musikkomposition · Mischpult' },
  { src: makingOfViolinRehearsal, caption: 'hoplove · Julia Clara Frisch' },
  { src: makingOfViolinStudio, caption: 'hoplove · Studioaufnahme' },
  { src: makingOfRedAward2026, caption: 'RED Movie Awards · Annual Selection 2026' },
  { src: makingOfRedMention2025, caption: 'RED Movie Awards · Honorable Mention 2025' },
  { src: makingOfKornatiSunset, caption: 'Kornati Islands · Filmteam' },
  { src: makingOfKornatiRestaurant, caption: 'Kornati Islands · On Location' },
]

const qualities = [
  { label: 'RED Cinema Camera', icon: '🎥' },
  { label: 'Musikkomposition', icon: '🎵' },
  { label: 'Sound Design', icon: '🎧' },
  { label: 'Storytelling', icon: '📖' },
  { label: 'Color Grading', icon: '🎨' },
  { label: 'AI Filmproduktion', icon: '🤖' },
  { label: 'Drohnenfilm', icon: '🚁' },
  { label: 'Schnitt & Post', icon: '✂️' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 0', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <FallingFeathers count={8} zIndex={0} opacity={0.25} />

      <div className="feather-divider" style={{ marginBottom: '6rem' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label">Über Sebastian Bauer</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
            Die Story{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FFB800, #FF6600)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>dahinter</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 300, lineHeight: 1.9 }}>
            Regisseur, Produzent, Kameramann — Sebastian Bauer vereint Handwerk und Vision
            zu Filmen, die im Gedächtnis bleiben.
          </p>
        </motion.div>

        {/* Two-column: Bio + Skills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
          marginBottom: '6rem',
        }}>
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{ borderLeft: '3px solid #FFB800', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <p style={{
                fontFamily: 'Cinzel',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#FFB800',
                lineHeight: 1.6,
              }}>
                "Nutze den Tag —<br />aber richtig!"
              </p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', fontFamily: 'Inter', marginTop: '0.5rem' }}>
                — Sebastian Bauer, CEO EAGLE PICTURES®
              </p>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '1.25rem', fontFamily: 'Inter', fontWeight: 300 }}>
              Sebastian Bauer begann nach der Schule im Jahr 2006 mit dem Filmemachen. Über 10 Jahre
              sammelte er Erfahrung als Cutter, Editor, Produzent, Kameramann und Luxury-Book-Designer —
              bevor er sein eigenes Studio EAGLE PICTURES® gründete.
            </p>

            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '1.25rem', fontFamily: 'Inter', fontWeight: 300 }}>
              Als ausgebildeter Drohnenpilot und RED-Camera-Spezialist produziert er Filmprojekte auf
              Kino-Niveau — von Hochzeitsfilmen und Imagefilmen über Werbefilme bis hin zu preisgekrönten
              Dokumentationen wie <em style={{ color: 'rgba(255,255,255,0.85)' }}>„hoplove"</em> (über 30 internationale Festivalpreise) und{' '}
              <em style={{ color: 'rgba(255,255,255,0.85)' }}>„Kornati Islands – The Tears of God"</em>.
            </p>

            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '2rem', fontFamily: 'Inter', fontWeight: 300 }}>
              Seine Lieblingsregisseure sind Christopher Nolan und Ridley Scott. Sein Ziel: authentische
              Geschichten zu erzählen, die Zuschauer in eine Art Märchen verwandeln — und gleichzeitig
              tiefe Wahrheiten über das Leben vermitteln.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">Zusammenarbeiten →</a>
              <a
                href="https://filmfreeway.com/SebastianBauer_EAGLEPICTURESGERMANY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Filmfreeway Profil
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
              {[
                { v: '30+', l: 'Festivalpreise' },
                { v: '130+', l: 'Hochzeitsfilme' },
                { v: '800+', l: 'Filmproduktionen' },
                { v: '2006', l: 'Seit' },
                { v: 'RED', l: 'Cinema Camera' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 700, color: '#FFB800', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: '0.3rem', fontFamily: 'Inter' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '1.5rem' }}>
              Expertise
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              marginBottom: '3rem',
            }}>
              {qualities.map((q, i) => (
                <motion.div
                  key={q.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{q.icon}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter' }}>{q.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '1.25rem' }}>
              Ausbildung
            </h3>
            {[
              { year: '2005–2006', title: 'Digital Film & Animation', school: 'SAE Institute' },
              { year: '2006–2008', title: 'Film & Distribution', school: 'ARRI · Concorde Filmverleih München' },
              { year: '2014–2016', title: 'Betriebswirtschaft', school: 'Hugo-Eckener-Schule · Staatlich geprüfter Betriebswirt' },
            ].map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1rem',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: '2px solid rgba(255,184,0,0.4)',
                }}
              >
                <div style={{ fontSize: '0.65rem', color: '#FFB800', fontFamily: 'Inter', letterSpacing: '0.1em', whiteSpace: 'nowrap', marginTop: '2px' }}>{e.year}</div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter', fontWeight: 500 }}>{e.title}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', marginTop: '2px' }}>{e.school}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Making-of Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginBottom: '2rem' }}
        >
          <h3 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '2rem', textAlign: 'center' }}>
            Making of
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}>
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightbox(i)}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.75) contrast(1.1)',
                    transition: 'filter 0.3s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                }} />
                <p style={{
                  position: 'absolute',
                  bottom: '0.6rem',
                  left: '0.75rem',
                  fontFamily: 'Inter',
                  fontSize: '0.58rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,184,0,0.85)',
                  fontWeight: 600,
                }}>{photo.caption}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out',
          }}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={photos[lightbox].src}
            alt={photos[lightbox].caption}
            decoding="async"
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              boxShadow: '0 0 80px rgba(0,0,0,0.8)',
            }}
          />
          <p style={{
            position: 'absolute',
            bottom: '2rem',
            fontFamily: 'Inter',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#FFB800',
          }}>{photos[lightbox].caption}</p>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontSize: '1.2rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >✕</button>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #about .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          #about .container > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          #about .container > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
