
import type { HttpContext } from '@adonisjs/core/http'

export default class ObstacleController {
  async detect({ request, response }: HttpContext) {
    const { direction, distance } = request.only(['direction', 'distance'])

    if (!direction || distance === undefined) {
      return response.badRequest({ error: 'Direction and distance are required.' })
    }

    let tts_message = 'Path is clear.'
    if (distance < 50) {
      tts_message = `Warning! Obstacle detected ${distance} centimeters ahead in the ${direction} direction.`
    }

    console.log(`Obstacle: ${direction} at ${distance}cm`)

    return response.ok({
      direction,
      distance,
      tts_message,
      status: distance < 50 ? 'obstacle_detected' : 'clear'
    })
  }
}

