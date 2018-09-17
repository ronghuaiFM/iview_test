import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/index'
import demo from '@/view/demo/index'
import test1 from '@/view/test1'
import testIcon from '@/view/testIcon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/testIcon',
      name: 'testIcon',
      component: testIcon
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
  ]
})
