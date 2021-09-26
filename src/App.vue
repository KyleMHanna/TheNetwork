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
    <div>
      <Ads class="container-fluid" />
    </div>
  </footer>

  <Modal id="post-form">
    <template #modal-title>
      <h4>Create Post</h4>
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
  height: 315vh;
}
.viewport{
  height: 100vh;
  overflow-y: auto;
}
</style>
