<template>
  <div>
      <el-tag>{{tag}}</el-tag>
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
