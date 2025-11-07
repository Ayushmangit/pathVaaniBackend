
import type { HttpContext } from '@adonisjs/core/http'

export default class SosController {
  async trigger({ request, response }: HttpContext) {
    const { lat, lon } = request.only(['lat', 'lon'])

    if (!lat || !lon) {
      return response.badRequest({ error: 'Latitude and longitude are required.' })
    }

    console.log(`🚨 SOS triggered → lat:${lat}, lon:${lon}`)

    return response.ok({
      tts_message: `Emergency alert! The user is at latitude ${lat} and longitude ${lon}.`,
      location: { lat, lon },
      status: 'alert_sent'
    })
  }
}

