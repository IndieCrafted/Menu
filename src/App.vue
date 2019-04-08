<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.calcFontSize()
  },
  methods: {
    calcFontSize () {
      const docElement = document.documentElement
      const initialFontSize = 100 * (docElement.clientWidth / 1920)
      const fontSize = initialFontSize >= 100 ? 100 : initialFontSize
      docElement.style.fontSize = `${fontSize}px`
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/_base.scss';
</style>
