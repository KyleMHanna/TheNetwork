import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { Post } from '../models/Post.js'
import { api } from './AxiosService'
// import { convertToQuery } from '../utils/Query'

class PostsFeedService {
  async getPosts() {
    const res = await api.get('https://bcw-sandbox.herokuapp.com/api/posts')
    AppState.posts = res.data.posts
    // FIXME -
    logger.log(res.data)
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log(res)
    AppState.posts.unshift(new Post(res.data))
  }

  async deletePost(postId) {
    const res = await api.delete('api/posts/' + postId)
    logger.log('delete res', res)
    AppState.posts = AppState.posts.filter(p => p.id !== postId)
  }
}

export const postsFeedService = new PostsFeedService()
