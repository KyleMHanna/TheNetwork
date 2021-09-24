<template>
  <template>
    <div class="container-fluid">
      <div class="row">
        <PostsFeed />
      </div>
    </div>
  </template>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsFeedService } from '../services/PostsFeedService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsFeedService.getPosts()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
// v-for="p in post" :key="p.id" :post="p"
</style>
