import BAppBaseMng from './src/main'

/* istanbul ignore next */
BAppBaseMng.install = function (Vue) {
  Vue.component(BAppBaseMng.name, BAppBaseMng)
}

export default BAppBaseMng
