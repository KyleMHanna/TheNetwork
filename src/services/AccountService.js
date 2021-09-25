import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(accountData) {
    const res = await api.put('/account', accountData)
    logger.log('edit Harrison would be proud', res)
    AppState.account = res.data
  }
}

export const accountService = new AccountService()
