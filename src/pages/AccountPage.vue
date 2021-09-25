<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="//placehold.it/300x300" />
    <!-- <p>{{ account.email }}</p> -->

    <p class="mdi mdi-bio">
      : {{ account.bio }}
    </p>
    <p class="mdi mdi-github">
      : {{ account.github }}
    </p>
    <p class="mdi mdi-linkedin">
      : {{ account.linkedin }}
    </p>
    <p class="mdi mdi-file-account">
      Resume: {{ account.resume }}
    </p>
    <p class="mdi mdi-school-outline">
      {{ account.graduated }}
    </p>
    <p class="mdi mdi-microsoft-xbox">
      {{ account.class }}
    </p>
  </div>
  <button class="selectable mdi mdi-cog 48px " @click.prevent="updateProfile()"></button>
  <div class="row visually-hidden" id="update-Profile">
    <form @submit.prevent="updateAccount()">
      <h3> cover image</h3>
      <input type="text" v-model="account.coverImg"><br />
      <h3> Bio </h3>
      <input type="text" v-model="account.bio"><br />
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
      updateProfile() {
        document.getElementById('update-Profile').classList.toggle('visually-hidden')
      },
      async updateAccount() {
        try {
          const yes = await Pop.confirm('Are you sure you want to Update?')
          if (!yes) { return }
          await accountService.editAccount(account.value)
          Pop.toast('success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 500px;
}
</style>
