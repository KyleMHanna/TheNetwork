
<template>
  <div class="container-fluid">
    <div class="row py-2">
      <div>
        <button :disabled="currentPage === 1" @click="getNewerPage()" class="btn btn-secondary elevation-5">
          Newer
        </button>
        <button @click="getOlderPage()" class="btn btn-secondary elevation-5">
          Older
        </button>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <PostsFeed v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <div class="row">
      <div class="col">
        <Sponsor v-for="s in sponsor" :key="s.id" :sponsor="s" />
      </div>
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
      sponsor: computed(() => AppState.sponsors),
      postsData: computed(() => AppState.postsData),
      currentPage: computed(() => AppState.currentPage),
      async getOlderPage() {
        try {
          await postsFeedService.getOlderPage()
        } catch (error) {
          Pop.toast('error', error)
        }
      },
      async getNewerPage() {
        try {
          await postsFeedService.getNewerPage()
        } catch (error) {
          Pop.toast('error', error)
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">

</style>
