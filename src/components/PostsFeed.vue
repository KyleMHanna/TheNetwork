<template>
  <!-- <div class="col-md-3 py-3">
    <div class="card" style="">
      <img :src="posts.imgUrl" class="card-img-top img-style img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          {{ posts.title }}
        </h5>
        <p class="card-text clip-text" id="read-more">
          {{ posts.body }}
        </p>
      </div>
    </div>
  </div> -->
  <p>this is a post</p>
</template>

<script>
import { computed } from '@vue/runtime-core'

import { AppState } from '../AppState.js'
import { postsFeedService } from '../services/PostsFeedService.js'
import Pop from '../utils/Pop.js'
export default {
  name: 'Posts',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async deletePost() {
        try {
          await postsFeedService.deletePost(props.post.id)
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
