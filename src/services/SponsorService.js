import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Sponsor } from '../models/Sponsor'
import { logger } from '../utils/Logger'
class SponsorService {
  async getSponsors() {
    const res = await api.get('api/ads')
    logger.log('Sponsor', res.data)
    AppState.Sponsor = res.data.map(a => new Sponsor(a))
  }
}

export const sponsorService = new SponsorService()
