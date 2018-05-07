<template>
  <div>
      <el-radio v-bind='$attrs'></el-radio>
  </div>
</template>

<script>
  import {ElRadio} from 'element-ui'

  export default {
    name: 'BRadio',
    extends: ElRadio
  }
</script>
