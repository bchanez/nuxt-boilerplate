import { defineEventHandler } from 'h3'
import type { Review } from '~/types/Api'

interface GooglePlaceResponse {
  result: {
    reviews?: Array<Review>
  }
}

export default defineEventHandler(async (event) => {
  const apiKey = process.env.GOOGLE_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) {
    event.node.res.statusCode = 500
    return { error: 'La clé API ou le Place ID n’est pas défini dans les variables d’environnement.' }
  }

  try {
    // Appel à l’API Google Places pour récupérer les détails incluant les avis.
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=fr&key=${apiKey}`
    const response = await $fetch<GooglePlaceResponse>(url)

    setHeader(event, 'X-Cache-Origin', 'server')
    setHeader(event, 'Cache-Control', 's-maxage=86400, stale-while-revalidate=300')
    return response.result?.reviews?.filter(review => review.rating >= 4)
  }
  catch {
    event.node.res.statusCode = 500
    return { error: 'Erreur lors de la récupération des avis depuis Google.' }
  }
})
