<template>
    <el-date-picker v-bind='$attrs'></el-date-picker>
</template>

<script>
  import {ElDatepicker} from 'element-ui'

  export default {
    name: 'BDatepicker',
    extends: ElDatepicker
  }
</script>
