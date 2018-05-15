<template>
    <el-radio v-bind='$attrs'><slot></slot></el-radio>
</template>

<script>
  import {ElRadio} from 'element-ui'

  export default {
    name: 'BRadio',
    extends: ElRadio
  }
</script>
