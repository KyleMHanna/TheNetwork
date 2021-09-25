<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <SideBar class="col-md-2" />
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      <Sponsor v-for="p in sponsors" :key="p.id" :sponsor="p" />

      Sponsors are going here
    </div>
  </footer>

  <Modal id="post-form">
    <template #modal-title>
      <h4>Post Form</h4>
    </template>
    <template #modal-body>
      <PostForm />
    </template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.sidebar{
  height: 300vh;
}
.viewport{
  height: 100vh;
  overflow-y: auto;
}
</style>
