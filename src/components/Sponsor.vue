<template>
  <div class="col-md-2 card">
    <img :src="sponsor.square" class="">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import { sponsorService } from '../services/SponsorService.js'
// import Pop from '../utils/Pop.js'
export default {
  props: {
    sponsor: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      sponsors: computed(() => AppState.sponsors)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
