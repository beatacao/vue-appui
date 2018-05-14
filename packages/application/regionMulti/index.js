import BRegionMulti from './src/main'

/* istanbul ignore next */
BRegionMulti.install = function (Vue) {
  Vue.component(BRegionMulti.name, BRegionMulti)
}

export default BRegionMulti
