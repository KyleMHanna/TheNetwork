<template>
  <template>
    <div class="container-fluid">
      <div class="row">
        <PostsFeed v-for="p in posts" :key="p.id" :posts="p" />
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
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
