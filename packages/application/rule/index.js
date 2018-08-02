import BAppRule from './src/main'

/* istanbul ignore next */
BAppRule.install = function (Vue) {
  Vue.component(BAppRule.name, BAppRule)
}

export default BAppRule
