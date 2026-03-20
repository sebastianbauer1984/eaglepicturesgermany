import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { firstname, lastname, email, phone, service, message } = JSON.parse(event.body || '{}')

    if (!firstname || !lastname || !email || !service || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Pflichtfelder fehlen' }) }
    }

    await resend.emails.send({
      from: 'Kontaktformular <kontakt@eaglepictures.de>',
      to: 'sebastianbauer@eaglepictures.de',
      replyTo: email,
      subject: `Neue Anfrage: ${service} – ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #222;">
          <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; padding-bottom: 0.5rem;">
            Neue Kontaktanfrage – EAGLE PICTURES®
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${firstname} ${lastname}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Telefon</td><td style="padding: 8px 0;">${phone}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">Leistung</td><td style="padding: 8px 0; font-weight: bold; color: #FFB800;">${service}</td></tr>
          </table>
          <div style="margin-top: 1.5rem; padding: 1rem; background: #f9f9f9; border-left: 4px solid #FFB800;">
            <p style="color: #666; margin: 0 0 0.5rem 0; font-size: 0.85rem;">Nachricht:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error('Resend error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden' }),
    }
  }
}
