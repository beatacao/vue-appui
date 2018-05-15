<template>
    <el-checkbox v-bind='$attrs'><slot></slot></el-checkbox>
</template>

<script>
  import {ElCheckbox} from 'element-ui'

  export default {
    name: 'BCheckbox',
    extends: ElCheckbox
  }
</script>
