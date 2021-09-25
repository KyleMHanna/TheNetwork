import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  /** @type {import('.models/Post.js').Post[]} */
  posts: [],
  profile: null,
  /** @type {import('.models/Sponsor.js').Sponsor[]} */
  sponsors: [],
  postSearch: [],
  postsData: {},
  currentPage: 1,
  likes: []
})
