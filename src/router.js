import Vue from 'vue'
import Router from 'vue-router'
import Menu from './views/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/menu/:page',
      name: 'menu',
      component: Menu
    }
  ]
})
