<template>
  <div class="container-fluid">
    <div class="profile-header" v-if="profile">
      <div class="row cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
      </div>
    </div>
    <div v-else>
      <h4 class="text-light">
        ....Loading
      </h4>
    </div>

    <div class="row" v-if="posts.length > 0">
      <div class="container-fluid">
        <div class="row">
          <div>
            <button :disabled="currentPage === 1" @click="getNewerPage()" class="btn btn-secondary">
              Newer
            </button>
            <button @click="getOlderPage()" class="btn btn-secondary">
              Older
            </button>
          </div>
        </div>
      </div>
      <PostsFeed v-for="p in post" :key="p.id" :posts="p" />
    </div>
    <div class="row" v-else>
      <h3>No Content</h3>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsFeedService } from '../services/PostsFeedService'
import { profilesService } from '../services/ProfilesService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    async function getPosts() {
      try {
        await postsFeedService.getPosts({ creatorId: route.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profilesService.getProfileById(route.params.id)
        getPosts()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      postsData: computed(() => AppState.postsData),
      async getOlderPage() {
        try {
          await postsFeedService.getOlderPage({ creatorId: route.params.id })
        } catch (error) {
          Pop.toast('error', error)
        }
      },
      async getNewerPage() {
        try {
          await postsFeedService.getNewerPage({ creatorId: route.params.id })
        } catch (error) {
          Pop.toast('error', error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.cover-img{
  height: 30vh;
  background-position: center center;
}

</style>
