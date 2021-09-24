<template>
  <form @submit.prevent="createPost()">
    <div class="form-group">
      <label for="title">Img Url</label>
      <input type="text"
             class="form-control bg-light"
             name="imgUrl"
             placeholder="Img Url...."
             v-model="editable.imgUrl"
             required
      >
    </div>
    <div class="form-group">
      <label for="body">body</label>
      <input type="text"
             class="form-control bg-light"
             name="title"
             placeholder="Title...."
             v-model="editable.body"
             required
      >

      <div class="form-group">
        <button type="submit" class="btn btn-success mt-2">
          Create Post
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
import { postsFeedService } from '../services/PostsFeedService.js'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createPost() {
        try {
          await postsFeedService.createPost(editable.value)
          editable.value = {}
          Pop.toast('Post added much yes', 'success')
          const modal = Modal.getInstance(document.getElementById('post-form'))
          modal.hide()
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style>

</style>
