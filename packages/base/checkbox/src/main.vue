<template>
  <div>
      <el-checkbox v-bind='$attrs'></el-checkbox>
  </div>
</template>

<script>
  import {ElCheckbox} from 'element-ui'

  export default {
    name: 'BCheckbox',
    extends: ElCheckbox
  }
</script>
