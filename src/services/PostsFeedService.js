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

  // async likePost(id) {
  //   logger.log(id, 'likes post id')
  //   const res = await api.post(`api/posts/${id}/like`)
  //   logger.log('likes post', res)
  //   AppState.posts.id = res.data
  //   this.getPosts()
  async likePost(id) {
    const res = await api.post(`api/posts/${id}/like`)
    logger.log('likes post id', res.data.likes)
    const i = AppState.posts.findIndex(p => p.id === id)
    AppState.posts.splice(i, 1, new Post(res.data))
    AppState.posts = [...AppState.posts]
  }

  async findPostByQuery(query) {
    const res = await api.get(`api/posts/?query=${query}`)
    AppState.posts = res.data.posts.map(m => new Post(m))
  }

  async searchPost(query = {}) {
    const res = await api.get(`api/posts?query=${query}`)
    AppState.posts = res.data.posts.map(m => new Post(m))
  }

  async getOlderPage() {
    AppState.posts = []
    AppState.postsData = {}
    AppState.currentPage++
    const res = await api.get(`api/posts?page=${AppState.currentPage}`)
    AppState.postsData = res.data
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async getNewerPage() {
    AppState.posts = []
    AppState.postsData = {}
    AppState.currentPage--
    const res = await api.get(`api/posts?page=${AppState.currentPage}`)
    AppState.postsData = res.data
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
}

export const postsFeedService = new PostsFeedService()
