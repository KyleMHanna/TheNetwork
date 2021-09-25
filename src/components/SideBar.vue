<template>
  <div class="sidebar d-md-flex flex-column justify-content-between bg-primary d-none d-md-block sidebar-sticky">
    <div class="top-part">
      <div class="links">
        <ul class="nav-links ps-0">
          <li class="nav-link">
            <router-link class="btn btn-secondary" type="button" :to="{ name: 'Home' }">
              Home
            </router-link>
          </li>

          <li class="nav-link">
            <button class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#post-form">
              Create Post
            </button>
          </li>
          <li class="nav-link">
            <router-link class="btn btn-secondary" type="button" :to="{ name: 'Account' }">
              Account
            </router-link>
          </li>
          <li class="nav-link">
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-part">
      <Auth />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
