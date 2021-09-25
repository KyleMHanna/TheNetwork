<template>
  <form @submit.prevent="searchPost" class="bg-white rounded elevation-1">
    <div class="form-group d-flex align-items-center">
      <label for="search" class="sr-only"></label>
      <input v-model="query"
             type="text"
             name="search"
             required
             class="form-control bg-white border-0"
             placeholder="search"
      >
      <button class="btn px-2 py-0" type="submit">
        <i class="mdi mdi-magnify-plus-outline f-18"></i>
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'

import { postsFeedService } from '../services/PostsFeedService.js'
import Pop from '../utils/Pop.js'
export default {
  setup() {
    const query = ref('')
    return {
      query,

      async searchPost() {
        try {
          await postsFeedService.searchPost(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
