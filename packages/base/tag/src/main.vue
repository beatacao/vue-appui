<template>
    <el-tag v-bind='$attrs'>{{tag}}</el-tag>
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
