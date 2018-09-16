import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/index'
import test1 from '@/view/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
  ]
})
