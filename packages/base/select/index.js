import BSelect from './src/main'

/* istanbul ignore next */
BSelect.install = function (Vue) {
  Vue.component(BSelect.name, BSelect)
}

export default BSelect
