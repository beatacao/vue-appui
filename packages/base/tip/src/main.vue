<template>
  <el-tooltip :effect="effect" :placement="placement" v-bind='$attrs' class='vu__base-tooltip'>
    <div slot='content' v-html='content'></div>
    <el-button class='vu-button'>?</el-button>
  </el-tooltip>
</template>

<script>
  import {ElTooltip} from 'element-ui'

  export default {
    name: 'BTip',
    extends: ElTooltip,
    props: {
      effect: {
        type: String,
        default: 'light'
      },
      placement: {
        type: String,
        default: 'right'
      },
      content: {
        type: String,
        default: ''
      }
    },
    computed: {
      tips () {
        if (typeof this.tip === 'string') {
          return [this.tip]
        }
        return this.tip
      }
    }
  }
</script>
