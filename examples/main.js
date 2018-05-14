// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../packages/theme-default/lib/index.css'
import demoBlock from './components/DemoBlock.vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import vueui from '../src/index'

sync(store, router)

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
Vue.use(vueui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
