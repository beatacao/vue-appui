import BGroup from './src/main'

/* istanbul ignore next */
BGroup.install = function (Vue) {
  Vue.component(BGroup.name, BGroup)
}

export default BGroup
