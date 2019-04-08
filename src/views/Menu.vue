<template>
  <div class="menu">
    <MenuItem v-for="i in 8" :key="i" />
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  components: { MenuItem },
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
