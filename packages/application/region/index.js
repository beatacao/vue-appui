import BRegion from './src/main'

/* istanbul ignore next */
BRegion.install = function (Vue) {
  Vue.component(BRegion.name, BRegion)
}

export default BRegion
