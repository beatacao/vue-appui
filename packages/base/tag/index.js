import BTag from './src/main'

/* istanbul ignore next */
BTag.install = function (Vue) {
  Vue.component(BTag.name, BTag)
}

export default BTag
