/**
 * Einwilligungsverwaltung fuer eaglepictures.de
 *
 * Google Analytics wird ausschliesslich hier geladen — und nur, wenn die
 * Besucherin oder der Besucher ausdruecklich zugestimmt hat. Ohne Zustimmung
 * verlaesst keine Anfrage die Seite Richtung Google.
 *
 * Die Entscheidung liegt im localStorage, nicht in einem Cookie: sie wird nur
 * lokal im Browser gebraucht und muss nirgendwohin uebertragen werden.
 */

const KEY = 'ep-consent'
const GA_ID = 'G-4ZVY685VGQ'
const GUELTIG_TAGE = 180

export type ConsentWert = 'granted' | 'denied'

type Gespeichert = { wert: ConsentWert; zeit: number }

function lesen(): Gespeichert | null {
  try {
    const roh = localStorage.getItem(KEY)
    if (!roh) return null
    const d = JSON.parse(roh) as Gespeichert
    if (d.wert !== 'granted' && d.wert !== 'denied') return null
    // Eine Einwilligung laeuft nach einem halben Jahr ab und wird neu erfragt.
    if (Date.now() - d.zeit > GUELTIG_TAGE * 24 * 60 * 60 * 1000) return null
    return d
  } catch {
    return null
  }
}

export function consentStatus(): ConsentWert | null {
  return lesen()?.wert ?? null
}

let geladen = false

function analyticsLaden() {
  if (geladen) return
  geladen = true

  const s = document.createElement('script')
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  s.async = true
  document.head.appendChild(s)

  const w = window as unknown as { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  function gtag(...args: unknown[]) {
    w.dataLayer!.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_ID, { anonymize_ip: true })
}

export function consentSetzen(wert: ConsentWert) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ wert, zeit: Date.now() } satisfies Gespeichert))
  } catch {
    /* Privater Modus o. ae. — dann gilt die Entscheidung nur fuer diesen Besuch. */
  }
  if (wert === 'granted') analyticsLaden()
}

/** Beim Seitenstart aufrufen: laedt Analytics nur bei bereits erteilter Einwilligung. */
export function consentAnwenden() {
  if (lesen()?.wert === 'granted') analyticsLaden()
}

/** Setzt die Entscheidung zurueck, damit der Banner erneut erscheint. */
export function consentZuruecksetzen() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignorieren */
  }
}
