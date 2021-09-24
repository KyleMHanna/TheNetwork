<template>
  <div class="col-md-3 py-3">
    <div class="card" style="">
      <!-- <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == posts.creatorId">
        <i class="mdi mdi-close text-danger f-20 selectable" @click="deletePost()"></i>
      </div> -->
      <img :src="post.imgUrl" class="card-img-top img-style img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          <!-- {{ post.title }} -->
          {{ post.body }}
        </h5>
        <p class="card-text clip-text" id="read-more">
        </p>
        <p class="selectable " @click.prevent="readMore()">
          Read more...
        </p>
        <!-- <router-link :to="{name: 'Profile', params: {id: posts.creatorId}}" class="selectable">
          <span>
            <img :src="posts.creator.picture" class=" rounded-circle" width="44" alt="profile placeholder">
            {{ posts.creator.name }}
          </span>
        </router-link> -->
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
      // readMore() {
      //   document.getElementById('read-more').classList.toggle('clip-text')
      // },
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
