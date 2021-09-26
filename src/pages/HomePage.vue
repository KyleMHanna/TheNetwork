
<template>
  <div class="container-fluid">
    <div class="row py-2">
      <div class="col-md-6">
        <div>
          <button :disabled="currentPage === 1" @click="getNewerPage()" class="btn btn-secondary elevation-5">
            Newer
          </button>
          <button @click="getOlderPage()" class="btn btn-secondary elevation-5">
            Older
          </button>
        </div>
      </div>
      <div class="col-md-6 text-end ">
        <button class="btn btn-secondary elevation-5 " type="button" data-bs-toggle="modal" data-bs-target="#post-form">
          Create Post
        </button>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row scrollable-y">
      <PostsFeed v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <div class="col-md-1"></div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsFeedService } from '../services/PostsFeedService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { adsService } from '../services/AdsService'
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
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      ad: computed(() => AppState.ads),
      postsData: computed(() => AppState.postsData),
      currentPage: computed(() => AppState.currentPage),
      like: computed(() => AppState.likes),
      url: computed(() => AppState.url),
      async getOlderPage() {
        try {
          await postsFeedService.getOlderPage()
        } catch (error) {
          Pop.toast('No more posts', 'error', error)
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
.scrollable-y {
  max-height: 100vh;
  overflow-y:auto
}
</style>
