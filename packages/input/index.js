import BInput from './src/main'

/* istanbul ignore next */
BInput.install = function (Vue) {
  Vue.component(BInput.name, BInput)
}

export default BInput
