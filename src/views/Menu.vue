<template>
  <div class="menu">
    <MenuItem
      v-for="beer in beerList"
      :key="beer.id"
      :data="beer"
    />
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'
import * as api from '@/api/menu'

export default {
  components: { MenuItem },
  data () {
    return {
      beerList: []
    }
  },
  mounted () {
    this.getBeerList()
  },
  methods: {
    async getBeerList () {
      try {
        const id = ~~this.$route.params.page
        const res = await api.getScreenInfo({
          id
        })
        const result = res.data.data
        if (result.length) {
          this.beerList = result[0].beerList
          localStorage.beerList = JSON.stringify(result[0].beerList)
        }
      } catch (e) {
        console.log(e)
        this.beerList = localStorage.beerList ? JSON.parse(localStorage.beerList) : []
      }
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
