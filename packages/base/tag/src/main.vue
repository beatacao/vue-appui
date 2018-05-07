<template>
  <div>
      <el-tag v-bind='$attrs'>{{tag}}</el-tag>
  </div>
</template>

<script>
  import {ElTag} from 'element-ui'

  export default {
    name: 'BTag',
    extends: ElTag,
    props: {
      tag: {
        type: String,
        default: ''
      }
    }
  }
</script>
