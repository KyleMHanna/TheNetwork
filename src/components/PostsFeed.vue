<template>
  <div class="col-md-3 py-3">
    <div class="card" style="">
      <img :src="post.imgUrl" class="card-img-top img-style img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.body }}
          likes   {{ post.likeIds }}
        </h5>
        <p class="card-text clip-text" id="read-more">
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
