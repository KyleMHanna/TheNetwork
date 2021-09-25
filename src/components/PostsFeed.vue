<template>
  <div class="col-md-3 py-3">
    <div class="card" style="">
      <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == post.creatorId">
        <i class="mdi mdi-delete text-danger f-20 selectable" @click="deletePost()"></i>
      </div>
      <img :src="post.imgUrl" class="card-img-top img-style img-fluid" alt="">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.body }}
          <button>
            <i class="mdi mdi-thumb-up text-primary" @click="likePost()">{{ post.likeIds.length }}</i>
          </button>
        </h5>
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="selectable">
          <span>
            <img :src="post.creator.picture" class=" rounded-circle" width="44" alt="profile placeholder">
            {{ post.creator.name }}
          </span>
        </router-link>
        <p class="card-text">
          <small class="text-muted">Added: {{ new Date(post.updatedAt).toDateString() }}</small>
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
      async deletePost() {
        try {
          await postsFeedService.deletePost(props.post.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async likePost() {
        await postsFeedService.likePost(props.post.id)
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
