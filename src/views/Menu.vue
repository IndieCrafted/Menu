<template>
  <div class="menu">
    Menu
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: this.$route.params.page
    }
  }
}
</script>

<style lang="scss">
.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
