import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Config from '@/pages/config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/config',
      name: 'config',
      component: Config
    },
    {
      path: '/readme',
      name: 'readme',
      component: r => require.ensure([], () => r(require('../docs/readme.md')))
    }
  ]
})
