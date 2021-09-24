import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  /** @type {import('.models/Post.js').Post[]} */
  posts: [],
  profile: null
  // sponsor: [],
  // postSearch: [],
  // profileSearch: [],
  // older: null,
  // newer: null
})
