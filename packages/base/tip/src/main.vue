<template>
  <div>
    <el-tooltip effect="light" placement="right">
      <ul v-if='tips.length>0'>
        <li v-for='(t, key) in tips' :key='key'>{{t}}</li>
      </ul>
    </el-tooltip>
  </div>
</template>

<script>
  import {ElTooltip} from 'element-ui'

  export default {
    name: 'BTip',
    extends: ElTooltip,
    props: {
      tip: {
        type: Array | String,
        default: []
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
