<template>
    <el-checkbox v-bind='$attrs'></el-checkbox>
</template>

<script>
  import {ElCheckbox} from 'element-ui'

  export default {
    name: 'BCheckbox',
    extends: ElCheckbox
  }
</script>
