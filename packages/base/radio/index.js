import BRadio from './src/main'

/* istanbul ignore next */
BRadio.install = function (Vue) {
  Vue.component(BRadio.name, BRadio)
}

export default BRadio
