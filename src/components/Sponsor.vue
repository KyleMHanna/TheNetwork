<template>
  <div class="component p-3">
    <img :src="sponsor.banner" class="">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { sponsorService } from '../services/SponsorService.js'
import Pop from '../utils/Pop.js'

export default {
  props: {
    sponsor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      sponsors: computed(() => AppState.sponsors),
      async getSponsors() {
        try {
          await sponsorService.getSponsors(props.sponsor.banner)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
