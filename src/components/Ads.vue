<template>
  <div class="">
    <img :src="ads[0].tall" class="img-fluid " alt="">
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { adsService } from '../services/AdsService'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
export default {
  name: 'Ads',
  setup() {
    const state = reactive({
      ads: computed(() => AppState.ads)
    })
    onMounted(async() => {
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error.message, 'error')
        logger.log(error)
      }
    })
    return {
      state,
      ads: computed(() => AppState.ads)
    }
  },
  components: {}

}
</script>

<style scoped lang="scss">

</style>
