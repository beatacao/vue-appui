<template>
  <div>
      <el-date-picker v-bind='$attrs'></el-date-picker>
  </div>
</template>

<script>
  import {ElDatepicker} from 'element-ui'

  export default {
    name: 'BDatepicker',
    extends: ElDatepicker
  }
</script>
