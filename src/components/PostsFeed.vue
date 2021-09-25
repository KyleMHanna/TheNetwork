<template>
  <div class="col-md-3 py-3 elevation-5 p-3">
    <div class="card text-center" style="">
      <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == post.creatorId">
        <i class="mdi mdi-delete text-danger f-20 selectable" @click="deletePost()"></i>
      </div>
      <div class="on-hover position-absolute" style="left: 1rem; top: 1rem">
        <button>
          <i class="mdi mdi-thumb-up text-primary" @click="likePost()">{{ post.likeIds.length }}</i>
        </button>
      </div>
      <img :src="post.imgUrl" class="card-img-top img-style img-fluid elevation-5 " alt="">
      <div class="card-body elevation-5">
        <h5 class="card-title">
          {{ post.body }}
        </h5>
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="selectable">
          <span>
            <img :src="post.creator.picture" class=" rounded-circle" width="44" alt="profile placeholder">
            {{ post.creator.name }}
          </span>
        </router-link>
        <p class="card-text">
          <small class="text-muted">Posted: {{ new Date(post.updatedAt).toDateString() }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsFeedService } from '../services/PostsFeedService.js'
import Pop from '../utils/Pop.js'

export default {

  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.post),
      likes: computed(() => AppState.likes),

      async deletePost() {
        try {
          const yes = await Pop.confirm('Are you sure you want to delete?')
          if (!yes) { return }
          await postsFeedService.deletePost(props.post.id)
          Pop.toast('Deleted!', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async likePost() {
        try {
          await postsFeedService.likePost(props.post.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}

</script>

<style scoped lang="scss">
.img-style{
  height: 400px;
  width: 450px;
}
</style>
