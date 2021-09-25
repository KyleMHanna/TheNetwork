<template>
  <div class="sidebar d-md-flex flex-column justify-content-between bg-primary d-none d-md-block sticky">
    <div class="top-part">
      <div class="links">
        <div class="text-white py-3">
          <li class="nav-link">
            <router-link class="btn btn-secondary" type="button" :to="{ name: 'Home' }">
              The Network
            </router-link>
          </li>
        </div>
        <ul class="nav-links ps-0">
          <li class="nav-link">
            <button class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#post-form">
              Post
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
