/**
 * @author Beatacao
 */
import BInput from '../packages/input/index'
// import MetaInfo from '../packages/meta-info/index'
// import BLoadingBar from '../packages/loading-bar/index'

const components = [
  BInput
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
//   MetaInfo.install(Vue)
//   Vue.prototype.$loading = BLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  BInput
//   MetaInfo,
//   BLoadingBar
}
