import BTextarea from './src/main'

/* istanbul ignore next */
BTextarea.install = function (Vue) {
  Vue.component(BTextarea.name, BTextarea)
}

export default BTextarea
