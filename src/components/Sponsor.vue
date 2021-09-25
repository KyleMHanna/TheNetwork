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
  name: 'Sponsor',
  props: {
    sponsor: { type: Object, required: true }
  },
  setup(props) {
    return {
      sponsors: computed(() => AppState.sponsor)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
