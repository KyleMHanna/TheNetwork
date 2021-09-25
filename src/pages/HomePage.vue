
<template>
  <div class="container-fluid">
    <div class="row">
      <PostsFeed v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsFeedService } from '../services/PostsFeedService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { sponsorService } from '../services/SponsorService.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsFeedService.getPosts()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
      try {
        await sponsorService.getSponsors()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      sponsor: computed(() => AppState.sponsors)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
