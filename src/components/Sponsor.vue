<template>
  <div class="row justify-content-center">
    <div class="col-md-2 card">
      <img :src="sponsor.square" class="">
    </div>
  </div>
</template>

<script>
import { sponsorService } from '../services/SponsorService.js'
import Pop from '../utils/Pop.js'
export default {
  name: 'Sponsor',
  props: {
    sponsor: { type: Object, required: true }
  },
  setup(props) {
    return {
      async getSponsors() {
        try {
          await sponsorService.getSponsors(props)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
