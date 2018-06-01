<template>
  <div :class='{"vu__base-textarea": true, tab: isTab}'>
      <label v-if='label && label.length>0' class="base-label" @click='labelClick'>{{label}}</label>
      <el-input v-show='!isTab || showTextarea' class='base-textarea' type='textarea' v-bind='$attrs' @change='onChange'></el-input>
  </div>
</template>

<script>
  import {ElInput} from 'element-ui'

  export default {
    name: 'BTextarea',
    extends: ElInput,
    data () {
      return {
        showTextarea: false
      }
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      isTab: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onChange (val) {
        this.$emit('change', val)
      },
      labelClick () {
        if (!this.isTab) return
        this.showTextarea = !this.showTextarea
      }
    }
  }
</script>
