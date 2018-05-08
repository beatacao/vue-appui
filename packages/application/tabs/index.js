import BTabs from './src/main'

/* istanbul ignore next */
BTabs.install = function (Vue) {
  Vue.component(BTabs.name, BTabs)
}

export default BTabs
