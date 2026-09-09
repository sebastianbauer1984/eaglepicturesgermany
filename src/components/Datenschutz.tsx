import { motion } from 'framer-motion'

const h3: React.CSSProperties = {
  fontFamily: 'Cinzel',
  fontSize: '1rem',
  marginBottom: '1.5rem',
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.1em',
}

const h4: React.CSSProperties = {
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '0.5rem',
  fontWeight: 500,
  fontFamily: 'Inter',
  fontSize: '0.8rem',
}

const body: React.CSSProperties = {
  color: 'rgba(255,255,255,0.3)',
  fontFamily: 'Inter',
  fontSize: '0.8rem',
  lineHeight: 1.8,
}

const link: React.CSSProperties = { color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={h4}>{title}</p>
      <div style={body}>{children}</div>
    </div>
  )
}

export default function Datenschutz() {
  return (
    <motion.div
      id="datenschutz"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '3rem 0 4rem',
        background: '#000',
      }}
    >
      <div className="container">
        <h3 style={h3}>Datenschutzerklärung</h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem 3rem',
          }}
        >
          <Block title="1. Verantwortlicher">
            Sebastian Bauer, EAGLE PICTURES®
            <br />
            Am Hölzele 15, 88069 Tettnang, Deutschland
            <br />
            Telefon: +49 173 714 2657
            <br />
            E-Mail: sebastianbauer@eaglepictures.de
            <br />
            <br />
            Ein Datenschutzbeauftragter ist gesetzlich nicht bestellt. Bei Fragen zum Datenschutz
            wenden Sie sich bitte direkt an die oben genannten Kontaktdaten.
          </Block>

          <Block title="2. Hosting und Server-Logfiles">
            Diese Website wird bei Netlify, Inc., 512 2nd Street, Fifth Floor, San Francisco, CA
            94107, USA gehostet. Beim Aufruf der Seite werden automatisch Daten übertragen, die Ihr
            Browser sendet: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer, Browsertyp
            und Betriebssystem. Diese Verarbeitung dient dem sicheren und stabilen Betrieb der
            Website und beruht auf unserem berechtigten Interesse nach Art. 6 Abs. 1 lit. f DSGVO.
            Mit Netlify besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA ist
            durch Standardvertragsklauseln abgesichert.
          </Block>

          <Block title="3. Google Fonts">
            Diese Website lädt Schriftarten von Servern der Google Ireland Limited, Gordon House,
            Barrow Street, Dublin 4, Irland. Dabei wird Ihre IP-Adresse an Google übertragen. Die
            Nutzung dient der einheitlichen Darstellung der Website. Rechtsgrundlage ist Ihre
            Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, soweit diese eingeholt wird, andernfalls
            unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{' '}
            <a href="https://policies.google.com/privacy" style={link} target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </Block>

          <Block title="4. Google Analytics">
            Diese Website verwendet Google Analytics 4 (Mess-ID G-4ZVY685VGQ), einen Dienst der
            Google Ireland Limited. Google Analytics verwendet Technologien, die die Wiedererkennung
            Ihres Browsers ermöglichen, und wertet Ihre Nutzung der Website statistisch aus. Die
            IP-Adresse wird dabei von Google gekürzt. Die erhobenen Daten können an Server von Google
            in den USA übertragen werden. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1
            lit. a DSGVO. Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen, etwa über das Browser-Add-on von Google:{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" style={link} target="_blank" rel="noopener noreferrer">
              tools.google.com/dlpage/gaoptout
            </a>
          </Block>

          <Block title="5. Kontaktformular">
            Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen angegebenen Daten:
            Vorname, Nachname, E-Mail-Adresse, optional Telefonnummer, die gewählte Leistung sowie
            Ihre Nachricht. Diese Daten verwenden wir ausschließlich, um Ihre Anfrage zu beantworten.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zu einem Vertrag, sonst Art. 6
            Abs. 1 lit. f DSGVO. Für den Versand der Nachricht setzen wir den E-Mail-Dienst Resend
            (Resend, Inc., 2261 Market Street, San Francisco, CA 94114, USA) als Auftragsverarbeiter
            ein. Wir löschen Ihre Anfrage, sobald sie erledigt ist und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </Block>

          <Block title="6. Speicherdauer">
            Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke
            erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Server-Logfiles
            werden nach spätestens 30 Tagen gelöscht oder anonymisiert.
          </Block>

          <Block title="7. Ihre Rechte">
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung
            (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
            das Recht, einer Verarbeitung zu widersprechen (Art. 21). Eine erteilte Einwilligung
            können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dazu an die
            unter Punkt 1 genannten Kontaktdaten.
          </Block>

          <Block title="8. Beschwerderecht">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig
            ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.
          </Block>

          <Block title="9. Verschlüsselung">
            Diese Website nutzt eine SSL/TLS-Verschlüsselung. Sie erkennen dies am „https://" in der
            Adresszeile Ihres Browsers. Übertragene Daten können dadurch nicht von Dritten mitgelesen
            werden.
          </Block>

          <Block title="10. Keine automatisierte Entscheidungsfindung">
            Eine automatisierte Entscheidungsfindung oder ein Profiling nach Art. 22 DSGVO findet
            nicht statt.
          </Block>
        </div>

        <p style={{ ...body, marginTop: '1rem', color: 'rgba(255,255,255,0.22)' }}>
          Stand: September 2026
        </p>
      </div>
    </motion.div>
  )
}
