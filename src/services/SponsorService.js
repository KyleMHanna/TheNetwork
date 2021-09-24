const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class SponsorService {
  async getSponsors() {
    try {
      const res = await api.get('/api/ads')
      AppState.sponsor = res.data
    } catch (error) {
    }
  }
}

export const sponsorService = new SponsorService()
