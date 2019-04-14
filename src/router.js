import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Menu from './views/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu/:page',
      name: 'menu',
      component: Menu
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
