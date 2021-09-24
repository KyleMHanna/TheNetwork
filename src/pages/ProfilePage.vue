<template>
  <div class="ProfilePage container-fluid">
    <div class="Profile row p-3 justify-content-center">
      <div class="col-4 card d-flex">
        <img :src="activeProfile.picture" class="img-fluid rounded-circle m-2">
        <h5 class="text-center m-1">
          {{ activeProfile.name }}
        </h5>
      </div>
      <div class="col-6">
        <img :src="activeProfile.coverImg" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
