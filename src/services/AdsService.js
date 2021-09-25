import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Ad } from '../models/Ad'
import { logger } from '../utils/Logger'

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')
    logger.log('Ads', res.data)
    AppState.ads = res.data.map(a => new Ad(a))
  }
}

export const adsService = new AdsService()
