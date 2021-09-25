<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="//placehold.it/300x300" />
    <p>{{ account.email }}</p>

    <p>Bio:{{ account.bio }}</p>
    <p>Github:{{ account.github }}</p>
    <p>Linkedin:{{ account.linkedin }}</p>
    <p>Resume:{{ account.resume }}</p>
    <p>Graduated: {{ account.graduated }}</p>
    <p>{{ account.class }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
