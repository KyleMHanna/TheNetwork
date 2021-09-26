<template>
  <div class="container-fluid">
    <div class="profile-header" v-if="profile">
      <div class="row cover-img img-fluid" :style="{backgroundImage: `url(${profile.coverImg})`}">
        <h1 class="text-dark">
          {{ profile.name }}
        </h1>
        <img class="rounded profile-img img-fluid" :src="profile.picture" alt="//placehold.it/300x300" id="profile-img">
        <p class="mdi mdi-bio mdi-48px text-dark">
          : {{ profile.bio }}
        </p>
        <p class="mdi mdi-school-outline mdi-24px text-dark">
          {{ profile.graduated }}
        </p>
      </div>
    </div>
    <div v-else>
      <h4 class="text-light">
        ....Loading
      </h4>
    </div>
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
    <PostsFeed v-for="p in posts" :key="p.id" :post="p" />
  </div>
  <div class="row" v-else>
    <h3>No Content</h3>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsFeedService } from '../services/PostsFeedService'
import { profilesService } from '../services/ProfilesService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    const account = computed(() => AppState.account)
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
      account,
      profile: computed(() => AppState.profile),
      // TODO -  This is the sauce right here
      posts: computed(() => AppState.posts.filter(p => p.creatorId === route.params.id)),
      postsData: computed(() => AppState.postsData),
      currentPage: computed(() => AppState.currentPage),
      async getOlderPage() {
        try {
          await postsFeedService.getOlderPage({ creatorId: route.params.id })
          logger.log({ creatorId: route.params.id }, 'id we are looking for')
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
  height: 40vh;
  background-position: center;
  background-size: cover;
}
.profile-img{
  max-height: 200px;
  max-width: 200px
}

</style>
