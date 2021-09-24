import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getPosts() {
    const res = await api.get('https://bcw-sandbox.herokuapp.com/api/posts')
    AppState.posts = res.data.posts
    // FIXME -   update older and newer posts when you get there
    logger.log(res.data)
  }
}

export const postsService = new PostsService()
