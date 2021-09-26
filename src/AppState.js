import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  /** @type {import('.models/Post.js').Post[]} */
  posts: [],
  profile: null,
  /** @type {import('.models/Ad.js').Ad[]} */
  ads: [],
  next: '',
  previous: '',
  postSearch: [],
  postsData: {},
  currentPage: 1,
  likes: [],
  url: {
    page: 0,
    newer: '',
    older: ''
  }

})
