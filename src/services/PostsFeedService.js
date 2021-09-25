import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { Post } from '../models/Post.js'
import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'

class PostsFeedService {
  async getPosts(query = {}) {
    AppState.posts = []
    const res = await api.get('api/posts' + convertToQuery(query))
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.older = res.data.older
    AppState.newer = res.data.newer
    logger.log(res.data, 'from the get posts service')
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

  async editPost(post) {
    const res = await api.put(`api/posts/${post.id}`, post)
    AppState.posts = new Post(res.data)
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getPosts()
  }

  async searchPost(query) {
    const res = await api.get(`api/posts?query=${query}`)
    AppState.postSearch = res.data.posts
  }

  async next(url) {
    const res = await api.get(url)
    AppState.posts = res.data.posts
    AppState.older = res.data.older
    AppState.newer = res.data.newer
  }
}

export const postsFeedService = new PostsFeedService()
