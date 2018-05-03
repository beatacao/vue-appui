import BAppBase from './src/main'

/* istanbul ignore next */
BAppBase.install = function (Vue) {
  Vue.component(BAppBase.name, BAppBase)
}

export default BAppBase
