import BTip from './src/main'

/* istanbul ignore next */
BTip.install = function (Vue) {
  Vue.component(BTip.name, BTip)
}

export default BTip
