<template>
  <div class="home">
    <h1 class="title">INDIE CRAFTED</h1>
    <div class="menu-wrap">
      <div
        class="menu-link"
        v-for="screen in screenList"
        :key="screen.id"
        @click="goToMenu(screen.id)"
      >
        {{ screen.name }}
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/menu'

export default {
  data () {
    return {
      screenList: []
    }
  },
  mounted () {
    this.getScreenList()
  },
  methods: {
    async getScreenList () {
      try {
        const res = await api.getScreenInfo()
        const result = res.data.data
        if (result.length) {
          this.screenList = result
        }
      } catch (e) {
        console.log(e)
      }
    },
    goToMenu (id) {
      this.$router.push({
        path: `/menu/${id}`
      })
    }
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  background: #171717;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 1rem;
    font-family: 'En';
  }
  .menu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-link {
      flex: 0;
      font-size: .7rem;
      border: .05rem solid #fff;
      border-radius: 6%;
      padding: .2rem .5rem;
      margin-top: .5rem;
    }
  }
}
</style>
