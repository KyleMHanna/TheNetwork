<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="//placehold.it/300x300" />
    <p>{{ account.email }}</p>

    <p>{{ account.bio }}</p>
    <p>{{ account.github }}</p>
    <p>{{ account.linkedin }}</p>
    <p>{{ account.resume }}</p>
    <p>{{ account.graduated }}</p>
    <p>{{ account.class }}</p>
  </div>
  <div class="row">
    <form @submit.prevent="updateAccount()">
      <h3> cover image</h3>
      <input type="text" v-model="account.coverImg"><br />
      <h3> name</h3>
      <input type="text" v-model="account.name" placeholder="Name"><br />
      <h3> profile Pic</h3>
      <input type="text" v-model="account.picture" placholder="Picture"><br />
      <h3>  your Github</h3>
      <input type="text" v-model="account.github" placeholder="Github"><br />
      <h3>  your Linkedin</h3>
      <input type="text" v-model="account.linkedin" placeholder="Linkedin"><br />
      <h3>  graduated?</h3>
      <input type="checkbox" v-model="account.graduated" placeholder="Graduate"><br />
      <button class="btn btn-success ms-1">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { accountService } from '../services/AccountService'
export default {
  name: 'Account',
  setup() {
    const account = computed(() => AppState.account)
    return {
      account,
      async updateAccount() {
        try {
          await accountService.editAccount(account.value)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
