import BCascaderMulti from './src/main'

/* istanbul ignore next */
BCascaderMulti.install = function (Vue) {
  Vue.component(BCascaderMulti.name, BCascaderMulti)
}

export default BCascaderMulti
